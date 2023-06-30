import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { LocalService } from 'src/app/services/localService/local-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from '../../dbMock/dbMock';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  
  
  user !: User 
/*   formBuilder = inject(FormBuilder); */
  localService = inject(LocalService);
  private router = inject(Router);
  dataForm!: FormGroup;
  messageNickname!: string;
  messagePassword!: string;
  errorNickname!: boolean;
  errorPassword!: boolean;
  usersVerified = users;

  loginForm !: FormGroup

  formControl !: any

  ngOnInit(): void {
/*     this.dataForm = this.formBuilder.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required],
    }); */

    this.user = {
      nickname: '',
      password: '',
      token: '',
    };

    this.loginForm = new FormGroup({
      nickname : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })

    this.formControl = this.loginForm.controls;

    this.loginForm.controls["nickname"].valueChanges.subscribe(value => (
      this.updateNickname(value)
    ))

    this.loginForm.controls["password"].valueChanges.subscribe(value => (
      this.updatePassword(value)
    ))

  }

  updateNickname = ( value : string | null) => {
    const updatedValue = value ?? ''
    this.loginForm.controls["nickname"].setValue(updatedValue, {emitEvent: false})
    // qui i controlli vengono effettuati al cambio del campo "nickname"
    this.testRegex("nickname")
  }

  updatePassword = ( value : string | null) => {
    const updatedValue = value ?? ''
    this.loginForm.controls["password"].setValue(updatedValue, {emitEvent: false})
    // qui i controlli vengono effettuati al cambio del campo "password"
    this.testRegex("password")
  }

  //funzione di navigazione alla home
  toHome = () => {
    this.router.navigate(['home']);
  };

  // Cerca l'utente nell'array di dbMock.ts
  checkUser(username?: string, password?: string): boolean {
    const user = this.usersVerified.find(
      (u) => u.nickname === username && u.password === password
    );
    return !!user; // Restituisce true se l'utente è stato trovato, altrimenti false.
  }

  testRegex(checkFunctionForRegex ?: string) {
/*     const nicknameInput = this.user.nickname;
    const passwordInput = this.user.password; */

    const nicknamePattern = /^[A-Z][A-Za-z]+-[0-9]{2}[@]$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{5,}$/;

    checkFunctionForRegex === "nickname" ? (

    nicknamePattern.test(this.formControl?.nickname.value as string) ? (
      console.log(this.formControl.nickname.value),
      this.messageNickname = 'Nickname valido',
      this.errorNickname = false
     ) : (
      this.messageNickname = 'Nickname non valido es: "User-01@"',
      this.errorNickname = true
     )
     ) : (

    passwordPattern.test(this.formControl?.password.value as string) ? (
      console.log(this.formControl.password.value),
      this.messagePassword = 'Password valida',
      this.errorPassword = false
      ) : (
      this.messagePassword = 'Password non valida es: "Abc01"',
      this.errorPassword = true
      )
      )
    return this.messageNickname + this.messagePassword;
  }

  // permette di poter utilizzare il stato "Invio" per triggerare l' ngSubmit del FormGroup
  pressSubmit = (event : KeyboardEvent) => {
    event.key === "Enter" ?  (event.preventDefault(),
                              this.onSubmit() ) : false
  }

  switchInputForm = (event : KeyboardEvent) => {
    const fieldPassword = document.getElementById("fieldPassword")
    event.key === "Enter" ? fieldPassword!.focus()  : false
  }

  onSubmit() {

    // i controlli avvengono in automatico quando richiamato il Submit
    this.testRegex()

    const userGiven : User = {nickname: this.formControl.nickname.value as string,
                              password: this.formControl.password.value as string,
                              token: '' }

    const tokenUser = (userGiven.token = Md5.hashAsciiStr(
      this.localService.getUser().nickname +
      this.localService.getUser().password +
      new Date().toString()
    ));

    this.localService.setUser(userGiven)

    /* this.localService.setUser(this.user); */
      
      this.checkUser(
        this.localService.getUser().nickname,
        this.localService.getUser().password
      ) ? (
      this.localService.setToken(tokenUser),
      console.table({ 'User Local Service': this.localService.getUser() }),
      console.table({
        Nickname: this.localService.getUser().nickname,
        Password: this.localService.getUser().password,
        'Token Local': this.localService.getUser().token,
        'Token User': this.user.token,
        'LocalStorage Token': localStorage.getItem('tokenUser'),
      }),
      this.toHome()
    ) : (
      alert('Utente non trovato')
    )
    return;
  }
}
