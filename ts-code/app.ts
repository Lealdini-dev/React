let anyValue: any 

anyValue = 1
anyValue = 'string'
anyValue = true

let unknownValue: unknown

unknownValue = 1
unknownValue = 'string'
unknownValue = true

let strValue: string

strValue = anyValue

// ele nao pode dar asign por que ele é mais restritivo, ou seja ele nao pode colocar. 
// strValue = unknownValue

if(typeof unknownValue === 'string') {
    strValue = unknownValue
}