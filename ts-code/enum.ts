enum Role { ADMIN = 10, USER = 20, MANAGER = 30}

const person = {
    name: 'Miguel',
    role: Role.ADMIN,
}

if(person.role === Role.ADMIN) {
    console.log(person)
} 