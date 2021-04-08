const MiToken = artifacts.require("MiToken");

module.exports = function(deployer) {
  deployer.deploy(MiToken,100);
};
