import React, {Component} from 'react';
import {View} from 'react-native';
import ScanIcon from '../../../assets/icons/option-scan-nonactive.svg';
import TypeIcon from '../../../assets/icons/option-type-active.svg';
import InputTextIcon from '../../../components/molecules/InputTextIcon';
import MainFeature from '../../../components/molecules/MainFeature';

class TypeOption extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 16, backgroundColor: 'white'}}>
        <InputTextIcon
          placeholder="Ketik A2343BBQ.."
          title="Kode"
          press={() => this.props.navigation.navigate('SucceedEnter')}
        />
        <View>
          <MainFeature
            // pressScan={() => this.props.navigation.navigate('ScanOption')}
            iconScan={<ScanIcon width={40} height={40} />}
            iconType={<TypeIcon width={40} height={40} />}
          />
        </View>
      </View>
    );
  }
}

export default TypeOption;
