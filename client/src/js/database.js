import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request1 = store.clear();
  const request2 = store.put({ value: content });
  const result1 = await request1;
  const result2 = await request2;
  console.log('🚀 - data saved to the database', result1, result2);
}
// console.error('putDb not implemented');

// console.log('PUT to the database');
// const todosDb = await openDB('todos', 1);
// const tx = todosDb.transaction('todos', 'readwrite');
// const store = tx.objectStore('todos');
// const request = store.put({ id: id, todo: content });
// const result = await request;
// console.log('🚀 - data saved to the database', result);





// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // const countRequest = store.get();
  const request = store.get('id');
  const content = await request;
  console.log('content.value', content);
return content;
}



initdb();









// export const postDb = async (content) => {
//   console.log('Post to the ase');
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readwrite');
//   const store = tx.objectStore('todos');
//   const request = store.add({ todo: content });
//   const result = await request;
//   console.log('🚀 - data saved to the database', result);
// };

// export const getAllDb = async () => {
//   console.log('GET all from the database');
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readonly');
//   const store = tx.objectStore('todos');
//   const request = store.getAll();
//   const result = await request;
//   console.log('result.value', result);
//   return result;
// };

// export const getOneDb = async (id) => {
//   console.log('GET from the database');
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readonly');
//   const store = tx.objectStore('todos');
//   const request = store.get(id);
//   const result = await request;
//   console.log('result.value', result);
//   return result;
// };
// export const deleteDb = async (id) => {
//   console.log('DELETE from the database', id);
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readwrite');
//   const store = tx.objectStore('todos');
//   const request = store.delete(id);
//   const result = await request;
//   console.log('result.value', result);
//   return result;
// };

