import { _decorator, Component, Node, Input, input, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TouchInput')
export class TouchInput extends Component {
    
    onLoad(){
        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this)
    }

    start() {
        
    }

    update(deltaTime: number) {
        
    }
    onTouchStart(event: EventTouch) {
        console.log(event.getLocation());  // location on screen space
        console.log(event.getUILocation());  // location on UI space
    }
}

