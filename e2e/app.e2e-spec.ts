import { KnightsSite2Page } from './app.po';

describe('knights-site2 App', () => {
  let page: KnightsSite2Page;

  beforeEach(() => {
    page = new KnightsSite2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
