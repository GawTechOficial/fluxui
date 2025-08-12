export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'ci', 'build', 'perf']],

    'scope-enum': [
      2,
      'always',
      [
        'tokens',
        'tailwindcss',
        'playground-v3',
        'playground-v4',
        'deps',
        'release',
        'core',
        'config',
        'scripts',
        'build',
        'ci',
        'security',
        'docs',
        'workflow',
        'lint',
        'test',
        'branch-rebase',
      ],
    ],

    'header-max-length': [2, 'always', 100],
    'header-min-length': [2, 'always', 10],
    'subject-max-length': [2, 'always', 80],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],

    'body-max-line-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],

    'scope-empty': [1, 'never'],

    'references-empty': [1, 'never'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?: ([A-ZÀ-ÿa-z].*)$/,
      headerCorrespondence: ['type', 'scope', 'subject', 'references'],
      issuePrefixes: ['#', 'Fixes #', 'Fixed #'],
    },
  },

  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
