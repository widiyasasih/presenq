import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../../atoms/Fonts';
import {icons} from '../../atoms/Icons';

const InputTextIcon = props => {
  const [text, setText] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center',
        paddingTop: 6,
        position: 'relative',
      }}>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <TextInput
          placeholder={props.placeholder}
          style={fonts.textInput}
          onChangeText={text => setState({text})}
          value={text}></TextInput>
        <Icon name="send" style={icons.nonactive} onPress={props.press} />
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          paddingHorizontal: 8,
          marginLeft: 8,
        }}>
        <Text style={fonts.titleTextInput}>{props.title}</Text>
      </View>
    </View>
  );
};

export default InputTextIcon;
