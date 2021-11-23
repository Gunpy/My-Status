import React, {useEffect} from 'react';
import {View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {actions as pictureActions} from '../store/ducks/picture';

// @ts-ignore
const Main = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    launchImageLibrary({mediaType: 'photo'}, ({assets}) => {
      dispatch(
        pictureActions.setPicture({
          uri: assets?.[0].uri!,
          fileName: assets?.[0].fileName!,
        }),
      );
      navigation.navigate('imageScreen');
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121',
      }}
    />
  );
};

export default Main;
