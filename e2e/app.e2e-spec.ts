import { OutletsDirectoyPage } from './app.po';

describe('outlets-directoy App', function() {
  let page: OutletsDirectoyPage;

  beforeEach(() => {
    page = new OutletsDirectoyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
