function Stack() {

  var storage = [];

this.add = function (value) {
	storage.push (value)
}


this.remove = function (){

	return storage.pop ()
}

this.size = function () {

	return storage.length
}
}



  