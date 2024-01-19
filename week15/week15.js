let cities = ['Москва', 'Баку', 'Лондон', 'Стамбул'];
let temperature = [];

for (let i = 0; i < cities.length; i++) {
    let massage = prompt(`Введите температуру для города ${cities[i]}`);
    temperature.push(Number(massage));
}
let max = temperature[0];
temperature.forEach(function (elem, index) {

    if(index > 0 ){
        if(max < elem){
            max = elem;
        }
    }
});
let min = temperature[0];
temperature.forEach(function (elem, index) {

    if(index > 0 ){
        if(min > elem){
            min = elem;
        }
    }
});


console.log(`Погода в город ${cities[0]} ${temperature[0]} Погода в город ${cities[1]} ${temperature[1]} Погода в город ${cities[2]} ${temperature[2]} Погода в город ${cities[3]} ${temperature[3]}`);
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');
const result5 = document.getElementById('result5');
const result6 = document.getElementById('result6');

result.textContent = `Температура в городе ${cities[0]} ${temperature[0]} °C`;
result2.textContent = `Температура в городе ${cities[1]} ${temperature[1]} °C`;
result3.textContent = `Температура в городе ${cities[2]} ${temperature[2]} °C`;
result4.textContent = `Температура в городе ${cities[3]} ${temperature[3]} °C`;
result5.textContent = `Максимальная температура ${max} °C`;
result6.textContent = `Максимальная температура ${min} °C`;