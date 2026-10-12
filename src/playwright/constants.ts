// The "_" prefix hides it from Annotations pane in Playwright's UI. It showing
// up in a report is just a distraction.
export const v8CoverageAttachmentName = '_v8-coverage.json';

// Overridable so parallel checkouts, such as worktrees, can each test against
// their own servers. With `reuseExistingServer`, two checkouts on the same
// ports test against whichever started first.
export const storybookPort = Number(process.env.SLAB_STORYBOOK_PORT ?? 6006);
export const vitePort = Number(process.env.SLAB_VITE_PORT ?? 6009);

export const storybookUrl = `http://localhost:${storybookPort}`;
export const viteUrl = `http://localhost:${vitePort}/src/playwright/index.html`;
