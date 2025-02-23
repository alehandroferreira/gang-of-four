import { RegularCache } from './RegularCache';
import { SingletonCache } from './SingletonCache';

console.log(' ');
console.log(`~ Demonstração sem Singleton aplicado :  (RegularCache)`);
console.log(' ');
const regularCache1 = new RegularCache();
const regularCache2 = new RegularCache();

regularCache1.set('user', 'John Doe');

console.log(regularCache1.get('user')); // John Doe
console.log(regularCache2.get('user')); // undefined

// --------------------------------------------
// Singleton aplicado
// --------------------------------------------

console.log(' ');
console.log(`~ Demonstração com Singleton aplicado : (SingletonCache)`);
console.log(' ');
const singletonCache1 = SingletonCache.getInstance();
const singletonCache2 = SingletonCache.getInstance();

singletonCache2.set('user', 'John Doe');

console.log(singletonCache1.get('user')); // John Doe
console.log(singletonCache2.get('user')); // John Doe
