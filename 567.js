var sit = document.getElementsByClassName('sit'); // Собрали в массив все места

var button = document.getElementById("button"); //Определили кнопочку которую будем кликать

var booked = 0; // Здесь будет счётчик занятых мест

var line = document.getElementsByClassName("line")


// Объявляем событие при нажатии на кнопку
button.onclick = function(){
    
     var line = prompt("Введите номер ряда")
    line = parseInt(line)
    
    //Делаем запрос места
    var number = prompt("Введите место которое будем бронировать");
    number = parseInt(number); //Конвертируем строку в число
    number--; //Массивы ведут счёт с нуля, а мы с единицы, поэтому понижаем на 1
    
    if(line < 1){
        alert("Ошибка")
        } 
        else{
        number = number + line*20
        }


    }

    sit[number].style.backgroundColor = 'red' //Визуально меняем стиль картинки, чтобы понять что место забронированно

    
    number++
    alert("Забронированное место: " + number); 
