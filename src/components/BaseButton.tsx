import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {ThemeColors} from '../screens/constant';

type BaseButtonProps = {
  label: string;
  onClick: () => void;
};

const BaseButton = ({label, onClick}: BaseButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: ThemeColors.main,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  text: {
    color: ThemeColors.white,
    fontWeight: '500',
  },
});

export default BaseButton;
