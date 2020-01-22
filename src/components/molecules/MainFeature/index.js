import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {fonts} from '../../atoms/Fonts';

const MainFeature = props => {
  return (
    <>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => props.navigation.navigate('ScanOption')}>
          {props.iconScan}
          <Text style={styles.title}>Scan QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => props.navigation.navigate('TypeOption')}>
          {props.iconType}
          <Text style={styles.title}>Type Code</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 88,
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingTop: 16,
    paddingHorizontal: 58,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 4,
  },
  wrapper: {alignItems: 'center'},
  title: fonts.caption,
});

export default withNavigation(MainFeature);
