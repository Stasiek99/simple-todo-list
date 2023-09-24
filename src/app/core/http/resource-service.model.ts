import { Observable } from "rxjs";
import { EntityId } from "../utils/entity-id.type";

export type HttpQueryParams<T extends SimpleObjectWithId> = Partial<T>

export type SimpleObjectWithId = Record<string, unknown> & { id: EntityId };

export interface ResourceService<T extends SimpleObjectWithId> {
  getFirst?(params?: HttpQueryParams<T>): Observable<T | null>;

  getAll?(params?: HttpQueryParams<T>): Observable<T[]>;

  post?(resource: Omit<T, "id">): Observable<T>;

  getById?(id: EntityId): Observable<T>;

  patch?(id: EntityId, value: Partial<Omit<T, "id">>): Observable<T>;

  put?(id: EntityId, value: Omit<T, "id">): Observable<T>;

  delete?(id: EntityId): Observable<void>;
}


// EXAMPLES

// type TestUseCaseContract = {
//   name: string;
//   id: number;
// }
//
// class TestServiceImpl implements ResourceService<TestUseCaseContract> {
//   getAll(params?: HttpQueryParams<TestUseCaseContract>): Observable<TestUseCaseContract[]> {
//     return of([]);
//   }
// }
