import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/Colors';
import MyButton from '../components/MyButton';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <BodyText>The Game is Over!</BodyText>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require('../assets/success.png')} 
                    resizeMode="cover"
                />
            </View>
            <BodyText style={styles.resultText}>
                Your phone needed
                <Text style={styles.highlight}> {props.rounds} </Text>
                rounds to guess the number:
                <Text style={styles.highlight}> {props.userNumber}</Text>.
            </BodyText>
            <MyButton onPress={props.onRestart}>
                PLAY AGAIN
            </MyButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,        
        borderRadius: 150,
        borderColor: 'black',
        borderWidth: 3,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'        
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'        
    }
});

export default GameOver
