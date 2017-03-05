import { observable, toJS, autorun, action } from 'mobx';
import util from 'util';

export default (name, createStore, operations) => {
  const attachAutorun = (store, observed) => autorun(() => {
    const _ = toJS(store); // To trick mobx as we really need state here
    ++observed.count;
  });

  // State dumper
  const createDumper = store => () => console.log(`[State]\n${util.inspect(toJS(store))}`);

  // Runner
  const runner = () => {
    console.log(`[Start] ${name}`);
    Object.keys(operations).forEach(subCaseKey => {
      console.log(`\n\n> ${name}: ${subCaseKey}`);

      const store = createStore();
      const dumper = createDumper(store);
      const observed = { count: 0 };
      attachAutorun(store, observed);

      dumper();
      operations[subCaseKey].forEach(op => {
        const before = observed.count;
        console.log(`\n[Operation] ${op.toString()}`);
        op(store);
        const after = observed.count;
        if (before === after) console.log('[!] change was not observed');
        else console.log(`[+] change was observed ${after - before} time(s) (total ${observed.count} observations)`);
        dumper();
      });
    });
    console.log(`[End] ${name}\n\n`);
  };

  return runner;
}
