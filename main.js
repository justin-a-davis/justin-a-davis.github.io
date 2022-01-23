const htmlBadge = document.getElementById('html-badge');
const cssBadge = document.getElementById('css-badge');
const jsBadge = document.getElementById('js-badge');

const description = document.getElementById('description');

console.log(htmlBadge);

function writeHTMLdesc() {
    description.innerText = "Modern semantic HTML5!";
}

function writeCSSdesc() {
    description.innerText = "CSS3 ready!";
}

function writeJSdesc() {
    description.innerText = "Javascript 6!";
}

htmlBadge.addEventListener('mouseover', writeHTMLdesc);
cssBadge.addEventListener('mouseover', writeCSSdesc);
jsBadge.addEventListener('mouseover', writeJSdesc);

