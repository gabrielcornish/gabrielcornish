var trackPics = [];

var carPic = document.createElement("img");
var otherCarPic = document.createElement('img');


var numberOfPicsToLoad = 0;

function countLoadedImagesAndLaunchIfReady(){
	numberOfPicsToLoad--;
	// console.log(picsToLoad);
	if(numberOfPicsToLoad == 0){
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName){
	imgVar.onload = countLoadedImagesAndLaunchIfReady();
	imgVar.src = 'images/'+fileName;
}

function loadImages(){
	var imageList = [
		{varName: carPic, theFile: 'player1car.png'},
		{varName: otherCarPic, theFile: 'player2car.png'},

		{trackType: TRACK_ROAD, theFile: 'track_road.png'},
		{trackType: TRACK_WALL, theFile: 'track_wall.png'},
		{trackType: TRACK_TREE, theFile: 'track_tree.png'},
		{trackType: TRACK_GOAL, theFile: 'track_goal.png'},
		{trackType: TRACK_FLAG, theFile: 'track_flag.png'}
		];

	numberOfPicsToLoad = imageList.length;

	for (var i = 0; i < imageList.length; i++) {
		if(imageList[i].varName != undefined){
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else{
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
		}	
	}
}

function loadImageForTrackCode(trackCode, fileName){
	trackPics[trackCode] = document.createElement('img');
	beginLoadingImage(trackPics[trackCode],fileName);
}
