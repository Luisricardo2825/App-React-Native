import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import DropShadowContainer from '../../../Components/DropShadowContainer/DropShadowContainer';
import {Colors} from '../../../Styles/GeneralStyle';
import ScreenStyles from '../../../Styles/ScreenStyles';
import {HomeProps} from '../../@Types/Types';
import Styles from '../../Login/style';
import HorizontalScrollBox from '../../../Components/HorizontalScrollBox/HorizontalScrollBox';
import Style from './Style';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import {Product} from '../../../Components/ProductCard/@Types/Product';
import {useSelector} from 'react-redux';
import {User} from '../../../Redux/@Types/User';

interface Itens {
  title: string;
  BackgroundColor?: string | undefined;
  shadowColor?: string | undefined;
  color: string;
  action?: () => void;
}

const Home: React.FC<HomeProps> = () => {
  const Data = useSelector((state: User) => state);

  const {email} = Data;
  return (
    <View style={ScreenStyles.container}>
      <View style={{...ScreenStyles.Header, ...{justifyContent: 'center'}}}>
        <Text
          style={{
            ...ScreenStyles.HeaderTitle,
            ...{alignSelf: 'center', margin: 10, color: '#070707'},
          }}>
          Ho<Text style={{color: Colors.tertiary}}>m</Text>e {email}
        </Text>
      </View>
      <DropShadowContainer>
        <Text style={Style.Titles}>Marcas</Text>
        <HorizontalScrollBox style={Style.HorizontalBox}>
          {data.map((item, index) => _renderItem({item, index}))}
        </HorizontalScrollBox>
        <Text style={Style.Titles}>Produtos</Text>

        <FlatList
          data={Products}
          renderItem={ProductCard}
          keyExtractor={(item: Product) => item.id}
          style={Style.FlatList}
          contentContainerStyle={Style.FlatListContainer}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
        />
      </DropShadowContainer>
    </View>
  );
};

const _renderItem = ({item, index}: {item: Itens; index: number}) => {
  const {title, BackgroundColor, shadowColor, color, action} = item;
  return (
    <Pressable
      style={{
        ...Styles.slide,
        ...{
          backgroundColor: BackgroundColor || Colors.White,
          shadowColor: shadowColor || Colors.Black,
        },
      }}
      key={index}
      onPress={action}>
      <Text style={{color: color || Colors.Black}}>{title}</Text>
      <Text>{index}</Text>
    </Pressable>
  );
};

const data: Array<Itens> = [
  {
    title: 'Hello',
    shadowColor: Colors.primary,
    color: '#e41c1c',
    action: () => {
      console.log('Hello');
    },
  },
  {
    title: 'Olá',
    shadowColor: Colors.Black,
    color: '#37ac7b',
    action: () => {
      console.log('Olá');
    },
  },
  {
    title: 'Hola',
    shadowColor: Colors.Black,
    color: '#da1456',
    action: () => {
      console.log('Hola');
    },
  },
  {
    title: 'Bonjour',
    shadowColor: Colors.Black,
    color: '#869125',
    action: () => {
      console.log('Bonjour');
    },
  },
  {
    title: 'Guten Tag',
    shadowColor: Colors.Black,
    color: '#8b37ac',
    action: () => {
      console.log('Guten Tag');
    },
  },
];

const Products: Array<Product> = [
  {
    id: '1',
    title: 'Product 1',
    price: '$100',
    image:
      'https://images1.kabum.com.br/produtos/fotos/sync_mirakl/169551/Processador-Amd-Ryzen-7-5800x-3-8ghz-4-7ghz-8-Cores-Am4_1637786735_m.jpg',
    backgroundColor: '#f80e0e',
  },
  {
    id: '2',
    title: 'Product 2',
    price: '$200',
    image: 'https://picsum.photos/id/232/200/300',
  },
  {
    id: '3',
    title: 'Product 3',
    price: '$300',
    image: 'https://picsum.photos/id/3/200/300',
  },
  {
    id: '4',
    title: 'Product 4',
    price: '$400',
    image: 'https://picsum.photos/id/4/200/300',
  },
  {
    id: '5',
    title: 'Product 5',
    price: '$500',
    image: 'https://picsum.photos/id/5/200/300',
  },
  {
    id: '6',
    title: 'Product 6',
    price: '$600',
    image: 'https://picsum.photos/id/6/200/300',
  },
  {
    id: '7',
    title: 'Product 7',
    price: '$700',
    image: 'https://picsum.photos/id/7/200/300',
  },
  {
    id: '8',
    title: 'Product 8',
    price: '$800',
    image: 'https://picsum.photos/id/8/200/300',
  },
  {
    id: '9',
    title: 'Product 9',
    price: '$900',
    image: 'https://picsum.photos/id/9/200/300',
  },
  {
    id: '10',
    title: 'Product 10',
    price: '$1000',
    image: 'https://picsum.photos/id/10/200/300',
  },
  {
    id: '11',
    title: 'Product 11',
    price: '$1100',
    image:
      'https://i.picsum.photos/id/11/200/300.jpg?hmac=n9AzdbWCOaV1wXkmrRfw5OulrzXJc0PgSFj4st8d6ys',
  },
];

export default Home;
