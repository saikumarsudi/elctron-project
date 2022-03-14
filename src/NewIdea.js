import React from "react";
import './NewIdea.css';

function NewIdea (){
    return(
        <div className="Enhancement">
            <div>
                <h1>New idea</h1>
            </div>
            <div className="formitems">
                <div className="items" id="modulelebel">
                    <lebel className="lebel"  for="module">Select the adapt module to which feature is relevent</lebel>
                    <select id="module" name="module">
                        <option value="Configuration">Configuration</option>
                        <option value="Performance">Performance</option>
                    </select>
                </div>
                <div className="items" id="subjectlebel">
                    <lebel className="lebel" for="subject">Idea suggestion request to be used as subject on related email correspondence</lebel>
                    <input type="text" id="subject" name="subject" placeholder="subject"></input>
                </div>
                <div className="items" id="descriptionlebel">
                    <lebel className="lebel" for="description">Please decribe your idea in detail</lebel>
                    <textarea id="description" name="description" placeholder="description"></textarea>
                </div>
                <div className="items" id="attachingFile">
                    <img id="image" src="paperclip.svg" alt="Not found" />
                    <p>Attach file</p>
                </div>
            </div>
            <div className="navigation">
                <button id="cancel-button">Cancel</button>
                <button id="next-button">Next</button>
            </div>
        </div>
    );
}

export default NewIdea;