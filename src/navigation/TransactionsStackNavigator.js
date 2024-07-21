import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '../screens/Transactions/TransactionList';
import TransactionDetail from '../screens/Transactions/TransactionDetail';

const Stack = createStackNavigator();

const TransactionsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'purple' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="TransactionList" component={TransactionList} options={{ title: 'Transactions List' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
};

export default TransactionsStackNavigator;
