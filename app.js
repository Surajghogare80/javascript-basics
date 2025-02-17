// let size = "L";

// if (size === "XL"){
//     console.log("price is 250/-")
// }
// else if(size === "L"){
//     console.log("Price is 200/-")
// }else if(size === "M"){
//     console.log("Price is 150/-")
// }else if(size === "S"){
//     console.log("Price is 100/-")
// }


// let day = 5;

// switch (day) {
//     case 1:
//         console.log("sunday")
//         break;

//     case 2:
//         console.log("monday")
//         break;

//     case 3:
//         console.log("tuesday")
//         break;
   
//     case 4:
//         console.log("wednesday")
//         break;

//     case 5:
//         console.log("thursday")
//         break;

//     case 6:
//         console.log("friday")
//         break;

//     case 7:
//         console.log("saturday")
//         break;
  
// }


// let firstName = prompt("Enter your first name")
// console.log(firstName)

// let lastName = prompt("Enter your last name")
// console.log(lastName)

// console.log(firstName + lastName)

// let num = 450;

// if (num % 10 == 0){
//     console.log("good")
// }else{
//     console.log("bad")
// }

// let firstname = prompt("Enter first name")
// let age = prompt("Enter your age")

// alert(`${firstname} is ${age} years old`)

// let str = 'Abhay';

// if ((str[0] == 'a' || str[0] == 'A') && str.length>5){
//     console.log("golden string")
// }else{
//     console.log("it is not golden string")
// }

// let mesg = "  hello  ";
// let newmesg = mesg.trim();
// mix = newmesg.toUpperCase();

// let str = "ilovecoding";

// console.log(str.slice(1,5));

// let mesg = "help!";
// let a = mesg.trim().toUpperCase();
// console.log(a);

// let clgname = "apnacollege";
// let slic = clgname.slice(4);

// let ans = slic.replace("l" , "t");

// console.log(ans)

// let names = ['suraj' , 'shradha' ,'om' ,'shvd']

// names[3]='shiv'
// names[10]='omii'


// let start = ['january' , 'july' , 'march' , 'august'];

// let end = start.shift();

// let start = ['jan','july','march','august']

//  start.splice(0,1,'july');

//  start.splice(2,1,'march');
//  start.splice(1,1,'june');


//  let lang = ['c++','java','js','c#','python','sql']
//  let lan = lang.reverse()
//  let index = lan.indexOf('js')

// const arr = [["X"," ","O"],[" ","X"," "],["O"," ","X"]]

// let arr = [1,2,3,4,5]

// arr.splice(3)

// let str = "hello"
// if(str.length == 0){
//     console.log("str is emtpy")
// }else{
//     console.log("str is not empty")
// }

// let str = 'suRaj'

// if (str[2]==str[2].toLowerCase){
//     console.log('yes')
// }else{console.log('no')}

// for (let i=5 ; i<=50 ; i++){
//     if(i%5 ==0){
//         console.log(i)
//     }else{
//         console.log()
//     }
// }

// let favmovie = "sambha"

// let guess = prompt("guess the movie name")

// while((guess != favmovie) && (guess != "quite")){
   
//     guess = prompt("wrong guess the movie name")
// }

// if(guess == favmovie){
//     console.log("congrats!!")
// }

// let i=1

// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i)
//     i++
// }

// let heroes = [['abhi','yash','mukund'],['yami','malinga','you']]

// for (let i=0 ; i<heroes.length ; i++){
//     console.log(i,heroes[i],heroes[i].length)
//     for (let j=0 ; j<heroes[i] ; j++){
//         console.log(`j=${j} ${heroes[i]}`)
//     }
// }

// let arr = [['suraj',20],['shradha',20]]

// for (let i=0 ;i<arr.length;i++){
//     console.log(i,arr[i])
//     for (let j=0;j<arr[i];j++){
//         console.log(arr[i][j])
//     }
// }

// let fruits = ['banana','apple','mango','chere']

// for(fruit of fruits){
//     console.log(fruit)
// }
let todo = []

let req = prompt("enter your request")

while(true){
    if(req == "quit"){
        console.log("quitting app")
        break ;
    }
    if(req == "list"){
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
    }
    else if(req ==  "add"){
        let task = prompt("add your things")
        todo.push(task) 
        console.log("task added")
    }
    else if(req == 'delete'){
        let idx = prompt("enter index to delete task")
        todo.splice(idx, 1);
        console.log("task deleted")
    }
    req = prompt("enter your request") // Add this line to keep asking for input after each loop
}
