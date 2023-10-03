import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResourceService } from "../../../core/http/resource-service.model";
import { UserContract } from "../../../../contracts/user.contract";
import { EntityId } from "../../../../contracts/utils/entity-id.type";

@Injectable({
  providedIn: "root"
})
export class UsersManagementHttpService implements ResourceService<UserContract> {

  private readonly endpoint = {
    getById: (userId: string) => `api/users/${userId}`,
    getAll: () => `api/users`
  };

  constructor(private http: HttpClient) {
  }

  getById(userId: EntityId): Observable<UserContract | null> {
    return this.http.get<UserContract>(this.endpoint.getById(String(userId)));
  }

  getAll(): Observable<UserContract[]> {
    return this.http.get<UserContract[]>(this.endpoint.getAll());
  }
}
