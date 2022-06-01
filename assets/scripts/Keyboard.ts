import { _decorator, Component, Node, Input, EventKeyboard, KeyCode, input, macro } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Keyboard')
export class Keyboard extends Component {
    myFunction(){
        console.log('Hello world calling my function in every 3 seconds')
    }
    onLoad(){
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this)

        this.schedule(this.myFunction, 3, macro.REPEAT_FOREVER,0)

    }
    
    start() {

    }

    update(deltaTime: number) {
        
    }
    onKeyDown (event: EventKeyboard){
        
        switch(event.keyCode){
            case KeyCode.ENTER:
                console.log('Press Enter key')
                break;
        }
    }
    onKeyUp (event: EventKeyboard){
        switch(event.keyCode){
            case KeyCode.ENTER:
                console.log('Release enter key')
                break;
        }
    }
}

