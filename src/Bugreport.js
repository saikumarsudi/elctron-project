import React from "react";
import './Bugreport.css';

function Bugreport (){



    return(
        <div className="Bugreport">
            <div>
                <h1>Report a Bug</h1>
            </div>
            <div className="formitems">
                <div className="items" id="modulelebel">
                    <lebel className="lebel"  for="module">Select the adapt module to which feature is relevent</lebel>
                    <select id="module" name="module" >
                        <option value="Configuration">Configuration</option>
                        <option value="Performance">Performance</option>
                    </select>
                </div>
                <div className="items" id="subjectlebel">
                    <lebel className="lebel" for="subject">Enhancement request to be used as subject on related email correspondence</lebel>
                    <input type="text" id="subject" name="subject" placeholder="subject"></input>
                </div>
                <div className="items" id="descriptionlebel">
                    <lebel className="lebel" for="description">Please decribe your idea in detail</lebel>
                    <textarea id="description" name="description" placeholder="description"></textarea>
                </div>
                <div className="items" id="behaviordeslebel">
                    <lebel className="behaviorlebel" for="behaviordescription">Please explain the desired behavior</lebel>
                    <textarea id="behaviordescription" name="description" placeholder="description"></textarea>
                </div>
                <div className="seconddrops">
                    <select id="duplicate">
                        <option value="Can Duplicate">Can Duplicate</option>
                        <option value="Can Duplicate twice">Can Duplicate twice</option>
                    </select>
                    <select id="frequency" >
                        <option value="Frequency">Frequency</option>
                        <option value="Secondary Frequency">Secondary Frequency</option>
                    </select>
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

export default Bugreport;