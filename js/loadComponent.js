function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header.html", "header-placeholder");
    loadComponent("footer.html", "footer-placeholder");
    loadComponent("animation.html", "cake-animation");
});