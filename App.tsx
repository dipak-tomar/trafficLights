import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TrafficLight from './components/TrafficLight';

const App = () => {
  const [lightIndex, setLightIndex] = useState(0);
  const [lightColors, setLightColors] = useState([
    'green',
    'red',
    'red',
    'red',
  ]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const newColors = ['red', 'red', 'red', 'red'];

        if (lightIndex === 0) {
          newColors[0] = 'yellow';
          newColors[1] = 'red';
          newColors[2] = 'red';
          newColors[3] = 'red';
        } else if (lightIndex === 1) {
          newColors[0] = 'red';
          newColors[1] = 'green';
          newColors[2] = 'red';
          newColors[3] = 'red';
        } else if (lightIndex === 2) {
          newColors[0] = 'red';
          newColors[1] = 'red';
          newColors[2] = 'red';
          newColors[3] = 'green';
        } else {
          newColors[0] = 'red';
          newColors[1] = 'red';
          newColors[2] = 'yellow';
          newColors[3] = 'red';
        }

        setLightColors(newColors);

        setLightIndex(prevIndex => (prevIndex + 1) % 4);
      },
      lightIndex === 0 || lightIndex === 2 ? 5000 : 1000,
    );

    return () => clearInterval(interval);
  }, [lightIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.northContainer}>
        <TrafficLight color={lightColors[0]} index={1} />
        <Text style={{fontSize: 16, paddingTop: '25%', marginLeft: '2%'}}>
          Lane 2
        </Text>
      </View>

      <View style={styles.westContainer}>
        <TrafficLight color={lightColors[1]} index={0} />
        <Text style={{fontSize: 16, paddingTop: '25%', marginLeft: '5%'}}>
          Lane 1
        </Text>
      </View>
      <View style={styles.eastContainer}>
        <Text style={{fontSize: 16, paddingTop: '25%', marginRight: '5%'}}>
          Lane 3
        </Text>
        <TrafficLight color={lightColors[3]} index={2} />
      </View>
      <View style={styles.southContainer}>
        <TrafficLight color={lightColors[2]} index={3} />
        <Text style={{fontSize: 16, paddingTop: '4%', marginLeft: '2%'}}>
          Lane 4
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  northContainer: {
    marginTop: 20,
    marginBottom: 150,
    flexDirection: 'row',
    marginLeft: '5%',
  },
  westContainer: {
    position: 'absolute',
    left: 20,
    top: '50%',
    marginTop: -60,
    flexDirection: 'row',
  },
  eastContainer: {
    position: 'absolute',
    right: 20,
    top: '50%',
    marginTop: -60,
    flexDirection: 'row',
  },
  southContainer: {
    marginBottom: 20,
    marginTop: 50,
  },
});

export default App;
