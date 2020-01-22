import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../atoms/Colors';
import {fonts} from '../../atoms/Fonts';
import {layouts} from '../../atoms/Layouts';

const BlankTopNav = props => {
  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: colors.schema,
    height: layouts.topNav.height,
    justifyContent: 'center',
  },
  title: fonts.topNav,
});

export default BlankTopNav;
