"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
const form = document.querySelector('#form');
if (form && form instanceof HTMLFormElement) {
    form === null || form === void 0 ? void 0 : form.addEventListener('keyup', handleInput);
}
function isUserData(obj) {
    if (obj &&
        typeof obj === 'object' &&
        ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
}
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.userData = Object.assign(Object.assign({}, window.userData), { [target.id]: target.value });
        window.localStorage.setItem('userData', JSON.stringify(window.userData));
    }
}
function validJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function getData() {
    const data = window.localStorage.getItem('userData');
    const inputs = document.querySelectorAll('input');
    if (data && validJson(data)) {
        const dados = JSON.parse(data);
        if (isUserData(dados)) {
            inputs.forEach((valor) => {
                valor.value = dados[valor.name];
                window.userData = Object.assign(Object.assign({}, window.userData), { [valor.name]: valor.value });
            });
        }
    }
}
getData();
console.log(window.userData);
