var fs = require("fs");
var data = fs.readFileSync('.env', 'utf-8');

function getParam(name) {
    var reg = new RegExp("(^|\n)" + name + " = ([^\n\r]*)");
    var r = data.match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function setParam(name, value) {
    var reg = new RegExp("(^|\n)" + name + " = ([^\n\r]*)");
    data = data.replace(reg, name + ' = ' + value);
}

var VUE_APP_SERVION = getParam('VUE_APP_SERVION');

VUE_APP_SERVION = (VUE_APP_SERVION*1 + 0.01).toFixed(2);

setParam('VUE_APP_SERVION', VUE_APP_SERVION);

fs.writeFile('.env', data, function(err){
    if (err) {
        return console.error(err);
    }
})