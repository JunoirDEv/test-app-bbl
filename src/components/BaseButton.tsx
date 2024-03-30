import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {ThemeColors} from '../constant';

type BaseButtonProps = {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
};

const BaseButton = ({
  label,
  onClick,
  backgroundColor = ThemeColors.main,
}: BaseButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onClick}>
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
