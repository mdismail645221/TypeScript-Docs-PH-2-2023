const course:string = 'next level web develope';
// console.log(course)


// type assertions 

function kgToGram (param: string | number): string | number | undefined | null{
    if(typeof(param === 'string')){
        const value = parseFloat((<string>param)) * 1000;
        return value
    }
    if(typeof(param === 'number')){
        const value  = <number>param  * 1000;
        return `type is number and value ${value}`
    }
}

const result = kgToGram(3);
// console.log(result)

type CustomErrType = {
    message: string;
};



try {
    
} catch (error) {
    console.log((error as CustomErrType).message)
}



// type vs interface 
type User1 = {
    name: string;
    age: number;
} 

interface IUser1 {
    name: string;
    age: number;
}

interface IUser2  extends IUser1  {
    role: string;
}

const about:IUser2 = {
    name: "al;sdlfasdkf",
    age: 6546,
    role: "aldsjlads"
}

// signature  number type 
type addNumberType = {(num1:number, num2: number): number}
const addNumber:addNumberType = (num1, num2) => num1 + num2;




// index signature 
// আমরা এখন নাম্বার অ্যারে interface মাধ্যমে তৈরি কররো। 
// এবং type alias মাধ্যমে দেখবো। 

// type numberArrayType = number[]
interface numberArrayType {
    [index:number] : string
}
const numerArray:numberArrayType = ["1", "2"];



// ===================>  3-3: Introduction of Generic in Type <=========================//

type GenericArray<T> = Array<T>

const rollNumberStringArray:GenericArray<string>= ['2', '63', '6'];
const rollNumbersArray:GenericArray<number>= [1, 3, 6];
const rollNumberBoolean:Array<boolean> = [true, false];

// array of object type
type  GenericType = {
    name: string;
    age: number;
}
const  arrayOfObj:GenericArray<GenericType> = [
    {
        name: 'abc',
        age: 23,
    },
    {
        name: 'efg',
        age: 21,
    }
]

// generic tuple 
type GenericTuple <X, Y> = [X, Y];

const  relationsTuple:GenericTuple<string, string> = ["a", "b"];

// আমরা সব সময় object ক্ষেত্রে  type alias  ব্যবহার করবো । Right...!
interface IRelationsObj {name:string, age:number}
const relationWithSelary: GenericTuple<IRelationsObj, number> = [
    {
        name: 'abc',
        age: 654
    },
    65
]



// 3-4: Generic in Interface

interface CrushInterface<T, U= null>{
    name: string;
    husband: T;
    wife: U;
}

const Crush:CrushInterface<boolean, { name: string; age: number; }> = {
    name: "abc",
    husband: true,
    wife: {
        name: "Tasnim Hossain",
        age: 21,
    }
}


// 3-5: Generic in Function

// Arrow Function 

// default 
// const createArray = (param: string): string[] => {
//     return [param]
// }

const createArray1 = <X, Y>(param1: X,  param2: Y): [X, Y] => {
    return [param1, param2]
}

const result1 = createArray1 <string, boolean>("Bangladesh", false);
const result2 = createArray1<boolean, {name: string, age:number}>(true, {name:"abc", age: 323});
const result3 = createArray1<{name:string, age: number}, Array<string>>({name: "abc", age: 21}, ["adlsfkasdjfl"])


// spread Operator 

// const CrushFuntion =  <T>(param: T) => {
//     const  myChrushName = "tasnim";
//     const  newData = {...param, myChrushName}
//     return newData
// }

// const myInfo = {
//     name:"Ismail",
//     age: 221,
//     selary: 12000
// }

// const result5 = CrushFuntion(myInfo)
// console.log(result5)



// ===============>  3-6: Constraints in Generics <=======================//

interface myInfoInterface { 
    name: string;
    age: number,
    selary: number,
    other: number
}
const CrushFuntion =  <T extends myInfoInterface>(param: T) => {
    const  myChrushName = "tasnim";
    const  newData = {...param, myChrushName}
    return newData
}


const myInfo = {
    name:"Ismail",
    age: 221,
    selary: 12000,
    other: 654654
}

const result5 = CrushFuntion(myInfo)
// console.log(result5)



//=================>  3-7: Generic Constraints Using Key Of Part 1 <========================//

type personType = {
    name: string,
    age: number,
    selary: number
}

// এটা আমরা মেনুয়ালি করেছি..তাছাড়া একটা শটকার্ট পদ্ধতি আছে..
type  newType= "name" | "age" | "selary" ;  // Menually Koreci 

// আমরা চাইলে একটা অবজেক্ট দিয়ে, তার ভ্যালু দিয়ে একটা ইউনিউন টাইপ তৈরি করতে পারি। 
type  persionInfo = keyof  personType;


const a:newType = "age";
const b:persionInfo = "age";


interface PropertyInfo { 
    name: string;
    age: number,
    selary: number,
}

// ********* very interested topic ========//
function getProperty <X extends PropertyInfo, Y extends keyof X>(obj:X, key: Y) {
    return obj[key]
}
const property = getProperty({name: "a", age: 22, selary: 522}, "age")




// =====================>   3-8: Asynchronous TypeScript  <=======================//


const makePromise = ():Promise<string> => {
    const data:string = 'abc'
    return new Promise((resolve, reject)=> {
        if(data){
            resolve(data)
        }else{
            reject("failed fatching data")
        }
    })
}

const getPromiseData = async():Promise<string> => {
    const result6 = await makePromise()
    return result6
}

function makePromise2 ():Promise<boolean> {
    const data = true;
    return new Promise((resolve, rejected)=>{
        if(data){
            resolve(data)
        }else{
            rejected("failed facthing data")
        }
    } )
}
const result6 = async():Promise<boolean> => {
    const result7 = await makePromise2()
    return result7
}

interface getTodoInterface {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
const getTodo = async():Promise<getTodoInterface> => {
    const responsed = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await responsed.json();
    return data
}

const result8 = async():Promise<void> => {
    const result = await getTodo();
    console.log(result)
}
result8()


// =====================> 3-9: Conditional Types <========================//

// একটা  type আরেকটা type এর উপর নির্ভর করে দেওয়াকে conditional types বলে।
// যেমন

// type a1 = number;
// type a2 = a1 extends string ? string : null;

// এখানে দেখা গেলো যে  a1 এর উপর a2 নির্ভরশীল । 


// ==========>  nested conditional types 
type a1 = number;
type a3 = undefined;
type a4 = null;

type a2 = a1 extends string ? string : a3 extends null ? undefined : a4 extends undefined ? null : never;


type Sheik  = {
    wife1: string, 
    wife2: string,
}

type CheakProperty<T> = T extends Sheik ? true : false; 
type getProperty = CheakProperty<Sheik>

// ডায়নামিক ভাবে আমরা একটা string literale type remove করতে পারতেছি.....
type  Bandobi = 'Raj' | 'Ramisha' | 'Tasnim';
type RomovalBandobi<T, K> = T extends K ? never : T;
type CurrentBandobi = RomovalBandobi<Bandobi, 'Tasnim'>


//=====================>  3-10: Mapped Types <=======================//
const numberOfArray = [1, 2, 3, 4];
const arrayOfString = numberOfArray.map((number)=> number.toString());
console.log(arrayOfString)


type AreaNumber = {
    width:  number;
    height: number;
}

// এখন আমরা লুক আপ টাইপ দেখবো...
type A = AreaNumber['height'];


type Volume = {
    width: number;
    height: number;
    depTo: number;
}

// type Area = {
//     [Key in "Raj" | "Tasnim"]: boolean
// }

// *****
// type Area = {
//     [Key in keyof Volume] : string;
// }

// type Area = {
//     [Key in keyof Volume] : Volume[Key];
// }

// type Area<T> = {
//     [Key in keyof T ]: T[Key]
// }


type Area<T> = {
  readonly  [key in keyof T]: T[key]
}
const abc:Area<{name: string, age: number}> = {name: "abc", age:  21};

// don't update property value
// abc.name='Lkdj" ---> wrong 












