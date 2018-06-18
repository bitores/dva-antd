import { delay } from 'roadhog-api-doc';
import mockData from './mock';


const proxy = process.env.PROXY === 'true';


export default delay(proxy?{
  "GET /prifix/(.*)":"ip1",
  "POST /prifix/(.*)":"ip1",
}:mockData, 1000);