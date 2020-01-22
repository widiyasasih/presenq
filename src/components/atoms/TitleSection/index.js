import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../atoms/Fonts';

const TitleSection = props => {
  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {marginVertical: 16, marginHorizontal: 16},
  title: fonts.titleSection,
});

export default TitleSection;
