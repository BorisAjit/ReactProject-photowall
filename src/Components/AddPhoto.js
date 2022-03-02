import React, {Component} from "react";

class AddPhoto extends Component{
    render(){
        return <div>
            <h1>PhotoWall</h1>
            <div>
                <form className="form">
                    <input type="text" placeholder="link"></input>
                    <input type="text" placeholder="description"></input>
                    <button>Post</button>
                </form>
            </div>
        </div>
    }
}

export default AddPhoto