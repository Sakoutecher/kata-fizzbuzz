import { expect } from "chai";

import {fizz, buzz, fizzbuzz} from "../src";

describe("Tests-for-fizzbuzz-function", ()=> {
    it("return-fizz-if-int-divisible-by-3", ()=> {
        //Given
        const number = 81;
    
        //When
        const result = fizz(number);
    
        //Then
        expect(result).to.equal("Fizz");
    })
    
    it("return-buzz-if-int-divisible-by-5", ()=> {
        //Given
        const number = 55;
    
        //When
        const result = buzz(number);
    
        //Then
        expect(result).to.equal("Buzz");
    })
    
    it("return-fizzbuzz-if-int-divisible-by-3-and-5", ()=> {
        //Given
        const number = 15;
    
        //When
        const result = fizzbuzz(number);
    
        //Then
        expect(result).to.equal("FizzBuzz");
    })    
})
