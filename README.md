### Creación de Token ERC20 personalizado en Blockchain Ethereum (Testnet) con truffle

**Instrucciones:**



Instalar compilador de solidity:

`npm install -g solc`



Instalar truffle:

`npm install -g truffle`



Crear proyecto:

`truffle init`



Crear contrato:

`truffle create contract MiToken`



Copiar MiToken.sol de este repositorio



Hacer migración de contrato:

`truffle create migration MiToken`



En la carpeta /migrations ir al fichero XXXXXXXXXX_mi_token.js y modificarlo a:

`const MiToken = artifacts.require("MiToken");`

`module.exports = function(deployer, 100) {`

  `deployer.deploy(MiToken);`

`};`



Compilar contrato:

`truffle compile`



Ejecutar Blockchain:

`truffle develop`



Hacer migración y forzarla desde el inicio con el prompt de truffle(develop):

`migrate --reset`

