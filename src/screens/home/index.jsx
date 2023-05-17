import { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

import { styles } from './styles';
import { Header, YearContainer } from '../../components';
import { theme } from '../../constants';

const Home = () => {
  const [yearOption, setYearOption] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const onHandlerChangeText = (text) => {
    setYearOption(text.replace(/[^0-9]/g, ''));
  };

  const onHandlerConfirm = () => {
    const chosenYear = String(yearOption);
    if (isNaN(chosenYear) || chosenYear <= 18 || chosenYear > 130) {
      Alert.alert('Ups!', 'Debe ser mayor de 18 para continuar', [
        { text: 'Ok', style: 'destructive', onPress: () => setYearOption('') },
      ]);
    } else {
      setConfirmed(true);
      setSelectedYear(chosenYear);
      setYearOption('');
    }
  };

  const onHandlerStart = () => {};
  const Confirmed = () =>
    confirmed ? (
      <View style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Su edad es de:</Text>
        <YearContainer year={selectedYear} />
        <Button title="Ingresar" onPress={onHandlerStart} color={theme.colors.secondary} />
      </View>
    ) : null;

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenidos</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Ingrese su edad y presione "Ok"</Text>
          <TextInput
            placeholder="Ingrese su edad"
            style={styles.input}
            autoCapitali1ze="true"
            autoCorrect={false}
            onChangeText={onHandlerChangeText}
            value={yearOption}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.titleButton}
            title="Ok"
            onPress={onHandlerConfirm}
            color={theme.colors.secondary}
            disabled={yearOption === ''}
          />
        </View>
      </View>
      <Confirmed />
    </View>
  );
};

export default Home;
