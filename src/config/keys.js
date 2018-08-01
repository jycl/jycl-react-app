if(process.env.NODE_ENV === "production") {
    module.exports = require("./dev"); //do not have ./prod set up yet
} else {
    module.exports = require("./dev");
}