import { users } from 'src/app/dbMock/dbMock';

export const isLoggedIn = (): boolean => {
  // Recupera il token dal localStorage
  const storedToken = localStorage.getItem('tokenUser');

  console.log('tokenUser', storedToken);

  // Controllo se il token è presente nel localStorage
  if (storedToken) {
    // Verifica se il token corrisponde a uno dei token degli utenti
    return users.some((user) => user.token === storedToken);

    // Restituisce true se il token corrisponde a uno degli utenti, altrimenti false
  }

  // Restituisce false se il token non è presente nel localStorage
  return false;
};
