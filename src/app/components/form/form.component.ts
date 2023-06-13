import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  user: User = {
    nickname: '',
    password: '',
    token: '',
  };

  formBuilder = inject(FormBuilder);
  localService = inject(LocalService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  dataForm!: FormGroup;
  messageNickname!: string;
  messagePassword!: string;
  errorNickname!: boolean;
  errorPassword!: boolean;
  usersVerified = users;

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required],
    });
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

  testRegex() {
    const nicknameInput = this.user.nickname;
    const passwordInput = this.user.password;

    const nicknamePattern = /^[A-Z][A-Za-z]+-[0-9]{2}[@]$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{5,}$/;

    if (nicknamePattern.test(nicknameInput)) {
      this.messageNickname = 'Nickname valido';
      this.errorNickname = false;
    } else {
      this.messageNickname = 'Nickname non valido es: "User-01@"';
      this.errorNickname = true;
    }
    if (passwordPattern.test(passwordInput)) {
      this.messagePassword = 'Password valida';
      this.errorPassword = false;
    } else {
      this.messagePassword = 'Password non valida es: "Abc01"';
      this.errorPassword = true;
    }
    return this.messageNickname + this.messagePassword;
  }

  onSubmit() {
    const tokenUser = (this.user.token = Md5.hashAsciiStr(
      this.localService.getUser().nickname +
        this.localService.getUser().password +
        new Date().toString()
    ));

    this.localService.setUser(this.user);
    if (
      this.checkUser(
        this.localService.getUser().nickname,
        this.localService.getUser().password
      )
    ) {
      this.localService.setToken(tokenUser);
      console.table({ 'User Local Service': this.localService.getUser() });
      console.table({
        Nickname: this.localService.getUser().nickname,
        Password: this.localService.getUser().password,
        'Token Local': this.localService.getUser().token,
        'Token User': this.user.token,
        'LocalStorage Token': localStorage.getItem('tokenUser'),
      });
      this.toHome();
    } else {
      alert('Utente non trovato');
    }
    return;
  }
}
