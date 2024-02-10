import Dexie from 'dexie';

const db = new Dexie('todoDatabase');
db.version(1).stores({
  tasks: '++id, title, completed, priority'
});

export const getTasks = () => db.tasks.toArray();

export const addTask = (task) => db.tasks.add(task);

export const deleteTask = (id) => db.tasks.delete(id);

export const updateTask = (id, updates) => db.tasks.update(id, updates);
