import axios from 'axios';

/* make a request to the youtube API, using axios.create make 
   easier to make a request because you can specify the baseURL
   and the params
*/
export default axios.create({
    baseURL: 'https://www.googlepapis.com/youtube/v3',
});