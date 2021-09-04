export const environment = {
  production: false,
  baseURL: "http://www.thecocktaildb.com/api/json/v1/1",

  // Your web app's Firebase configuration

  firebaseConfig : {

    apiKey: process.env.apiKey,

    authDomain: process.env.authDomain,

    projectId: process.env.projectId,

    storageBucket: process.env.storageBucket,

    messagingSenderId: process.env.messagingSenderId,

    appId: process.env.appId

  }

};