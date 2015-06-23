// SoundCloud Application Code

function takeAbite() {
	SC.connect(function(){
		SC.put("/me/followings/3207", function() {
			if(error) {
				alert("Error: " + error.message);
			} else {
				alert("You are now following " + user.username);
			}
		});
	});

	SC.record({
		start: function(){
			window.setTimeout(function(){
				SC.recordPlay();
			}, 5000);
		},
		progress: function(){
			window.setTimeout(function(){
				SC.recordPlay();
			})
		}
	});
}

// Stream Sound
SC.stream("/tracks/208388618", function(sound){
	$('#play').click(function(){
		sound.play();
	});
	$('#pause').click(function(){
		sound.pause();
	});
	$('#stop').click(function(){
		sound.stop();
	});
});


// Record a sound
SC.connect(function() {
  SC.record({
    start: function() {
      window.setTimeout(function() {
        SC.recordStop();
        SC.recordUpload({
          track: { title: 'This is my sound' }
        });
      }, 5000);
    }
  });
});

// New Track ID 210397628
// ZONE. DRE 208388618
// SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
//   alert("Latest track: " + tracks[0].title);
// });