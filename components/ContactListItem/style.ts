import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        padding: 10,
        flexWrap: 'wrap',
        alignItems: 'center',

    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        width: 300,
        alignContent: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    status: {
        fontSize: 14,
        color: 'grey',
    },
});

export default styles;