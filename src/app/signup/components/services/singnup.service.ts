import {Injectable} from "@angular/core";

import {UserInterface} from "../../../user/interfaces/user.interface";
import {UserLocalStorageService} from "../../../user/user-local-storage.service";
import {CurrentLocalStorageService} from "../../../user/current-local-storage.service";

export type UserId = string
//
//
// export class UsersLocalStorage {
//
//   getUsers():User[] {
//     return []
//   }
//
//   setUser(user:User):void {
//
//   }
// }
//

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private userLocalStorageService: UserLocalStorageService, private currentLocalStorageService: CurrentLocalStorageService) {
   }
   register(payload: UserInterface): UserId | null {
    const userId = this.generateId();
    const user: UserInterface = this.createUser(payload, userId);
    this.userLocalStorageService.addUser(user);
    this.currentLocalStorageService.setCurrentUserId(userId);
    return userId;
  }

  private createUser(payload: UserInterface, userId: UserId): UserInterface {
    return {
      ...payload,
      id: userId
    }
  }

  private generateId(): UserId {
    return Date.now().toString()
  }

  // private saveUser(user: UserInterface):void {
  //   this.userLocalStorageService.setSelectedUser(user)
  // }
}
//
//
// class Router {
//   navigate(url:string[]):void{
//
//   }
// }
//
// export class Singnupcomponent {
//
//   constructor(private service : SingnupService,private router: Router) {
//   }
//
//   onSubmit(payload: UserFormData):UserId {
//     const userId: UserId | null  = this.service.register(payload)  ;
//     if(userId){
//       this.router.navigate([`/users/${userId}`])
//     }else {
//       console.log('koles cos poszlpo nie tak')
//     }
//
//   }
//
// }
//
