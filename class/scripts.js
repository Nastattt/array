// let obj1 = {}
// let obj2 = new Object()
// let user = {
//     name:'Vasya',
//     age: 15,
//     isAnmin: false
// }
// user['login'] = 'User1'
// delete user.age
// console.log(user)




// let user = {
//     name: 'Vasya',
//     age: 16,
//     'is Admin': false,

//     say_hello(){
//         return (`Hello ${this.name},${this.age + 100}`)

//     }

// }

// let arrow = () => {}
// user.say_hello()
// function newUser(name,age){
//     return {name,age}
// }
// function hello(name,age){
//     return {Hello ${this.name},$ }
// }
// let manager = new newUser('manager', 20)
// manager['is Admin'] = false
// manager['say_hello'] = hello
// console.log(hello())
// console.log(manager.say_hello())
// let admin = Object.assign({},user)
// admin.name = 'admin'
// admin.age = 25
// console.log(admin)
// console.log(['say hello'])

// let user = {
//     name:'Vasya',
//     age: 15,
//     address: {
//         street:'Rudko',
//         house: 12,
//         flat: 10
//     },
//     admin(){
//         console.log('admin')
//     }
// }
// console.log(user.address.street)

// let array = []
// let array2 = new Array()

// let array3 = [1,2,3,4,5]
// console.log(array3[0])
// console.log(array3.length)
// array3[0]=100
// delete array3[1]
// array3[array3.length] = 500
// console.log(array3)


// let arr = [1,'isifvjdkcl', [5,6],{'name':'Vasya',age:15}]

// let arr  = [
//     {name: 'Vasya', age:15},
//     {name: 'admin', age:15},
//     {name: 'namager', age:15}

//  ]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// for (let item of arr){
//     console.log(item)
// }
// console.log(arr.pop())
// console.log('left', arr)
// console.log('added elem',arr.push(5432))
// console.log('added elem1',arr.shift(5432))

// let matrix = [
//     [
//         [1,2,3],
//         [1,2,3],
//         [1,2,3]],
//         [4,5,6],
//         [7,8,9]
//     ]

// matrix[1] = 'gfhdjks'
// console.log(matrix[0][2][1])


// matrix.splice(0,0,arr)
// console.log(matrix)


// let arr = [15,1,2,34,3]
// let sum = 0
// let res = arr.reduce((acc,item) => acc+item, 0)
// console.log(res)
// alert(location.host)
// document.body.style.backgroundColor = 'red'
// setTimeout(() => document.body.style.backgroundColor = 'yellow',1000 )

// console.log(document.body.parentNode)
// console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.nextElementSibling)

// for (let i=0;i < document.body.childNodes.length;i++) {
//     console.log(document.body.childNodes[i])
// }


// дз
// let array1 = ['Привет, ', 'мир', '!'];
// console.log(array1[0] + array1[1] + array1[2]);


// let array2 = ['Привет, ', 'мир', '!'];
// let text = array2[0] + array2[1] + array2[2];
// console.log(text);


// let array3 = ['Привет, ', 'мир', '!'];
// array3[0] = 'Пока, ';
// console.log(array3.join('')); 

// let obj = {
//     Петя: 50000,
//     Коля: 60000,
//     Аня: 45000,
//   };
  
//   console.log('Зарплата Пети: ' + obj['Петя']);
//   console.log('Зарплата Коли: ' + obj['Коля']);
  

//   var arr = {
//     'ru': ['красный', 'голубой'],
//     'en': ['red', 'blue']
//   };
  
//   console.log(arr['ru'][0]); 

// var arr = ['a', 'b', 'c'];
// alert(arr);


// var arr = ['a', 'b', 'c'];
// alert(arr[0]); 
// alert(arr[1]); 
// alert(arr[2]); 

// var arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);


// var arr = [2, 5, 3, 9];
// var result = arr[0] * arr[1] + arr[2] * arr[3];
// alert(result);


// var obj1 = {a: 1, b: 2, c: 3};
// console.log(obj1['c']); 
// console.log(obj1.c);     


// var obj2 = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log('Зарплата Пети: ' + obj2['Петя']);
// console.log('Зарплата Коли: ' + obj2.Коля);



// var daysOfWeek = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
//   };
  
//   var currentDay = new Date().getDay();
//   console.log('Текущий день недели: ' + daysOfWeek[currentDay]);



//   var day = 3; 
// console.log('День недели: ' + daysOfWeek[day]);

// var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(array1[1][0]);


// var obj2 = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj2.js[0]);


// var daysOfWeek2 = {
//     ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//   };
  
//   console.log(daysOfWeek2.ru[0]); 
//   console.log(daysOfWeek2.en[2]);
  

// var lang = 'ru'; 
// var day = 3; 

// console.log('День недели: ' + daysOfWeek2[lang][day - 1]);


  