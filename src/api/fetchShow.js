

import axios from 'axios'

export const fetchShow = (url) => {
    return axios.get(url).then(res => { return res });
};