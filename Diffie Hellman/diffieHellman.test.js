import { expect } from "chai";
import { describe, it } from "mocha";
import searchS from "./diffieHellman.js";


describe("This tests Diffie-Hellman's algorithm", ()=>{
    it("Should return 9", ()=>{
        expect(searchS(23,11,2,3)).to.be.equals(9);
    })
    it("Should throw an error", ()=>{
        expect(() => searchS(24,11,2,3)).to.throw("Please verify that p and g are prime numbers");
        expect(() => searchS(24,12,2,3)).to.throw("Please verify that p and g are prime numbers");
    })
    it("Should throw an error", ()=>{
        expect(() => searchS(11,11,2,3)).to.throw("Generator numbers must be prime between them");
        expect(() => searchS(23,23,2,3)).to.throw("Generator numbers must be prime between them");
    })

})