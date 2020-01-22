import React, {Component} from 'react';
import {View} from 'react-native';
import HomeIcon from '../../../assets/icons/home-nonactive.svg';
import MoreIcon from '../../../assets/icons/more-nonactive.svg';
import NotifIcon from '../../../assets/icons/notification-active.svg';
import BottomNav from '../../organisms/BottomNav';

class Notification extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}></View>
        <BottomNav
          notification={<NotifIcon width={30} height={30} />}
          home={<HomeIcon width={30} height={30} />}
          more={<MoreIcon width={20} height={20} />}
        />
      </View>
    );
  }
}

export default Notification;
