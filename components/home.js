import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import RegisterAppointmentComponent from './register-appointment';
const Home = props => {

    return (


        <ScrollView >
            <Modal style={styles.top}>
                <View >
                    <Image
                        source={{ uri: 'https://picsum.photos/200/200' }}
                        style={styles.image}

                    />

                    <TouchableOpacity style={styles.styleButton}

                        onPress={() => <RegisterAppointmentComponent visible="true" />}

                    >

                        <Text style={{ fontSize: 20, color: 'Black' }}>Actualizar Datos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.styleButton}
                        onPress={() => alert('Hello, world!')}
                    >
                        <Text style={{ fontSize: 20, color: 'Black' }}>registrar cita</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.styleButton}
                        onPress={() => alert('Hello, world!')}
                    >
                        <Text style={{ fontSize: 20, color: 'Black' }}>ver cita</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.styleButton}
                        onPress={() => alert('Hello, world!')}
                    >
                        <Text style={{ fontSize: 20, color: 'Black' }}>ver Historia Clinica</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.styleButton}
                        onPress={() => alert('Hello, world!')}
                    >
                        <Text style={{ fontSize: 20, color: 'Black' }}>salir</Text>
                    </TouchableOpacity>

                </View>

            </Modal>



        </ScrollView>

    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },


    styleButton: {
        flex: 1,
        marginTop:10,
        justifyContent: 'center', alignItems: 'center',
        marginBottom: 70,
        backgroundColor: 'grey',
        borderWidth: 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20

    },
    top: {
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderColor: '#black',
        borderWidth: 0
    },
    image: { height: 200, width: 200, borderRadius: 100 }
});

export default Home;