import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from "../../types";
import styles from './style';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatRoom) => {
    const { chatRoom } = props;

    const navigation = useNavigation()

    const user = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                </View>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>
                        {chatRoom.lastMessage.content.length < 35
                            ? `${chatRoom.lastMessage.content}`
                            : `${chatRoom.lastMessage.content.substring(0, 36)}...`}
                    </Text>
                </View>
                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;