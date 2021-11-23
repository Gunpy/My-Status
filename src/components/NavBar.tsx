// Modules
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

//Styles
import styles from '../styles/NavBar.styles';

interface NavBarProps {
  title: string;
  navigation: any;
}

const NavBar: React.FC<NavBarProps> = ({title, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.emptyBlock} />
      </View>
    </View>
  );
};

export default NavBar;
