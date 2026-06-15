import { test as base } from '@playwright/test';
import { DragAndDropPage } from '../POM/dragAndDropPage';

type Fixtures = {
  dragAndDropPage: DragAndDropPage;
};

export const test = base.extend<Fixtures>({
  dragAndDropPage: async ({ page }, use) => {
    await use(new DragAndDropPage(page));
  },
});