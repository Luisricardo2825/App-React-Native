import React from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import Avatar from '../../../Components/Avatar/Avatar';
import DropShadowContainer from '../../../Components/DropShadowContainer/DropShadowContainer';
import {ItemFlatListOption} from '../../../Components/ItemFlatListProfile/@Types/ItemFlatListProfile';
import ItemFlatList from '../../../Components/ItemFlatListProfile/ItemFlatListProfile';
import {BASE_URL_GITHUB} from '../../../constants/constants';
import type {User} from '../../../Redux/@Types/User';
import Icon from '../../../router/Utils/Icon';

import {
  Colors,
  Fonts,
  FontSizes,
  FontWeight,
} from '../../../Styles/GeneralStyle';
import ScreenStyles from '../../../Styles/ScreenStyles';
import {GithubProps} from '../../@Types/Types';
import {GithubGetUserReposResponse, GithubGetUserResponse} from './@Types';
import Styles from './Style';

const Github: React.FC<GithubProps> = () => {
  const Data = useSelector((state: User) => state);
  const [githubData, setGithubData] = React.useState<{
    UserInfo: GithubGetUserResponse | null;
    UserRepos: GithubGetUserReposResponse;
  }>({
    UserInfo: null,
    UserRepos: [],
  });
  const AvatarURL = 'https://randomuser.me/api/portraits/men/36.jpg';
  const BackgroundImage = 'https://picsum.photos/id/10/1200/900';
  const {User} = Data;
  const Options: Array<ItemFlatListOption> = [];
  React.useEffect(() => {
    fetch(`${BASE_URL_GITHUB}/users/${User}`)
      .then(response => response.json())
      .then(response =>
        setGithubData(prevData => {
          return {...prevData, UserInfo: response};
        }),
      );
    fetch(`${BASE_URL_GITHUB}/users/${User}/repos`)
      .then(response => response.json())
      .then(response =>
        setGithubData(prevData => {
          return {...prevData, UserRepos: response};
        }),
      );
  }, [User]);
  return (
    <View style={ScreenStyles.container}>
      <Text
        style={{
          ...ScreenStyles.HeaderTitle,
          ...{alignSelf: 'center', margin: 10, color: Colors.Black},
        }}>
        Gi<Text style={{color: Colors.tertiary}}>th</Text>ub
      </Text>
      <DropShadowContainer>
        <ImageBackground
          style={Styles.Background}
          source={{uri: BackgroundImage}}>
          <View style={Styles.contentBox}>
            <Avatar source={githubData.UserInfo?.avatar_url || AvatarURL} />
            <Text
              style={{
                color: Colors.White,
                fontFamily: Fonts.extraBold,
                fontSize: FontSizes.large,
                fontWeight: FontWeight.bold,
              }}>
              {githubData.UserInfo?.name}
            </Text>
            <View style={Styles.additionalInformationContainer}>
              <Text
                style={{
                  color: Colors.LightRed,
                  fontFamily: Fonts.regular,
                  fontSize: FontSizes.small,
                  fontWeight: FontWeight[100],
                }}>
                <Icon name="map-marker-alt" color={Colors.LightRed} size={15} />{' '}
                {`${githubData?.UserInfo?.location}`}
              </Text>
              {githubData.UserRepos.map(repoInfo => {
                repoInfo.name;
                Options.push({
                  id: repoInfo.id,
                  position: repoInfo.id,
                  title: repoInfo.name,
                  action: () => {},
                  icon: 'github',
                  iconSize: 20,
                });
              })}
              <FlatList
                data={Options}
                renderItem={ItemFlatList}
                contentContainerStyle={Styles.FlatList}
                style={Styles.FlatList}
              />
            </View>
          </View>
        </ImageBackground>
      </DropShadowContainer>
    </View>
  );
};

export default Github;
