import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Fontisto, Entypo } from '@expo/vector-icons';
import styles from './style';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('microphone')
    }

    const onSendPress = () => {
        console.warn(`Sending ${message}`)
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                    <TextInput style={styles.textInput} multiline value={message} onChangeText={setMessage} placeholder="Type a message" />
                    <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                    {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
                </View>

                <TouchableOpacity onPress={onPress}>
                    <View style={styles.buttonContainer}>
                        {!message ? <MaterialCommunityIcons name="microphone" size={28} color="white" /> : <MaterialIcons name="send" size={28} color="white" />}
                    </View>
                </TouchableOpacity>

            </View>

        </View >
    )
}

export default InputBox;