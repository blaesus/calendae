import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        fontSize: 20,
    }
});

export default function App() {
    const now = new Date();
    const startThisYear = new Date(now.getFullYear(), 0, 0);
    const delta = +now - +startThisYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(delta / oneDay);

    let year = now.getUTCFullYear() + 841; // Gonghe

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{day}/{year}</Text>
        </View>
    );
}

