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

console.log(add('1', '2'))
console.log(add(1, 2))


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

console.log(RoleAdmin(adminUser))
console.log(RoleAdmin(normalUser))

