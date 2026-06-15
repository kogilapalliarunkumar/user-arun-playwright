# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dynamicContent.spec.ts >> Dynamic Content Test
- Location: tests\dynamicContent.spec.ts:3:5

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not "·····································································
    "
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "Dynamic Content" [level=3] [ref=e8]
      - paragraph [ref=e9]: This example demonstrates the ever-evolving nature of content by loading new text and images on each page refresh.
      - paragraph [ref=e10]:
        - text: To make some of the content static append
        - code [ref=e11]: "?with_content=static"
        - text: or
        - link "click here" [ref=e12] [cursor=pointer]:
          - /url: /dynamic_content?with_content=static
        - text: .
      - separator [ref=e13]
      - generic [ref=e15]:
        - generic [ref=e16]:
          - img [ref=e18]
          - generic [ref=e19]: Quae aut et quaerat nihil ab nemo minima qui dolor est numquam tempora inventore blanditiis enim qui provident debitis eum et ullam eos voluptates et sint possimus voluptas nobis officia commodi.
        - generic [ref=e20]:
          - img [ref=e22]
          - generic [ref=e23]: Consequatur voluptas molestiae consequuntur labore sint modi voluptatem qui et dolor aut rerum rerum iusto rerum repellat non aliquid consequatur beatae nesciunt tenetur quae perspiciatis repudiandae nemo laboriosam architecto corporis aperiam assumenda autem et.
        - generic [ref=e24]:
          - img [ref=e26]
          - generic [ref=e27]: Quasi qui vel aliquid temporibus laudantium et laborum corporis maiores minus cupiditate quia sit omnis molestiae rerum reprehenderit quas eos in nam aliquam sed ut error earum ab est sed hic consectetur.
  - generic [ref=e29]:
    - separator [ref=e30]
    - generic [ref=e31]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e32] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class DynamicContentPage 
  4  | {
  5  |   constructor(private page: Page) {}
  6  | 
  7  |   async navigate() {
  8  |     await this.page.goto('https://the-internet.herokuapp.com/dynamic_content');
  9  |   }
  10 | 
  11 |   // Capture text of first content block
  12 |   async getFirstContentText(): Promise<string | null> 
  13 |   {
  14 |     return await this.page.locator('.row').first().textContent();
  15 |   }
  16 | 
  17 |   async refreshPage()
  18 |    {
  19 |     await this.page.reload();
  20 |   }
  21 | 
  22 |   async verifyContentChanges(oldText: string | null)
  23 |    {
  24 |     let newText: string | null = oldText;
  25 | 
  26 |     for (let i = 0; i < 5; i++) {
  27 |       await this.page.reload();
  28 | 
  29 |       newText = await this.getFirstContentText();
  30 | 
  31 |       // If content changed → break loop
  32 |       if (newText !== oldText) {
  33 |         console.log(`Content changed on attempt ${i + 1}`);
  34 |         break;
  35 |       }
  36 |        else 
  37 |         {
  38 |         console.log(`Attempt ${i + 1}: Content did not change`);
  39 |       }
  40 |     }
  41 | 
  42 |     // Final assertion
> 43 |     expect(newText).not.toBe(oldText);
     |                         ^ Error: expect(received).not.toBe(expected) // Object.is equality
  44 |   }
  45 | }
  46 | ``
```