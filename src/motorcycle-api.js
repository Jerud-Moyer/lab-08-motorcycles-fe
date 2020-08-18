/* eslint-disable */

import request from 'superagent';

const url = process.env.REACT_APP_API_URL;

export function fetchCycles() {
    try {
    return request.get(`${url}/motorcycles`);
    } catch(e) {
        return { error: e.message }
}
}

export function fetchEngines() {
    try {
        return request.get(`${url}/engine_types`);
    } catch(e) {
        return { error: e.message }
    }
    
}

export function fetchCycle(id) {
    return request.get(`${url}/motorcycles/${id}`);
}

export function createMotorcycle(motorcycleData) {
    return request.post(`${url}/motorcycles`, motorcycleData)
}

export function deleteMotorcycle(id) {
    return request.delete(`${url}/motorcycles/${id}`);
}

export function updateMotorcycle(id, updatedMotorcycle) {
    return request.put(`${url}/motorcycles/${id}`, updatedMotorcycle)
}