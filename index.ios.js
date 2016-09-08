import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

/* Importing our components */
import News from './App/Components/News';
import Services from './App/Components/Services';

/* Importing the base style */
import styles from './App/Styles/Base';

class TabTest extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab : 'news'
    }
  }
  setTab(index){
    this.setState({
      selectedTab: index
    })
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
        systemIcon="favorites"
        selected={this.state.selectedTab === 'news'}
        onPress={()=>this.setTab('news')}
        >
          <NavigatorIOS
            initialRoute={{
              'title': 'News',
              component: News
            }}
            style={styles.navigator}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        systemIcon="bookmarks"
        selected={this.state.selectedTab === 'services'}
        onPress={()=>this.setTab('services')}
        >
          <NavigatorIOS
          initialRoute={{
            'title': 'Services',
            component: Services
          }}
          style={styles.navigator}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('TabTest', () => TabTest);
