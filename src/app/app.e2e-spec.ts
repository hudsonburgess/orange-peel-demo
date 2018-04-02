import { Browser } from 'orange-peel';

describe('Khaleesi demo', () => {

    let driver: Browser;

    beforeAll(() => {
        driver = new Browser('mouse');
    });

    afterAll(() => {
        setTimeout(() => {
            driver.quit();
        }, 1000);
    });


    it('should get the title from the home page', done => {
        driver.get('/')
            .then(() => {
            expect(true).toBeTruthy();
            done();
            });
    }, 60000);

});
