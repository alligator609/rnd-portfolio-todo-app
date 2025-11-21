import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, Timestamp, updateDoc } from '@angular/fire/firestore';
import { TodoInterface } from '../@models/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

private readonly todosCollection = 'todos';

  constructor(private firestore: Firestore) {}

  private get todosCollectionRef() {
    return collection(this.firestore, this.todosCollection);
  }

async getTodos(): Promise<TodoInterface[]> {
  const snap = await getDocs(this.todosCollectionRef);
  
  return snap.docs.map(d => {
    const data = d.data() as TodoInterface & { createdAt?: any; updatedAt?: any };

    return {
      uid: d.id, // Firestore document ID
      ...data,
      createdAt: this.toDate(data.createdAt) ?? new Date(),
      // keep updatedAt normalized too if you use it later
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...(data as any).updatedAt !== undefined
        ? { updatedAt: this.toDate((data as any).updatedAt) }
        : {},
    } as TodoInterface;
  });
}
  async create(payload: Omit<TodoInterface, 'uid' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const now = new Date().toISOString();
    const docRef = await addDoc(this.todosCollectionRef, {
      ...payload,
      createdAt: now,
      updatedAt: now,
    });
    return docRef.id;
  }

   
    async update(orderId: string, changes: Partial<TodoInterface>): Promise<void> {
    const ref = doc(this.todosCollectionRef, orderId);
    await updateDoc(ref, {
      ...changes,
      updatedAt: new Date().toISOString(),
    } as any);
  }

   async delete(orderId: string): Promise<void> {
    const ref = doc(this.todosCollectionRef, orderId);
    await deleteDoc(ref);
  }


  private toDate(value: any): Date | null {
  if (!value) return null;

  // Firestore Timestamp -> JS Date
  if (value instanceof Timestamp) return value.toDate();

  // String ISO date -> JS Date
  if (typeof value === 'string') return new Date(value);

  return value;
}

}