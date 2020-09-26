var anyValue;
anyValue = 1;
anyValue = 'string';
anyValue = true;
var unknownValue;
unknownValue = 1;
unknownValue = 'string';
unknownValue = true;
var strValue;
strValue = anyValue;
// ele nao pode dar asign por que ele é mais restritivo, ou seja ele nao pode colocar. 
// strValue = unknownValue
if (typeof unknownValue === 'string') {
    strValue = unknownValue;
}
