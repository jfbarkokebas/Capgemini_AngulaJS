import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  acssesToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

  constructor() { }

  estaAutenticado(): boolean{
    return !!sessionStorage.getItem("acsses-token")
  }

  login(email:string, senha:string): boolean{
    if(email==="jf@jf.com.br" && senha === "123456"){
      sessionStorage.setItem("acsses-token", this.acssesToken )
      return true
    }
    return false
  }

  logout(){
    sessionStorage.clear()
  }
}
