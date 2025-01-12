iptn = document.getElementById("i1");

function fadeAll() {
	document.getElementById("sb").classList.add("fade");
	document.getElementById("pin").classList.add("fade");
}

function goSearch() {
	fadeAll();
	window.location.href = "https://www.bing.com/search?q=" + iptn.value;
}

iptn.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		goSearch();
	}
})
iptb = document.getElementById("i2");
iptb.onclick = function () {
	goSearch();
}

pt = document.getElementsByClassName("pin-item");
for (let i = 0; i < pt.length; ++i) {
	const item = pt[i];
	item.addEventListener("click", function () {
		fadeAll();
		item.jump();
	})
}