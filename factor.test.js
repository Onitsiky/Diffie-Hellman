import { expect } from "chai";
import { describe, it } from "mocha";
import factor from "./factor.js";


describe("facteur de mot", () => {
    it("should return AUCUN FACTEUR", () => {
        expect(factor([["A","B"]])).to.be.equals("AUCUN FACTEUR")
    })
    it("should return BABA", () => {
        let result = [["AKDEIBABA PARLBABA"]]
        expect(factor(result)).to.be.equals("BABA")
    })
    it("should return an Error", () => {
        expect(() => factor([[" "]])).to.throw("Error")
    })
    it("should return an Error", () => {
        expect(() => factor([[null]])).to.throw("Error")
    })
    it("should return an Error", () => {
        expect(() => factor(isNaN == false)).to.throw("Error")
    })

})