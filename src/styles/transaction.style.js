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
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    marginHorizontal: 12,
    marginTop: 16,
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 12,
    padding: 8,
  },
});
