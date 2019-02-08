/*
*************************************************
IMPORT INTERNE REACT ET COMPOSANTS A REACT NATIVE
*************************************************
*/
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
/*
 Import du fichier de configuration et de personnalisation d'affichage de la météo
*/
import { conditions } from '../utils/conditionsWeather';
/*
 Import d'un composant propre à expo
*/
import { MaterialCommunityIcons } from '@expo/vector-icons';

/*
 Création du composant météo "Weather" prenant en paramètre le libelle de temps, la température en degré Celcius, et la ville
*/
const Weather = ({ weather, temperature, city }) => {
  return (
    <View style={[styles.weatherContainer, { backgroundColor: conditions[weather].color } ]} >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={82}
          name={conditions[weather].icon}
          color={'#ffffff'}
        />
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <View style={styles.cityContainer}>
        <Text style={styles.city}>{city}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.titre}>{conditions[weather].title}</Text>
        <Text style={styles.description}> {conditions[weather].subtitle}</Text>
      </View>
    </View>
  );
};

/*
 On définit le style pour le composant Weather
*/
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    width:'100%'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50
  },
  tempText: {
    fontSize: 75,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 30,
    marginBottom: 50
  },
  cityContainer: {
      flex: 1
  },
  city: {
    fontSize: 40,
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 40
  },
  titre: {
    fontSize: 45,
    color: '#fff'
  },
  description: {
    fontSize: 25,
    color: '#fff'
  }
});

export default Weather;
