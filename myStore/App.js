/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} animated={true} translucent={false} />

        <SafeAreaView style={styles.container}>
          {/* 搜索条 */}
          <View style={styles.searchBar}>
            <Text>搜索条</Text>
          </View>

          {/* 轮播广告 */}
          <View style={styles.advertisement}>
            <Text>广告</Text>
          </View>

          {/* 商品列表 */}
          <View style={styles.products}>
            <Text>商品列表</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  searchBar: {
    height: 40,
    backgroundColor: 'green',
  },
  advertisement: {
    height: 200,
    backgroundColor: 'yellow',
  },
  products: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
