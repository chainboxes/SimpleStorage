const {expect} = require ("chai");
const {ethers} = require ("hardhat");

describe ("SimpleStorage Contract" , function() {
    let simpleStorage;
beforeEach(async function() {
 const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
 simpleStorage = await SimpleStorage.deploy();
 await simpleStorage.waitForDeployment();
    });

    it ("Should set and retrieve a number" , async function() {
        await simpleStorage.setNumber(43);
        const storedValue = await simpleStorage.getNumber();
        expect(storedValue).to.equal(43);
    });

    it("Should update stored value" , async function() {
        await simpleStorage.setNumber(12);
        const updatedValue = await simpleStorage.getNumber();
        expect(updatedValue).to.equal(12);
    });

});