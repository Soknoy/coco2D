import { _decorator, Component, Node, input, Input, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('btnPlay')
export class btnPlay extends Component {

    playGame(){
        director.loadScene('Learning')
    }
    onLoad(){
        this.node.on(Node.EventType.MOUSE_DOWN, this.playGame, this)
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}

