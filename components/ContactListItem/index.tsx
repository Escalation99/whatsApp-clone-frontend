import moment from 'moment';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { User } from "../../types";
import styles from './style';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: User) => {
    const { user } = props;

    const navigation = useNavigation()

    const onClick = () => {

    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                </View>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.status}>{user.status}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;