function randomBackgroundColor() { //function name
    var color = '#'; // hexadecimal starting symbol
    var letters = ['52EDC7','5AC8FB','1AD6FD','DBDDDE','34AADC','A4E786','D1EEFC','E4B7F0', 'D7D7D7', '55EFCB', '5BCAFF', 'FB2B69', 'FFDB4C']; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];
    document.body.style.background = color; // Setting the random color on your div element.
};

jQuery.fn.verticalAlign = function ()
{
    return this
        .css("margin-top",($(window).height() - (($(this).height())*2))/2 + 'px' )
};

function getQuote(){
    $.ajax({
       headers: {'X-Mashape-Key': '8bW7q6Wqb9mshtrKoMUiaPpqghCYp1ZfvAmjsnEcGPbIqsOqpd',
                 'Content-Type': 'application/x-www-form-urlencoded',
                 'Accept': 'application/json'
       },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=',
        success: function(response) {
            var r = JSON.parse(response);
            //console.log(response);
            $("#quote").hide().html(r.quote).fadeIn();
            $("#author").hide().html(r.author).fadeIn();
        }
        
    });
};

$('.my-container').verticalAlign();
$("#new-quote").click(getQuote);