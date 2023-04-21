const Bilan = require("./bilan");
const Facture = require("./facture");
const Subvention = require("./subvention");

const setup = async () => {
    await Bilan.sync();
    await Facture.sync();
    await Subvention.sync();
}

module.exports = setup;