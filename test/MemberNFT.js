const { expect } = require("Chai");
const {ethers} = require("hardhat");

describe("MemberNFTコントラクト", () => {
  let MemberNFT;
  let memberNFT;
  const name = "MemberNFT";
  const symbol = "MEM";
  let owner;

  beforeEach(async () =>{
    [owner] = await ethers.getSigners();
    MemberNFT = await ethers.getContractFactory("MemberNFT");
    memberNFT = await MemberNFT.deploy();
    await memberNFT.deployed();
  });

  it("トークンの名前とシンボルがセットされるべき", async () => {
    expect(await memberNFT.name()).to.equal(name);
    expect(await memberNFT.symbol()).to.equal(symbol);

  });
  it("デプロイアドレスがownerに設定されるべき", async () => {
    expect(await memberNFT.owner()).to.equal(owner.address);
  });
});
