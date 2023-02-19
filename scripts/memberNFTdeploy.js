const fs = require("fs");

const main = async () => {
  const addr1 = "0x6c75B441cac97BdF2389D12A804DD7a37b04fd49";
  const addr2 = "0x8a99a233024D68922D96E95C4D1223244fB9f514";
  const addr3 = "0xBb9F20828268C06D272B6BD55e6Ccb25C5520518";

  const tokenURI1 =
    "ipfs://bafybeigyod7ldrnytkzrw45gw2tjksdct6qaxnsc7jdihegpnk2kskpt7a/metadata1.json";
  const tokenURI2 =
    "ipfs://bafybeigyod7ldrnytkzrw45gw2tjksdct6qaxnsc7jdihegpnk2kskpt7a/metadata2.json";
  const tokenURI3 =
    "ipfs://bafybeigyod7ldrnytkzrw45gw2tjksdct6qaxnsc7jdihegpnk2kskpt7a/metadata3.json";
  const tokenURI4 =
    "ipfs://bafybeigyod7ldrnytkzrw45gw2tjksdct6qaxnsc7jdihegpnk2kskpt7a/metadata4.json";
  const tokenURI5 =
    "ipfs://bafybeigyod7ldrnytkzrw45gw2tjksdct6qaxnsc7jdihegpnk2kskpt7a/metadata5.json";

  //デプロイ
  MemberNFT = await ethers.getContractFactory("MemberNFT");
  memberNFT = await MemberNFT.deploy();
  await memberNFT.deployed();

  console.log(`Contract deployed to: https://goerli.etherscan.io/address/${memberNFT.address}`);

  //NFTをmintする
  let tx = await memberNFT.nftMint(addr1, tokenURI1);
  await tx.wait();
  console.log("NFT#1 minted...");
  tx = await memberNFT.nftMint(addr1, tokenURI2);
  await tx.wait();
  console.log("NFT#2 minted...");
  tx = await memberNFT.nftMint(addr2, tokenURI3);
  await tx.wait();
  console.log("NFT#3 minted...");
  tx = await memberNFT.nftMint(addr2, tokenURI4);
  await tx.wait();
  console.log("NFT#4 minted...");

  //コントラクトアドレスの書き出し
  fs.writeFileSync(
    "./memberNFTContract.js",
    `
  module.exports = "${memberNFT.address}"
  `
  );
};

const memberNFTdeploy = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

memberNFTdeploy();
