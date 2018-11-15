import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/home');
  }

  getmywork() {
    return element(by.id('mywork'));
  }
  getLogin() {
    return element(by.id('login'));
  }
  getSignup() {
    return element(by.id('signup'));
  }
}
