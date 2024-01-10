let table=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function serial(a){
  let a1,a2;
  for(let i=0;i<a.length;i++){
    a1=table[a[i]%10];
    a2=table[parseInt(a[i]/10)];
   if(a2==="0")
    a[i]=a1;
    else a[i]=a2+a1;
  }
}

function deserial(a){
  let aa,a1,a2,a3,a4;
  for(let i=0;i<a.length;i++){
    aa=a[i].split('')
    a1=aa[0]
    a2=aa[1]
    if(a2!==undefined){
      a3=table.indexOf(a1)
      a3=a3.toString()
      a4=table.indexOf(a2)
      a4=a4.toString()
      a[i]=a3+a4
    }
    else{
      a3=table.indexOf(a1)
      a3=a3.toString()
      a[i]=a3
    }
  }
}

let test=[1,5,12,30,100,103,256,288];
let test1=[50];
let test2=[50];
let test3=[100];
let test4=[100];
let test5=[500]
let test6=[500];


for(let i=0;i<50;i++){
test1[i]=getRandomInt(1, 300);
test2[i]=test1[i];
}

for(let i=0;i<100;i++){
test3[i]=getRandomInt(1, 300);
test4[i]=test3[i]
}

for(let i=0;i<500;i++){
test5[i]=getRandomInt(1, 300);
test6[i]=test5[i]
}


console.log("Простой пример: ")
console.log("Начальная строка: ")
for(let i=0;i<7;i++) console.log(test[i])
console.log("_________________________________")
serial(test)
console.log("Сериализованная строка: ")
for(let i=0;i<7;i++) console.log(test[i])
console.log("_________________________________")
deserial(test)
console.log("Десериализованная строка: ")
for(let i=0;i<7;i++) console.log(test[i])
console.log("_________________________________")

console.log("Тесты:")
serial(test1)
deserial(test1)

let flag=false;

for(let i=0;i<test1.length;i++)
if(test1[i]!=test2[i]) flag=true;
console.log("Результат первого теста: ")
if (flag===false) console.log("Успешно")
else console.log("Неуспешно")

serial(test3)
deserial(test3)
flag=false
for(let i=0;i<test3.length;i++)
if(test3[i]!=test4[i]) flag=true;
console.log("Результат второго теста: ")
if (flag===false) console.log("Успешно")
else console.log("Неуспешно")


serial(test5)
deserial(test5)
flag=false
for(let i=0;i<test5.length;i++)
if(test5[i]!=test6[i]) flag=true;
console.log("Результат третьего теста: ")
if (flag===false) console.log("Успешно")
else console.log("Неуспешно")
