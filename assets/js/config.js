(function () {
  const hostname = window.location.hostname;
  const isDev = hostname === "127.0.0.1" || hostname === "localhost" || hostname === "0.0.0.0";

  window.BASE_PATH = isDev ? "/" : "/NhaMayMan-Hanh/";
})();
