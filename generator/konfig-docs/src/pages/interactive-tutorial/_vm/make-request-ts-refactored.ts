export const makeRequestTsRefactored = `import { Petstore } from './typescript';

new Petstore().store
  .placeOrder({
    quantity: '1,000',
  })
  .then((response) => {
    console.log('Place Order Response:', response.data);
  });

// import axios from 'axios';

// let data = JSON.stringify({
//   quantity: '1,000',
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://petstore.swagger.io/v2/store/order',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   data: data,
// };

// axios
//   .request(config)
//   .then((response) => {
//     console.log('Place Order Response:', JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
`;