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
};

// Export case runner
export default createRunner('Case 01 - Observable array', createStore, operations);
