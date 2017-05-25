import { ObMdPlayPage } from './app.po';

describe('ob-md-play App', () => {
  let page: ObMdPlayPage;

  beforeEach(() => {
    page = new ObMdPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
