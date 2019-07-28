document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {
	var btn = document.getElementById('fakeBtn');
	btn.addEventListener('click', btnEventHandler);
  btn.addEventListener('keydown', btnEventHandler);
}

function btnEventHandler(event) {
	console.log(event.type);

  var realBtn = document.getElementById('realBtn');
  realBtn.focus();
}
