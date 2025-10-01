Real Recipes

Real Recipes is a React Native mobile app (built with Expo) created as my final university project. The goal of the app is to make cooking easier by helping users discover recipes they can cook with ingredients they already have at home.

What it Does

Search recipes from the Edamam API

Add ingredients to a pantry and use them to guide recipe choices

Save favourite recipes for quick access

See recommended/popular recipes on the home screen

Simple, themed interface with a floating bottom navigation bar

Tools & Tech Used

React Native + Expo for development

expo-router for tab navigation

Ionicons for icons

Edamam Recipe API for recipe data

Designed in Figma and iterated with user feedback

How to Run It

Clone this project:

git clone https://github.com/your-username/real-recipes.git
cd real-recipes


Install dependencies:

npm install


Create a .env file with your Edamam API keys:

EDAMAM_APP_ID=your_app_id
EDAMAM_APP_KEY=your_app_key


Run the project:

npx expo start


Scan the QR code with the Expo Go app on your phone.

Project Structure (simplified)
app/
 ├─ (tabs)/_layout.tsx   # Tab navigation
 ├─ index.tsx            # Home screen (quote + recommended)
 ├─ search.tsx           # Search screen
 ├─ favourites.tsx       # Favourites
 ├─ pantry.tsx           # Pantry
 ├─ profile.tsx          # Profile
components/
 ├─ Header.tsx
 ├─ RecipeCard.tsx
services/
 ├─ edamam.ts            # API functions

Development Notes

Built in an agile style, with small iterations

Started from wireframes in Figma, tested with peers

Updated styling several times (green + cream theme: #4CAF50 & #EFE6C9)

Focused on usability: clear search bar, big recipe cards, simple navigation

Student Reflection

This project taught me how to:

Manage a React Native app using Expo

Work with an external API

Apply design feedback to improve usability

Balance technical work with project planning and documentation
