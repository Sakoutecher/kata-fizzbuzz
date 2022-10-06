export function fizz(number) {
    if (number % 3 == 0) {
        return "Fizz";
    } else {
        return number;
    }
}

export function buzz(number) {
    if (number % 5 == 0) {
        return "Buzz";
    } else {
        return number;
    }
}

export function fizzbuzz(number) {
    if ((number % 3 == 0) && (number % 5 == 0)) {
        return "FizzBuzz";
    } else {
        return number;
    }
}
