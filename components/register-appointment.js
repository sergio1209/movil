import { ScrollView, Text, TouchableOpacity, TextInput, Modal, View, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';



const RegisterAppointmentComponent = props => {
    const [modalVisible, setModalVisible] = useState(true);
  
    return (
        <ScrollView >
            <Modal style={styles.top} 
            animationType="slide"
            transparent={true}
            visible={props.visible}
         
            >

                <View  >

                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}> 
                    <TouchableOpacity style={styles.Button2}
                       onPress={() => props.setModalVisible(false)}
                    >
                        <Text style={{ fontSize: 20, color: 'Black' }}> Atrás </Text>
                    </TouchableOpacity>
                    
                    </View>
                    



                    <TextInput

                        style={styles.inputUsuario}
                        placeholder="identificacion"
                        justifyContent='center'
                        alignItems='center'
                        

                    />
                    <TextInput

                        style={styles.inputUsuario}
                        placeholder="fecha actual"
                        justifyContent='center'
                        alignItems='center'

                    />
                    <TextInput

                        style={styles.inputUsuario}
                        placeholder="fecha cita"
                        justifyContent='center'
                        alignItems='center'

                    />
                    <TextInput

                        style={styles.inputUsuario}
                        placeholder="hora"
                        justifyContent='center'
                        alignItems='center'

                    />
                    <TextInput

                        style={styles.inputUsuario}
                        placeholder="tipo cita"
                        justifyContent='center'
                        alignItems='center'

                    />
                    <TextInput

                        style={styles.inputUsuario}
                        placeholder="duracion"
                        justifyContent='center'
                        alignItems='center'

                    />
                    <TextInput

                        style={styles.inputUsuario}
                        placeholder="estado"
                        justifyContent='center'
                        alignItems='center'

                    />

                    <TouchableOpacity style={styles.styleButton}
                        onPress={() => alert('guarda la cita ')}
                    >
                        <Text style={{ fontSize: 20, color: 'Black' }}> Registrar </Text>
                    </TouchableOpacity>



                </View>
            </Modal>
        </ScrollView>

    );

};

const styles = StyleSheet.create({
    inputUsuario: { marginTop: 10, height: 40, borderBottomColor: '#eee', borderBottomWidth: 10, padding: 10, },

    styleButton: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'center', alignItems: 'center',
        marginBottom: 70,
        backgroundColor: 'grey',
        borderWidth: 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20

    },
    Button2: {
        flex: 1,

        justifyContent: 'flex-start', alignItems: 'flex-start',
        marginBottom: 70,
        backgroundColor: 'grey',
        borderWidth: 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    top: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderColor: '#black',
        borderWidth: 0

    },
});
export default RegisterAppointmentComponent;