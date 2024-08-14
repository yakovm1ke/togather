import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { bookSchema } from './schemas';

const firebaseConfig = {
  apiKey: 'AIzaSyAvKFgi0AuhV4_DgCuZhzS69LivwNIHsUw',
  authDomain: 'clubb00k.firebaseapp.com',
  projectId: 'clubb00k',
  storageBucket: 'clubb00k.appspot.com',
  messagingSenderId: '954921234381',
  appId: '1:954921234381:web:7a81ee23ff663a637f9e84',
};

const collections = ['books'] as const

type Collection = typeof collections[number]

export const createApi = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getCollection = async(collectionName: Collection) => {
    const col = collection(db, collectionName);
    const {docs} = await getDocs(col)
    return docs.map(it => it.data())
  }

  return {
    getBooks: async() => {
      const response = await getCollection('books')
      return bookSchema.array().parse(response)
    }
  }
}
