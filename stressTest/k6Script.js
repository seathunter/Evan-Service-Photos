import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '30s', target: 200 },
    { duration: '10s', target: 750 },
    { duration: '1m', target: 750 },
    { duration: '10s', target: 100 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 0 },
  ],
};

export default function() {
  let ranNum = Math.floor(Math.random() * 9999999);
  let res = http.get(`http://127.0.0.1:3050/photos/${ranNum}`);
  check(res, {
    'is status 200': r => r.status === 200
  });
}