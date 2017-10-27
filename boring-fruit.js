function getItemFromList(mutableObject){
	var upperLimit = mutableObject.cloned_array.length;
	if(upperLimit === 0){
		mutableObject.cloned_array = mutableObject.original.slice(0);
		upperLimit = mutableObject.cloned_array.length;
	}
	var lowerLimit = 0;
	var randomIndex = Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
	return mutableObject.cloned_array.splice(randomIndex, 1); //Remove an object each time
}


function buildActivityList(listContainer){
	listContainer.empty();
	var compiledList = [];
	var activities = [];

	//Get three indoor
	activities.push(getItemFromList(indoor_obj));
	activities.push(getItemFromList(indoor_obj));
	activities.push(getItemFromList(indoor_obj));
	//Get three outdoor
	activities.push(getItemFromList(outdoor_obj));
	activities.push(getItemFromList(outdoor_obj));
	activities.push(getItemFromList(outdoor_obj));
	//Get one making suggestion
	activities.push(getItemFromList(making_obj));

	//Get one Outings suggestion
	activities.push(getItemFromList(outings_obj));

	activities.forEach(function(element, index){
		if(index === 0){
			compiledList.push("<li class='fruit-heading'>INDOORS</li>");
		}
		if(index === 3){
			compiledList.push("<li class='fruit-heading'>OUTDOORS</li>");
		}
		if(index === 6){
			compiledList.push("<li class='fruit-heading'>MAKING GAME</li>");
		}
		if(index === 7){
			compiledList.push("<li class='fruit-heading'>OUTING</li>");
		}
		compiledList.push("<li>"+element+"</li>");

	})

	listContainer.append(compiledList);
}

$(function() {
	$("#getBoringIdeas").click(function(e){
		buildActivityList($("#boringList"));
		e.preventDefault();
	});
});

var mystery_outings = [
	"Natural History Museum",
	"The Ashmolean",
	"The Story Museum",
	"Botley Park",
	"Waitrose",
	"Toys R Us",
	"Pets at Home",
	"The History of Science Museum",
	"Oatlands Road Recreation Ground",
];

//Need 48 examples of each indoor/outdoor
var outdoor_activities = [
	"Run and touch",
	"Look for minibeasts",
	"Push bike",
	"Bubbles",
	"Football",
	"Chalk",
	"Water table",
];

// TODO
// - Type out all ideas from index cards
// - Write up all new toy acquisitions

var indoor_activities = [
	"Play doh",
	"Dress up",
	"Random toys",
	"LEGO",
	"K'NEX",
	"Bristle Blocks",
	"Duplo",
	"Trains",
	"Playmobil",
	"Read a book",
	"Drawing",
	"Stickers",
	"Painting",
	"Stamps",
	"Glueing",
	"Activity books",
	"Listen to music",
	"Wooden puzzles",
	"Jigsaw puzzles",
	"Wooden blocks",
	"Board games",
];

// Ideas to google
// - Toddler craft activities
// - Making projects
// - Homemade toy ideas from list

var making_games = [
	"Recycling bin",
	"Baking",
	"Rice bin",
	"Coloured rice",
	"Make shakers",
	"Bicarbonate and vinegar",
	"Make game out of LEGO",
];

// TODO use cloned mutable lists and when list runs out re-clone original. Need to pass reference to original
function makeMutableObjects(arrayName){
	return {
		original: arrayName,
		cloned_array: arrayName.slice(0)
	}
}

var outings_obj = makeMutableObjects(mystery_outings);
var outdoor_obj = makeMutableObjects(outdoor_activities);
var indoor_obj = makeMutableObjects(indoor_activities);
var making_obj = makeMutableObjects(making_games);
