$(document).ready(function () {
    const apiKey = '10fe0b85f5f44f37ab00457217963ac9';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            if (response.status === "ok") {
                displayNewsArticles(response.articles);
            } else {
                toastr.error("An error occurred while fetching the news articles.");
            }
        },
        error: function () {
            toastr.error("An error occurred while fetching the news articles.");
        }
    });

    function displayNewsArticles(articles) {
        const newsContainer = $('#newsContainer');
        newsContainer.empty();

        articles.forEach(article => {
            const articleHtml = `
                <div class="news-article">
                    <h2 class="news-title">${article.title}</h2>
                    <p class="news-description">${article.description }</p>
                    <p class="news-author">By: ${article.author }</p>
                    <a class="news-url" href="${article.url}" target="_blank">Read more</a>
                </div>
            `;
            newsContainer.append(articleHtml);
        });
    }
});
