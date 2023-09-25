import { EntityId } from "../utils/entity-id.type";

export interface UserContract {
  id: EntityId,
  name: string,
  login: string,
  password: string,
  email: string,
  approved: boolean
}
