import { describe, expect, it } from 'vitest';

import { tokens } from './index.js';

describe('FluxUI Tokens', () => {
  it('exposes required tokens', () => {
    // Test tokens structure
    expect(tokens).toBeDefined();
    expect(tokens.primary).toBeDefined();
    expect(tokens.onPrimary).toBeDefined();
    expect(tokens.success).toBeDefined();
    expect(tokens.warning).toBeDefined();
    expect(tokens.danger).toBeDefined();
    expect(tokens.muted).toBeDefined();

    // Test OKLCH format
    expect(tokens.primary).toMatch(/^oklch\(/);
    expect(tokens.success).toMatch(/^oklch\(/);
  });
});
