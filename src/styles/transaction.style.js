import {StyleSheet} from 'react-native';
import {Colors} from '../common/Colors';

export const transactionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingBottom: 32,
  },
  marginInput: {marginLeft: 8, color: Colors.black, padding: 0},
});
