import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // esse componente é utilizado para carregar fontes e imagens antes de
  // renderizar os demais componentes
  if (!dataLoaded) {
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={() => setDataLoaded(true)}
            />;
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);    
  }
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = (numRounds) => {
    setGuessRounds(numRounds);
  }

  let content = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <Game userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOver 
                rounds={guessRounds} 
                userNumber={userNumber} 
                onRestart={configureNewGameHandler}
              />;
  }

  return (
    <View style={styles.screen}>
        <Header title="Guess a Number" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1
    }
});
