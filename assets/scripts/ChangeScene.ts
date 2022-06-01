import { _decorator, Component, Node, director, input, Input, EventKeyboard, KeyCode } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ChangeScene')
export class ChangeScene extends Component {

    changeScene(event: EventKeyboard){
        switch(event.keyCode){
            case KeyCode.ENTER:
                director.loadScene('Learning')
                break;
        }
    }

    onLoad(){
        director.preloadScene('Learning', () => {
            console.log('The Learning has been loaded in memory')
        })
        input.on(Input.EventType.KEY_DOWN, this.changeScene, this)
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}

