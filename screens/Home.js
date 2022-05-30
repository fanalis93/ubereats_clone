import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTabs />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // padding: 8,
    // marginTop: 20,
    backgroundColor: "#eee",
  },
});
