// Component
import React, {useEffect} from 'react';
import {Alert, Image, View} from 'react-native';

// Modules
import State from '../store/entities/State';
import {useSelector} from '../store/hooks/UseSelector';

// Styles
import styles from '../styles/ImageScreen.styles';

const ImageScreen = () => {
  const picture = useSelector((state: State) => state.picture);

  useEffect(() => {
    Alert.alert(JSON.stringify(picture));
  }, []);

  return (
    //TODO bad work this is
    <View
      style={{
        flex: 1,
        backgroundColor: '#ab1313',
      }}>
      <Image style={styles.picture} source={{uri: picture!.uri}} />
    </View>
  );
};

export default ImageScreen;
