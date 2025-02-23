import * as Linking from 'expo-linking';

// ... other code

// Problematic code (bug.js)
const initialUrl = await Linking.getInitialURL();
if (initialUrl == null) {
  // Handle null case (often leads to incorrect behavior)
  console.log('Initial URL is null');
}

// Workaround (bugSolution.js)
Linking.addEventListener('url', (event) => {
  const url = event.url;
  if (url) {
    // Process the deep link
    console.log('Deep link received:', url);
    // ... handle URL
  }
});

// ... other code

Linking.getInitialURL().then((url) => {
  if (url) {
    console.log('Initial URL:', url);
    // ...handle url
  }
})

