import { Component } from "react";
import "../styles.css";
import Pixel from "./pixel";


class Canvas extends Component {
    constructor() {
        super();

        this.logIndex = this.logIndex.bind(this);
    }
    state = {
        canvasWidth: 12
    }

    createCanvas () {
        let canvasToReturn = [];
        for (let y = 0; y < this.state.canvasWidth; y++) {
            for (let i = 0; i < this.state.canvasWidth; i++) {
                canvasToReturn.push(<Pixel index={y + " " + i} logIndex={this.logIndex}/>);
            }
        }
        return canvasToReturn;
    }

    logIndex (index) {
        console.log(index);
    }

    render() {
        return (
            <div className="canvas">
                <div className="canvas">
                    {this.createCanvas()}
                </div>
            </div>
        )
    }
}

export default Canvas;