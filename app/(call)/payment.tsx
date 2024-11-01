import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function PaymentScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#436299" barStyle="light-content" />
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity>
                        <Icon name="menu" size={16} color="#fff" style={styles.icon}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>JK LIBRAS</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="settings" size={16} color="#fff" style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.sectionTitle}>CONTRATE AGORA</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#436299',
    },
    header: {
        backgroundColor: '#436299',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        height: '15%'
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    headerText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '900',
    },
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#436299',
        marginBottom: 20,
    },
    buttonContainer: {
        gap: 16,
    },
    icon: {
        backgroundColor: '#EE7F48',
        padding: 5,
        borderRadius: 5
    },
    actionButton: {
        backgroundColor: '#EE7F48',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});