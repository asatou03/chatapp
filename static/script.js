const messageInput = document.getElementById("message-input");
const postsList = document.querySelector("ul");

const fetchAndRenderPosts = async () => {
  try {
    const response = await fetch('/');
    const data = await response.text();

    // 新しい要素を作成し、取得した HTML をその中に設定
    const newElement = document.createElement("div");
    newElement.innerHTML = data;

    // 元の ul 要素に新しい要素を追加
    postsList.innerHTML = '';
    postsList.appendChild(newElement.querySelector("ul"));
  } catch (error) {
    console.error("Error fetching and rendering posts:", error);
  }
};

setInterval(fetchAndRenderPosts, 5 * 1000);

fetchAndRenderPosts();
