if (!window.BASE_PATH) {
  // Fallback nếu config chưa load
  const isDev =
    window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";
  window.BASE_PATH = isDev ? "/" : "/NhaMayMan-Hanh/";
}

const baseUrl = window.location.origin + window.BASE_PATH;

fetch(`${baseUrl}layouts/header.html`)
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch(`${baseUrl}layouts/footer.html`)
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
