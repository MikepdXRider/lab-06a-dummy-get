const supertest = require("supertest");
const { app } = require("../server.js");
const request = supertest(app);
const { dataArr } = require("../data.js");

describe("Tests routes", () => {
    test('fetches all data from data.js', async () => {
        const data = [...dataArr];
        const response = await request.get('/teas');
        expect(response.body).toEqual(data);
    });

    test('fetches data per id', async () => {
        const data = {
            ...dataArr[0]
        };
        const response = await request.get('/teas/1');
        expect(response.body).toEqual(data);
    });
})