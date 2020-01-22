import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ScanIcon from '../../../assets/icons/option-scan-active.svg';
import TypeIcon from '../../../assets/icons/option-type-nonactive.svg';
import ScanningImg from '../../../assets/images/scanning.svg';
import {fonts} from '../../../components/atoms/Fonts';
import MainFeature from '../../../components/molecules/MainFeature';

class ScanOption extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 16, backgroundColor: 'black'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <ScanningImg />
          <Text style={fonts.processing}>Scanning QR Code</Text>
        </View>
        <View>
          <MainFeature
            // pressType={() => this.props.navigation.navigate('TypeOption')}
            iconScan={<ScanIcon width={40} height={40} />}
            iconType={<TypeIcon width={40} height={40} />}
          />
        </View>
      </View>
    );
  }
}

export default ScanOption;
