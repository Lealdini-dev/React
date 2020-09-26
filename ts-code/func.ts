function add(n1: number, n2: number): number {
    return n1 + n2
}

const result = add(10, 10)

function show():void {
    console.log('estou dando show')
}
// show()

let myFunc : (a:number, b:number) => number
myFunc = add

console.log(myFunc(10,10))


function addAndShow (n1: number, n2: number, callback: (res:number) => void) {
    const result = n1 + n2
    callback(result)
}

function funcLegal (res:number): void {
    console.log('callback ' + res)
}

addAndShow(5, 5, funcLegal)

function throwError(m: string): never {
    throw new Error("Erro!!!");   
}