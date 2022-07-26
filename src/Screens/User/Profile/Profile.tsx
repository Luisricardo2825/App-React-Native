import React from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Avatar from '../../../Components/Avatar/Avatar';
import DropShadowContainer from '../../../Components/DropShadowContainer/DropShadowContainer';
import {ItemFlatListOption} from '../../../Components/ItemFlatListProfile/@Types/ItemFlatListProfile';
import ItemFlatListProfile from '../../../Components/ItemFlatListProfile/ItemFlatListProfile';
import type {User} from '../../../Redux/@Types/User';
import {Colors, Fonts, FontSizes} from '../../../Styles/GeneralStyle';
import ScreenStyles from '../../../Styles/ScreenStyles';
import {ProfileProps} from '../../@Types/Types';
import Styles from './Style';
import Order from './Utils/OrderButtonList';

const Profile: React.FC<ProfileProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const Data = useSelector((state: User) => state);
  const BackgroundImage = 'https://picsum.photos/id/10/1200/900';
  const AvatarURL = 'https://randomuser.me/api/portraits/men/36.jpg';

  const {User} = Data;
  const Options: Array<ItemFlatListOption> = [
    {
      title: 'Settings',
      icon: 'settings',
      iconSize: 30,
      action: () => {},
      id: 1,
      position: '1',
    },
    {
      title: 'Logout',
      icon: 'logout',
      iconSize: 30,
      action: () => {
        console.log('logout');
        dispatch({
          type: 'LOGOUT',
        });

        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Start',
            },
          ],
        });
      },
      id: 2,
      position: 'ZZZ',
    },
    {
      title: 'Help',
      icon: 'help-circle',
      iconSize: 30,
      action: () => {},
      id: 3,
      position: '2',
    },
  ];

  return (
    <View style={ScreenStyles.container}>
      <Text
        style={{
          ...ScreenStyles.HeaderTitle,
          ...{alignSelf: 'center', margin: 10, color: Colors.Black},
        }}>
        Pro<Text style={{color: Colors.tertiary}}>fi</Text>le
      </Text>
      <DropShadowContainer>
        <ImageBackground
          source={{
            uri: BackgroundImage,
          }}
          style={Styles.ImageBackground}>
          <Avatar source={AvatarURL} />
          <Text
            style={{
              color: Colors.White,
              fontFamily: Fonts.regular,
              fontSize: FontSizes.extraLarge,
            }}>
            {User}
          </Text>
          <FlatList
            data={Order(Options)}
            renderItem={ItemFlatListProfile}
            contentContainerStyle={Styles.FlatList}
            style={Styles.FlatList}
          />
        </ImageBackground>
      </DropShadowContainer>
    </View>
  );
};

export default Profile;
