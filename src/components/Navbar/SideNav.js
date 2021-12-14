import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useState } from "react";
import axios from "axios";
import "./SideNav.css";

export default function Flatbutton({ text, onPress }) {
  const [photo, setPhoto] = useState(text);
  const [clientId, setClientId] = useState(
    "8TO1C-HUeEdcCe_p-xyCJIl46qbzqAa6NsVXUEUcxmE"
  );
  const [result, setResult] = useState([]);
  function handleChange(event) {
    setPhoto(event.target.value);
  }
  function handleSubmit(event) {
    console.log(photo);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      photo +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  return (
    <TouchableOpacity onPress={handleSubmit} type="submit">
      {result.map((photo) => (
        <img src={photo.urls.small} />
      ))}
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 175,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#e66465"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left"
  }
});
//essentially what I was trying to do was use the text on the buttons i created and script
// them as the search term sent the Unsplash
// My issue was the formatting, I basically ran out of time before i was able to fix it
