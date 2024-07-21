import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.location}>London, ON</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
    backgroundColor: 'purple',
    textAlign: 'center',
    padding: 16,
  },
  name: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TransactionDetail;
