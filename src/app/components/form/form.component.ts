import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { LocalService } from 'src/app/services/localService/local-service.service';
import { ActivatedRoute, Router } from '@angular/router';

//Cambiare regex al posto di un email un nickname
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  //costruttore per la navigazione con route
  constructor(private router: Router, private route: ActivatedRoute) {}

  user: User = {
    nickname: '',
    password: '',
  };

  formBuilder = inject(FormBuilder);
  localService = inject(LocalService);
  dataForm!: FormGroup;
  messageNickname!: string;
  messagePassword!: string;
  errorNickname!: boolean;
  errorPassword!: boolean;

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.onSubmit();
    {
      this.localService.setUser(this.user);
      console.log(this.localService.getUser());
      //chiamo la funzione di navigazione dopo aver validato i dati
      this.home(); //nota va direttamente alla page di home perchè il login è da sistemare
    }
  } //funzione di navigazione alla home
  home = () => {
    this.router.navigate(['home']);
  };

  testRegex() {
    const nicknameInput = this.user.nickname;
    const passwordInput = this.user.password;

    const nicknamePattern = /^[A-Za-z]+-[0-9]{2}[@]$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{5,}$/;

    if (nicknamePattern.test(nicknameInput)) {
      this.messageNickname = 'Email valida';
      this.errorNickname = false;
    } else {
      this.messageNickname = 'Email non valida es: Alessio-92@';
      this.errorNickname = true;
    }

    if (passwordPattern.test(passwordInput)) {
      this.messagePassword = 'Password valida';
      this.errorPassword = false;
    } else {
      this.messagePassword = 'Password non valida es: "Abc123"';
      this.errorPassword = true;
    }
    return this.messageNickname + this.messagePassword;
  }

  onSubmit() {
    this.localService.setUser(this.user);
    console.log(this.localService.getUser());
  }
}
