var frameModule = require("ui/frame");
var page;
var email;
exports.loaded = function(args) {
    page = args.object;
};

exports.signIn = function() {
    alert("Error!");
    Error("11")
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
