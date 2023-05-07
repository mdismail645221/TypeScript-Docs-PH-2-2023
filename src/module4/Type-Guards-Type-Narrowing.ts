// 4-4: Type Guards / Type Narrowing

// key of guard 
type KeyGurarType = string | number;
function add(param1: KeyGurarType, param2: KeyGurarType): KeyGurarType {
    if(typeof param1 == 'number'  && typeof param2 == 'number'){
        return param1 + param2;
    }else {
        return param1.toString()+ param2.toString()
    }
}

// console.log(add('1', '2'))
// console.log(add(1, 2))


//  

type NormarUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: 'admin';
}

function RoleAdmin(user: NormarUserType | AdminUserType): string{
    if('role' in user){
        return `I am a ${user.role}`
    }else{
        return  `I am a Not Admin User`
    }
}

const adminUser :AdminUserType = {name: 'ladsk', role: 'admin'};
const normalUser : NormarUserType  = {name: 'LASDKFJ'};

// console.log(RoleAdmin(adminUser))
// console.log(RoleAdmin(normalUser))


// instanceof  guard 

class Animal {
    name: string;
    spesises: string;
    sounds: string;
    constructor(name: string, spesises: string, sounds: string){
        this.name= name;
        this.spesises= spesises;
        this.sounds = sounds;
    }
    
    makeSounds(){
        console.log(`The ${this.spesises} is sound ${this.sounds}`)
    }
}


class CatObjectOriyent extends Animal  {
    constructor(name: string, sounds: string, spesises: string){
        super(name,sounds, spesises)
    }
    MakeMeawSounds(){
        console.log(`I'm peoepe luach sounds is Meaw Meaw`)
    }
}

class DogObjectOriyent extends Animal {
    constructor(name: string, sounds: string, spesises: string){
        super(name, sounds, spesises)
    }
    
    dogMakeSounds( ){
        console.log(`this dos is sound Gew gew`)
    }
}



function isDog(animal: Animal): animal is DogObjectOriyent{
    return animal instanceof DogObjectOriyent
}

function isCat(animal: Animal): animal is CatObjectOriyent {
    return animal instanceof CatObjectOriyent
}

function getAnimal(animal: Animal){
  if(isDog(animal)){
    animal.dogMakeSounds()
  }
  else if (isCat(animal)){
    animal.MakeMeawSounds()
  }
  else{
    animal.makeSounds()
  }
}
 
const animal1 = new DogObjectOriyent("RAJU", 'RED DOG', "GEW GEW");
const animal2 = new CatObjectOriyent('TASNIM', 'BLACK CAT', 'MEW MEW');


console.log(getAnimal(animal1))


