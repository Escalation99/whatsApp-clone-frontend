import * as React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png';
import InputBox from '../components/InputBox'


const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <InputBox />
        </ImageBackground>

    );
}

const styles = StyleSheet.create({

});

export default ChatRoomScreen;
