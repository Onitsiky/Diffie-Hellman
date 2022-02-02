import { expect } from "chai";
import { describe, it } from "mocha";
import factor from "./factor.js";


describe("facteur de mot", () => {
    it("should return BABA", () => {
        let result = [["AKDEIBABA","PARLBABA"]]
        expect(factor(result)).to.be.equals("BABA");
    })
    it("should return AUCUN FACTEUR", () => {
        let result = [["A","B"]];
        expect(factor(result)).to.be.equals("AUCUN FACTEUR");
    })
    it("should return AUCUN FACTEUR", () => {
        let result = [["AZERTY", "QSDFG"]];
        expect(factor(result)).to.be.equals("AUCUN FACTEUR")
    })
    it("should return an Error", () => {
        expect(() => factor([[" "]])).to.throw("Error");
    })
    it("should return an Error", () => {
        expect(() => factor([[null]])).to.throw("Error");
    })
    it("should return an Error", () => {
        expect(() => factor(isNaN == false)).to.throw("Error")
    })

})