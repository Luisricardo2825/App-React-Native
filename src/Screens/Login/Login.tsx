import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../Components/Button/Button';
import {Colors} from '../../Styles/GeneralStyle';
import Input from '../../Components/Input/Input';
import Icon from 'react-native-vector-icons/EvilIcons';
import {LoginProps} from '../@Types/Types';
import DropShadowContainer from '../../Components/DropShadowContainer/DropShadowContainer';
import {Formik} from 'formik';
import validationSchema from './Schema';
import Styles from './style';
import {useDispatch} from 'react-redux';
import type {User} from '../../Redux/@Types/User';

const Login: React.FC<LoginProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogin = (values: User) => {
    const {User, password} = values;

    const data = {
      User: User,
      password: password,
      loggedIn: true,
    };
    console.log(data);
    dispatch({
      type: 'LOGIN',
      data: data,
    });

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'User',
          params: data,
        },
      ],
    });
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.Header}>
        <Icon
          name="arrow-left"
          size={50}
          color={Colors.tertiary}
          style={Styles.IconStyle}
          onPress={() => navigation.goBack()}
        />
        <Text style={Styles.HeaderTitle}>Sign In</Text>
      </View>
      <DropShadowContainer>
        <Formik
          initialValues={{User: '', password: '', loggedIn: false}}
          onSubmit={handleLogin}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Input
                placeholder="Usuário"
                label="Usuário"
                onChangeText={handleChange('User')}
                onBlur={handleBlur('User')}
                value={values.User}
                error={errors.User}
                touched={touched.User}
              />
              <Input
                placeholder="Senha"
                label="Senha"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                touched={touched.password}
              />
              <Button
                title="Sign In"
                onPress={handleSubmit}
                style={Styles.SignInButton}
              />
            </View>
          )}
        </Formik>

        <Text style={Styles.RegisterText}>
          Don't have a account? Register here
        </Text>
      </DropShadowContainer>
    </View>
  );
};

/*  */
export default Login;
