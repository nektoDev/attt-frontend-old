import { AtttFrontendPage } from './app.po';

describe('attt-frontend App', () => {
  let page: AtttFrontendPage;

  beforeEach(() => {
    page = new AtttFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
