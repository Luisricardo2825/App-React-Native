import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {deviceHeight} from '../../Utils/Dimensions';

interface Styles {
  HorizontalScrollBox: StyleProp<ViewStyle>;
}

const defaultHeight = deviceHeight * 0.15;
const defaultWidth = '92%';

const defaultStyle: Styles['HorizontalScrollBox'] = {
  marginTop: 10,
  width: defaultWidth,
  maxHeight: defaultHeight,
  padding: 5,
};

const Style = (style: Styles['HorizontalScrollBox']) =>
  StyleSheet.create<Styles | any>({
    HorizontalScrollBox: style ? style : defaultStyle,
  });

export default Style;
