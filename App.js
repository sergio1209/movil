import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';
import DataUpdate from './components/dataUpdate';
export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
      
      <View style={styles.top}>
        
      <DataUpdate/>

      </View>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  top: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ced1',
    borderWidth: 4,

  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
