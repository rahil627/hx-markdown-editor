// Generated by Haxe 3.4.2
if (process.version < "v4.0.0") console.warn("Module " + (typeof(module) == "undefined" ? "" : module.filename) + " requires node.js version 4.0.0 or higher");
(function () { "use strict";
var Main = function() { };
Main.main = function() {
	electron_CrashReporter.start({ companyName : "hxelectron (not a company)", submitURL : "https://github.com/fponticelli/hxelectron/issues"});
	electron_main_App.on("ready",function(e) {
		var win = new electron_main_BrowserWindow({ width : 720, height : 480});
		win.on("closed",function(e1) {
			if(process.platform != "darwin") {
				electron_main_App.quit();
			}
		});
		win.loadURL("file://" + __dirname + "/app.html");
	});
};
var electron_CrashReporter = require("electron").crashReporter;
var electron_main_App = require("electron").app;
var electron_main_BrowserWindow = require("electron").BrowserWindow;
var haxe_io_Bytes = function() { };
var js_node_buffer_Buffer = require("buffer").Buffer;
Main.main();
})();

//# sourceMappingURL=main.js.map