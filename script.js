const newsData = [
    {
        title: "India Wins Cricket Match",
        description: "India defeated Australia by 5 wickets in a thrilling match.",
        image: "https://via.placeholder.com/300"
    },
    {
        title: "Stock Market Hits Record High",
        description: "Sensex crosses new milestone amid strong global cues.",
        image: "https://via.placeholder.com/300"
    },
    {
        title: "New Education Policy Update",
        description: "Government announces major changes in education system.",
        image: "https://via.placeholder.com/300"
    }
];

const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("searchInput");

function displayNews(newsItems) {
    newsContainer.innerHTML = "";
    newsItems.forEach(news => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${news.image}">
            <h3>${news.title}</h3>
            <p>${news.description}</p>
        `;
        newsContainer.appendChild(card);
    });
}

searchInput.addEventListener("keyup", function() {
    const searchValue = searchInput.value.toLowerCase();
    const filteredNews = newsData.filter(news =>
        news.title.toLowerCase().includes(searchValue)
    );
    displayNews(filteredNews);
});

displayNews(newsData);
