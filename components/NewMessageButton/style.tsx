import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;