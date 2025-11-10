(async () => {
  // Đợi BASE_PATH (nhưng <base> đã có từ config)
  await new Promise((resolve) => {
    if (window.BASE_PATH) return resolve();
    const check = setInterval(() => {
      if (window.BASE_PATH) {
        clearInterval(check);
        resolve();
      }
    }, 10);
  });

  // Danh sách CSS global (relative ngắn: assets/... – <base> sẽ fix)
  const globalCssFiles = [
    "assets/css/style.css",
    "assets/css/header.css",
    "assets/css/footer.css",
    // Thêm nếu cần
  ];

  globalCssFiles.forEach((href) => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href; // Relative ngắn, <base> handle prefix
      document.head.appendChild(link);
    }
  });
})();
