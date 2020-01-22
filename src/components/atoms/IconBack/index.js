import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconBack = props => {
  return (
    <>
      <Icon
        name={'arrow-back'}
        style={{color: 'white', fontSize: 30, paddingLeft: 16}}
        onPress={props.onPress}
      />
    </>
  );
};

export default IconBack;
