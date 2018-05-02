import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const generics = [
  {
    id: 'banana-fairtrade',
    name: 'Banana',
    type: 'Fairtrade',
    peelable: true,
    taste: "Umami",
    image: 'https://cdn0.woolworths.media/content/wowproductimages/large/306510.jpg',
  },
  {
    id: 'apple-red-delicious',
    name: 'Apple',
    type: 'Red Delicious',
    peelable: false,
    taste: 'Sweet',
    image: 'http://www.chhajedgarden.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/4/04_apples.jpg',
  },
  {
    id: 'peach-georgia',
    name: 'Peach',
    type: 'Georgia',
    peelable: 'false',
    taste: 'Sour',
    image: 'http://www.dljproduce.com/wp-content/uploads/2017/10/Peach_iStock-472095722.jpg',
  }
];

const tasteCategories = [
  "Sweet",
  "Sour",
  "Bitter",
  "Salty",
  "Umami",
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (generic) => {
  return generic.name.split(' ').join('-').toLowerCase() + '-' + generic.type.split(' ').join('-').toLowerCase();
};

class GenericApi {
  static getAllGenerics() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], generics));
      }, delay);
    });
  }

  static saveGeneric(generic) {
	generic = Object.assign({}, generic); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minGenericNameLength = 3;
        if (generic.name.length < minGenericNameLength) {
          reject(`First Name must be at least ${minGenericNameLength} characters.`);
        }

        if (generic.id) {
          const existingAuthorIndex = generics.findIndex(a => a.id == generic.id);
          generics.splice(existingAuthorIndex, 1, generic);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          generic.id = generateId(generic);
          generics.push(generic);
        }

        resolve(generic);
      }, delay);
    });
  }

  static deleteGeneric(genericId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfGenericToDelete = generics.findIndex(generic => {
          generic.id == genericId;
        });
        generics.splice(indexOfGenericToDelete, 1);
        resolve();
      }, delay);
    });
  }

  static getAllTastes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(tasteCategories);
      }, delay);
    });
  }
}

export default GenericApi;
