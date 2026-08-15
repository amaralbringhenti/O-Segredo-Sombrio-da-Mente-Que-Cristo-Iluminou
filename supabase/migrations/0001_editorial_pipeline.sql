-- =================================================================================
-- ESTRUTURA PARA ESTEIRA EDITORIAL AUTOMATIZADA
-- Migration Incremental, Idempotente e Não Destrutiva
-- =================================================================================

-- 1. Criação das Tabelas de Orquestração

-- Tabela de Agentes Editoriais
CREATE TABLE IF NOT EXISTS public.editorial_agents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    system_prompt TEXT,
    config JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Projetos Editoriais (Representa um Livro/Obra)
CREATE TABLE IF NOT EXISTS public.editorial_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'draft',
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Execuções do Pipeline (Pipeline Runs)
CREATE TABLE IF NOT EXISTS public.editorial_pipeline_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.editorial_projects(id) ON DELETE CASCADE,
    current_phase VARCHAR(50) NOT NULL DEFAULT 'A_INVENTARIO',
    status VARCHAR(50) DEFAULT 'running',
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tarefas do Pipeline (Editorial Tasks)
CREATE TABLE IF NOT EXISTS public.editorial_tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.editorial_projects(id) ON DELETE CASCADE,
    pipeline_run_id UUID NOT NULL REFERENCES public.editorial_pipeline_runs(id) ON DELETE CASCADE,
    agent_id UUID REFERENCES public.editorial_agents(id),
    phase VARCHAR(50) NOT NULL,
    task_code VARCHAR(100) NOT NULL,
    execution_order INT NOT NULL,
    iteration INT DEFAULT 1,
    status VARCHAR(50) DEFAULT 'pending', -- pending, ready, running, waiting_human_approval, changes_requested, blocked, failed, completed, skipped, cancelled
    input_payload JSONB,
    output_payload JSONB,
    error_payload JSONB,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    blocked_reason TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_pipeline_task_iteration UNIQUE (pipeline_run_id, task_code, iteration)
);

-- Dependências entre Tarefas
CREATE TABLE IF NOT EXISTS public.editorial_task_dependencies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id UUID NOT NULL REFERENCES public.editorial_tasks(id) ON DELETE CASCADE,
    depends_on_task_id UUID NOT NULL REFERENCES public.editorial_tasks(id) ON DELETE CASCADE,
    is_mandatory BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_task_dependency UNIQUE (task_id, depends_on_task_id)
);

-- Artefatos Gerados (Briefing, Blueprint, Piloto, Capítulos, Capa)
CREATE TABLE IF NOT EXISTS public.editorial_artifacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.editorial_projects(id) ON DELETE CASCADE,
    task_id UUID REFERENCES public.editorial_tasks(id) ON DELETE SET NULL,
    artifact_type VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    current_version_id UUID, -- Relacionamento circular resolvido logicamente
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Versões dos Artefatos
CREATE TABLE IF NOT EXISTS public.editorial_artifact_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    artifact_id UUID NOT NULL REFERENCES public.editorial_artifacts(id) ON DELETE CASCADE,
    parent_version_id UUID REFERENCES public.editorial_artifact_versions(id) ON DELETE SET NULL,
    version_number INT NOT NULL,
    content_hash VARCHAR(255),
    storage_path TEXT,
    content_text TEXT,
    metadata JSONB,
    is_official BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Atualiza foreign key da versão atual no artifact
ALTER TABLE public.editorial_artifacts
ADD CONSTRAINT fk_current_version
FOREIGN KEY (current_version_id) REFERENCES public.editorial_artifact_versions(id) ON DELETE SET NULL DEFERRABLE INITIALLY DEFERRED;

-- Achados / Verificações do Auditor (Findings)
CREATE TABLE IF NOT EXISTS public.editorial_findings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id UUID NOT NULL REFERENCES public.editorial_tasks(id) ON DELETE CASCADE,
    artifact_version_id UUID REFERENCES public.editorial_artifact_versions(id) ON DELETE CASCADE,
    severity VARCHAR(50) NOT NULL, -- critical, major, minor
    description TEXT NOT NULL,
    correction_applied TEXT,
    retest_result VARCHAR(50),
    status VARCHAR(50) DEFAULT 'open', -- open, fixed, ignored, verified
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Gates de Controle (Aprovação de Fases)
CREATE TABLE IF NOT EXISTS public.editorial_gates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pipeline_run_id UUID NOT NULL REFERENCES public.editorial_pipeline_runs(id) ON DELETE CASCADE,
    gate_code VARCHAR(100) NOT NULL,
    verdict VARCHAR(50), -- aprovado, aprovado_com_correcoes, reprovado, bloqueado
    notes TEXT,
    evaluated_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    CONSTRAINT uq_pipeline_gate UNIQUE (pipeline_run_id, gate_code)
);

-- Aprovações Humanas e Verificações de Gate
CREATE TABLE IF NOT EXISTS public.editorial_approvals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    gate_id UUID REFERENCES public.editorial_gates(id) ON DELETE CASCADE,
    task_id UUID REFERENCES public.editorial_tasks(id) ON DELETE CASCADE,
    approved_by VARCHAR(255) NOT NULL, -- UUID do usuário humano auth.users(id)
    decision VARCHAR(50) NOT NULL, -- approved, rejected, requested_changes
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Catálogo (Lançamento e Pós-Publicação)
CREATE TABLE IF NOT EXISTS public.editorial_catalog_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES public.editorial_projects(id) ON DELETE CASCADE,
    isbn VARCHAR(50),
    asin VARCHAR(50),
    edition VARCHAR(50),
    language VARCHAR(50) DEFAULT 'pt-BR',
    format VARCHAR(50), -- pdf, epub, kpf, paperback, hardcover
    marketplace VARCHAR(100),
    url TEXT,
    price_amount DECIMAL(10, 2),
    price_currency VARCHAR(10) DEFAULT 'BRL',
    territories JSONB,
    status VARCHAR(50), -- preparado, autorizado_para_envio, enviado, em_analise, disponivel, rejeitado, bloqueado
    is_available BOOLEAN DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);


-- =================================================================================
-- 2. Inserção Inicial Segura dos 24 Agentes (Seed Idempotente)
-- =================================================================================

INSERT INTO public.editorial_agents (slug, name, system_prompt) VALUES
('market_analyst', 'Analista_de_Mercado', 'Prompt do Analista_de_Mercado'),
('architect', 'Arquiteto_de_Conteudo', 'Prompt do Arquiteto_de_Conteudo'),
('auditor', 'Auditor_Editorial', 'Prompt do Auditor_Editorial'),
('fact_checker', 'Checador_de_Fatos_e_Referencias', 'Prompt do Checador_de_Fatos_e_Referencias'),
('curator', 'Curador', 'Prompt do Curador'),
('designer', 'Designer', 'Prompt do Designer'),
('layout', 'Diagramador', 'Prompt do Diagramador'),
('rights_compliance', 'Direitos_e_Compliance_Editorial', 'Prompt do Direitos_e_Compliance_Editorial'),
('editorial_orchestrator', 'Diretor_Editorial_e_Orquestrador', 'Prompt do Diretor_Editorial_e_Orquestrador'),
('developmental_editor', 'Editor_de_Desenvolvimento', 'Prompt do Editor_de_Desenvolvimento'),
('writer', 'Escritor', 'Prompt do Escritor'),
('catalog_manager', 'Gestor_de_Catalogo_e_Pos_Publicacao', 'Prompt do Gestor_de_Catalogo_e_Pos_Publicacao'),
('version_manager', 'Gestor_de_Producao_Versoes_e_Ativos', 'Prompt do Gestor_de_Producao_Versoes_e_Ativos'),
('illustrator', 'Ilustrador', 'Prompt do Ilustrador'),
('marketing', 'Marketing', 'Prompt do Marketing'),
('researcher', 'Pesquisador', 'Prompt do Pesquisador'),
('planner', 'Planejador', 'Prompt do Planejador'),
('publisher', 'Publicador', 'Prompt do Publicador'),
('technical_qa', 'QA_Tecnico_e_Acessibilidade', 'Prompt do QA_Tecnico_e_Acessibilidade'),
('reviewer', 'Revisor', 'Prompt do Revisor'),
('proofreader', 'Revisor_de_Prova_Final', 'Prompt do Revisor_de_Prova_Final'),
('seo_specialist', 'SEO_KDP', 'Prompt do SEO_KDP'),
('theologian', 'Teologo', 'Prompt do Teologo'),
('translator', 'Tradutor', 'Prompt do Tradutor')
ON CONFLICT (slug) DO NOTHING;

-- Eventos (Log/Histórico)
CREATE TABLE IF NOT EXISTS public.editorial_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.editorial_projects(id) ON DELETE CASCADE,
    pipeline_run_id UUID REFERENCES public.editorial_pipeline_runs(id) ON DELETE CASCADE,
    task_id UUID REFERENCES public.editorial_tasks(id) ON DELETE SET NULL,
    actor_type VARCHAR(50) NOT NULL, -- system, agent, human
    actor_id VARCHAR(255),
    event_type VARCHAR(100) NOT NULL,
    payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);
