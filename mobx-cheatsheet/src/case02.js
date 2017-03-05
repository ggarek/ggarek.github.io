import createRunner from './createToolBelt';
import { observable, toJS, autorun, action } from 'mobx';

class Store {
  @observable/*.deep*/ item_deep;
  @observable.ref item_ref;
  @observable.ref item_ref2;
  @observable.shallow item_shallow;
}

// Store factory (Used to create store for each case)
const createStore = () => {
  const item = { id: 1, name: 'hello', category: { name: 'funny bears' } };
  const store = new Store();

  store.item_deep = item;
  store.item_ref = item;
  store.item_ref2 = item;
  store.item_shallow = item;

  return store;
}

// Define store mutations (actions)
const operations = {
  'Set item': [
    (store) => store.item_deep = { id: -1, name: 'newly set'},
    (store) => store.item_ref = { id: -1, name: 'newly set'},
    (store) => store.item_ref2 = { id: -1, name: 'newly set'},
    (store) => store.item_shallow = { id: -1, name: 'newly set'},
  ],
  'Mutate item property': [
    (store) => store.item_deep.id = 999,
    (store) => store.item_ref.id = 999,
    (store) => store.item_ref2.id = 999,
    (store) => store.item_shallow.id = 999,
  ],
  'Mutate nested property': [
    store => store.item_deep.category.name = 'super heroes',
    store => store.item_ref.category.name = 'super heroes',
    store => store.item_ref2.category.name = 'super heroes',
    store => store.item_shallow.category.name = 'super heroes',
  ],
  'Add new item property': [
    (store) => store.item_deep.new_prop = 'crunchy',
    (store) => store.item_ref.new_prop = 'crunchy',
    (store) => store.item_ref2.new_prop = 'crunchy',
    (store) => store.item_shallow.new_prop = 'crunchy',
  ],
};

// Export case runner
export default createRunner('Case 02 - Observalble hash', createStore, operations);
