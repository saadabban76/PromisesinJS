# Promises
A JavaScript Promise is an object used for asynchronous computations. 
It represents a value that may be available now, or in the future, or never. 
Essentially, it's a placeholder for a future result of an operation. Promises provide a way to handle asynchronous
operations such as fetching data from a server, reading files, or executing long-running computations
without blocking the main execution thread.

### Types of Promises : 
1. Promise.all - all the operations are performed parallely and if any Promise fail, the whole Promise.all block is going to fail. ## NOTE : Promises.all arrays can be a normal function or a Promise, it recommend to have the promise as the array data in Promise.all
2. Promise.allSettled - all the operations are performed parallely and even if any Promise fail, it just keep executing the other Promises without giving up, JUST LIKE ME 🙂
3. Promise.race - 
4. Promise.any



