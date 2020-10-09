import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Rates } from './src/Rates';
import getRates from "./src/RatesChecker";

export default function App() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRates().then(data => {
      setRates(data);
      setLoading(false);
    });
  }, []);

  console.log(rates);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} />
      <Rates rates={rates} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
