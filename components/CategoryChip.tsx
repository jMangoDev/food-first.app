import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CategoryChip = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chip, selected && styles.selectedChip]}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  selectedChip: {
    backgroundColor: '#4CAF50',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CategoryChip;
