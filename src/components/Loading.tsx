import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import ModalView from './Modal';

const Loading = ({isVisible}: {isVisible: boolean}) => {
  return (
    <ModalView isVisible={isVisible}>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://i.gifer.com/ZKZg.gif'}}
          style={styles.loading}
        />
      </View>
    </ModalView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: 50,
    height: 50,
  },
});
export default Loading;
