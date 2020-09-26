// let numOrStr: number | string
// numOrStr = 12
// numOrStr = '12'

type numOrStr = number | string
type showAs = 'as-number' | 'as-string'

function showValue(value: numOrStr, asType: showAs) {
    if(asType== 'as-number'){
        console.log(value)
    }
    if(asType== 'as-string'){
        console.log(value)
    }
}

showValue(10, 'as-string')
showValue('Sou uma String', 'as-string')