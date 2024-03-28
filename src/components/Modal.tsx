import React, {ReactElement} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {ThemeColors} from '../constant';

const ModalView = ({
  isVisible,
  onclose,
  children,
}: {
  isVisible: boolean;
  onclose: () => void;
  children: ReactElement;
}) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={isVisible}
      onRequestClose={onclose}>
      <View style={styles.centeredView}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: ThemeColors.transpalent,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default ModalView;
