import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Image1 from '../../../assets/images/absent.svg';
import Image2 from '../../../assets/images/faq.svg';
import {fonts} from '../../atoms/Fonts';

const CardTroubleshoot = props => {
  return (
    <>
      <View style={styles.section}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.wrapper}>
            <View style={styles.img}>
              <Image1 width={'100%'} height={'100%'} />
            </View>
            <View style={styles.titleBox}>
              <Text style={styles.title}>Ijin Absen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrapper}>
            <View style={styles.img}>
              <Image2 width={'100%'} height={'100%'} />
            </View>
            <View style={styles.titleBox}>
              <Text style={styles.title}>FAQ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  wrapper: {
    alignItems: 'center',
    width: `${100 / 2}%`,
    height: 140,
    marginRight: 16,
    borderRadius: 16,
    borderWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 1,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 16,
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
  },
  titleBox: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 16,
    width: '100%',
    borderRadius: 16,
    borderTopEndRadius: 0,
    borderTopLeftRadius: 0,
  },
  title: fonts.captionOnCard,
});

export default CardTroubleshoot;
