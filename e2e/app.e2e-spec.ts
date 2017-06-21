import { ClashTrackerPage } from './app.po';

describe('clash-tracker App', () => {
  let page: ClashTrackerPage;

  beforeEach(() => {
    page = new ClashTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
