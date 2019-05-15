import React from "react";
import "../Styles/style.css";
export class CanvasElement extends React.Component {
  static defaultProps = {
    width: 501,
    height: 278,
    strokeStyle: "red",
    fillStyle:"red",
    lineWidth: 1,
    onSelected: () => {}
  };
  canvas = null;
  ctx = null;
  isDirty = false;
  isDrag = false;
  startX = -1;
  startY = -1;
  curX = -1;
  curY = -1;
  
  componentDidMount(props) {
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = this.props.strokeStyle;
    this.ctx.lineWidth = this.props.lineWidth;
    this.addMouseEvents();
  }
  updateCanvas = () => {
    if (this.isDrag) {
      requestAnimationFrame(this.updateCanvas);
    }
    if (!this.isDirty) {
      return;
    }
   
    if (this.isDrag) {
        this.ctx.clearRect(0, 0, this.props.width, this.props.height);
      const rect = {
        x: this.startX,
        y: this.startY,
        w: this.curX - this.startX,
        h: this.curY - this.startY
      };
      this.ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
    }
    this.isDirty = false;
  };

  componentWillUnmount() {
    this.removeMouseEvents();
  }

  addMouseEvents() {
    const mouseTarget= document.getElementById("canvas");
    mouseTarget.addEventListener("mousedown", this.onMouseDown, false);
    mouseTarget.addEventListener("mousemove", this.onMouseMove, false);
    mouseTarget.addEventListener("mouseup", this.onMouseUp, false);
  }
  removeMouseEvents() {
    const mouseTarget= document.getElementById("canvas");
    mouseTarget.removeEventListener("mousedown", this.onMouseDown, false);
    mouseTarget.removeEventListener("mousemove", this.onMouseMove, false);
    mouseTarget.removeEventListener("mouseup", this.onMouseUp, false);
  }

  onMouseDown = e => {
    this.isDrag = true;
    this.curX = this.startX = e.offsetX;
    this.curY = this.startY = e.offsetY;
    requestAnimationFrame(this.updateCanvas);
  };

  onMouseMove = e => {
    if (!this.isDrag) return;
    this.curX = e.offsetX;
    this.curY = e.offsetY;
    this.isDirty = true;
  };

  onMouseUp = e => {
      
    this.isDrag = false;
    this.isDirty = true;
    
    const rect = {
      x: Math.min(this.startX, this.curX),
      y: Math.min(this.startY, this.curY),
      w: Math.abs(e.offsetX - this.startX),
      h: Math.abs(e.offsetY - this.startY)
    };
    this.ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
    // this.ctx.fillStyle="#FF0000";
    // this.ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    this.props.onSelected(rect);
   
    //  this.props.myCallback(rect);
  };
  
  render() {
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref={c => {
          this.canvas = c;
        }}
        id="canvas"
      />
    );
  }
}
export default CanvasElement;
