import { EpiventurPage } from './app.po';

describe('epiventur App', () => {
  let page: EpiventurPage;

  beforeEach(() => {
    page = new EpiventurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
