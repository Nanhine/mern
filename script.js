// console.log("hello world");

// var a=10;
// console.log(a)
// let b=20;
// console.log(b)
// var str="nandu";
// var bool=true;
// var un;
// var nu=null;
// var big=12343456455645n;
// var symbol=Symbol("li");
// console.log(typeof a)
// console.log(typeof str)
// console.log(typeof bool)
// console.log(typeof un)
// console.log(typeof big)
// console.log(typeof symbol)


//arithmetic operator
// var a=30
// var b="20"//if we give as string also it will take as number
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a/b);

// //relational operator(>,<,<=,>=,==,!=,===,!==)
// var a=10
// var b=20
// console.log(a>b);//false
// console.log(a<b);//true
// console.log(a>=b);//false
// console.log(a<=b);//true
// console.log(a==b);//false
// console.log(a!=b);//trye
// //== only check the values but ===check the values and data type
// console.log(a===b);//false
// console.log(a!==b);//true
// var d="10"
// console.log(a===d);//false
// console.log(a!==d);//true
// var e=20
// console.log(e===b);//true
// //logical operator(&&(and),||(or),|(not))
// a=true
// b=false;
// console.log(a&&b);
// console.log(a||b);
// var arr=[10,20,30,40];
// console.log(arr);
// console.log(typeof arr);

// var obj ={
//     name:"nan",
//     age:21
// }
// console.log(obj)
// console.log(typeof obj);

//loooping statements
// //for loop
// for(let i=0;i<=9;i++){
//     console.log(i);
// }

// //while loop
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// //do while
// i=1;
// do{
//     console.log('do...while');
// }
// while(i==0);

//conditional statements
//if
// for(let i=0;i<=10;i++){
//     if(i%2==0) console.log(i);
// }
//if else
// i=5;
// if(i%20===0)console.log("even");
// else console.log("odd");

// let mark=70;
// if(mark>=90) console.log("o grade");
// else if(mark>80) console.log("A grade");
// else  if (mark>=70) console.log("b grade");
// else console.log("fail");

// let day=5;
// switch(day){
//     case 1:
//         {
//         console.log("sun");
//         break;
//         }
//     case 2:
//         {
//             console.log("mon");
//             break;
            
//         }   
//     case 3:
//         {
//             console.log("tue");
//             break;
//         }
//     case 4:
//         {
//             console.log("wed");
//             break;
//         }
//     case 5:
//         {
//             console.log("thur");
//             break;
//         }
//     case 6:
//         {
//             console.log("fri");
//             break;
//         }
//     case 7:
//         {
//             console.log("sat");
//             break;
//         }
    //  deault:{ console.log("error")
    //  }
//     // }
// i=8;
// let result=(i%2==0)?"even":"odd"
// console.log(result);


// mark=70
// let res=(mark>90)?"grade a":(mark>80)?"grade b":(mark>70)?"grade c":(mark>60)?"grade d":(mark>50)?"grade e":"grade f";
// console.log(res);

//functions
// function add(){
//     console.log(10+20);
// }
// add()

// //arrow function
// var add = ()=>{
//     console.log(10+20);
// }
// add()
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20)

//spread operator
// var arr1=[10,20,30];
// var arr2=[...arr1,40,50,60];
// //spread operator is the three dots(...) ,it will copy arr1 in arr2
// console.log(arr2);
//destructing operator
// var[m1,m2,m3,m4,m5]=[87,84,86,96,97]
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

var {name,age,dept,marks}={
    name:"nandy",
    age:21,
    dept:["csd","ece"],
    marks:{
        mern:90,
        java:98,
        c:65
    }

}
console.log(name);
console.log(age);
console.log(dept);
console.log(marks
    
);