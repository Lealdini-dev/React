function add(n1: number, n2: number, print: boolean, message: string) {
  const result = n1 + n2;
  if (print) {
    console.log(message + result);
  } else {
    return result;
  }
}

const input1: number = 10;
const input2: number = 10;
const message: string = 'O resultado é: '

add(input1, input2, true, message);
