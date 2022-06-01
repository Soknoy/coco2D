import { _decorator, Component, Node, input, Input, KeyCode, EventKeyboard, game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PauseResume')
export class PauseResume extends Component {

    pauseResumeGame(event: EventKeyboard){
        switch(event.keyCode){
            case KeyCode.SPACE:
                game.pause()
                break;
            case KeyCode.ENTER:
                game.resume()
                break;
        }

    }

    onLoad(){
        input.on(Input.EventType.KEY_DOWN, this.pauseResumeGame, this);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}

