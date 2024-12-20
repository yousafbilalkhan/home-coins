import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const RatingsDisplay = () => {
  return (
    <View style={styles.container}>
      {/* Rating Component */}
      <Rating
        type="star"
        ratingCount={5}
        showRating={false} // Hide default text, we'll create our own
        imageSize={14}
        fractions={1} // Allow half-star ratings
        jumpValue={0.1}
        startingValue={4.5} // Display initial value
        readonly // Make it non-interactive
      />

      {/* Custom Text Display */}
      <Text style={styles.text}>
        4.5 | 58 Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 12,
    marginLeft: 8,
    color: 'gray',
  },
});

export default RatingsDisplay;
