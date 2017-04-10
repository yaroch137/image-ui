import { ImageUiPage } from './app.po';

describe('image-ui App', () => {
  let page: ImageUiPage;

  beforeEach(() => {
    page = new ImageUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
