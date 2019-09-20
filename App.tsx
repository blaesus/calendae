import React, { useState } from "react";
import { Picker, StyleSheet, Text, View } from "react-native";
import { Calendar } from "expo/build/removed.web";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        fontSize: 20,
    },
    calendarPicker: {
        flex: 1,
    },
    today: {
        flex: 1,
        height: 100,
    }
});

type Calendar = "auc" | "gonghe"

function getYearOffset(calendar: Calendar): number {
    switch (calendar) {
        case "auc": {
            return 753;
        }
        case "gonghe": {
            return 841;
        }
    }
}

export default function App() {
    const [calendar, setCalendar] = useState<Calendar>("gonghe");
    const now = new Date();
    const startThisYear = new Date(now.getFullYear(), 0, 0);
    const delta = +now - +startThisYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(delta / oneDay);

    const year = now.getUTCFullYear() + getYearOffset(calendar);


    return (
        <View style={styles.container}>
            <View style={styles.calendarPicker}>
                <Text>Calendar</Text>
                <Picker
                    selectedValue={calendar}
                    style={{width: 100}}
                    onValueChange={(value) => setCalendar(value)}
                    mode="dropdown"
                >
                    <Picker.Item label="A.U.C." value="auc" />
                    <Picker.Item label="Gonghe" value="gonghe" />
                </Picker>
            </View>

            <View style={styles.today}>
                <Text>Today</Text>
                <Text style={styles.date}>{day}/{year}</Text>
            </View>
        </View>
    );
}

