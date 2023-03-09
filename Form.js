import React from "react"

function Form(){
    return (
        <main className="form-container">
            <div className="inputs-container">
                <input placeholder="Top text" type="text" className="form-input"></input>
                <input placeholder="Bottom text" type="text" className="form-input"></input>
                <button className="get-btn">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}

export default Form