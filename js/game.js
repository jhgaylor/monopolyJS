$(window).load(function() {
	game.init();
    
});

function Square(options) {
    this.type = options.type;
    this.name = options.name;
    this.color = options.color;  
};

var game = {
    
    init: function () {
        game.board = getBoard();
        game.canvas = $('#canvas')[0];
        game.canvas.height = 2*game.board.square_height+9*game.board.square_width;
        game.canvas.width = canvas.height;
        game.context = canvas.getContext('2d');
        game.drawBoard()
    },
    rotateBoard: function(){
        game.context.translate(0, canvas.height);
        game.context.rotate(Math.PI*1.5);
        game.drawBoard();
    },
    drawBoard: function () {
        game.context.save()
        var extra = Math.abs(game.board.square_height - game.board.square_width)
        for(var i=0; i<40; i++){
            game.context.save()
            //context.rotate(Math.PI);
            var square = game.board.squares[i];
            var square_width = game.board.square_width
            var square_height = game.board.square_height
            
            if(Math.floor(i/10) == 0){
                var x = game.canvas.width-((i+1)%11)*square_width-extra;
                var y = game.canvas.height-square_height;    
            }
            else if(Math.floor(i/10) == 1){
                game.context.translate(square_height,0)
                game.context.rotate(Math.PI/2)
                //when rotating 90degs, swap x/y
                var y = 0;
                var x = game.canvas.width-(((i+1)%11)+1)*square_width-extra;    
            }

            else if(Math.floor(i/10) == 2){
                game.context.translate(canvas.width-square_width,square_height)
                game.context.rotate(Math.PI)
                var x = game.canvas.width-((i%10)+2)*square_width-extra;
                var y = 0;
            }
            else if(Math.floor(i/10) == 3){
                game.context.translate(game.canvas.height-square_height,game.canvas.width-square_width)
                game.context.rotate(1.5*Math.PI)
                //when rotating 90degs, swap x/y
                var x = game.canvas.width-((i%10)+2)*square_width-extra;
                var y = 0;
            }
            // console.log(square.name)
            // console.log("X: "+ x)
            // console.log("Y: "+ y)
            
            if(square.type=="corner"){
                if(square_height > square_width){
                    square_width += extra;
                } else {
                    square_height += extra;
                }
             
            }
            

            game.context.fillStyle = "Skyblue"
            game.context.strokeRect(x, y, square_width, square_height)
            game.context.fillRect(x, y, square_width, square_height)
            game.context.strokeText(square.name.slice(0,8), x,y+square_height )
            if(square.type=="corner"){
                
                game.context.save()
                game.context.translate(x,y)
                game.context.rotate(1.5*Math.PI)
                game.context.strokeText(square.name.slice(0,8), -square_width,square_height)//-square_width,square_height )
                game.context.restore()
            }
            if(square.type=="property"){
                game.context.save()
                game.context.fillStyle = square.color;
                game.context.fillRect(x, y, square_width, game.board.property_header_height)
                game.context.strokeRect(x, y, square_width, game.board.property_header_height)
                game.context.restore()    
            }
            


            game.context.restore()
        }
        game.context.restore()
    }
}


// var game = {
//     // Start initializing objects, preloading assets and display start screen
//     init: function(){
//         // Initialize objects   
//         levels.init();
// 		loader.init();
//         mouse.init();
		    
//         // Hide all game layers and display the start screen
//         $('.gamelayer').hide();
//         $('#gamestartscreen').show();
        
//         //Get handler for game canvas and context
//         game.canvas = $('#gamecanvas')[0];
//         game.context = game.canvas.getContext('2d');
//     },      
// 	showLevelScreen:function(){
// 		$('.gamelayer').hide();
//         $('#levelselectscreen').show('slow');
// 	},
// 	// Game Mode
// 	mode:"intro", 
//     // X & Y Coordinates of the slingshot
// 	slingshotX:140,
//     slingshotY:280,
//     start:function(){
//         $('.gamelayer').hide();
//         // Display the game canvas and score 
//         $('#gamecanvas').show();
//         $('#scorescreen').show();

//         game.mode = "intro";    
//         game.offsetLeft = 0;
// 		game.ended = false;
// 		game.animationFrame = window.requestAnimationFrame(game.animate,game.canvas);
//     },	

    

// 	// Maximum panning speed per frame in pixels
//     maxSpeed:3,
// 	// Minimum and Maximum panning offset
//     minOffset:0,
//     maxOffset:300,
// 	// Current panning offset
// 	offsetLeft:0,
// 	// The game score
//     score:0,

//     //Pan the screen to center on newCenter
//     panTo:function(newCenter){
//         if (Math.abs(newCenter-game.offsetLeft-game.canvas.width/4)>0 
//             && game.offsetLeft <= game.maxOffset && game.offsetLeft >= game.minOffset){
        
//             var deltaX = Math.round((newCenter-game.offsetLeft-game.canvas.width/4)/2);
//             if (deltaX && Math.abs(deltaX)>game.maxSpeed){
//                 deltaX = game.maxSpeed*Math.abs(deltaX)/(deltaX);
//             }
//             game.offsetLeft += deltaX; 
//         } else {
            
//             return true;
//         }
//         if (game.offsetLeft <game.minOffset){
//             game.offsetLeft = game.minOffset;
//             return true;
//         } else if (game.offsetLeft > game.maxOffset){
//             game.offsetLeft = game.maxOffset;
//             return true;
//         }        
//         return false;
//     },
// 	handlePanning:function(){
//         if(game.mode=="intro"){        
//             if(game.panTo(700)){
//                 game.mode = "load-next-hero";
//             }             
//         }       

//         if(game.mode=="wait-for-firing"){  
//             if (mouse.dragging){
// 				game.panTo(mouse.x + game.offsetLeft)
//             } else {
//                 game.panTo(game.slingshotX);
//             }
//         }
		
// 		if (game.mode=="load-next-hero"){
// 			// TODO: 
// 			// Check if any villains are alive, if not, end the level (success)
// 			// Check if there are any more heroes left to load, if not end the level (failure)
// 			// Load the hero and set mode to wait-for-firing
// 			game.mode="wait-for-firing";			
// 		}
		
// 		if(game.mode == "firing"){  
//             game.panTo(game.slingshotX);
//         }
        
// 		if (game.mode == "fired"){
// 			// TODO:
// 			// Pan to wherever the hero currently is
// 		}
//    	},
// 	showEndingScreen:function(mode){
// 		if (mode=="level-success"){
			
// 			if(game.currentLevel.number<levels.data.length-1){
// 				$('#endingmessage').html('Level Complete. Well Done!!!');
// 				$("#playnextlevel").show();
// 			} else {
// 				$('#endingmessage').html('All Levels Complete. Well Done!!!');
// 				$("#playnextlevel").hide();
// 			}
// 		} else if (mode=="level-failure"){			
// 			$('#endingmessage').html('Failed. Play Again?');
// 			$("#playnextlevel").hide();
// 		}		
		
// 		$('#endingscreen').show();
// 	},
	
//     animate:function(){
//         // Animate the background
//        game.handlePanning();
       
//        // Animate the characters
     	
        
//         //  Draw the background with parallax scrolling
//         game.context.drawImage(game.currentLevel.backgroundImage,game.offsetLeft/4,0,640,480,0,0,640,480);
//         game.context.drawImage(game.currentLevel.foregroundImage,game.offsetLeft,0,640,480,0,0,640,480);
        

//         // Draw the slingshot
//         game.context.drawImage(game.slingshotImage,game.slingshotX-game.offsetLeft,game.slingshotY);
		
// 		game.context.drawImage(game.slingshotFrontImage,game.slingshotX-game.offsetLeft,game.slingshotY);

//       	if (!game.ended){
// 			game.animationFrame = window.requestAnimationFrame(game.animate,game.canvas);
// 		}	
//     }
// }

// var levels = {
//     // Level data
//     data:[
// 	    {   // First level 
// 	        foreground:'desert-foreground',
// 	        background:'clouds-background',
// 			entities:[]
// 	    },
//         {   // Second level 
//             foreground:'desert-foreground',
//             background:'clouds-background',
//             entities:[]
//         },
//         {   // Second level 
//             background:'desert-foreground',
//             foreground:'clouds-background',
//             entities:[]
//         }
//     ],
//     // Initialize level selection screen
//     init:function(){
//         var html = "";
//         for (var i=0; i < levels.data.length; i++) {
//             var level = levels.data[i];
//             html += '<input type="button" value="'+(i+1)+'">';
//         };
//         $('#levelselectscreen').html(html);
        
//         // Set the button click event handlers to load level
//         $('#levelselectscreen input').click(function(){
//             levels.load(this.value-1);
//             $('#levelselectscreen').hide();
//         });
//     },

//     // Load all data and images for a specific level
//     load:function(number){

//         // declare a new current level object
//         game.currentLevel = {number:number,hero:[]};
// 		game.score=0;
// 		$('#score').html('Score: '+game.score);
//         var level = levels.data[number];

//         //load the background, foreground and slingshot images
//         game.currentLevel.backgroundImage = loader.loadImage("images/backgrounds/"+level.background+".png");
//         game.currentLevel.foregroundImage = loader.loadImage("images/backgrounds/"+level.foreground+".png");
//         game.slingshotImage = loader.loadImage("images/slingshot.png");
//         game.slingshotFrontImage = loader.loadImage("images/slingshot-front.png");

//         //Call game.start() once the assets have loaded
//         if(loader.loaded){
//             game.start()
//         } else {
//             loader.onload = game.start;
//         }
//     }
// }

// var loader = {
//     loaded:true,
//     loadedCount:0, // Assets that have been loaded so far
//     totalCount:0, // Total number of assets that need to be loaded
    
//     init:function(){
//         // check for sound support
//         var mp3Support,oggSupport;
//         var audio = document.createElement('audio');
//     	if (audio.canPlayType) {
//        		// Currently canPlayType() returns: "", "maybe" or "probably" 
//       		mp3Support = "" != audio.canPlayType('audio/mpeg');
//       		oggSupport = "" != audio.canPlayType('audio/ogg; codecs="vorbis"');
//     	} else {
//     		//The audio tag is not supported
//     		mp3Support = false;
//     		oggSupport = false;	
//     	}

//         // Check for ogg, then mp3, and finally set soundFileExtn to undefined
//         loader.soundFileExtn = oggSupport?".ogg":mp3Support?".mp3":undefined;        
//     },
    
//     loadImage:function(url){
//         this.totalCount++;
//         this.loaded = false;
//         $('#loadingscreen').show();
//         var image = new Image();
//         image.src = url;
//         image.onload = loader.itemLoaded;
//         return image;
//     },
//     soundFileExtn:".ogg",
//     loadSound:function(url){
//         this.totalCount++;
//         this.loaded = false;
//         $('#loadingscreen').show();
//         var audio = new Audio();
//         audio.src = url+loader.soundFileExtn;
// 		audio.addEventListener("canplaythrough", loader.itemLoaded, false);
//         return audio;   
//     },
//     itemLoaded:function(){
//         loader.loadedCount++;
//         $('#loadingmessage').html('Loaded '+loader.loadedCount+' of '+loader.totalCount);
//         if (loader.loadedCount === loader.totalCount){
//             // Loader has loaded completely..
//             loader.loaded = true;
//             // Hide the loading screen 
//             $('#loadingscreen').hide();
//             //and call the loader.onload method if it exists
//             if(loader.onload){
//                 loader.onload();
//                 loader.onload = undefined;
//             }
//         }
//     }
// }

// var mouse = {
//     x:0,
//     y:0,
//     down:false,
//     init:function(){
//         $('#gamecanvas').mousemove(mouse.mousemovehandler);
//         $('#gamecanvas').mousedown(mouse.mousedownhandler);
//         $('#gamecanvas').mouseup(mouse.mouseuphandler);
//         $('#gamecanvas').mouseout(mouse.mouseuphandler);
//     },
//     mousemovehandler:function(ev){
//         var offset = $('#gamecanvas').offset();
        
// 		mouse.x = ev.pageX - offset.left;
// 		mouse.y = ev.pageY - offset.top;
		
// 		if (mouse.down) {
// 		    mouse.dragging = true;
// 		}
//     },
//     mousedownhandler:function(ev){
//         mouse.down = true;
//         mouse.downX = mouse.x;
//         mouse.downY = mouse.y;
//         ev.originalEvent.preventDefault();
        
//     },
//     mouseuphandler:function(ev){
//         mouse.down = false;
//         mouse.dragging = false;
//     }
// }

