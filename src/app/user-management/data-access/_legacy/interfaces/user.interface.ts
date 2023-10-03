// TODO LEGACY
// todo change to User Contract
// export type UserInterface = UserContract
export interface UserInterface {
  id: string,
  name: string,
  login: string,
  password: string,
  email: string,
  approved: boolean
}

