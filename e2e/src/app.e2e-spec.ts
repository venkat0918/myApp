import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should go to the mywork page', () => {
    page.navigateTo()
    browser.sleep(1000);
    page.getmywork().click();
    browser.sleep(1000);
  });

  it('should go to the login page', () => {
    page.navigateTo()
    browser.sleep(1000);
    page.getLogin().click();
    browser.sleep(1000);
  });

  it('should go to the signup page', () => {
    page.navigateTo()
    browser.sleep(1000);
    page.getSignup().click();
    browser.sleep(1000);
  });

  // it('should go to the mywork page', () => {
  //   page.navigateTo()
  //   browser.sleep(1000);
  //   page.getmywork().click();
  //   browser.sleep(1000);
  // });
});
