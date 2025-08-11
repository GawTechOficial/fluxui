export const utilities = {
  brand: {
    '.bg-brand': { backgroundColor: 'var(--fl-primary)' },
    '.text-on-brand': { color: 'var(--fl-on-primary)' },
    '.border-brand': { borderColor: 'var(--fl-primary)' },
    '.ring-focus': { '--tw-ring-color': 'var(--fl-primary)' },
  },
  surfaces: Object.fromEntries(
    Array.from({ length: 11 }).map((_, i) => {
      const step = i === 0 ? '0' : String(i * 100);

      return [`.bg-surface-${step}`, { backgroundColor: `var(--fl-surface-${step})` }];
    })
  ),
  state: {
    '.text-muted': { color: 'var(--fl-muted)' },
    '.text-success': { color: 'var(--fl-success)' },
    '.text-warning': { color: 'var(--fl-warning)' },
    '.text-danger': { color: 'var(--fl-danger)' },
  },
  layout: {
    '.radius-sm': { borderRadius: 'var(--fl-radius-sm)' },
    '.radius-md': { borderRadius: 'var(--fl-radius-md)' },
    '.radius-lg': { borderRadius: 'var(--fl-radius-lg)' },
    '.radius-2xl': { borderRadius: 'var(--fl-radius-2xl)' },
    '.elevation-1': { boxShadow: 'var(--fl-shadow-1)' },
    '.elevation-2': { boxShadow: 'var(--fl-shadow-2)' },
    '.elevation-3': { boxShadow: 'var(--fl-shadow-3)' },
  },
};
