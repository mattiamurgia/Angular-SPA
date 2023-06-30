import { Location } from '@angular/common';
import { Token } from '@angular/compiler';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/dbMock/dbMock';
import { User } from 'src/app/models/User';

let user !: User

export const isLoggedIn = (): boolean => {
  // Recupera il token dal localStorage
  const storedToken = localStorage.getItem('tokenUser');

  console.log('tokenUser', storedToken);

  // Controllo se il token è presente nel localStorage e se è presente l'user
  if (storedToken) {
    //controlla se il token nel localstorage è uguale a quello dell'user
    
    const stringUser = localStorage.getItem('user');
    user = JSON.parse(stringUser!); 

    // Restituisce true se il token corrisponde a uno degli utenti, altrimenti false
    if (user && user.token === storedToken) {
      console.log(user)
      console.log("Token", storedToken)
      return true;
    }
  }

  // Restituisce false se il token non è presente nel localStorage
  return false;
};
