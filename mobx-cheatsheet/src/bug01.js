import { observable, toJS, autorun, action, observe } from 'mobx';
import util from 'util';

class Store {
  @observable byCategory = new Map();
  @observable collection = [];
}

const store = new Store();

autorun(() => {
  const _ = toJS(store);
  console.log('[!] observed');
});

const header = (title) => console.log(`**${title.toUpperCase()}**`);
const dumpCollection = (tag) => console.log(`>${tag}\n${util.inspect(toJS(store.collection), { depth: 5 })}\n\n`);
const dumpMap = tag => console.log(`>${tag}\n${util.inspect(toJS(store.byCategory), { depth: 5 })}\n\n`);

// Test 01
header('Test 01 - deeply observable array');
dumpCollection('initial dump');

store.collection.push({ tags: ['shoe', 'leather'] });
dumpCollection('added item to the collection');

store.collection[0].tags.push('black');
dumpCollection('mutated collection nested in the item');


// Test 02
header('Test 02 - deeply observable map');
dumpMap('initial dump');

store.byCategory.set('shoes', []);
dumpMap('added array to observable map');

store.byCategory.get('shoes').push({ color: 'black' });
dumpMap('added element to the array');

store.byCategory.get('shoes')[0].color = 'red';
dumpMap('changed property of the item');
