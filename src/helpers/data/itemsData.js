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

export default { getItemsByUid };
