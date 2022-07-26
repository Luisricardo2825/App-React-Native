import React from 'react';
import {Image, Text, View} from 'react-native';
import {Product} from './@Types/Product';
import Style from './Style';

const ProductCard = ({item}: {item: Product}) => {
  const {id, title, price, image, backgroundColor} = item;
  return (
    <View key={id} style={Style.Card}>
      <Image
        source={typeof image === 'string' ? {uri: image} : image}
        style={{
          ...Style.CardImage,
          ...(backgroundColor ? {backgroundColor: backgroundColor} : {}),
        }}
        resizeMode="cover"
      />
      <Text style={Style.Price}>{price}</Text>
      <Text style={Style.ProductTitle}>{title}</Text>
    </View>
  );
};
export default ProductCard;
