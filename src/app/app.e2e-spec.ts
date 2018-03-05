import { KhaleesiDriver, BrowserType } from 'orange-peel';

describe('Khaleesi demo', () => {

    let driver: KhaleesiDriver;

    beforeAll(() => {
        driver = new KhaleesiDriver(BrowserType.CHROME);
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
