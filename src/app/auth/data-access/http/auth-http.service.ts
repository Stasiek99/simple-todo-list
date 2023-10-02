import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpQueryParams, ResourceService } from "../../../core/http/resource-service.model";
import { UserContract } from "../../../../contracts/user.contract";
import { map, Observable } from "rxjs";
import { EntityId } from "../../../../contracts/utils/entity-id.type";

@Injectable({
  providedIn: "root"
})
export class AuthHttpService implements ResourceService<UserContract> {

  private readonly endpoint = {
    getFirst: () => `api/users`,
    getById: (userId: string) => `api/users/${userId}`
  };

  constructor(private http: HttpClient) {
  }

  getFirst(params: HttpQueryParams<UserContract>): Observable<UserContract | null> {
    const httpParams = new HttpParams().appendAll(params);
    return this.http.get<UserContract[]>(this.endpoint.getFirst(), { params: httpParams })
      .pipe(map(users => this.getFirstItem(users)));
  }


  getById(userId: EntityId): Observable<UserContract | null> {
    return this.http.get<UserContract>(this.endpoint.getById(String(userId)));
  }


  private getFirstItem(users: UserContract[]): UserContract | null {
    return Array.isArray(users) && users.length ? users[0] : null;
  }
}
