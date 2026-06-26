# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames.spec.ts >> Frames & iFrame Tests >> Verify iFrame default text (Read-only)
- Location: tests\frames.spec.ts:10:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#mce_0_ifr').contentFrame().locator('#tinymce')
Expected substring: "Your content goes here."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#mce_0_ifr').contentFrame().locator('#tinymce')

```

```yaml
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "An iFrame containing the TinyMCE WYSIWYG Editor" [level=3]
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class FramesPage {
  4  |   readonly page: Page;
  5  |   readonly framesLink: Locator;
  6  |   readonly nestedFramesLink: Locator;
  7  |   readonly iFrameLink: Locator;
  8  | 
  9  | 
  10 |   readonly topFrame;
  11 |   readonly leftFrame;
  12 |   readonly middleFrame;
  13 |   readonly rightFrame;
  14 |   readonly bottomFrame;
  15 | 
  16 | 
  17 |   readonly iFrame;
  18 |   readonly editor;
  19 | 
  20 |   constructor(page: Page) {
  21 |     this.page = page;
  22 | 
  23 |     this.framesLink = page.locator('a[href="/frames"]');
  24 |     this.nestedFramesLink = page.locator('a[href="/nested_frames"]');
  25 |     this.iFrameLink = page.locator('a[href="/iframe"]');
  26 | 
  27 | 
  28 |     this.topFrame = page.frameLocator('frame[name="frame-top"]');
  29 |     this.leftFrame = this.topFrame.frameLocator('frame[name="frame-left"]');
  30 |     this.middleFrame = this.topFrame.frameLocator('frame[name="frame-middle"]');
  31 |     this.rightFrame = this.topFrame.frameLocator('frame[name="frame-right"]');
  32 |     this.bottomFrame = page.frameLocator('frame[name="frame-bottom"]');
  33 | 
  34 | 
  35 |     this.iFrame = page.frameLocator('#mce_0_ifr');
  36 |     this.editor = this.iFrame.locator('#tinymce');
  37 |   }
  38 | 
  39 |   async goToFramesPage() {
  40 |     await this.page.goto('https://the-internet.herokuapp.com/');
  41 |     await this.framesLink.click();
  42 |   }
  43 | 
  44 |   async openNestedFrames() {
  45 |     await this.nestedFramesLink.click();
  46 |   }
  47 | 
  48 |   async openIFrame() {
  49 |     await this.iFrameLink.click();
  50 |   }
  51 | 
  52 |   async verifyNestedFrames() {
  53 |     await expect(this.leftFrame.locator('body')).toHaveText('LEFT');
  54 |     await expect(this.middleFrame.locator('#content')).toHaveText('MIDDLE');
  55 |     await expect(this.rightFrame.locator('body')).toHaveText('RIGHT');
  56 |     await expect(this.bottomFrame.locator('body')).toHaveText('BOTTOM');
  57 |   }
  58 | 
  59 | 
  60 |   async verifyDefaultIFrameText() {
> 61 |     await expect(this.editor).toContainText('Your content goes here.');
     |                               ^ Error: expect(locator).toContainText(expected) failed
  62 |   }
  63 | }
```