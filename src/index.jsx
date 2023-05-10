import { View } from "react-native";

import { Home } from "./screens/index";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
