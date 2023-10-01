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
  loadedUsers: UserInterface[] = [];
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

  deleteUser(userToDelete: UserInterface): void {
    this.userLocalStorageService.deleteUser(userToDelete);
  }

  approveUser(user: UserInterface): void {
    this.userLocalStorageService.approveUser(user);
  }
}
