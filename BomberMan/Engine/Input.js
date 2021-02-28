import SceneManager from "./SceneManager.js"
import Vector from "./Vector.js"

class Input{
    static keys = [];
    static keysDown = [];
    static keysUp = [];
    static frameKeysDown = [];
    static frameKeysUp = [];
  
    static mouseButtons = [];
    static mouseButtonsDown = [];
    static mouseButtonsUp = [];
    static frameMouseButtonsDown = [];
    static frameMouseButtonUp = [];
  
    static mousePosition = new Vector();
    static frameMousePosition;
    static lastFrameMousePosition;
  
    static scrollWheel = 0;
    static frameScrollWheel = 0;

    static SwapArrays(){
        this.frameKeysDown = this.keysDown;
        this.frameKeysUp = this.keysUp;
        this.keysDown = [];
        this.keysUp = [];

        this.frameMouseButtonUp = this.mouseButtonsUp;
        this.frameMouseButtonsDown = this.mouseButtonsDown;
        this.mouseButtonsDown = [];
        this.mouseButtonsUp =[];

        this.lastFrameMousePosition = this.frameMousePosition;
        this.frameMousePosition = new Vector(this.mousePosition);

        this.frameScrollWheel = this.scrollWheel;
        this.scrollWheel = 0;

        SceneManager.currrentScene.callMethod("onKeyDown",this.frameKeysDown);
        SceneManager.currrentScene.callMethod("onKeyUp",this.framekeysUp);

        SceneManager.currrentScene.callMethod("onMouseButtonDown",this.frameMouseButtonsDown);
        SceneManager.currrentScene.callMethod("onMouseButtonUp",this.frameMouseButtonUp);

        if(this.frameMousePosition && this.lastFrameMousePosition && !this.lastFrameMousePosition != this.frameMousePosition)
            SceneManager.currrentScene.callMethod("onMouseMove",this.frameMousePosition);
        SceneManager.currrentScene.callMethod("onScrollWheel",this.frameScrollWheel);
    }

    static getKey(key){
        return this.keys[key];
    }
    static getKeyDown(key){
        return this.framekeysDown[key];
    }
    static getKeyUp(key){
        return this.frameKeysDown[key];
    }
    static getMouseButton(button){
        return this.mouseButtons[button];
    }
    static getMouseButtonUp(button){
        return this.frameMouseButtonUp[button];
    }
    static getMouseButtonDown(buttton){
        return this.frameMouseButtonsDown[button];
    }

    static getScrollWheel(){
        return this.framescrollWheel;
    }

    static getMousePosition(){
        return this.frameMousePosition;
    }
    static getMousePositionDelta(){
        return Vector.decrease(this.frameMousePosition,this.lastFrameMousePosition);
    }

    static attach(document){
        document.body.addEventListener('keydown', keyDown);
        document.body.addEventListener('keyup', keyUp);
        document.body.addEventListener('keypress', keyPress);
        document.body.addEventListener('mousedown', mouseDown);
        document.body.addEventListener('mouseup', mouseUp);
        document.body.addEventListener('mousemove', mouseMove);
        document.body.addEventListener('wheel', wheelEvent);
        document.body.addEventListener('contextmenu', contextMenu);

        function keyDown(event){
            if(Input.keys[event.key] != true)
                Input.keysDown[event.key] = true;
            Input.keys[event.key] = true;
        }

        function keyUp(event){
            if(Input.keys[event.key] != false)
                Input.keysUp[event.key] = true;
            Input.key[event.key] = false;
        }

        function mouseDown(event){
            if(Input.mouseButtons[event.button] != true)
                Input.mouseButtonsDown[event.button];
            Input.mouseButtons[event.button] = true;
        }

        function mouseUp(event){
            if(Input.mouseButtons[event.button] != false)
                Input.mouseButtonsUp[event.mouseButtons];
            Input.mouseButtons[event.button] = false;
        }

        function mouseMove(event){
            Input.mousePosition.x = event.clientX;
            Input.mousePosition.y = event.clientY;
        }

        function wheelEvent(event){
            if(event.deltaY != 0)
                Input.mouseScrolDelta = event.deltaY;
        }

        function contextMenu(event){
            if(event.preventDefault != undefined)
                event.preventDefault();
            if(event.stopPropagation != undefined)
                event.stopPropagation();
            return false;
        }
    }
}

export default Input;