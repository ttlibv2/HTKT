import { ContactPage } from './app.po';

describe('contact App', () => {
  let page: ContactPage;

  beforeEach(() => {
    page = new ContactPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
