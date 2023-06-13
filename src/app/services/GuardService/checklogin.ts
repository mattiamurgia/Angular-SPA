import { Token } from '@angular/compiler';
import { users } from 'src/app/dbMock/dbMock';

export const isLoggedIn = (): boolean => {
  // Recupera il token dal localStorage
  const storedToken = localStorage.getItem('tokenUser');

  console.log('tokenUser', storedToken);

  // Controllo se il token è presente nel localStorage e se è presente l'user
  if (storedToken) {
    //controlla se il token nel localstorage è uguale a quello dell'user
    const stringUser = localStorage.getItem('user');
    const user = JSON.parse(stringUser!);
    console.log(user);

    // Restituisce true se il token corrisponde a uno degli utenti, altrimenti false
    if (user && user.token === storedToken) {
      return true;
    }
  }

  // Restituisce false se il token non è presente nel localStorage
  return false;
};
