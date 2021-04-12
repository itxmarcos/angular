import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('cv19_users'));
  }

  saveUser(user: User) {
    let users = this.getUsers();
    if(!users) {
      users = [];
    }

    users.push(user);
    //Esto nos lo proporciona el propio navegador
    localStorage.setItem('cv19_users', JSON.stringify(users)); //NO UTILIZAR EN PRODUCCION
  }

  saveSession(email: string) {
    localStorage.setItem('cv19_session', email);

  }

  removeSession() {
    localStorage.removeSession('cv19_session');
  }

  isAuthenticated(): boolean {
    return (
      localStorage.getItem('cv19_session') != null &&
      localStorage.getItem('cv19_session') != undefined
    );
  }
}
