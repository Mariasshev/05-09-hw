// 1. Створіть тип даних Учасник та кілька його реалізацій: Людина, Кіт, Робот.  
// 2. Класи з п.2 повинні мати поведінку бігати і стрибати (методи просто виводять інформацію про дію в консоль). 
// 3. Створіть тип даних Перешкода та кілька її реалізацій: Бігова Доріжка та Стіна.  
// 4. Класи з п.3 повинні мати поведінку подолати перешкоду.  
// 5. Налагодити взаємодію між Учасником та Перешкодою.   
// Іншими словами, учасники під час проходження через перешкоди мають виконувати відповідні дії (бігти чи стрибати). 
//  Наприклад: Людина пробігла бігову доріжку.  
// 6. Створіть два масиви: з учасниками та перешкодами.   
 
// 7. Кожен елемент з масиву з учасниками повинен пройти кожну перешкоду з масиву з перешкодами.  
//  8. * У перешкод є довжина (для доріжки) або висота (для стіни), а учасників обмеження на біг та стрибки.   
// Якщо учасник не зміг пройти одну з перешкод, то наступного він не приступає (цілком вибуває з участі в серії перешкод).    
// 9. * Результат виконання учасником конкретної перешкоди виводити у консоль. Наприклад: "Учасник[ІМ'Я] пройшов перешкоду[НАЗВА] на дистанції[ЗНАЧЕННЯ]"
 
// "Учасник[ІМ'Я] не пройшов перешкоду[НАЗВА] на дистанції[ЗНАЧЕННЯ]. Пройдено[ЗНАЧЕНИЕ]"

var mod = require('./mod');


const participants = [
    new mod.Participant('Human', 500, 3),
    new mod.Participant('Cat', 200, 5),
    new mod.Participant('Robot', 5000, 10)
];

const obstacles = [
    new mod.Racetrack(100),
    new mod.Wall(2.5),
    new mod.Racetrack(3000),
    new mod.Wall(4.5)
];


participants.forEach( participant => {
    console.log('---------------');
    console.log(`Participant: ${participant.name}`);

    var count = 0;

    for( const obstacle of obstacles){
        const success = obstacle.overcome(participant);

        if(!success){
            if( obstacle instanceof mod.Racetrack){
                console.log(`Participant ${participant.name} did not pass the obstacle Racetrack with distance ${obstacle.distance}`);
            }
            else{
                console.log(`Participant ${participant.name} did not pass the obstacle Wall with distance ${obstacle.height}`);
            }
            break;
        }
        else{ count++ ;}
    }
    if(count == obstacles.length){
        console.log(`${participant.name} is a winner!!!`);
    }

    console.log('---------------');
    console.log('\n');

});
