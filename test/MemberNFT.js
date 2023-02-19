const { expect } = require("Chai");
const {ethers} = require("hardhat");

describe("MemberNFTコントラクト", () => {
  it("トークンの名前とシンボルがセットされるべき", async () => {
    const name = "MemberNFT";
    const symbol = "MEM";
    const MemberNFT = await ethers.getContractFactory("MemberNFT");
    const memberNFT = await MemberNFT.deploy();
    await memberNFT.deployed();

    expect(await memberNFT.name()).to.equal(name);
    expect(await memberNFT.symbol()).to.equal(symbol);

  });
  it("デプロイアドレスがownerに設定されるべき", async () => {
    const [owner] = await ethers.getSigners();
    const MemberNFT = await ethers.getContractFactory("MemberNFT");
    const memberNFT = await MemberNFT.deploy();
    await memberNFT.deployed();

    expect(await memberNFT.owner()).to.equal(owner.address);
  });
});
