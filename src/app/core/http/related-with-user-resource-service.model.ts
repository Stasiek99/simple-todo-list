import { Observable } from "rxjs";
import { EntityId } from "../../../contracts/utils/entity-id.type";
import { HttpQueryParams, ResourceService, SimpleObjectWithId } from "./resource-service.model";


export interface RelatedWithUserResourceService<T extends SimpleObjectWithId> extends ResourceService<T> {
  getFirstForUser?(userId: EntityId, params?: HttpQueryParams<T>): Observable<T | null>;

  getAllForUser?(userId: EntityId, params?: HttpQueryParams<T>): Observable<T[]>;
}

// EXAMPLES:

// type TestUseCaseContract = {
//   name: string;
//   id: number;
// }
//
// class TestServiceImpl implements RelatedWithUserResourceService<TestUseCaseContract> {
//   getAllForUser(userId: EntityId, params?: HttpQueryParams<TestUseCaseContract>): Observable<TestUseCaseContract[]> {
//     return of([]);
//   }
// }
