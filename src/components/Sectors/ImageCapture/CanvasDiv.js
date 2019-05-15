import React from "react";
import "../Styles/style.css";

export class CanvasDiv extends React.Component {
   
    constructor(props){
        super(props);
        this.state={
            count:0,
            name:'',
            id:'',
            sno:0

        }
    }
    
    getAlert(){
    
        this.setState({
            count: this.state.count + 1
        })
        let newelem = document.createElement("canvas");
        let newDiv = document.createElement("div");
        let closeBtn = document.createElement("i");
        let addBtn= document.createElement("i");
        newDiv.setAttribute("id", this.state.count + "-canvas");
        newDiv.setAttribute("class", "canvas-delete");
        closeBtn.setAttribute("class", "fa fa-times");
        addBtn.setAttribute("class", "fa fa-edit");
        newelem.style.position = "absolute";
        closeBtn.style.top = this.props.values.y - 9 + "px";
        closeBtn.style.left = this.props.values.w + this.props.values.x + 8 + "px";
        addBtn.style.top = this.props.values.y - 15 + "px";
        addBtn.style.left = this.props.values.x +4 + "px";
        newelem.style.left = this.props.values.x + "px";
        newelem.style.border = "2px solid "+ this.props.color;
        closeBtn.style.color= this.props.color;
        addBtn.style.color= this.props.color;
        newelem.style.top = this.props.values.y + "px";
        newelem.height = this.props.values.h;
        newelem.width = this.props.values.w;
        let ctx = newelem.getContext("2d");
        
        ctx.strokeRect(
          newelem.style.left,
          newelem.style.top,
          newelem.width,
          newelem.height
        );
        newDiv.append(newelem);
        newDiv.append(closeBtn);
        newDiv.append(addBtn);
        document.getElementById("canvas-div").append(newDiv);
    } 
    render(){
    
        return(
            <div id="canvas-div" ></div>
            
        )
    }

}
export default CanvasDiv;