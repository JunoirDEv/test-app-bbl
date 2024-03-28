import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {InputField} from '../components';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ModalView from './Modal';
import {ThemeColors} from '../constant';

const AddNote = ({
  isVisible,
  onclose,
}: {
  isVisible: boolean;
  onclose: () => void;
}) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('กรุณาระบุ title'),
  });

  const addNote = async ({title, body}: {title: string; body: string}) => {
    console.log('title', title);
    console.log('body', body);
    onclose();
  };
  return (
    <ModalView isVisible={isVisible} onclose={onclose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Note</Text>
            <Formik
              initialValues={{title: '', body: ''}}
              onSubmit={values => {
                addNote(values);
              }}
              validationSchema={validationSchema}>
              {({handleSubmit}) => (
                <>
                  <View>
                    <InputField
                      label="title"
                      name="title"
                      placeholder="title note"
                    />
                    <InputField
                      label="description"
                      name="body"
                      placeholder="description note"
                    />
                  </View>
                  <View style={styles.row}>
                    <View style={styles.box}>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={onclose}>
                        <Text style={styles.textStyle}>Close</Text>
                      </Pressable>
                    </View>
                    <View style={styles.box}>
                      <Pressable
                        style={[styles.button, styles.buttonAdd]}
                        onPress={handleSubmit}>
                        <Text style={styles.textStyle}>Add Note</Text>
                      </Pressable>
                    </View>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ModalView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: ThemeColors.white,
    borderRadius: 20,
    padding: 35,
    shadowColor: ThemeColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonAdd: {
    backgroundColor: ThemeColors.main,
    marginVertical: 10,
    marginLeft: 5,
  },
  buttonClose: {
    backgroundColor: ThemeColors.primary,
    marginRight: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
  },
  keyboard: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default AddNote;
