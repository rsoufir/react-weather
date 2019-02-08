/*
**************************************************************
IMPORT INTERNE REACT ET COMPOSANTS A REACT NATIVE + PROP-TYPES
**************************************************************
*/
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
/*
 Import du fichier de configuration et de personnalisation d'affichage de la météo
*/
import { conditions } from '../utils/conditionsWeather';
/*
 Import d'un composant propre à expo
*/
import { MaterialCommunityIcons } from '@expo/vector-icons';

/*
 Création du composant météo "Weather" prenant en paramètre le libelle de temps et la température en degré Celcius
*/
const Weather = ({ weather, temperature }) => {
  return (
    <View style={[ styles.weatherContainer, { backgroundColor: conditions[weather].color } ]} >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={82}
          name={conditions[weather].icon}
          color={'#ffffff'}
        />
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.titre}>{conditions[weather].title}</Text>
        <Text style={styles.sousTitre}> {conditions[weather].subtitle}</Text>
      </View>
    </View>
  );
};

/*
 On définit ici les propTypes
*/
Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
};

/*
 On définit le style pour le composant Weather
*/
const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
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
