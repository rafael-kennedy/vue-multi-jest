require('./index.js');

describe('main function', () => {

    test('mounts the app component', () => {
        const appElement = document.getElementById('app');
        expect(appElement).toBeTruthy();
    })
})

