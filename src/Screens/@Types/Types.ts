import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}

export interface Screen extends NavigationProps {
  title: string;
}
export interface StartProps extends Screen {}
export interface HomeProps extends Screen {}
export interface LoginProps extends Screen {}
export interface RegisterProps extends Screen {}
export interface ProfileProps extends Screen {}
export interface GithubProps extends Screen {}
