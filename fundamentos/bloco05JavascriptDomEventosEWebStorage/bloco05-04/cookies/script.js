/*
 * Cookies são dados salvos em pequenos arquivos de texto no computador da pessoa que utiliza a Internet.
 * Cookies são salvos no formato chave-valor e o JS permite que a gente crie, leia e delete cookie através da 
 * propriedade document.cookie.
 */

document.cookie = 'email=lpjanuzi@gmail.com; expires=Thu, 17 Dec 2022 12:00:00 UTC; path=/';

const myCookie = document.cookie;

console.log(myCookie);