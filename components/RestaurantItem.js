import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialICommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    wait_time: "30-45 min",
    rating: 4.5,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    wait_time: "30-45 min",
    rating: 4.5,
  },
  {
    name: "India's Grill",
    image_url:
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    wait_time: "30-45 min",
    rating: 4.5,
  },
];

export default function RestaurantItem() {
  return (
    <View style={{ marginTop: 10, padding: 15 }}>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
}
const RestaurantImage = () => (
  <>
    {/* {localRestaurants.map((restaurant, index) => ( */}
    <View>
      <Image
        source={{
          // uri: restaurant.image_url,

          uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        }}
        style={{ width: "100%", height: 200 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialICommunityIcons
          name="heart-outline"
          size={25}
          color="#FFFFFF"
        />
      </TouchableOpacity>
      {/* <Text>{restaurant.name}</Text> */}
    </View>
    {/* ))} */}
  </>
);
const RestaurantInfo = () => (
  <>
    {/* {localRestaurants.map((restaurant, index) => ( */}
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      {/* <Text>{restaurant.name}</Text>
      <Text>{restaurant.wait_time}</Text>
      <Text>{restaurant.rating}</Text> */}
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Farmhouse Cusine
        </Text>
        <Text style={{ color: "grey" }}>30-45 • min </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          right: 10,
          borderRadius: 10,
        }}
      >
        <Text>4.5</Text>
      </View>
    </View>
    {/* ))} */}
  </>
);
