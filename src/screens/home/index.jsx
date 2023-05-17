import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components';
import { theme } from '../../constants';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenidos</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.titleButton}
            title="Ingresar"
            onPress={() => {}}
            color={theme.colors.secondary}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
