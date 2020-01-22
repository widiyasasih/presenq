import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../atoms/Fonts';

const TitleBar = props => {
  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.title}>Hello {props.name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {marginVertical: 16, marginHorizontal: 16},
  title: fonts.titleBar,
});

export default TitleBar;
