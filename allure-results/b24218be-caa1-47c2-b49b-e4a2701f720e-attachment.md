# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: jQueryMenu.spec.ts >> JQuery UI Menu Tests >> Navigate to Downloads -> Excel
- Location: tests\jQueryMenu.spec.ts:22:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe').contentFrame().locator('text=Enabled') to be visible

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - link "Fork me on GitHub":
    - /url: https://github.com/tourdedave/the-internet
    - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
  - generic [ref=e7]:
    - heading "JQueryUI - Menu" [level=3] [ref=e8]
    - generic [ref=e9]:
      - paragraph [ref=e10]:
        - link "JQuery UI Menus" [ref=e11] [cursor=pointer]:
          - /url: http://api.jqueryui.com/menu/
        - text: are a nice UI element from a user perspective, but poses an interesting automation challenge since it requires mouse operations and synchronization between them.
      - paragraph [ref=e12]: Another 'fun' aspect is that the visibility of elements is actually not in the html itself, but done magically by JQuery so you cannot trust exactly what the html is telling you. A user cannot fire click events at certain UI elements, but you might -- if you have a big enough hammer to hit it with.
      - menu [ref=e13]:
        - menuitem "Disabled" [disabled] [ref=e14]:
          - link "Disabled" [disabled] [ref=e16]:
            - /url: "#"
        - menuitem "Enabled" [ref=e17]:
          - link "Enabled" [ref=e19] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e21]:
    - separator [ref=e22]
    - generic [ref=e23]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e24] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class JQueryMenuPage {
  4  |   readonly page: Page;
  5  |   readonly frame;
  6  | 
  7  |   readonly enabledMenu: Locator;
  8  |   readonly downloadsMenu: Locator;
  9  |   readonly pdfOption: Locator;
  10 |   readonly csvOption: Locator;
  11 |   readonly excelOption: Locator;
  12 | 
  13 |   readonly jqueryLink: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     this.page = page;
  17 | 
  18 |     
  19 |     this.frame = page.frameLocator('iframe');
  20 | 
  21 |     this.enabledMenu = this.frame.locator('text=Enabled');
  22 |     this.downloadsMenu = this.frame.locator('text=Downloads');
  23 | 
  24 |     this.pdfOption = this.frame.locator('text=PDF');
  25 |     this.csvOption = this.frame.locator('text=CSV');
  26 |     this.excelOption = this.frame.locator('text=Excel');
  27 | 
  28 |     
  29 |     this.jqueryLink = page.locator('text=JQuery UI Menus');
  30 |   }
  31 | 
  32 |   async navigate() 
  33 |   {
  34 |     await this.page.goto('https://the-internet.herokuapp.com/jqueryui/menu');
  35 |   }
  36 | 
  37 |   async verifyPageLoaded() 
  38 |   {
  39 |     await expect(this.jqueryLink).toBeVisible();
  40 |   }
  41 | 
  42 |   async hoverEnabled() 
  43 |   {
> 44 |     await this.enabledMenu.waitFor({ state: 'visible' });
     |                            ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  45 |     await this.enabledMenu.hover();
  46 | }
  47 | 
  48 | async hoverDownloads() 
  49 | {
  50 |     await this.downloadsMenu.waitFor({ state: 'visible' });
  51 |     await this.downloadsMenu.hover();
  52 | }
  53 | 
  54 | 
  55 |   async clickPDF() 
  56 |   {
  57 |     await this.pdfOption.click();
  58 |   }
  59 | 
  60 |   async clickCSV() 
  61 |   {
  62 |     await this.csvOption.click();
  63 |   }
  64 | 
  65 |   async clickExcel() 
  66 |   {
  67 |     await this.excelOption.click();
  68 |   }
  69 | 
  70 | 
  71 |   async clickJQueryLink() 
  72 |   {
  73 |     await this.jqueryLink.click();
  74 |   }
  75 | 
  76 |   async verifyNavigationToJQuery()
  77 |    {
  78 |     await expect(this.page).toHaveURL(/jqueryui/);
  79 |   }
  80 | }
```