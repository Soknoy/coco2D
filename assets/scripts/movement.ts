import { _decorator, Component, Node, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('movement')
export class movement extends Component {
    @property
    speed : number = 16;
    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.position.x+this.speed*deltaTime, this.node.position.y)
        if(this.node.position.x > this.node.parent.getComponent(UITransform).width){
            this.node.setPosition(0,this.node.position.y)
        }
    }
}

