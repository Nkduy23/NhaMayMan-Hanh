fetch("../layouts/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("header").innerHTML = data;
    updateHeaderUser();
  });
fetch("../layouts/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });

// Cập nhật header dựa trên trạng thái đăng nhập
function updateHeaderUser() {
  const userMenu = document.querySelector("#user-menu");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // Nếu đã đăng nhập
    userMenu.innerHTML = `
      <span>Xin chào, <b style="color: red">${currentUser.name}</b></span> | 
      <a href="#" id="logout-link" >Đăng xuất</a>
    `;

    // Xử lý khi bấm đăng xuất
    document
      .getElementById("logout-link")
      .addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        alert("Đăng xuất thành công!");
        location.reload(); // Tải lại trang để cập nhật giao diện
      });
  }
}
