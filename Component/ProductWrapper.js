import React from 'react'
import {Button, ScrollView, View} from 'react-native';
import Product from './Product/Product';
import Header from './Header/Header';

const ProductWrapper = ({navigation}) => {
    const products = [
        {
          id: '1',
          name: 'samsung',
          price: 127000,
          color: 'black',
          image:
            'https://i.gadgets360cdn.com/products/large/Samsung-Galaxy-S23-Ultra-782x800-1675282446.jpg',
        },
        {
          id: '2',
          name: 'iphone',
          price: 90000,
          color: 'gold',
          image:
            'https://images.hindustantimes.com/productimages/htmobile4/P35597/images/Design/142099-v3-apple-iphone-13-pro-mobile-phone-large-5.jpg',
        },
        {
          id: '3',
          name: 'Google pixel',
          price: 50000,
          color: 'light green',
          image: 'https://m.media-amazon.com/images/I/51f4A6Tr8zL._SX522_.jpg',
        },
        {
          id: '4',
          name: 'one plus',
          price: 60000,
          color: 'green',
          image:
            'https://www.jiomart.com/images/product/420x420/493665045/oneplus-11-5g-256-gb-16-gb-ram-eternal-green-mobile-phone-digital-o493665045-p598159053-0-202302081921.jpeg',
        },
        {
          id: '5',
          name: 'samsung',
          price: 60000,
          image:
            'https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Motorola-Edge-40-Pro-1.jpg?tr=q-100',
        },
      ];
  return (
    <View>
    <Button title='back <--' onPress={()=>navigation.navigate("userdata")} />
      <Header />
      <ScrollView style={{margin: 20}}>
        {products.map(item => (
          <View key={item.id}>
          <Product item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
 
}

export default ProductWrapper