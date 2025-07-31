import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="menu" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.logoText}>Food First</Text>

      <TouchableOpacity>
        <Ionicons name="person-circle-outline" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#155c3c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: -20, // removes padding from parent container
    marginTop: -40,         // compensates for SafeArea top padding
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Cursive',
  },
});

export default Header;
