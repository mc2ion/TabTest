import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from '../Styles/Base';

class ServiceDetail extends Component{
  render(){
    return(
      <View style={styles.tabContent}>
        <Text style={styles.tabDescription}>Description of the service</Text>
      </View>
    )
  }
}

module.exports = ServiceDetail;
