import Component from "./component.js";

class Input extends Component{
    constructor(){
        super();
        this.keys = {};
        this.gamepadIndex = null;

    document.addEventListener("keydown", (event)=>(this.keys[event.code] = true));
    document.addEventListener("keyup", (event)=>(this.keys[event.code] = false));

    window.addEventListener("gamepaddisconnected", (event)=> {
        console.log("Gamepad connected", event.gamepad);
        this.gamepadIndex = event.gamepad.index;

    });
    
    window.addEventListener("gamepaddisconnected", (event)=> {
        console.log("Gamepad disconnected", event.gamepad);
        this.gamepadIndex = null;

    });
    }

    isKeyDown(key){
        return this.key[key]||false;
    }
    getGamePad(){
        if(this.gamepadIndex !== null){
            const gamepad = navigatort.getGamepads();
            return gamepad[this.gamepadIndex];
        }
        return null;
    }
     isGamepadButtonDown(buttonIndex){
        const gamepad = this.getGamepad();
        if(gamepad && gamepad.buttons[buttonsIndex]){
            
        }
     }
}

