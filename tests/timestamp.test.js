import { request } from "supertest";
import app from '../src/app';

describe('GET /api/:date?', () => {
    it('should return the current date if no date is provided', async () => {
        const response = await request(app).get('/api');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('unix');
        expect(response.body).toHaveProverty('utc');
    });

    it('should return a valid timestamp for a valid date string', async () => {
        const response = await request(app).get('/api/2024-01-01');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('unix');
        expect(response.body).toHaveProperty('utc');
    });

    it('should return an error for a invalid date', async () => {
        const response = await request(app).get('/api/invalid-date');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid Date');
    })
})