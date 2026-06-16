import { Page, Locator, expect } from '@playwright/test';

export class FramesPage {
  readonly page: Page;
  readonly framesLink: Locator;
  readonly nestedFramesLink: Locator;
  readonly iFrameLink: Locator;


  readonly topFrame;
  readonly leftFrame;
  readonly middleFrame;
  readonly rightFrame;
  readonly bottomFrame;


  readonly iFrame;
  readonly editor;

  constructor(page: Page) {
    this.page = page;

    this.framesLink = page.locator('a[href="/frames"]');
    this.nestedFramesLink = page.locator('a[href="/nested_frames"]');
    this.iFrameLink = page.locator('a[href="/iframe"]');


    this.topFrame = page.frameLocator('frame[name="frame-top"]');
    this.leftFrame = this.topFrame.frameLocator('frame[name="frame-left"]');
    this.middleFrame = this.topFrame.frameLocator('frame[name="frame-middle"]');
    this.rightFrame = this.topFrame.frameLocator('frame[name="frame-right"]');
    this.bottomFrame = page.frameLocator('frame[name="frame-bottom"]');


    this.iFrame = page.frameLocator('#mce_0_ifr');
    this.editor = this.iFrame.locator('#tinymce');
  }

  async goToFramesPage() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.framesLink.click();
  }

  async openNestedFrames() {
    await this.nestedFramesLink.click();
  }

  async openIFrame() {
    await this.iFrameLink.click();
  }

  async verifyNestedFrames() {
    await expect(this.leftFrame.locator('body')).toHaveText('LEFT');
    await expect(this.middleFrame.locator('#content')).toHaveText('MIDDLE');
    await expect(this.rightFrame.locator('body')).toHaveText('RIGHT');
    await expect(this.bottomFrame.locator('body')).toHaveText('BOTTOM');
  }


  async verifyDefaultIFrameText() {
    await expect(this.editor).toContainText('Your content goes here.');
  }
}