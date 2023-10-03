import { EntityId } from "./utils/entity-id.type";

export interface TodoContract {
  id: EntityId;
  userId: EntityId;
  description: string;
  editing: boolean;
  status?: string,
  date?: string,
}
