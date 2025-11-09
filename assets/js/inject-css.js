(async () => {
  // Đợi BASE_PATH
  await new Promise((resolve) => {
    if (window.BASE_PATH) return resolve();
    const check = setInterval(() => {
      if (window.BASE_PATH) {
        clearInterval(check);
        resolve();
      }
    }, 10);
  });

  // Inject <base> tag (fix tất cả relative path)
  if (!document.querySelector("base")) {
    // Tránh inject nhiều lần
    const baseTag = document.createElement("base");
    baseTag.href = window.BASE_PATH;
    document.head.appendChild(baseTag);
  }

  // Danh sách CSS global (dùng chung cho tất cả pages)
  const globalCssFiles = ["assets/css/style.css", "assets/css/header.css", "assets/css/footer.css"];

  globalCssFiles.forEach((href) => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.title = href.split("/").pop();
      document.head.appendChild(link);
    }
  });
})();
