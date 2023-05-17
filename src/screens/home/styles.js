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
    fontFamily: 'Inter-Bold',
    color: theme.colors.primary,
  },
  buttonContainer: {
    marginTop: 40,
  },
  inputContainer: {
    marginTop: 40,
  },
  inputTitle: {
    fontSize: 20,
  },
  input: {
    marginTop: 20,
  },
});
