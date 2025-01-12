function getDomainFromUrl(url) {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
}

function getCSSVar(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName);
}

class PinItem extends HTMLElement {
    urlToJump;
    title;

    connectedCallback() {
        this.title = this.getAttribute("title");
        this.urlToJump = this.getAttribute("url");
        const shadow = this.attachShadow({mode: "open"});
        const wrapper = document.createElement("div");
        let iconBlock = document.createElement("div");
        let iconImg = document.createElement("img");
        let titleText = document.createElement("p");
        iconBlock.className = "pin-item-block";
        iconImg.src = "http://" + getDomainFromUrl(this.urlToJump) + "/favicon.ico";
        iconImg.height = 50;
        iconImg.width = 50;
        iconBlock.style.margin = "20px 0 15px 30px";

        titleText.innerText = this.title;
        titleText.style.width = "110px";
        titleText.style.marginTop = "2px";
        titleText.style.fontSize = "12pt";
        titleText.style.textAlign = "center";
        titleText.style.color = getCSSVar("--text-color");

        iconBlock.appendChild(iconImg);
        wrapper.appendChild(iconBlock);
        wrapper.appendChild(titleText);
        shadow.appendChild(wrapper);
    }

    jump() {
        location.href = this.urlToJump;
    }
}

customElements.define("pin-item", PinItem);