import React from 'react';
import {View} from 'react-native';
import Icon from '../../router/Utils/Icon';
import {Colors} from '../../Styles/GeneralStyle';
import Button from '../Button/Button';
import {ItemFlatListOption} from './@Types/ItemFlatListProfile';
import Styles from './style';

const ItemFlatListProfile = ({item}: {item: ItemFlatListOption}) => {
  return (
    <View style={Styles.ItemContainer}>
      <Icon
        name={item?.icon || 'none'}
        size={item.iconSize}
        color={Colors.White}
      />
      <Button
        title={item.title}
        onPress={item.action}
        CustomText={{color: Colors.White}}
        style={Styles.Item}
      />
    </View>
  );
};

export default ItemFlatListProfile;
