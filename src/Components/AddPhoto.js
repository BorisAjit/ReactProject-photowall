import React, {Component} from "react";

class AddPhoto extends Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imgLink = event.target.elements.link.value;
        const imgDescription = event.target.elements.description.value;
        const post = {
            id: "0",
            description: imgDescription,
            imageLink: imgLink
        }
        if(imgDescription && imgLink){
           this.props.onAddPhoto(post)
       }
    }

    render(){
        return <div>
            <h1>PhotoWall</h1>
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="link" name="link"></input>
                    <input type="text" placeholder="description" name="description"></input>
                    <button>Post</button>
                </form>
            </div>
        </div>
    }
}

export default AddPhoto