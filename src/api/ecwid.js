import {ECWID_URL, ECWID_TOKEN} from '../../common'

export function request(method, body, endpoint, params) {
    return fetch(`${ECWID_URL}/${endpoint}?token=${ECWID_TOKEN}${params ? `&${params}` : ''}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        ...(body ? {body: JSON.stringify(body)} : {}),
    }).then(response => response.text());
}

