require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture stove regret shift pupil inner armed equal genre'; 
let testAccounts = [
"0xc2481a61a10effb50d5dabb693ce9f6fe9a21fc1becad75553b5aa85f614bb57",
"0x9f5ea37e8d4b8092555befc4addd3c2904d8df6418fb3090452c34b0fe909e0a",
"0x4a9922a85f404e708ff11e08f19c5b564766621af1dbb8a6208226d5eea52a8d",
"0xc83330f675c50c917044f75b97ccb08fb9cbae555ed476efe05c8958bc248f4f",
"0xf98f6376306d22bb5532b9d71aa8e3a4af7c454bf613814f99c1538c262ee350",
"0x8ccf6b229633611ae4c999ce1097bdfcdbc2357667b9f43d9d8c8f04100a5727",
"0xf0140afb5bd31d9afcd8b75c9278f1d7161ecba7bf1e32a32f4f8f9f34097a2d",
"0x84d2f97704dcf634a9d265d851dafae7ae1b516c287947da2e896d839bc28af4",
"0x0e3f1f11ccca2a9a8d237c6cb2659ce7e8825b90238a330142e5dc3b23fe09f9",
"0xfb6cd25d234da36a0265c21d4b1533cb845cc7d600235c0ff32095e35cecfac9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

