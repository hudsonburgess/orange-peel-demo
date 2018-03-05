import { Browser, BrowserType } from 'orange-peel';

describe('Khaleesi demo', () => {

    let driver: Browser;

    beforeAll(() => {
        driver = new Browser(BrowserType.CHROME);
    });

    afterAll(() => {
        driver.quit();
    });


    it('should get the title from the home page', done => {
        driver.get('http://localhost:4200')
            .then(() => {
            expect(true).toBeTruthy();
            done();
            });
    }, 60000);

});
