import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential, signOut } from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc, collection, query, where, getDocs } from '@angular/fire/firestore';
import { UserStorageService } from './user-storage.service';
import { environment } from '../../environments/environments';
import { RegisterPayload } from '../@models/register.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly usersCollection = `${environment.env}_users`;

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
    private userStorage: UserStorageService
  ) {}

  async login(email: string, password: string, rememberMe: boolean = false): Promise<void> {
    try {
      const credential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = credential.user;

      const userDocRef = doc(this.firestore, this.usersCollection, user.uid);
      const snap = await getDoc(userDocRef);

      // if (!snap.exists()) {
      //   alert('No profile found for this user.');
      //   return;
      // }

      const data: any = snap.data();
      const role: string = data.role || 'user';

      this.userStorage.saveUser({
        uid: user.uid,
        email: user.email ?? email,
        name: data.name,
        phone: data.phone,
        role,
      });

      //If kitchen user, fetch and save kitchen details
        if (role === 'admin') {
        await this.router.navigate(['/todo']);
      } else {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      console.error('Login error:', error);
      alert(error?.message ?? 'Failed to sign in. Please check your credentials.');
      throw error;
    }
  }

  async register(payload: RegisterPayload): Promise<UserCredential> {
    const { name, email, phone, password, role } = payload;

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      const userData: any = {
        uid: user.uid,
        name,
        email,
        phone,
        role,
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(this.firestore, this.usersCollection, user.uid), userData);

      this.userStorage.saveUser(userData);

      console.log('Firebase user created and profile saved:', user.uid);
      alert('Account created successfully!');

      return userCredential;
    } catch (error: any) {
      console.error('Error creating user:', error);
      alert(error?.message ?? 'Failed to create account. Please try again.');
      throw error;
    }
  }


  async logout() {
    try {
      await signOut(this.auth);
    } catch (e) {
      console.error('Error during sign out', e);
    }
    this.userStorage.clearUser();
    await this.router.navigate(['/']);
  }
}