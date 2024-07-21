import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TransactionListItem = ({ transaction, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.amount}>${transaction.amount}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="black" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: 'black',
  },
  amount: {
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginLeft: 10,
  },
});

export default TransactionListItem;
