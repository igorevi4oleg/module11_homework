export function getMonth(n) {

    let result = '';

    if(n < 1 || n > 12) {

        result = 'Число указано некорректно'
    } 
    else if(isNaN(n)) {

        result = 'Необходимо указать число'
    } 
    else if (n === 12) {

        result = 'декабрь';
    };
  
    return result;
}