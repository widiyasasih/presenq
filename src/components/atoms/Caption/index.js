import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Caption = props => {
  return (
    <>
      <View>
        <Text>{props.title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default TitleNavTop;
