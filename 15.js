//task1
//Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
setTimeout(()=>console.log('Сообщение номер 1'),2000)
setTimeout(()=> console.log('Сообщение номер 2'),4000)
setTimeout(()=>console.log('Сообщение номер 3'),6000)
setTimeout(()=> console.log('Сообщение номер 4'),8000)
setTimeout(()=> console.log('Сообщение номер 5'),10000)

//task2
//Сделать виджет - цифровые часы, оформить по желанию.
//Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.
let div = document.getElementById('t215')
function updateTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}:${seconds}`;
    div.textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);
