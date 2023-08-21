import React from 'react';
import {View, StyleSheet} from 'react-native';

const TrafficLight = ({color, index}: {color: string; index: number}) => {
  return (
    <View style={styles.trafficLight}>
      <View style={styles.rectangle}>
        <View
          style={[
            styles.circle,
            {
              backgroundColor:
                index == 1 || index === 2 || index === 3 ? color : '#ffe4b2',
            },
          ]}
        />
        <View style={[styles.circle, {backgroundColor: '#ffe4b2'}]} />
        <View
          style={[
            styles.circle,
            {backgroundColor: index === 0 ? color : '#ffe4b2'},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trafficLight: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 60,
    height: 180,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
  },
});

export default TrafficLight;
