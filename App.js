/*
*************************************************
IMPORT INTERNE REACT ET COMPOSANTS A REACT NATIVE
*************************************************
*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*
 Import de la constante API_KEY pour récupérer et utiliser la clé de l'api openweather
*/
import { API_KEY } from './utils/variables';

/*
 Import du composant météo Weather
*/
import Weather from './components/weather';

export default class App extends React.Component {
  // on initialise un state de base
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null,
    city: null
  };

  // se lance au chargement de l'application
  componentDidMount() {
    /*
     On utilise la fonction javascript getCurrentPosition 
     pour récupérer la position courante de l'utilisateur
    */
    navigator.geolocation.getCurrentPosition(
      position => {
        /*
         On fait appel à une méthode qui va récupérer les données de météo 
         en fonction des paramètres longitude et latitude qu'on récupère de la position
        */
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        // on set un message d'erreur dans le state si un prblème se produit lors de l'obtention de la météo 
        this.setState({
          error: 'Une erreur s\'est produite durant l\'obtention de la météo'
        });
      }
    );
  }

  getWeather(lat = 48.8871, lon = 2.37862999999993) {
    /*
     On fait appel ici à l'api openweather en lui passant les paramètres de 
     latitude et de longitude récupérés de la météo, ainsi que la clé API
     Remarque : 'units=metric' est un paramètre supplémentaire qui signifie qu'on veut récupérer
     la température en degré celcius et non en kelvin.
    */
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        /*
         On met à jour le state par rapport aux données de météo (température, libellé du temps, et ville) récupérées
         On set aussi le boolean isLoading à false pour ne plus afficher le message mentionnant que la 
         recherche de météo est en cours mais bel et bien la météo courante.
        */
         this.setState({
          temperature: json.main.temp.toFixed(1),
          weatherCondition: json.weather[0].main,
          isLoading: false,
          city: json.name
        });
      });
  }

  render() {
    // on exporte les variables issues du state
    const { isLoading, weatherCondition, temperature, city } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (<Text>Recherche de la météo en cours...</Text>) : (<Weather weather={weatherCondition} temperature={temperature} city={city} />)
        }
      </View>
    );
  }
}

/*
 On définit le style ici
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});