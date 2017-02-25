import { OnethingPage } from './app.po';

describe('onething App', () => {
  let page: OnethingPage;

  beforeEach(() => {
    page = new OnethingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
