$(document).ready(function () {
    var url = "https://hn.algolia.com/api/v1/search?query=javascript";
    $.getJSON(url, function (data) {
        
        var currentQuotes = "";
        var quotes = data.hits;

        $('.read').on('click', function() {
            currentQuotes = quotes[Math.floor(Math.random() * quotes.length)];
            $('.heading').html(currentQuotes.title);
            $('.text').html(currentQuotes.author);
        });
        $('.tweetQuote')
                .attr(
                    'href',
                    'https://twitter.com/intent/tweet?text= ' + currentQuotes.title + ' - ' + currentQuotes.author
                )
                .attr('target', '_blank')
                .attr('disabled', false);

    });

});

