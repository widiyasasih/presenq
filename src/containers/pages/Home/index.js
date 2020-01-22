import React, {Component} from 'react';
import {View} from 'react-native';
import HomeIcon from '../../../assets/icons/home-active.svg';
import MoreIcon from '../../../assets/icons/more-nonactive.svg';
import NotifIcon from '../../../assets/icons/notification-nonactive.svg';
import ScanIcon from '../../../assets/icons/option-scan-active.svg';
import TypeIcon from '../../../assets/icons/option-type-active.svg';
import TitleSection from '../../../components/atoms/TitleSection';
import CardSchedule from '../../../components/molecules/CardSchedule';
import CardTroubleshoot from '../../../components/molecules/CardTroubleshoot';
import MainFeature from '../../../components/molecules/MainFeature';
import BottomNav from '../../organisms/BottomNav';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* <BlankTopNav title="Hello Widiya.." /> */}
          <TitleSection title="Enter your session!" />
          <MainFeature
            iconScan={<ScanIcon width={40} height={40} />}
            iconType={<TypeIcon width={40} height={40} />}
          />
          <TitleSection title="Yuk, cek jadwalmu!" />
          <CardSchedule />
          <TitleSection title="Troubleshoot" />
          <CardTroubleshoot />
        </View>
        <BottomNav
          notification={<NotifIcon width={30} height={30} />}
          home={<HomeIcon width={30} height={30} />}
          more={<MoreIcon width={20} height={20} />}
        />
      </View>
    );
  }
}

export default Home;
