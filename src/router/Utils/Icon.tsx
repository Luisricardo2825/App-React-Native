import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import {IconProps} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

interface customIcon extends IconProps {
  IconFamily?: string;
}
const Icon = ({name, size, color, IconFamily, ...rest}: customIcon) => {
  const CheckIcon = () => {
    const Icons = [
      EvilIcons,
      FontAwesome,
      FontAwesome5,
      Fontisto,
      Foundation,
      Ionicons,
      MaterialCommunityIcons,
      MaterialIcons,
      Octicons,
      SimpleLineIcons,
      Zocial,
      Feather,
      AntDesign,
      Entypo,
    ];

    if (IconFamily !== undefined) {
      let Finded: any = false;
      let index = 0;
      Finded = Icons.filter((Item: any) => {
        if (
          String(IconFamily).toLowerCase() ===
          Item.getFontFamily().toLowerCase()
        ) {
          index = Icons.indexOf(Item);
          return true;
        }
      });

      if (Finded) {
        const Element = Icons[index];

        return <Element name={name} size={size} color={color} {...rest} />;
      }
    }

    for (let index = 0; index < Icons.length; index++) {
      const Element: any = Icons[index];

      if (Element.hasIcon(name)) {
        return <Element name={name} size={size} color={color} {...rest} />;
      }
    }
    return null;
  };
  return <CheckIcon />;
};

export default Icon;
