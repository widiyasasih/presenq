import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Image2 from '../../../assets/images/recap-all.svg';
import Image1 from '../../../assets/images/schedule-one-week.svg';
import {fonts} from '../../atoms/Fonts';

const CardSchedule = props => {
  return (
    <>
      <View style={styles.section}>
        <View style={styles.row}>
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.img}>
              <Image1 width={'100%'} height={'100%'} />
            </TouchableOpacity>
            <Text style={styles.title}>Jadwal 1 Minggu</Text>
          </View>
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.img}>
              <Image2 width={'100%'} height={'100%'} />
            </TouchableOpacity>
            <Text style={styles.title}>Rekap Semua Semester</Text>
          </View>
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
  },
  wrapper: {
    alignItems: 'center',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 156,
    height: 88,
    backgroundColor: 'pink',
    marginHorizontal: 0,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 4,
    // marginBottom: 8,
  },
  title: fonts.caption,
});

export default CardSchedule;
