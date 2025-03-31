// Classes

// function Course(name, price) {
//     this.name = name;
//     this.price = price;

//     this.getName = function() {
//         return this.name;
//     }

//     const isSuccess = false;
// }

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
        
    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    run() {
        const isSuccess = false;

        if (true) {
            isSuccess = true;
        }
    }
    
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);

console.log(phpCourse);
console.log(jsCourse);








// Arrow function

// const Course = function(name, price) {
//     this.name = name;
//     this.price = price;
// }

// const jsCourse = new Course('Javascript', 1000);

// console.log(jsCourse);


// const course = {
//     name: 'Javascript basic!',
//     getName: function() {
//         return this.name; //context
//     }
// }

// console.log(course.getName());


// const logger = log => console.log(log);

// logger('Message...');


// const sum = (a, b) => ({a: a, b: b});

// console.log(sum(2, 2));


// const sum = (a, b) => {
//     return a + b;
// }
// const sum = (a, b) => a + b;

// console.log(sum(2, 2));



// const logger = function logger(log) {
//     console.log(log);
// } 
// const logger = (log) => {
//     console.log(log);
// }

// logger('Message...');









// Template literals

// const courseName = 'Javascript';
// const description = `Course name: ${courseName}`;

// console.log(description);


// Multi-line String
// const lines = `Line 1
// Line 2
// Line 3`;

// console.log(lines);








// Let & Const

// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment

// Code block: if else, loop, {}, ...

// Code thuần: var
// Babel: Const, Let
// - Khi định nghĩa biến và ko gán lại biến đó: Const
// - Khi cần gán lại giá trị cho biến: Let

// let isSuccess = false;

// if (true) {
//     isSuccess = true;
// }

// console.log(isSuccess);

// const a = {
//     name: 'Javascript'
// }

// a.name = 'PHP';
// console.log(a.name);



// if (true) {
//     var course = 'javascript basic!';
// }

// console.log(course);









// Postman - REST API

// - JSON server: API Server (Fake) / Mock API
// Thêm/sửa/xóa khóa học với Fetch và REST API

// var courseApi = 'http://localhost:3000/courses';

// function start() {
//     getCourses(renderCourses);

//     handleCreateForm();
// }

// start();


// // Functions
// function getCourses(callback) {
//     fetch(courseApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// }

// function createCourse(data, callback) {
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };
//     fetch(courseApi, options)
//         .then(function(response) {
//             response.json();
//         })
//         .then(callback);    
// }

// function handleDeleteCourse(id) {
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     fetch(courseApi + '/' + id, options)
//         .then(function(response) {
//             response.json();
//         })
//         .then(function() {
//             var courseItem = document.querySelector('.course-item-' + id);
//             if (courseItem) {
//                 courseItem.remove();
//             }
//         });
// }

// function renderCourses(courses) {
//     var listCoursesBlock = document.querySelector('#list-courses');
    
//     var htmls = courses.map(function(course) {
//         return `<li class="course-item-${course.id}">
//             <h4>${course.name}</h4>
//             <p>${course.description}</p>
//             <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
//         </li>`;
//     });

//     listCoursesBlock.innerHTML = htmls.join('');

// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('#create');

//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;
        
//         var formData = {
//             name: name,
//             description: description
//         };

//         createCourse(formData);

//     }
// }






// JSON server

// var courseApi = 'http://localhost:3000/courses';

// fetch(courseApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(courses) {
//         console.log(courses);
//     });










// Fetch

//Backend (OK) -> API (URL) -> Fetch -> JSON/XML
// -> JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

// var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postAPI)
//     .then(function(response) {
//         return response.json();
//         // JSON.parse: JSON -> Javascript types
//     })
//     .then(function(posts) {
//         var htmls = posts.map(function(post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });

//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })
//     .catch(function() {
//         console.log('Có lỗi!');
//     });








// Promise

// var users = [
//     {
//         id: 1,
//         name: 'Tien Duong'
//     },
//     {
//         id: 2,
//         name: 'Le Xuan'
//     },
//     {
//         id: 3,
//         name: 'Duong Dung'
//     }
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video :('
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi!'
//     }
// ];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

// Fake API

// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments);
//         });
//     });
// }

// function getUsersByIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id);
//         });
//         setTimeout(function() {
//             resolve(result);
//         }, 1000);
//     }, 1000);
// };

// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id;
//         });

//         return getUsersByIds(userIds)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments
//                 };
//             });
//     })
//     .then(function(data) {
//         var commentBlock = document.getElementById('comment-block');

//         var html = '';

//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id;
//             });

//             html += `${user.name}: ${comment.content} <br>`;

//         });

//         commentBlock.innerHTML = html;


//     });




// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// Thư viện: output luôn luôn là
// một promise

// var promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([1]);
//     }, 2000)
// });

// var promise2 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([2, 3]);
//     }, 5000)
// });

// Promise.all([promise1, promise2])
//     .then(function(result) {
//         var result1 = result[0];
//         var result2 = result[1];

//         console.log(result1.concat(result2));

//     })



// var promise = Promise.resolve('Success!');

// promise
//     .then(function(result) {
//         console.log('result: ', result);
//     })
//     .catch(function(err) {
//         console.log('error: ', err);
//     });



// Chain

// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     })
// };

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject();
//         });
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .catch(function() {
//         console.log('Error!');
//     })


// var promise = new Promise(
//     function(resolve, reject) {

//         resolve();

//     }
// );

// promise
//     .then(function() {
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1, 2, 3]);
//             }, 3000);
//         });
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
//     .finally(function() {
//         console.log('Xong!');
//     });




// 1. new Promise
// 2. Executor

// 1. Pending
// 2. Fulfilled
// 3. Rejected

// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // Logic
//         // Thành công: resolve()
//         // Thất bại: reject()

//         // Fake call API
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'Javascript'
//         //     }
//         // ]);

//         reject('Co loi!');

//     }
// );

// promise
//     .then(function(courses) { // resolve
//         console.log(courses);
//     })
//     .catch(function(error) { // reject
//         console.log(error);
//     })
//     .finally(function() {
//         console.log('Xong!'); // resolve hoac reject
//     });



// Callback hell
// Pyramid of doom

// setTimeout(function() {
//     console.log(1); // viec 1
//     setTimeout(function() {
//         console.log(2); // viec 2
//         setTimeout(function() {
//             console.log(3); // viec 3
//             setTimeout(function() {
//                 console.log(4); // viec 4
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);





// Sync / Async

// setTimeout, setIntervar, fetch, xmlHttpRequest, 
// file reading, request animation frame

//sleep
// setTimeout(function() {
//     console.log(1);
// }, 1000);

// console.log(2);








// JSON

// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, Boolean, Null, Array, Object, String

// Mã hóa / Giải mã
// Encode / Decode
// Stringify: Từ Javascript types -> JSON
// Parse: Từ JSON -> Javascript types

//var json = '["Javascript", "PHP"]';
// var json = '{"name": "Tien Duong", "age": 18}';

// var object = JSON.parse(json);

// console.log(JSON.stringify({
//     name: 'Tien Duong',
//     age: 18
// }));











// Event listener

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / huỷ bỏ lắng nghe

// var btn = document.getElementById('btn');

// function viec1() {
//     console.log('Viec 1');
// }

// function viec2() {
//     console.log('Viec 2');
// }

// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// setTimeout(function() {
//     btn.removeEventListener('click', viec1);
// }, 3000);


// btn.onclick = function() {
//     //Viec 1
//     console.log('Viec 1');

//     //Viec 2
//     console.log('Viec 2');

//     //Viec 3
//     alert('Viec 3');
// }

// setTimeout(function() {
//     btn.onclick = function() {}
// }, 3000)









// DOM events

// 1. preventDefault
// 2. stopPropagation

// document.querySelector('div').onclick = function() {
//     console.log('Div');
// }

// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('Click me!');
// }


// var ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function(e) {
//     console.log(e.target.innerText);
// }


// var aElements = document.links;

// for(var i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function(e) {
        
//         if(!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }

//     }

// }









// DOM events

// 1. Input / select
// 2. Key up / down

// var inputValue;

// var inputElement = document.querySelector('input[type="text"]');
//var inputElement = document.querySelector('select');

// inputElement.onkeyup = function(e) {
//     console.log(e.which);

//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;

//     }
// }

// document.onkeydown = function(e) {
//     switch(e.which) {
//         case 27:
//             console.log('Exit');
//             break;

//     }
// }







// DOM events
//1. Attribute events
//2. Assign events using the element node

// var h1Element = document.querySelectorAll('h1');

// for(var i = 0; i < h1Element.length; ++i) {
//     h1Element[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }










// Class property

// add : thêm class
// contains : có tồn tại class đó không
// remove : xóa class
// toggle : nếu có class đó thì xóa, không có thì thêm

// var boxElement = document.querySelector('.box');

// boxElement.classList.add('red', 'blue');

//console.log(boxElement.classList.contains('red'));

//boxElement.classList.remove('red');

// setTimeout(() => {
//     boxElement.classList.toggle('red');
// }, 3000);

// var divElement = document.querySelectorAll('div');

// divElement.forEach(function(div) {
//     div.classList.add('box');
// });






// DOM style

// var boxElement = document.querySelector('.box');

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

// Object.assign(boxElement.style, {
//     width: '100px',
//     height: '200px',
//     backgroundColor: 'red'
// });

// console.log(boxElement.style.backgroundColor);









// Node properties

// var boxElement = document.querySelector('.box');

// console.log([boxElement]);








//InnerHTML, outerHTML

// var boxElement = document.querySelector('.box');

// boxElement.innerHTML = '<h1>New Heading</h1>';

// console.log(boxElement.innerHTML);







// Test

// innerText, textContent

//var headingElement = document.querySelector('h1');

//headingElement.innerText = 'New heading';

//console.log(headingElement.textContent);






// DOM attributes

// var headingElement = document.querySelector('h1');

// headingElement.setAttribute('data', 'test data');

// console.log(headingElement.getAttribute('class'));
// console.log(headingElement.getAttribute('data'));









// HTML DOM

// Có 3 thành phần

/**
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 */

// Javascript: Browser | Server (NodeJS)

// Browser: HTML -> DOM -> WEB API

// var boxNode = document.querySelector('.box-1');

// console.log(boxNode.querySelectorAll('p'));




// every

// Array.prototype.every2 = function(callback) {
//     var output = true;
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (!result) {
//                 output = false;
//                 break;
//             }
//         }
//     }

//     return output;
// };

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: true
//     }
// ];

// var result = courses.every2(function(course, index, array) {
//     return course.isFinish;
// });

// console.log(result);









// some: true/false

// Array.prototype.some2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if(callback(this[index], index, this)) {
//                 return true;
//             };
//         }
//     }
//     return false;
// };

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false
//     }
// ];

// var result = courses.some2(function(course, index, array) {
//     return course.isFinish;
// });

// console.log(result);









// Array.prototype.myFilter = function(cb) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = cb(this[index], index, this);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }



//Expected results:

// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//     return number % 2 === 0;
// })); //Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
// })); //Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, array) {
//     return array.length % 2 === 0;
// })); //Output: [1, 2, 3, 4]



//filter

// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }

//     return output;
// };

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];

// var filterCourses = courses.filter2(function(course, index, array) {
//     return course.coin > 700;
// });

// console.log(filterCourses);







//forEach

// Array.prototype.forEach2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
        
//     }
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// courses.forEach2(function(course, index, array) {
//    console.log(course, index, array);
// }) 








// var courses = [
//     'Javascript',
//     'PHP'
// ];

// courses.length = 10;

// for (var index in courses) {
//     console.log(courses[index]);
// }









// Array.prototype.myMap = function(cb) {
//     var output = [];
//     var arrayLength = this.length;
//     for (var i = 0; i < arrayLength; i++) {
//         output.push(cb(this[i], i));
//     }

//     return output;
// }

// // Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]


//Callback - Phần 2

// Array.prototype.map2 = function(callback) {
//     var arrayLength = this.length;

//     for (var i = 0; i < arrayLength; i++) {
//         callback(this[i], i);
//     }
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// courses.map2(function(course, index) {
//     console.log(index, course);
// });

// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls);







// function sumCb(a, b) {
//     return a + b;
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// console.log(caculate(1, 2, sumCb));

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3



//Callback

// function myFucntion(param) {
//     if (typeof param === 'function') {
//         param('Học lập trình');
//     }
    
// }

// function myCallBack(value) {
//     console.log('Value: ', value)
// }

// myFucntion(myCallBack);






//includes method

// var title = 'Responsive web design';

// console.log(title.includes('Responsive', 1));

// var courses = ['Javascript', 'PHP', 'Dart'];

// console.log(courses.includes('PHP', 1));








// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];

// function arrToObj(arr) {
//     return arr.reduce(function(a, b) {
//         a[b[0]] = b[1];
//         return a
//     }, {});
// }

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }








// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1
//         result = this[0]
//     }
//     for (let i = 0; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result
// }

// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce2((total, number, index, array) => {
//     return total + number
// }, 10)

// console.log(result)







// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];

// function calculateRating(watchList) {
//     var noLan = watchList.filter(function(list) {
//         return list.Director === "Christopher Nolan";
//     });

//     var imdb = noLan.reduce(function(total, film) {
//         return total + parseFloat(film.imdbRating);
//     }, 0);

//     return imdb / noLan.length;

// }


// console.log(calculateRating(watchList));


// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "Javascript"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             },
//             {
//                 id: 2,
//                 title: "Java"
//             }
//         ]
//     }
// ]

// var newCourses = topics.reduce(function (courses, topic) {
//     return courses.concat(topic.courses);
// }, []);

// //console.log(newCourses);

// var html = newCourses.map(function (course) {
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// });

// console.log(html.join(''));


// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, []);

// console.log(flatArray);





// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     }
// ];

// var numbers = [250, 0, 0, 400, 500];

// var totalCoin = numbers.reduce(function(total, number) {
//     return total + number;
// });

// console.log(totalCoin);


// var totalCoin = courses.reduce(function (total, course) {
//     return total + course.coin;
// }, 0);

// console.log(totalCoin);





// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(sport) {
//     var totalGold = sport.reduce((a, b) =>
//         a + b.gold, 0
//     );

//     return totalGold;
// }

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23




// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     }
// ];

// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++;

//     var total = accumulator + currentValue.coin

//     console.table({
//         'Lượt chạy: ': i,
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ': currentValue.coin,
//         'Tích trữ được: ': total,
//     });

//     return total;

// }


// var totalCoin = courses.reduce(coinHandler, 0);

// console.log(totalCoin);


// var totalCoin = 0;

// for (var course of courses) {
//     totalCoin += course.coin;
// }

// console.log(totalCoin);




// function courseHandler(course, index) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index
//     };
// }


// function courseHandler(course, index) {
//     return course.name;
// }


// function courseHandler(course, index) {
//     return `${course.name}`;
// }

// var newCourses = courses.map(courseHandler);

// console.log(newCourses);



// courses.forEach(function(course, index) {
//     console.log(index, course);
// });


// var isFree = courses.every(function(course, index) {
//     return course.coin === 0;
// });

// console.log(isFree);


// var isFree = courses.some(function(course, index) {
//     return course.coin === 0;
// });

// console.log(isFree);


// var isFree = courses.find(function(course, index) {
//     return course.name === 'Ruby';
// });

// console.log(isFree);


// var listCourses = courses.filter(function(course, index) {
//     return course.name === 'Ruby';
// });

// console.log(listCourses);



// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(array) {
//     var listSports = array.filter(function(sport) {
//         return sport.like > 5;
//     });

//     return listSports;
// }



// Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


