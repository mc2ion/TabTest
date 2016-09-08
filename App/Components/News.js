import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from '../Styles/Base';
import NewsDetail from './NewsDetail';

class News extends Component{
  go(){
    this.props.navigator.push({
      title:'News Detail',
      component: NewsDetail
    })
  }
  render(){
    return(
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>List of news</Text>
        <TouchableHighlight
        onPress={this.go.bind(this)}>
          <Text>Go to detail</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = News;
