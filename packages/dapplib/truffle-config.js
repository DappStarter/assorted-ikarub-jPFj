require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember coin gesture neck flat ghost'; 
let testAccounts = [
"0xefe7059d8ef49510f2f6ec07a17f998ee23168fc67b87bc06993af043fb133a4",
"0xab4408d2dd390d6b172818001ab2cffa8721250d7e9843cd2be768c7c968d179",
"0xa63285a9013f3598e5238df69f75ff623d01ed1df3bf8112947cb05c0f89c961",
"0xa50942f17508b044cdbdfa3ff2eb4be576ec0fdde8a4537196514b7cc88eeee0",
"0x09b45c47b6dc8386c8d22dd57d550634da1d12f33f5ad2628fb14d0f555b18fb",
"0xd735b260d1b443ea2d3debee97a2fd5aa7edc78feaa7d22839e058df04023b68",
"0x686f4317c0b368d13552504ac34bdc221063432bfd32f794f7e11720792c752a",
"0xa7fb0f2a628ec29dbcc543e2d5b91ecec6c68a8e54b46b70e48a9f5bd08ca909",
"0xb25613feff9e79f8b33377aa98404dd80c3f00ec380b06446232de2a1a782874",
"0x8e7951a037045cedc1152010eea66398bebeb668a72d49cdf4d5897a2df66284"
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

