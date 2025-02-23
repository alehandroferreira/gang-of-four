import { RegularCache } from './cache/RegularCache';
import { SingletonCache } from './cache/SingletonCache';
import { CacheService, ICache } from './cacheServiceLocation/CacheService';
import { ServiceLocator } from './cacheServiceLocation/ServiceLocator';

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

// --------------------------------------------
// Demonstração com Singleton (ServiceLocator)
// --------------------------------------------

console.log(' ');
console.log(`~ Demonstração com Singleton aplicado :  (ServiceLocator)`);
console.log(' ');
const serviceLocator = ServiceLocator.getInstance();

serviceLocator.resgister<ICache>('cacheService', new CacheService());

const serviceLocatorChace1 = serviceLocator.get<ICache>('cacheService');
const serviceLocatorChace2 = serviceLocator.get<ICache>('cacheService');

serviceLocatorChace1.set('user', 'John Doe');

console.log(serviceLocatorChace1.get('user')); // John Doe
console.log(serviceLocatorChace2.get('user')); // John Doe
