const API = 'http://recruitment.safetydata.us:3000/v1';

export const singIn = (data) => {
  console.log(data);
  return fetch(`${API}/users/whoami`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export const singUp = (data) => {
  return fetch(`${API}/users/create`, {method: 'POST', body: new FormData(data)})
    .then(res => res.json());
}
