//handles settings
//
class ABC {
	constructor(config = {}) {
		this.type = config.type || "blank"
		this.url = config.url || "about:blank"
	}
	setType(type) {
		if (!type) return;
		this.type = type
	}
	setUrl(url) {
		if (!url) return;
		this.url = url
	}
	getCode() {
		return `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`
	}
	open() {
		if (this.type == "blank") {
			try {
				var page = window.open()
				page.document.body.innerHTML = `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`
			} catch {
			}
		} else if (this.type == "blob") {
			try {
				var page = new Blob([`<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`], { type: "text/html" })
				window.open(URL.createObjectURL(page))
			} catch {
			}
		} else if (this.type == "overwrite") {
			try {
				document.body.innerHTML = `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`
			} catch {
			}
		}
	}
}
document.body.classList.add("classic")
function midnight() {
	window.localStorage.setItem('midnight', 'on');
	document.body.style.backgroundColor = "#162545"
	document.body.style.color = "#ffffff"
	document.body.style.setProperty('--bg-c', "#162545");
	localStorage.setItem('classic', 'off');
	window.localStorage.removeItem('classic');
	window.localStorage.setItem('lava', 'off')
	window.localStorage.removeItem('lava')
}
function lava() {
	window.localStorage.setItem('lava', 'on')
	document.body.style.backgroundColor = "#fb4509"
	document.body.style.color = "#000000"
	localStorage.setItem('classic', 'off');
	window.localStorage.removeItem('classic');
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
}
function classic() {
	window.localStorage.setItem('classic', 'on')
	document.body.style.backgroundColor = "#282834"
	document.body.style.color = "#ffffff"
	document.body.style.setProperty('--bg-c', "#282834");
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
	window.localStorage.setItem('lava', 'off')
	window.localStorage.removeItem('lava')
}
function retro() {
	window.localStorage.setItem('retro', 'on')
	document.body.style.backgroundColor = "#000000"
	document.body.style.color = "#14c832"
	window.localStorage.setItem('midnight', 'off')
	window.localStorage.removeItem('midnight')
	window.localStorage.setItem('lava', 'off')
	window.localStorage.removeItem('lava')
	window.localStorage.setItem('classic', 'off')
	window.localStorage.removeItem('classic')
}
function checkTheme() {
	if (window.localStorage.getItem('classic') == "on") {
		document.body.classList.add("classic")
	}

	else if (window.localStorage.getItem('midnight') == "on") {
		document.body.classList.add("midnight")
	}

	else if (window.localStorage.getItem('lava') == "on") {
		document.body.classList.add("lava")
	}
	else if (window.localStorage.getItem('retro') == "on") {
		document.body.classList.add("retro")
	}
}
function ab() {
	//Creates new ABC
	var page = new ABC({
		"type": "blank", //Blank, blob, or overwrite
		"url": "https://example.com" //Any url
	})
	//Set the type
	page.setType("blank")
	//Set the url
	page.setUrl(window.location.href)
	//Get iframe code
	console.log(page.getCode())
	//Open page
	page.open()
}

function google() {
	document.title = "Google"
	localStorage.setItem('title', 'Google')
}
function edpuzzle() {
	document.title = "Edpuzzle"
	localStorage.setItem('title', 'Edpuzzle')
}
//when function is called it sets the title
function setTitle() {

	// set title on first load so we dont get "null" in the title
	localStorage.setItem('title', 'Scythe')
	document.title = localStorage.getItem('title')
}
function loadSettings() {
	setTitle()
	checkTheme()
}
loadSettings()