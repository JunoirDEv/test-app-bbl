import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ThemeColors} from '../../constant';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {AddNote, BaseButton} from '../../components';

type ItemProps = {title: string; body: string};

const Home = () => {
  const navigation = useNavigation<any>();
  const [modalAddNote, setModalAddNote] = useState(false);
  const DATA = [
    {
      id: 1,
      userId: 1,
      title: 'Todo List',
      body: 'Things to get it done within this month!',
    },
    {
      id: 2,
      userId: 2,
      title: 'Todo List2',
      body: '',
    },
  ];
  // eslint-disable-next-line react/no-unstable-nested-components
  const Item = ({title, body}: ItemProps) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('Note', {
          title: title,
          body: body,
        });
      }}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
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
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={styles.quantity}>{DATA.length} notes</Text>
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
          renderItem={({item}) => <Item title={item.title} body={item.body} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <AddNote
        isVisible={modalAddNote}
        onclose={() => {
          setModalAddNote(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
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
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    marginBottom: 10,
    color: ThemeColors.grey,
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
});

export default Home;
