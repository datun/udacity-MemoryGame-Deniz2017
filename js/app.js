/*
 * Create a list that holds all of your cards
 */
 
var card_list = ["diamond","paper-plane-o","anchor","bolt","cube","leaf","bicycle","bomb"];

var opened_cards = [];

var matched_cards = [];

var moves = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 
 
 

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

deck_elements = card_list.concat(card_list); // Created the deck
deck_elements = shuffle(deck_elements); // Shuffled the deck

card_class = $('<li class="card"></li>');

for (i=0; i< deck_elements.length; i++){
	$('.deck').append('<li class="card"><i class="fa fa-'+deck_elements[i]+'"></i></li>');
}	// add cards with HTML into deck class


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 $('.card').on('click', function(event){ 
	if (event.target.className == "card"){
		icon = event.target.childNodes[0];
		card = event.target
		
		showCard(card);
		
		checkCards(card);

	}
 })

 
function showCard(card){
	card.className = "card open show";
	opened_cards.push(card);
}
 
function checkCards(card){
	if (opened_cards.length > 1){
		card1 = opened_cards[opened_cards.length - 1];
		card2 = opened_cards[opened_cards.length - 2];
		
		moveCounter();
		
		if (card1.childNodes[0].className == card2.childNodes[0].className){
			card1.className = "card match";
			card2.className = "card match";
			matched_cards.push(card1.childNodes[0].className);
			opened_cards.pop();
			opened_cards.pop();
		}else {
			card1.className = "card";
			card2.className = "card";
			opened_cards.pop();
			opened_cards.pop();
		}
		
	}
}
 
 
function moveCounter(){
	moves++;
	$('.moves').text(moves);
}
