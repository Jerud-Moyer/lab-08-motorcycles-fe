/* eslint-disable */

import request from 'superagent';

const url = process.env.REACT_APP_API_URL;

export function fetchCycles() {
    return request.get(`${url}/motorcycles`);
}

export function fetchCycle(id) {
    return request.get(`${url}/motorcycles/${id}`);
}

export function createMotorcycle(motorcycleData) {
    return request.post(`${url}/motorcycles`, motorcycleData)
}