
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'index') iconName = 'home';
            else if (route.name === 'search') iconName = 'search';
            else if (route.name === 'favourites') iconName = 'heart';
            else if (route.name === 'profile') iconName = 'person';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      />
    </SafeAreaProvider>
  );
}
