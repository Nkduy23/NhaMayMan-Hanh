// story.js
import { stories } from "../data/stories.js"; // Đường dẫn tới stories.js

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const story = stories.find((s) => s.id === id);

const titleEl = document.getElementById("story-title");
const contentEl = document.getElementById("story-content");

if (story && titleEl && contentEl) {
  document.title = story.title; // Set title tab
  titleEl.textContent = story.title; // Set title trang

  contentEl.innerHTML = `
    ${story.images
      .map((img) => `<img src="${img.src}" alt="${img.alt}" class="detail-img">`)
      .join("")}
    <p>${story.content}</p>
    <a href="${story.ctaLink}" class="cta-button">${story.ctaText}</a>
  `;
} else if (contentEl) {
  contentEl.innerHTML = "<p>Không tìm thấy bài viết!</p>";
}
