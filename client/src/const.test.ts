import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getLoginUrl } from './const';

describe('getLoginUrl', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_OAUTH_PORTAL_URL', 'https://oauth.example.com');
    vi.stubEnv('VITE_APP_ID', 'test-app-id');

    vi.stubGlobal('window', {
      location: {
        origin: 'https://myapp.example.com'
      }
    });
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('should generate correct login URL', () => {
    const urlString = getLoginUrl();
    const url = new URL(urlString);

    expect(url.origin).toBe('https://oauth.example.com');
    expect(url.pathname).toBe('/app-auth');

    expect(url.searchParams.get('appId')).toBe('test-app-id');
    expect(url.searchParams.get('redirectUri')).toBe('https://myapp.example.com/api/oauth/callback');
    expect(url.searchParams.get('state')).toBe(btoa('https://myapp.example.com/api/oauth/callback'));
    expect(url.searchParams.get('type')).toBe('signIn');
  });

  it('should reflect different origins and env variables', () => {
    vi.stubEnv('VITE_OAUTH_PORTAL_URL', 'https://auth.other.com');
    vi.stubEnv('VITE_APP_ID', 'other-app-id');

    vi.stubGlobal('window', {
      location: {
        origin: 'http://localhost:3000'
      }
    });

    const urlString = getLoginUrl();
    const url = new URL(urlString);

    expect(url.origin).toBe('https://auth.other.com');
    expect(url.searchParams.get('appId')).toBe('other-app-id');
    expect(url.searchParams.get('redirectUri')).toBe('http://localhost:3000/api/oauth/callback');
    expect(url.searchParams.get('state')).toBe(btoa('http://localhost:3000/api/oauth/callback'));
  });
});
