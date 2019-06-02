import axios from 'axios';

let base = 'http://localhost:8088/';

// 添加收货地址
export const addAddressInfo = (params) => { return axios.post(`${base}` + 'insertAddress', params).then(res => res.data); };

// 删除收货地址
export const delAddressInfo = (params) => { return axios.post(`${base}` + 'deleteAddress', params).then(res => res.data); };

// 加载收货地址
export const getAddress = (params) => { return axios.post(`${base}` + 'getAddressList', params).then(res => res.data); };

// 删除我的购物车中的商品
export const delGoods = (params) => { return axios.post(`${base}` + 'deleteGoods', params).then(res => res.data); };
