/* eslint-disable */

import request from 'superagent';

const url = 'https://dry-headland-73940.herokuapp.com';

export function fetchCycles() {
    return request.get(`${url}/motorcycles`);
}

export function fetchCycle(id) {
    return request.get(`${url}/motorcycles/${id}`);
}