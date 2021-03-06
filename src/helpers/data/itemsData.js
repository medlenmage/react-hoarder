import axios from 'axios';
// import utils from '../utils';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getItemsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allItems = response.data;
      const myItems = [];

      Object.keys(allItems).forEach((itemId) => {
        const item = allItems[itemId];
        item.id = itemId;
        myItems.push(item);
      });
      resolve(myItems);
    })
    .catch((err) => reject(err));
});

const getItemById = (itemId) => axios.get(`${baseUrl}/items/${itemId}.json`);

const deleteItem = (itemId) => axios.delete(`${baseUrl}/items/${itemId}.json`);

const addItem = (newItem) => axios.post(`${baseUrl}/items.json`, newItem);

const updateItem = (itemId, editedItem) => axios.put(`${baseUrl}/items/${itemId}.json`, editedItem);

export default {
  getItemsByUid,
  deleteItem,
  getItemById,
  addItem,
  updateItem,
};
