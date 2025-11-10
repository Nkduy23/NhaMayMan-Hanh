// listblog.js
import { stories } from "../data/stories.js"; // Đường dẫn tới stories.js

const listContainer = document.getElementById("story-list");

if (listContainer) {
  stories.forEach((story) => {
    const card = document.createElement("div");
    card.classList.add("story-card");
    card.innerHTML = `
      <img src="${story.images[0].src}" alt="${story.images[0].alt}">
      <div class="story-info">
        <h2>${story.title}</h2>
        <p>${story.content.substring(0, 120)}...</p>
        <a href="story.html?id=${story.id}" class="read-more">Đọc thêm</a>
      </div>
    `;
    listContainer.appendChild(card);
  });
}
