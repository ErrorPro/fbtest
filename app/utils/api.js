const API = 'http://recruitment.safetydata.us:3000/v1';

const toQuery = (obj) => {
  return Object.keys(obj).map((key) => `${key}=${obj[key]}`).join('&');
}

export const singIn = (data) => {
  return fetch(`${API}/users/whoami`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: toQuery(data),
  }).then(res => res.json());
}

export const singUp = (data) => {
  return fetch(`${API}/users/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: toQuery(data),
  }).then(res => res.json());
}
