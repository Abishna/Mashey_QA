// spec.js
describe('Protractor Demo App', function() {
  it('Login to NBL', function() {
    browser.get('https://msmecor.com/app/account#/login');
    element(by.id('username')).sendKeys(nbl);
    element(by.id('password')).sendKeys(msm12!!2017);

    element(by.value('Login')).click();

    expect(element(by.binding('latest')).getText()).
        toEqual('3'); // This is wrong!
  });
});