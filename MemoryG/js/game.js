let objects = ['ambulance', 'ambulance', 'automobile', 'automobile', 'rocket', 'rocket', 'bicycle', 'bicycle', 'bus', 'bus', 'motorcycle', 'motorcycle', 'fighter-jet', 'fighter-jet', 'subway', 'subway'],

    //Selectors JQuery
    $container = $('.container'),
    $scorePanel = $('.score-panel'),
    $rating = $('.fa-star'),
    $moves = $('.moves'),
    $timer = $('.timer'),
    $restart = $('.restart'),
    $deck = $('.deck'),

    //Variables
    nowTime,
    allOpen = [],
    match = 0,
    second = 0,
    moves = 0,
    wait = 420,
    totalCard = objects.length / 2,
    
    //Scoring system for stars
    stars3 = 14,
    stars2 = 16,
    star1 = 20;

//Shuffling function
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//Function to start game
function init() {

    //Shuffle object array
    let allCards = shuffle(objects);
    $deck.empty();

    //Initial value when game starts 
    match = 0;
    moves = 0;
    $moves.text('0');

    for (let i = 0; i < allCards.length; i++) {
        $deck.append($('<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>'))
    }
    addCardListener();

    //Restart timer function
    resetTimer(nowTime);
    second = 0;
    $timer.text(`${second}`)
    initTime();
}

//Function to calculate score(no. of moves taken) and give stars accordingly
function rating(moves) {
    let rating = 3;
    if (moves > stars3 && moves < stars2) {
        $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');
    } else if (moves > stars2 && moves < star1) {
        $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');
    } else if (moves > star1) {
        $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');
        rating = 1;
    }
    return { score: rating };
}

//Function for game over when all cards match
function gameOver(moves, score) {
    $('#winnerText').text(`In ${second} seconds, you did a total of ${moves} moves with a score of ${score}. Well done!`);
    $('#winnerModal').modal('toggle');
}

//Reset function
$restart.bind('click', function (confirmed) {
    if (confirmed) {
        $rating.removeClass('fa-star-o').addClass('fa-star');
        init();
    }
});

//Function for "when the card match, let them open", "when not match, flip back over"
let addCardListener = function () {

    // With the following, the card that is clicked on is flipped
    $deck.find('.card').bind('click', function () {
        let $this = $(this);

        if ($this.hasClass('show') || $this.hasClass('match')) { return true; }

        let card = $this.context.innerHTML;
        $this.addClass('open show');
        allOpen.push(card);

        // Compares cards if they matched
        if (allOpen.length > 1) {
            if (card === allOpen[0]) {
                $deck.find('.open').addClass('match');
                setTimeout(function () {
                    $deck.find('open').removeClass('open show');
                }, wait);
                match++;

                //Time limit for card when does not match
            } else {
                $deck.find('.open').addClass('notmatch');
                setTimeout(function () {
                    $deck.find('.open').removeClass('open show');
                }, wait / 1.5);
            }

            //All card should open
            allOpen = [];
            moves++;
            rating(moves);
            $moves.html(moves);
        }

        //When all cards match game over
        if (totalCard === match) {
            rating(moves);
            let score = rating(moves).score;
            setTimeout(function () {
                gameOver(moves, score);
            }, 500);
        }
    });
}

//Timer when game is loaded
function initTime() {
    nowTime = setInterval(function () {
        $timer.text(`${second}`)
        second = second + 1
    }, 1000);
}

// Resets the timer when game ends
function resetTimer(timer) {
    if (timer) {
        clearInterval(timer);
    }
}
// Restore state when cards are open
function restoreState(moves){
    if(moves > allOpen[0]){
        resetTimer(timer)=false;
    }
    else{
        resetTimer(timer)=true;
    }
}
init();