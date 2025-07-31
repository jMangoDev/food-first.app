import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const dummyRecipes = [
  { id: '1', title: 'Greek Fries', image: require('../assets/images/Greek_Fries.jpg') },
  { id: '2', title: 'Spaghetti al Forno', image: require('../assets/images/spaghetti_al_forno.jpg') },
  { id: '3', title: 'Breakfast Bowl', image: require('../assets/images/Breakfast_Bowl.jpg') },
];

const quotes = [
  "“People confuse me. Food doesn't.”",
  "“Your body is not a temple; it's an amusement park. Enjoy the ride.”",
  "“Good food is very often, even most often, simple food.”",
  "“Garlic is divine. Avoid at all costs that vile spew you see rotting in oil in screwtop jars. Too lazy to peel fresh? You don't deserve to eat garlic.”",
  "“Open your mind, get up off the couch, move.”",
];

const HomeScreen = () => {
  const [quote, setQuote] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  const handleAddToPantry = () => {
    navigation.navigate('Pantry'); // <-- Make sure this route exists in your navigator
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />

      <ScrollView   showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 0 }}>
        {/* Hero Image + Quote */}
        <View style={styles.heroSection}>
          <Image
            source={require('../assets/images/OIP.webp')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <Text style={styles.heroQuote}>{quote}</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="#ccc" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes..."
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Add to Pantry Button */}
        <TouchableOpacity style={styles.pantryButton} onPress={handleAddToPantry}>
          <Text style={styles.pantryButtonText}>Add to pantry</Text>
        </TouchableOpacity>

        {/* Recommended Section */}
        <View style={styles.recommendedSection}>
          <Text style={styles.recommendedText}>Recommended</Text>
          <FlatList
            data={dummyRecipes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <RecipeCard title={item.title} image={item.image} />
            )}
            contentContainerStyle={styles.recipeList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3A3F',
    paddingTop: 40,
  },

  heroSection: {
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },

  heroImage: {
    width: '100%',
    height: 250,

  },

  heroQuote: {
    marginTop: 12,
    fontSize: 20,
    color: '#ffffff',
    fontStyle: 'italic',
    fontWeight: '300',
    textAlign: 'center',
  },

  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B4A50',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 10,
    marginHorizontal: 20,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },

  searchIcon: {
    marginRight: 4,
  },

  pantryButton: {
    backgroundColor: '#155c3c',
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },

  pantryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Cursive',
  },

recommendedSection: {
  backgroundColor: '#155c3c',
  paddingVertical: 20,
  paddingHorizontal: 16,
  marginTop: 24,
  marginBottom: 0,
},

  recommendedText: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Cursive',
    textAlign: 'left',
    marginBottom: 12,
  },

  recipeList: {
    paddingRight: 8,
  },
});

export default HomeScreen;
