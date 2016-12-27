
var db = Ti.Database.open('youfit');
db.execute('CREATE TABLE IF NOT EXISTS slider_info (id INTEGER PRIMARY KEY, name TEXT);');
var current_slider = db.execute('SELECT id,name FROM slider_info WHERE id=1');
$.index.open();

if (!current_slider.rowCount) {
	var intro = Alloy.createController('intro').getView();
	intro.open();
	intro.addEventListener('close', function(evt) {
		db.execute('INSERT INTO slider_info (id,name) VALUES (?,?)', 1, "intro");
		$.index.open();
	});
}