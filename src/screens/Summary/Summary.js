import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import transactions from '../../data';

const SummaryScreen = () => {
  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((total, item) => total + item.amount, 0);
  const highestSpending = Math.max(...transactions.map((item) => item.amount));
  const lowestSpending = Math.min(...transactions.map((item) => item.amount));
  const highestSpendingTransaction = transactions.find(
    (item) => item.amount === highestSpending
  );
  const lowestSpendingTransaction = transactions.find(
    (item) => item.amount === lowestSpending
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Summary</Text>
      </View>
      <Text style={styles.text}>Transactions</Text>
      <Text style={styles.subtext}>{totalTransactions}</Text>
      <Text style={styles.text}>Balance</Text>
      <Text style={styles.subtext}>${totalAmount.toFixed(2)}</Text>
      <Text style={styles.text}>High Spending</Text>
      <Text style={styles.subtext}>{highestSpendingTransaction.name}</Text>
      <Text style={styles.subtext}>${highestSpending.toFixed(2)}</Text>
      <Text style={styles.text}>Low Spending</Text>
      <Text style={styles.subtext}>{lowestSpendingTransaction.name}</Text>
      <Text style={styles.subtext}>${lowestSpending.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'purple',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 16,
    color: 'black',
  },
  subtext: {
    fontSize: 16,
    marginLeft: 16,
    color: 'black',
  },
});

export default SummaryScreen;
