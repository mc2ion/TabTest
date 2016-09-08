import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from '../Styles/Base';

class NewsDetail extends Component{
  render(){
    return(
      <View style={styles.tabContent}>
        <Text style={styles.tabDescription}>Description of the news</Text>
      </View>
    )
  }
}

module.exports = NewsDetail;
