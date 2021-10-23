import {StyleSheet} from 'react-native';
import {Colors} from '../common';

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 6,
    marginBottom: 8,
    marginHorizontal: 12,
    borderLeftWidth: 6,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  success: {
    borderLeftColor: Colors.success,
  },
  pending: {
    borderLeftColor: Colors.primary,
  },
});

export const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

export const badgeStyle = StyleSheet.create({
  success: {
    backgroundColor: Colors.success,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  pending: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
