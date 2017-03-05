import createRunner from './createToolBelt';
import { observable, toJS, autorun, action } from 'mobx';

class Store {
  @observable/*.deep*/ scalar_deep;
  @observable.ref scalar_ref;
}

// Store factory (Used to create store for each case)
const createStore = () => {
  const item = 1;
  const store = new Store();

  store.scalar_deep = item;
  store.scalar_ref = item;

  return store;
}

// Define store mutations (actions)
const operations = {
  'Set item': [
    (store) => store.scalar_deep = 2,
    (store) => store.scalar_ref = 2,
  ],
};

// Export case runner
export default createRunner('Case 03', createStore, operations);
