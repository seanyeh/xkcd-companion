var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*.xkcd.com",
    contentScriptFile: self.data.url("inject.js")
});
