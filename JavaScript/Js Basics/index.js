// console.log('Habibi Come to Bhiwandi');

// // variable declaration
// let a = 5;
// var b = 7;
// const c = 4;

// console.log(a);
// console.log(b);
// console.log("Value of C is " , c);

// let arr = [1,2,3]

// for(let i=0;i<3;i++){
//     console.log(arr[i]);
// }

// Objects in Js

// let obj = {
//     // Properties
//     len : 5,
//     bre : 7,

//     //Mehtod - Behvaiour
//     draw :  function () {
//          console.log('Draw');
//     } 
// };

// // Factory function
// function createRecangle (len, bre) {
//     let rect = {
//         length : len,
//         breadth : bre,

//         draw : function() {
//             console.log('draw');
//         }
//     }

//     return rect;
// }

// let a = createRecangle(5,7);
// console.log(a.length);
// a.color = 'red';
// delete a.color;

// Constuctor function

// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function () {
//         console.log('draw')
//     } 
// }

// let b = new Rectangle(10,20);


// Custructo of a constructor or object

//  let Rectangle = new Function (len,bre,
//     `this.length = len;
//     this.breadth = bre;
//     this.draw = function () {
//         console.log('draw')
//     } `)

// let arr = [10,45,30,46,5,14,67,46];
// console.log(arr);

// arr.sort();
// console.log(arr); // This sort function sort as a string 

// // so we have to sort by callback function 
// let sortedArray = arr.sort((a,b) => a-b);
// console.log(sortedArray);   

// let arr = [1,2,4,5,6];
// let sum = arr.reduce((totalSum,val) => totalSum + val,0);
// console.log(sum);

// let arr = [1,2,3,4,5,6];
// let chain = arr.filter(val => val > 2).map(num => num*num).filter(val => val&1);
// console.log(chain);

// create new element
// let newElement = document.createElement('h1');
// let content = document.createTextNode("Hi I'm Good!!");
// newElement.appendChild(content);
// newElement.textContent = "HI Im Gooooooooooooood!!";
// document.body.appendChild(newElement);
// console.log(newElement);

// // newElement.setAttribute("style" , "color : red; background-color : blue");
// newElement.style.cssText= "color : red; background-color : blue";


// fucntion assignment and storing result of function

// function add() {
//     console.log("hao");
//     return 5+5;
// }

// let  a = function add2(){
//     console.log("aaa");
// };
// console.log(a);
// let a = add();
// console.log(a)
// a();


function init(){
    let name = "Mozzila";

    function display(){
        console.log(name);
    }

    return display();
}

let a = init();
console.log(a);
a();