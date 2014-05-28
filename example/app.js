// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var button = Ti.UI.createButton({
	title: "open dropbox",
	width: 200,
	height: 200,
});
win.add(button);
win.open();

// TODO: write your module tests here
var dropbox = require('com.tripvi.dropbox');

if (Ti.Platform.name == "android") {
	button.addEventListener("click", function() {
		// var tmpWin = Ti.UI.createWindow({
		// 	navBarHidden: true,
		// 	opacity: 1,
		// 	backgroundColor: "transparent"
		// })
		// tmpWin.open();
		
		require('com.tripvi.dropbox').openDialog(function(obj) {
			// tmpWin.close();
			console.log("zzzzzzzzzzzzz");
			console.log(obj);
		});
	});
}

