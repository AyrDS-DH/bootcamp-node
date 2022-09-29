import { productsDB } from './data/productsDB';

export const getProductById = (id) => productsDB.find(product => product.id === id);

export const getProductByCategory = (category) => productsDB.filter(product => product.category === category);
