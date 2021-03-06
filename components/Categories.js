import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native'

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Food",
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea ",
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts",
    },
]
export default function Categories() {
    return (
        <View style={{ marginTop: 5, backgroundColor: '#fff', paddingVertical: 3, paddingLeft: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* Loop Starts Here */}
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginRight: 21, marginTop: 10 }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: 'contain'
                            }}
                        />
                        <View style={{ marginTop: 10, }}>
                            <Text
                                style={{
                                    fontSize: 13,
                                    fontWeight: "900",
                                }}
                            >{item.text}</Text>
                        </View>
                    </View>
                ))}
                {/* Loop Ends Here */}
            </ScrollView >
        </View>
    )
}