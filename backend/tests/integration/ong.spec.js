const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {  
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy()
    })
    it('Should be able to create a new ONG', async () => {
        const response  = await request(app)
            .post('/ongs')
            .send({
                "name": "Marcos",
                "email": "teste@teste.com",
                "whatsapp": "1199999998",
                "city": "Sao Paulo",
                "uf": "sp"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(12);
    });
});