import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WalkingAnimation')
export class WalkingAnimation extends Component {
    function (node: Node){
        const animationComponent = node.addComponent(Animation)
        animationComponent.play()
    }
    onLoad(){
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}

