import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
// import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {ThemeColors} from '../../constant';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {InputField, BaseButton} from '../../components';
import * as Yup from 'yup';

const Login = () => {
  const navigation = useNavigation<any>();
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email('กรอก E-mail ให้ถูกต้อง')
      .required('กรุณาระบุ E-mail'),
    password: Yup.string().required('กรุณาระบุ Password'),
  });

  const onLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log('email', email);
    console.log('password', password);
    // const userCredential = await auth().signInWithEmailAndPassword(
    //   email,
    //   password,
    // );
    navigation.navigate('MainStack');
    // console.log('userCredential', userCredential);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <IconEntypo name="mobile" size={80} color={ThemeColors.white} />
          <Text style={styles.title}>Test App</Text>
        </View>
        <View style={styles.content}>
          <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={values =>
              onLogin({email: values.username, password: values.password})
            }
            validationSchema={validationSchema}>
            {({handleSubmit}) => (
              <View style={styles.form}>
                <InputField
                  label="Username"
                  name="username"
                  placeholder="E-mail"
                />
                <InputField
                  label="Password"
                  name="password"
                  placeholder="Password"
                  secureText
                />
                <View style={styles.space} />
                <BaseButton label="เข้าสู่ระบบ" onClick={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: ThemeColors.main,
  },
  content: {
    height: '70%',
    width: '100%',
    backgroundColor: ThemeColors.white,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    flex: 1,
  },
  title: {
    color: ThemeColors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
  boxTitle: {
    alignItems: 'center',
    marginBottom: 20,
  },
  space: {
    marginTop: 20,
  },
  keyboard: {
    flex: 1,
  },
});

export default Login;
