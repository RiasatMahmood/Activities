// //multi array example

// let myFruityArray = [
//     ["apple", "banana", "pear"], ["grape", "strawberry", "kiwi"],
//     ["orange", "blueberry", "raspberry"] ];
    
//     for(let i = 0; i < myFruityArray.length; i++) { 
//         for(let j = 0; j < myFruityArray[i].length; j++) {
//     console.log(myFruityArray[i][j]); }
//     }


//activity 1 + 2
// let firstName = "Riasat"
// let age = 31
// let favColour = "blue"

// firstName = "Ray"
// age=21
// favColour="green"
// console.log("my name is" + firstName, ", i am" + age, "and my fav colour is" + favColour)
// //this is to change the name

// console.log(`my name is ${firstName}, i am ${age} years old and my fav colour is ${favColour}`)

//easier to use template literals



//activity 3
// let breakfast = "toast"
// let lunch = "eggs"
// let dinner = "sweets"

// breakfast = "cereal"
// lunch= "burger"
// dinner= "pizza"

// console.log(`i had ${breakfast}, ${lunch} for lunch and im going to have ${dinner} for dinner `)


//activity 4 dys till birthday

// const oneDay = (1000*60*60*24)
// let currentTime = new Date();
// const myBirthday = new Date(2023,05,17)
// const difference= (currentTime-myBirthday)
// let daysLeft = (Math.round(difference/86400000))

// // console.log(oneDay)
// // console.log(currentTime)
// // console.log(myBirthday)
// console.log(`there are ${daysLeft} left for my next birthday`)

//how many days from DOB
//stretch act^^

// const oneDay = (1000*60*60*24)
// let currentTime = new Date()
// const birthdate = new Date(1991,05,17)
// const difference =(birthdate-currentTime)

// console.log(oneDay)
// console.log(currentTime)
// console.log(birthdate)
// console.log(Math.round(difference/86400000))


//else if activity 1 - music check

// let music= "classical"
// if (music=="chilled"){
//     console.log("oh how chilled")
// }

// else if (music=="classical"){
//     console.log("oh how relaxing")
// }

// else if(music=="disco"){
//     console.log("where are my dancing shoes")
// }

// else{console.log("turn it off")
// }

//activity 2 - age check


// let age = (12)
// if (age>17){
//     console.log("yes i can server you")
// }

// else{
//     console.log("no, sorry i cant help you")
// }




//activity 3 age and country check

// let country=("UK")
// let age = (18)
// if (age>17 && country=="UK") {
//     console.log("yes i can server you")
// }

// else{
//     console.log("no, sorry i cant help you")
// }


// can change the if stmt (country) to have on = so it would match rather than == strict - Nope that doesnt work
//maybe try changing it all to lower case?


// //activity 4 using the ( || or )operator
// let alarm="monday"

// if (alarm=="saturday"||alarm =="sunday"){
//     console.log("yay its the weekend")}

// else {console.log("oh no, work again")}




//// activity 4 - pizza topping

// let topping = "ham"

// switch(topping) {
//     case "chicken":
//     case "sweetcorn":
//         console.log(`${topping}, this is a important ingredient for my pizza`)
//         break
    
//         case "pineapple":
//             case "beef":
//                 console.log(`i dont mind having ${topping} on my pizza`)
//                 break
        
//         case "ham":
//             case"tomatoes":
//             console.log (`${topping} should not be on my pizza`)
// }



///activity 5 - how many letters in a password 

// let password = (12)
// if (password< 8){
//     console.log("password too short")
// }

// else{
//     console.log("permission granted")
// }

////possible change with a for loop - research a way with a string


// activity 6 palindrome  

// let num=1001
// if (1001 === 1001){
//   console.log("true")
// }
// else { console.log( "not a match")}


// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome'}

//     // take input
// const string =('abababa: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);



// const str = '10101'

// const isPalidrome = (inStr) =>{
//     inStr=inStr.replace(/\W/g,'')
//     inStr=inStr.toLowerCase()

//     return inStr === inStr.split('').reverse().join('')
// }
//     console.log(isPalidrome(str))


//    look into regexp (regular expressions)


//activity 7 - fizzbuzz

// let num=30
// if (num%3==0 && num%5==0){

//     console.log("fizzbuzz")
// }
// else if (num%5 == 0){
//     console.log("buzz")
// }

// else if(num%3 == 0){
//     console.log("fizz")
// }

// else {console.log(num)}

//multiple value stmt goes first



//activity 8 -

// const time= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
// //let time=
// // let placeOfWork=CodeNation
// //let townOfHome=Blackburn
// //seconds in hour 3600
// let currentTime=new Date()
// const oneDay = (1000*60*60*24)
// const oneHour = (oneDay/24) 

// console.log(currentTime)
// console.log(oneDay)
// console.log(oneHour)

// if (time> 9 && time <17) {
//     console.log("at work")
// }

// let time = 9
// const placeOfWork ="CN"
// const townOfHome = "manchester"
//     if (time >=8 && time <9) {
//         console.log("im commuting")
//     }
//     else if (time >=9 && time <=17){
//         console.log("im at work")
//     }

//     else { console.log("im at home")}


///activity 9


// let randomString = "fsdjlghsdflhgrhtoeiorkjgawlffsdovuutruribvz";
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// let arr = randomString.split("").reverse(); //split string in array and reverse
// let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e))

// if (indexOfLastVowelInReverse != -1) { 
//     let index = randomString.length - 1 - indexOfLastVowelInReverse
//     console.log(`Last vowel found at index ${index}: ${randomString[index]}`);
// }




//*********

// let favHolidayDestinations=[
//     "Venice, Italy","paris, France",
//     "Barcelona, Spain" , "japan, china" , "india, pakistan"

// ]

// for (let i = 1; i< favHolidayDestinations.length; i++) {
//     console.log(favHolidayDestinations[i])
//  }

// for(let i = 0; i <= 10; i++) {
//     console.log(i )
// }

//************

// ///^^^ not working - for loop - using arrar - split method-push to array


//activity 10 - 

// let word = "sdfdfdgfdf";
// let firstCharacter = word.charAt(0);
// let lastCharacter = word.slice(-1);

// if (firstCharacter === lastCharacter) {
//     console.log("true")
// } else {
//     console.log("false")



//activity 11 - 

// let num1=3
// let num2=3
// let add = num1*num2

// if (add %2 ==0){
//     console.log("even")
// }
// else console.log(add)



// Arrays - activity 1 - 2 and 3


// let faveFilms = [
//     "movie1", "movie2", "movie3"
// ]
// faveFilms.pop() - removes the last one

// faveFilms.push("movie7")
// faveFilms[1] = "movie5"
// console.log(faveFilms)
// console.log(faveFilms.length)


//.shift .map .slice .splice .unshift
//reearch ^^^ methods



// let favSong = [ 
//     "eye of the tiger" , "aint no sunshine" , "unforgettable"
// ]

// favSong[3]="asd"
// favSong[4]="asdfg"
// //console.log(favSong)ong1))
// console.log(favSong.pop())
// console.log(favSong)





//////loops activity 1



// let favHolidayDestinations=[
//     "Venice, Italy","paris, France",
//     "Barcelona, Spain" , "japan, china" , "india, pakistan"

// ]

// for (let i = 1; i< favHolidayDestinations.length; i++) {
//     console.log(favHolidayDestinations[i])
//  }

// for(let i = 0; i <= 10; i++) {
//     console.log(i )
// }

////activity 2

// let evenNumber=[]

// for(let n=20; n > 0; n--) {
//   if (n % 2 == 0) {
//     (evenNumber.push(n))
// }
// }
// console.log(`the even numbers between 0 and 20 are; ${evenNumber}`)

////activity 3

// let oddNumber=[]

// for(let n=0; n < 30; n++) {
//   if (n % 2 !=0) {
//     (oddNumber.push(n))

//   }

// }

// console.log(`${oddNumber}`)



// let age = ("31")
// if (age>"21"){
//     console.log("yes i can server you")
// }

// else{
//     console.log("no, sorry i cant help you")
// }



// let age = 17

// while(age <18){
//     console.log("your a child")
// }

// console.log("you an adult")


// activity 4

//  let numberGen = Math.ceil(Math.random())
//     for (let i=0; i <6; i++){
//         numberGen = Math.ceil(Math.random()*6)
//         console.log(numberGen)
//     }



// let favFilms = [
//     "movie1" , "movie2" , "movie3", "movie4"
// ]

// console.log(favFilms)
// let m = "movie3"
// let i = 0
// for(i=0; i<favFilms; i++)
    

//     {console.log(favFilms.length[i])}
//     if (m ===favFilms[1]){
//         console.log("yay ")
//     }

//     else {console.log("oh no not this")}



// activity 6

// let randomNumber = Math.ceil(Math.random() * 30);

// for (let i = 0; i < 6; i++) { 
//     randomNumber = Math.ceil(Math.random() * 30);
//     if (randomNumber % 7 == 0) {
//         console.log(randomNumber, "is divisible by 7") 
//     } else {
//         console.log(randomNumber, "is not divisble by 7")
//     }
// }


// activity 7


// let  bobsFollowers = ["a","w","e","r"]
// let hannahsFollowers=["a","s","d","f"]

//     for  (i=0; i<bobsFollowers.length; i++) 
//         for (i=0; i<hannahsFollowers.length;i++)
//         console.log(bobsFollowers+hannahsFollowers)

//////using a mehtod - eg .map .slice???? 
    ///////research nested loops
        



// let myFruityArray = [
//     ["apple", "banana", "pear"], ["grape", "strawberry", "kiwi"],
//     ["orange", "blueberry", "raspberry"] ];
    
//     for(let i = 0; i < myFruityArray.length; i++) { 
//         for(let j = 0; j < myFruityArray[i].length; j++) {
//     console.log(myFruityArray[i][j]); }
//     }


////functions activity 

// const sayhello = () =>{
//     console.log("hi how are you")

// }
// sayhello()

// const holidayDestination = (country,month) => {
//     console.log(`yay! Im going on holiday to ${country} in ${month}`)
// }
//     holidayDestination("spain","June")


// const hello =(myName, drink) => {
//     console.log(`hi my name is ${myName} and offers ${drink}`)
// }

// hello("Riasat","water")

// const multiply= (num1, num2) => {
//     return num1* num2
// }

// console.log(multiply (2,5))
