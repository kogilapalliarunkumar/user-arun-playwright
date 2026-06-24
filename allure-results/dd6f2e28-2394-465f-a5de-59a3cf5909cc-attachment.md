# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fileUpload.spec.ts >> Upload file debug
- Location: tests\fileUpload.spec.ts:5:5

# Error details

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "File Uploaded!" [level=3] [ref=e8]
      - generic [ref=e9]: Book1.xlsx
  - generic [ref=e11]:
    - separator [ref=e12]
    - generic [ref=e13]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e14] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```