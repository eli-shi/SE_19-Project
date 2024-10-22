import firebase from '../firebase.js';
import Task from '../models/todomodel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const createTask = async (req, res, next) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'tasks'), data);
      res.status(200).send('task created successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
};

export const getTasks = async (req, res, next) => {
    try {
      const tasks = await getDocs(collection(db, 'tasks'));
      const tasksArray = [];
  
      if (tasks.empty) {
        res.status(400).send('No Tasks found');
      } else {
        tasks.forEach((doc) => {
          const task = new Task(
            doc.id,
            doc.data().title,
            doc.data().detail
          );
          tasksArray.push(task);
        });
  
        res.status(200).send(tasksArray);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
};

export const getTask = async (req, res, next) => {
    try {
      const id = req.params.id;
      const task = doc(db, 'tasks', id);
      const data = await getDoc(task);
      if (data.exists()) {
        res.status(200).send(data.data());
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
};


export const updateTask = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const task = doc(db, 'task', id);
      await updateDoc(task, data);
      res.status(200).send('Task updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
};

export const deleteTask = async (req, res, next) => {
    try {
      const id = req.params.id;
      await deleteDoc(doc(db, 'task', id));
      res.status(200).send('Task deleted successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
};