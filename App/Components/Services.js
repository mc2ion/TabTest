import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from '../Styles/Base';
import ServiceDetail from './ServiceDetail';

class Services extends Component{
  go(){
    this.props.navigator.push({
      title:'Service Detail',
      component: ServiceDetail
    })
  }
  render(){
    return(
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>List of Services</Text>
        <TouchableHighlight
        onPress={this.go.bind(this)}>
          <Text>Go to detail</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Services;
