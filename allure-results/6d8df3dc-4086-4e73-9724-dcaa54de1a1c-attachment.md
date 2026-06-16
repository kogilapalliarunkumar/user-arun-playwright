# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames.spec.ts >> Frames & iFrame Tests >> Verify iFrame text editing
- Location: tests\frames.spec.ts:10:7

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('#mce_0_ifr').contentFrame().locator('#tinymce')
    - locator resolved to <body id="tinymce" data-id="mce_0" spellcheck="false" contenteditable="false" class="mce-content-body mce-content-readonly" aria-label="Rich Text Area. Press ALT-0 for help.">…</body>
    - fill("")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "An iFrame containing the TinyMCE WYSIWYG Editor" [level=3] [ref=e8]
      - application [disabled] [ref=e9]:
        - generic [ref=e10]:
          - generic [ref=e11]:
            - menubar [disabled] [ref=e12]:
              - menuitem "File" [disabled] [ref=e13]:
                - generic [ref=e14]: File
              - menuitem "Edit" [disabled] [ref=e15]:
                - generic [ref=e16]: Edit
              - menuitem "View" [disabled] [ref=e17]:
                - generic [ref=e18]: View
              - menuitem "Format" [disabled] [ref=e19]:
                - generic [ref=e20]: Format
            - group [disabled] [ref=e21]:
              - group [disabled] [ref=e22]:
                - toolbar "history" [disabled] [ref=e23]:
                  - button "Undo" [disabled] [ref=e24]:
                    - img [ref=e26]
                  - button "Redo" [disabled] [ref=e28]:
                    - img [ref=e30]
                - toolbar "styles" [disabled] [ref=e32]:
                  - button "Formats" [disabled] [ref=e33]:
                    - generic [ref=e34]: Paragraph
                    - img [ref=e36]
                - toolbar "formatting" [disabled] [ref=e38]:
                  - button "Bold" [disabled] [ref=e39]:
                    - img [ref=e41]
                  - button "Italic" [disabled] [ref=e43]:
                    - img [ref=e45]
                - toolbar "alignment" [disabled] [ref=e47]:
                  - button "Align left" [disabled] [ref=e48]:
                    - img [ref=e50]
                  - button "Align center" [disabled] [ref=e52]:
                    - img [ref=e54]
                  - button "Align right" [disabled] [ref=e56]:
                    - img [ref=e58]
                  - button "Justify" [disabled] [ref=e60]:
                    - img [ref=e62]
                - toolbar "indentation" [disabled] [ref=e64]:
                  - button "Decrease indent" [disabled] [ref=e65]:
                    - img [ref=e67]
                  - button "Increase indent" [disabled] [ref=e69]:
                    - img [ref=e71]
          - generic [ref=e73]:
            - iframe [ref=e75]:
              - generic "Rich Text Area. Press ALT-0 for help." [active] [ref=f1e1]:
                - paragraph [ref=f1e2]: Your content goes here.
            - complementary
        - generic [ref=e76]:
          - generic [ref=e77]:
            - navigation [ref=e78]
            - link "Powered by Tiny" [disabled] [ref=e80]:
              - /url: https://www.tiny.cloud/?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v5
          - generic "Resize" [ref=e81]:
            - img [ref=e82]
  - generic [ref=e86]:
    - separator [ref=e87]
    - generic [ref=e88]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e89] [cursor=pointer]:
        - /url: http://elementalselenium.com/
  - alert [ref=e91]:
    - img [ref=e93]
    - paragraph [ref=e96]:
      - generic [ref=e97]: TinyMCE is in read-only mode because you have no more editor loads available this month.
      - generic [ref=e98]:
        - strong [ref=e99]: Please request that the admin
        - text: upgrade your plan
        - text: or add a valid payment method for additional editor load charges.
        - link "Learn more." [ref=e100] [cursor=pointer]:
          - /url: https://www.tiny.cloud/docs/tinymce/latest/usage-based-billing/?utm_campaign=editor_blocked_learn_more&utm_source=tiny&utm_medium=referral
    - button "Close" [ref=e101] [cursor=pointer]:
      - generic "Close" [ref=e102]:
        - img [ref=e103]
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
  9  |   // Nested frames
  10 |   readonly topFrame;
  11 |   readonly leftFrame;
  12 |   readonly middleFrame;
  13 |   readonly rightFrame;
  14 |   readonly bottomFrame;
  15 | 
  16 |   // iFrame editor
  17 |   readonly iFrame;
  18 |   readonly editor;
  19 | 
  20 |   constructor(page: Page) {
  21 |     this.page = page;
  22 | 
  23 |     // ✅ Main navigation
  24 |     this.framesLink = page.locator('a[href="/frames"]');
  25 |     this.nestedFramesLink = page.locator('a[href="/nested_frames"]');
  26 |     this.iFrameLink = page.locator('a[href="/iframe"]');
  27 | 
  28 |     // ✅ Nested frames
  29 |     this.topFrame = page.frameLocator('frame[name="frame-top"]');
  30 |     this.leftFrame = this.topFrame.frameLocator('frame[name="frame-left"]');
  31 |     this.middleFrame = this.topFrame.frameLocator('frame[name="frame-middle"]');
  32 |     this.rightFrame = this.topFrame.frameLocator('frame[name="frame-right"]');
  33 |     this.bottomFrame = page.frameLocator('frame[name="frame-bottom"]');
  34 | 
  35 |     // ✅ iFrame
  36 |     this.iFrame = page.frameLocator('#mce_0_ifr');
  37 |     this.editor = this.iFrame.locator('#tinymce');
  38 |   }
  39 | 
  40 |   async goToFramesPage() {
  41 |     await this.page.goto('https://the-internet.herokuapp.com/');
  42 |     await this.framesLink.click();
  43 |   }
  44 | 
  45 |   async openNestedFrames() {
  46 |     await this.nestedFramesLink.click();
  47 |   }
  48 | 
  49 |   async openIFrame() {
  50 |     await this.iFrameLink.click();
  51 |   }
  52 | 
  53 |   // ✅ Nested Frames Validation
  54 |   async verifyNestedFrames() {
  55 |     await expect(this.leftFrame.locator('body')).toHaveText('LEFT');
  56 |     await expect(this.middleFrame.locator('#content')).toHaveText('MIDDLE');
  57 |     await expect(this.rightFrame.locator('body')).toHaveText('RIGHT');
  58 |     await expect(this.bottomFrame.locator('body')).toHaveText('BOTTOM');
  59 |   }
  60 | 
  61 |   // ✅ iFrame actions
  62 |   async editIFrameText(text: string) {
> 63 |     await this.editor.fill('');
     |                       ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  64 |     await this.editor.fill(text);
  65 |   }
  66 | 
  67 |   async verifyIFrameText(text: string) {
  68 |     await expect(this.editor).toHaveText(text);
  69 |   }
  70 | }
```