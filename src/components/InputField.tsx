import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {ThemeColors} from '../constant';
import {useField, ErrorMessage} from 'formik';

type InputFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  secureText?: boolean;
};

const InputField = ({
  name,
  label,
  placeholder,
  secureText = false,
}: InputFieldProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, meta, helpers] = useField(name); // +
  const [isSecureText, setIsSecureText] = useState(secureText);
  const handleChange = (new_text: string) => {
    helpers.setValue(new_text);
  };

  return (
    <View style={styles.container}>
      <Text
        style={
          meta.error && meta.touched
            ? [styles.title, {color: ThemeColors.primary}]
            : styles.title
        }>
        {label}
      </Text>
      <View
        style={
          meta.error && meta.touched
            ? [styles.box, {borderColor: ThemeColors.primary}]
            : styles.box
        }>
        <TextInput
          style={styles.input}
          onChangeText={handleChange}
          value={meta.value}
          placeholder={placeholder}
          secureTextEntry={isSecureText}
        />
        {secureText && (
          <TouchableOpacity
            onPress={() => {
              setIsSecureText(!isSecureText);
            }}
            style={styles.boxSecure}>
            <IconEntypo
              name={isSecureText ? 'eye' : 'eye-with-line'}
              size={24}
            />
          </TouchableOpacity>
        )}
      </View>
      <ErrorMessage
        render={msg => <Text style={styles.error}>{msg}</Text>}
        name={name}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  box: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '90%',
  },
  title: {
    color: ThemeColors.main,
    marginBottom: 7,
  },
  error: {
    color: ThemeColors.primary,
    fontSize: 12,
  },
  boxSecure: {
    marginHorizontal: 5,
  },
});

export default InputField;
