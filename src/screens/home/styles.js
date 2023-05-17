import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.terciary,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  buttonContainer: {
    marginTop: 40,
  },
});
