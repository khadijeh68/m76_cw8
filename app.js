
// please create function with some setter and getter. (time:30min)
// we need to store name , family , age, birthday , phone Number ,Address
// this function have this properties.
// name
// family
// age
// birthday = {day , mounth , year}
// phoneNumber
// country
// state
// city
// street
// No
// unit
// we wants to set and get with this Accessor properties
// user.fullname = "Ali Ziaei"
// user.birthday = new Date(2000,10,12)
// user.phoneNumber = 09010001111
// user.address = "Iran,Isfahan,Isfahan,ShahidRajaee,25,6"
// pay attention: you should set this properties and get that just with Accessor properties
// function User(name,family,age,birthday,phoneNumber,country, state, city, street, No, unit){
    //     this.name = name;
    //     this.family = family;
    //     this.age = age;
    //     this.birthday = birthday;
    //     this.phoneNumber = phoneNumber;
    //     this.country = country;
    //     this.state = state;
    //     this.city = city;
    //     this.street = street;
    //     this.No = No;
    //     this.unit = unit;
    
        
    //     Object.defineProperty(this, 'fullname', {
    //         get: function(){
    //             return `${this.name} ${this.family}`;
    //         },
    //         set: function(value) {
    //             [this.name, this.family] = value.split(" ");
    //         }
    //     });
    
    //     Object.defineProperty(this, 'phoneNumberAcc', {
    //         get: function() {
    //             return `${this.phoneNumber} `;
    //         },
    //         set: function(value) {
    //             this.phoneNumber = value;
    //         }
    //     });
    
    //     Object.defineProperty(this, 'address', {
    //         get() {
    //             return `${this.country},${this.state},${this.city},${this.street},${this.No},${this.unit}`;
    //         },
    //         set(value) {
    //             [this.country, this.state, this.city, this.street, this.No, this.unit] = value.split(",");
    //         }
    //     });
    
    // }
    
    // let user1 = new User("Ali","Zi", 0912, 12,'13');
    // user1.fullname = "Ali Ziaei";
    // console.log(user1.name);
    // console.log(user1.family);
    
    // user1.phoneNumberAcc = 09010001111;
    // console.log(user1.phoneNumberAcc);
    
    
    // user1.address = "Iran,Isfahan,Isfahan,ShahidRajaee,25,6";
    // console.log(user1.country);
    
    
    // let d = new Date(2000,10,12);
    // user1.birthday = d;
    // // console.log(user1.birthday);
    

//Ex.2
// We have this object with this methods.We wants push something to objects Array. (time: 20min)
// But there is a problem.When we execute function this array is not empty at first.. why?!
// We wants with calling function just add item to specific object that we call that's methods.
// This code is here. Why this problem occurred?! How we can Edit and Solve Problem?
// let hamester ={
//     stomach:[],
//     eat(food){
//     this.stomach.push(food);
//     }
// };
//     let speedy ={
//     stomach:[],
//     __proto__:hamester
// };
//     let lazy ={
//     stomach:[],
//     __proto__:hamester
// };
//     speedy.eat("apple"); //apple
//     console.log(speedy.stomach);
//     lazy.eat("banana");
//     console.log(lazy.stomach);

//Ex.3
// please create An object with Animal name. this object should have some property such as getAge , getHeight , getWeight, Then create Another Object with this properties age,height,weight,
// now with set __proto__ try to call getAge , getHeight , getWeight with new object for example I created this object:
// rabbite = {
// weight:"5Kg",
// height:"30cm",
// age:2
// }
// We wants call rabbite.getAge How we can do that
// let Animal = {
//     getAge() {
//         return this.age;
//     },
//     getHeight() {
//         return this.height;
//     },
//     getWeight() {
//         return this.weight;
//     }
// }

// let rabbite = {
//     weight:"5Kg",
//     height:"30cm",
//     age:2,
//     __proto__: Animal
// }
// console.log(rabbite.getAge());
// console.log(rabbite.getHeight());
// console.log(rabbite.getWeight());


//Ex.4
// now we wants to use localStorage to Save our DataBase
// we wants to store and save information of student.
// That student have this information that we should save them:
// name
// family
// age
// birthday
// father's name
// avg
// grade
// please create some function to add , find , remove and get information about students
// add(id,name,family,age,birthday,father'sName,avg,grade)
// find(name,family)
// remove(id)
// getInfo(id)
// payAttention: you should use localStorage to save and store this data and There should only be
//  one key and value named database in localStorage

let arr = [];
function add(id,name,family,age,birthday,fathersName,avg,grade){
    let data = {
    id:id,
    name:name,
    family:family,
    age:age,
    birthday:birthday,
    fathersName:fathersName,
    avg:avg,
    grade:grade,
    };
    arr.push(data);
    localStorage.setItem('database', JSON.stringify(arr));
    }
  
    add('1','sara','saraF',21,'12/12/1999','Jack', 18, 'A');
    add('2','sahar','saharF',22,'10/02/2000','Jack', 10, 'B');
    add('3','maryam','maryamF',25,'01/05/1998','Jack', 20, 'A');
    console.log(localStorage.getItem('database'));
    
function find(name,family){
    let data = JSON.parse(localStorage.getItem('database'));
    // let isFind = false;
    // for (let i = 0 ; i< data.length ; i++){
    //     if (data[i].name != name && data[i].family != family){
    //         continue;
    //     }else {
    //         console.log(data[i]);
    //         isFind == true;
    //     }
    // }
    // if (isFind == false) {
    //     console.log('not found');
    // }
    console.log(data);
    let res = data.find(item => item.name == name && item.family == family)
    console.log(res);
}
find('maryam','maryamF');
//find('ali','hamidi')

function remove(id){
    let data = JSON.parse(localStorage.getItem("database"));
    let res2 = data.filter((item) => item.id != id);
    localStorage.setItem("database", JSON.stringify(res2));
    }
remove("2");
console.log(localStorage.getItem("database"));

// function remove(id){
//     let data = JSON.parse(localStorage.getItem('database'));
//     let index = data.findIndex(item => item.id === id);
//     data.splice(index,1);
//     console.log(data);
//     }

//Ex.5
// what is the different between localStorage and sessionStorage?
// please open a site and Try to save name and family on sectionStorage on Devtools
// then copy the Url of that site and open another Tab of browser.
// Try to get name and family that save before.
// Why this problem is occurred?!

//Ex.6
// at First please get all property of document.cookie and split them and log them
// add your name and family and your age to document.cookie
// create function that get name and value then add them to cookie
// now we want to add expire date to this cookie . please create function that get a number(n)
//  and then Set the expiration day n days after today.