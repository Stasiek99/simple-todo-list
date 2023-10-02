import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

import {UserLocalStorageService} from "./user-local-storage.service";
import {UserInterface} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl= "http://localhost:3000/users";
  constructor(private userLocalStorageService: UserLocalStorageService, private http: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.apiUrl).pipe(
      map(responseData => {
        return responseData;
      })
    );
    // return [...this.userLocalStorageService.getUsers()];
  }

  getUserById(userId: string): Observable<UserInterface | null> {
    return this.http.get<UserInterface>(`${this.apiUrl}/${userId}`).pipe(
      catchError(() => of(null))
    );
    // return this.userLocalStorageService.getUserById(userId);
  }

  addUser(newUser: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.apiUrl}`, newUser);
  }

  deleteUser(userToDelete: UserInterface): Observable<UserInterface> {
    return this.http.delete<UserInterface>(`${this.apiUrl}/${userToDelete.id}`);
  }

  approveUser(user: UserInterface): Observable<UserInterface> {
    const updatedUser = { ...user, approved: true }
    return this.http.put<UserInterface>(`${this.apiUrl}/${user.id}`, updatedUser);
    // this.userLocalStorageService.approveUser(user);
  }
}
