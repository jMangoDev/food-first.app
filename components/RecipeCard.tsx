import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const RecipeCard = ({ title, image }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 240,
    height:240,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: 180,
  },
  details: {
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  meta: {
    fontSize: 14,
    color: '#666666',
  },
});

export default RecipeCard;