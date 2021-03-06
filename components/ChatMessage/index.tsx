import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Message } from "../../types";
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import styles from './style'

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#dcf8c5' : 'white',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{(moment(message.createdAt)).fromNow()}</Text>
            </View>
        </View >
    )
};

export default ChatMessage;