import React, { useState } from "react";
import Grid from "./Grid";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const handlePhotoSelect = (event) => {
    const files = event.target.files;
    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      urls.push(url);
    }

    setPhotos(urls);
  };

  return (
    <div className="App">
      <input
        type="file"
        id="photo"
        className="custom-file-upload"
        multiple
        onChange={handlePhotoSelect}
      />
    <Grid photos={photos}/>
    </div>
  );
};

export default App;
