import React from 'react';
import './App.css';
import { Navbar, Button, Alignment, Icon } from '@blueprintjs/core';

function App() {
  // const onSnipClick = async () => {
  //   const { desktopCapturer, shell, remote } = window.require('electron');
  //   const screen = remote.screen;
  //   const path = window.require('path');
  //   const os = window.require('os');
  //   const fs = window.require('fs');
  //   const win = remote.getCurrentWindow();
  //   const windowRect = win.getBounds();

  //   win.hide();

  //   try {
  //     const screenSize = screen.getPrimaryDisplay().workAreaSize;
  //     const maxDimension = Math.max(screenSize.width, screenSize.height);

  //     const sources = await desktopCapturer.getSources({
  //       types: ['screen'],
  //       thumbnailSize: {
  //         width: maxDimension * window.devicePixelRatio,
  //         height: maxDimension * window.devicePixelRatio
  //       }
  //     });

  //     const entireScreenSource = sources.find(
  //       source => source.name === 'Entire Screen' || source.name === 'Screen 1'
  //     );

  //     if (entireScreenSource) {
  //       const outputPath = path.join(os.tmpdir(), 'screenshot.png');

  //       const image = entireScreenSource.thumbnail
  //         .resize({
  //           width: screenSize.width,
  //           height: screenSize.height
  //         })
  //         .crop(windowRect)
  //         .toPNG();

  //       fs.writeFile(outputPath, image, err => {
  //         // win.show();

  //         if (err) {
  //           return console.error(err);
  //         }
  //         shell.openExternal(`file://${outputPath}`);
  //       });
  //     } else {
  //       window.alert('Screen source not found.');
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };






  return (
    <div className="App">
      <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Electron Snip</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="settings" text="Settings" />
          <Button className="bp3-minimal" icon="help" text="About" />
          <Button
            className="bp3-minimal"
            icon="camera"
            text="Snip"
            
          />
        </Navbar.Group>
      </Navbar>
      </div>
      <div className="Description">
        <textarea id="w3review" name="w3review" rows="10" cols="100">
          At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
        </textarea>

      </div>
      <div className="App-main">
          <Icon icon="camera" iconSize={100} />
          <p>Electron Snip</p>
        
      </div>
      <div className="bottom-navigation">
        <button id="cancel-button">save</button>
        <button id="save-button">cancel</button>
        
      </div>
      </div>
  );
}

export default App;