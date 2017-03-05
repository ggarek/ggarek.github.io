import createRunner from './createToolBelt';
import { observable, toJS, autorun, action } from 'mobx';

class Store {
    @observable/*.deep*/ collection_deep = [];
    @observable.ref collection_ref = [];
    @observable.shallow collection_shallow = [];
}

// Store factory (Used to create store for each case)
const createStore = () => {
  const todos = [{ test: "value" }];
  const store = new Store();

  store.collection_deep = todos;
  store.collection_ref = todos;
  store.collection_shallow = todos;

  return store;
};

// Define store mutations (actions)
const operations = {
  'Add new element to collection': [
    store => store.collection_deep.push({ test: 'black widow is not that black' }),
    store => store.collection_ref.push({ test: 'black widow is not that black' }),
    store => store.collection_shallow.push({ test: 'black widow is not that black' }),
  ],
  'Mutate element in collection': [
    store => store.collection_deep[0].test = 'hulk is so green',
    store => store.collection_ref[0].test = 'hulk is so green',
    store => store.collection_shallow[0].test = 'hulk is so green',
  ],
  'Add new property to element in collection': [
    store => store.collection_deep[0].newValue = 'pink superhero',
    store => store.collection_ref[0].newValue = 'pink superhero',
    store => store.collection_shallow[0].newValue = 'pink superhero',
  ],
  'Add new element to collection, then mutate added item': [
    store => {
      let item = { test: 'nice pants!' };
      const size = store.collection_deep.push(item);
      store.collection_deep[size - 1].test = 'or may be not..';
    },
    store => {
      let item = { test: 'nice pants!' };
      const size = store.collection_ref.push(item);
      store.collection_ref[size - 1].test = 'or may be not..';
    },
    store => {
      let item = { test: 'nice pants!' };
      const size = store.collection_shallow.push(item);
      store.collection_shallow[size - 1].test = 'or may be not..';
    }
  ],
  'Add new element to collection, then mutate original item': [
    store => {
      let item = { test: 'nice pants!' };
      const size = store.collection_deep.push(item);
      item.test = 'or may be not..';
    },
    store => {
      let item = { test: 'nice pants!' };
      const size = store.collection_ref.push(item);
      item.test = 'or may be not..';
    },
    store => {
      let item = { test: 'nice pants!' };
      const size = store.collection_shallow.push(item);
      item.test = 'or may be not..';
    },
  ]
};

// Export case runner
export default createRunner('Case 01 - Observable array', createStore, operations);
