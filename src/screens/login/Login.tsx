import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {authorize} from 'react-native-app-auth';
// import auth from '@react-native-firebase/auth';
// import {useNavigation} from '@react-navigation/native';
// import {Formik} from 'formik';
import {ThemeColors, configOIDC} from '../../constant';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {BaseButton, Loading} from '../../components';
// import * as Yup from 'yup';

const Login = () => {
  // const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  // const validationSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .email('กรอก E-mail ให้ถูกต้อง')
  //     .required('กรุณาระบุ E-mail'),
  //   password: Yup.string().required('กรุณาระบุ Password'),
  // });

  const onLogin = async () => {
    // setLoading(true);
    console.log('tstttt');
    const res = await authorize(configOIDC);
    console.log('res', res);

    setLoading(false);
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
          {/* <Formik
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
            )}
          </Formik> */}

          <View style={styles.space}>
            <BaseButton label="Log in" onClick={() => onLogin()} />
          </View>
        </View>
      </View>
      <Loading isVisible={loading} />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  keyboard: {
    flex: 1,
  },
});

export default Login;
