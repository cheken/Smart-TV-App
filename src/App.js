import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Flatbutton from "./components/Navbar/SideNav";
import React from "react";
import axios from "axios";
import { useState } from "react";
//importing relevant libraries

function App() {
  const [image, setImage] = useState("");
  const clientId = "8TO1C-HUeEdcCe_p-xyCJIl46qbzqAa6NsVXUEUcxmE";
  const [result, setResult] = useState([]);
  const handleChange = (event) => {
    setImage(event.target.value);
  };
  //creating a search function with a user ID recieved from Unsplash
  const handleSubmit = () => {
    console.log(image);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId;
    // This will create a dynamic URL that changes according to the topic presented
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  };
  // The search function will take in a users input, register that an input has been recieved before
  // presenting it as a search term on unsplash which will provide the app with all images that have th erelevant tags
  // The app will then return the user with a grid format of th eimages based on the topics
  return (
    <div className="App">
      <Navbar />
      <Flatbutton text="Animation" />
      <Flatbutton text="Map" />
      <Flatbutton text="Cars" />
      <Flatbutton text="Romance" />
      <Flatbutton text="Fiction" />
      <Flatbutton text="Comedy" />
      <Flatbutton text="Engineering" />
      <Flatbutton text="Programming" />
      <Flatbutton text="Educational" />
      <Flatbutton text="Games" />
      <input
        onChange={handleChange}
        type="text"
        name="photo"
        placeholder="Search for photos..."
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
      <div>
        {result.map((photo) => (
          <img src={photo.urls.small} />
        ))}
      </div>
    </div>
  );
}
export default App;
