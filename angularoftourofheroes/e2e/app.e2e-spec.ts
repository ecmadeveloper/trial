import { AngularoftourofheroesPage } from './app.po';

describe('angularoftourofheroes App', () => {
  let page: AngularoftourofheroesPage;

  beforeEach(() => {
    page = new AngularoftourofheroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
