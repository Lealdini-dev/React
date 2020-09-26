let sports: string[]
sports = ['Futebol', 'Skate']

const colors = ['Azul', 'Amarelo', 'Verde']

for (const color of colors) {
    console.log(color.toUpperCase())
    // color.map
}

let userRole: [number, string]

userRole = [1, 'ADM']
userRole[1] = 'USER'
console.log(userRole[1])