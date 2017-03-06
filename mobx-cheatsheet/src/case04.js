import createRunner from './createToolBelt';
import * as MOBX from 'mobx';
const { observable, toJS, autorun, action, observe } = MOBX;

class Store {
  @observable byCategory = new Map();
}

// Store factory (Used to create store for each case)
const createStore = () => {
  const store = new Store();
  return store;
}

// Define store mutations (actions)
const operations = {
  'Add an array, then add an element, then mutate it': [
    store => {
      const category = '1';
      const item = { category, message: 'Duke Nukem is not here'};

      // TODO: should not deep observable Map wrap anything put in it in observable also? (Like array does)
      store.byCategory.set(category, []);
      store.byCategory.get(category).push(item);
      store.byCategory.get(category)[0].message = 'He will come soon';
    },
  ],
  'Add an observable array, then add an element, then mutate it': [
    store => {
      const category = '1';
      const item = { category, message: 'Duke Nukem is not here'};

      store.byCategory.set(category, observable([]));
      store.byCategory.get(category).push(item);
      store.byCategory.get(category)[0].message = 'He will come soon';
    },
  ],
};

// Export case runner
export default createRunner('Case 04 - observable.map', createStore, operations);
