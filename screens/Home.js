import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categoris from "../components/Categoris";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categoris />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // padding: 8,
    marginTop: 20,
    backgroundColor: "#eee",
  },
});
