import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ScanIcon from '../../../assets/icons/option-scan-nonactive.svg';
import TypeIcon from '../../../assets/icons/option-type-active.svg';
import ImgSucceed from '../../../assets/images/entered-successful.svg';
import {fonts} from '../../../components/atoms/Fonts';
import MainFeature from '../../../components/molecules/MainFeature';

class SucceedEnter extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 16, backgroundColor: 'white'}}>
        <View
          style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center'}}>
          <ImgSucceed
            width={'50%'}
            height={'50%'}
            style={{backgroundColor: 'pink'}}
          />
          <Text style={fonts.confirmSucceed}>Scanning QR Code</Text>
        </View>
        <View>
          <View>
            <MainFeature
              pressScan={() => this.props.navigation.navigate('ScanOption')}
              iconScan={<ScanIcon width={40} height={40} />}
              iconType={<TypeIcon width={40} height={40} />}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SucceedEnter;
