import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../constant';
import {BaseButton} from '../../components';

const Comment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Commente</Text>
      <View style={styles.boxButton}>
        <BaseButton
          label="Delete Note"
          backgroundColor={ThemeColors.primary}
          onClick={() => {
            // setModalAddNote(!modalAddNote);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  boxButton: {
    marginVertical: 20,
  },
});
export default Comment;
