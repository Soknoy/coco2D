import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Mouse')
export class Mouse extends Component {
    @property
    
    onLoad() {
        
    }
    start(){
        this.node.on(Node.EventType.MOUSE_DOWN, () => {
            console.log('Mouse Down')
        },this)
        this.node.on(Node.EventType.MOUSE_ENTER, () => {
            console.log('Mouse Enter')
        },this)
        this.node.on(Node.EventType.MOUSE_LEAVE, () => {
            console.log('Mouse Leave')
        },this)
        this.node.on(Node.EventType.MOUSE_MOVE, () => {
            console.log('Mouse MOve')
        },this)
        this.node.on(Node.EventType.MOUSE_UP, () => {
            console.log('Mouse Up')
        },this)
        this.node.on(Node.EventType.MOUSE_WHEEL, () => {
            console.log('Mouse Wheel')
        },this)
    }
    update(deltaTime: number) {
        
    }
}

