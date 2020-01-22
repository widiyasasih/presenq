import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {fonts} from '../../../components/atoms/Fonts';

class BottomNav extends Component {
  render() {
    return (
      <>
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Notification')}
            style={styles.wrapper}>
            <View style={styles.img}>{this.props.notification}</View>
            <Text style={styles.title}>Notifikasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.wrapper}>
            <View style={styles.img}>{this.props.home}</View>
            <Text style={styles.title}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('More')}
            style={styles.wrapper}>
            <View style={styles.img}>{this.props.more}</View>
            <Text style={styles.title}>Lainnya</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 7},
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 6,
    marginHorizontal: 0,
    paddingVertical: 4,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    alignItems: 'center',
    height: 25,
    width: 25,
    justifyContent: 'center',
  },
  title: fonts.caption,
});

export default withNavigation(BottomNav);
