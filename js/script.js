// write your code here
const printer = () => {
    for (let i = 0; i < 101; i++) {

        i % 3 === 0 && i % 5 !== 0 && console.log("Fizz")
        i % 5 === 0 && i % 3 !== 0 && console.log("Buzz")
        i % 5 === 0 && i % 3 === 0 && console.log("FizzBuzz")
        i % 5 !== 0 && i % 3 !== 0 && console.log(i)


    }
}




printer();