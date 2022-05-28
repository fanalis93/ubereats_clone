import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",
        // alignSelf: "center",
        // backgroundColor: "teal",
        height: "10%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
      }}
    >
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="#fff"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="#fff"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "#fff",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "#fff" : "black",
        fontSize: 15,
        fontWeight: "700",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
