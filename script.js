// Setup
const fullWidth = window.innerWidth;
const fullHeight = window.innerHeight;
const lineLen = fullWidth * 0.02;

// Create screen canvas
const screenCanvas = document.getElementById("myCanvas");
const screenCanvasCtx = screenCanvas.getContext("2d");
screenCanvas.width = fullWidth
screenCanvas.height = fullHeight

// Create memory canvas
const memCanvas = document.createElement('canvas');
const memCanvasCtx = memCanvas.getContext("2d");
memCanvas.width = fullWidth
memCanvas.height = fullHeight
memCanvasCtx.lineWidth = 4;
memCanvasCtx.lineCap = "round";
memCanvasCtx.fillStyle = 'rgba(200, 30, 30, 1)';
memCanvasCtx.strokeStyle = 'rgba(255, 220, 120, 1)';

// Drawing
var currX = fullWidth / 2;
var currY = fullHeight / 2;
const startX = currX;
const startY = currY;
memCanvasCtx.fillRect(0,0,fullWidth,fullHeight)

var currStep = 0;
const nextStep = () => {
    if (currStep == data.length) {
        memCanvasCtx.stroke();
        return;
    }
    const move = data[currStep];
    memCanvasCtx.moveTo(currX, currY);
    
    const direction = move[0];
    console.log(move[2])
    if (direction != "C") {
        switch (direction) {
            case "N":
                currY -= lineLen;            
                break;
            case "S":
                currY += lineLen;            
                break;
            case "W":
                currX -= lineLen;            
                break;
            case "E":
                currX += lineLen;            
                break;
            case "NW":
                currX -= lineLen;            
                currY -= lineLen;            
                break;
            case "NE":
                currX += lineLen;            
                currY -= lineLen;            
                break;
            case "SW":
                currX -= lineLen;            
                currY += lineLen;            
                break;
            case "SE":
                currX += lineLen;            
                currY += lineLen;            
                break;
        }
    
        memCanvasCtx.lineTo(currX, currY);
    }
    currStep++;
    nextStep();
}

nextStep()
screenCanvasCtx.drawImage(memCanvas, 0, 0);
