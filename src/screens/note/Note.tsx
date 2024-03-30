import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {ThemeColors} from '../../constant';
import {AddNote, BaseButton} from '../../components';

type ItemProps = {body: string};
const Note = () => {
  const navigation = useNavigation<any>();
  const [modalAddNote, setModalAddNote] = useState(false);

  const DATA = [
    {
      id: 1,
      userId: 1,
      noteId: 1,
      body: 'Things to get it done within this month!',
    },
    {
      id: 2,
      userId: 2,
      noteId: 2,
      body: 'Things to get it done within this month!',
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const Item = ({body}: ItemProps) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('Comment', {
          body: body,
        });
      }}>
      <View style={styles.left}>
        <Text style={styles.body} numberOfLines={2}>
          {body ? body : '-'}
        </Text>
      </View>
      <TouchableOpacity style={styles.right}>
        <IconIonicons
          name="trash-bin-outline"
          color={ThemeColors.primary}
          size={25}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title Note</Text>
      <Text style={styles.description}>Title Note</Text>
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.quantity}>{DATA.length} comments</Text>
          </View>
          <View style={styles.rightButton}>
            <BaseButton
              label="Add"
              onClick={() => {
                setModalAddNote(!modalAddNote);
              }}
            />
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item body={item.body} />}
          keyExtractor={item => item.id.toString()}
        />
        <View style={styles.boxButton}>
          <BaseButton
            label="Delete Note"
            backgroundColor={ThemeColors.primary}
            onClick={() => {
              setModalAddNote(!modalAddNote);
            }}
          />
        </View>
      </View>
      <AddNote
        isVisible={modalAddNote}
        onclose={() => {
          setModalAddNote(false);
        }}
      />
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
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: ThemeColors.grey,
  },
  quantity: {
    fontSize: 16,
    marginVertical: 10,
  },
  item: {
    borderWidth: 1,
    borderBottomColor: ThemeColors.darkGrey,
    backgroundColor: ThemeColors.white,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  body: {
    fontSize: 16,
  },
  left: {
    flex: 6,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButton: {
    flex: 2,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
  boxButton: {
    marginBottom: 20,
  },
});

export default Note;
