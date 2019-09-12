/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView} from 'react-native';
import Searchbar from "./app/components/Searchbar";
import Adverticement from "./app/components/Adverticement";
import Products from "./app/components/Products";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} animated={true} translucent={false} />
        <SafeAreaView style={styles.container}>
          {/* 搜索条 */}
          <Searchbar></Searchbar>

          {/* 轮播广告 */}
          <Adverticement></Adverticement>

          {/* 商品列表 */}
          <Products></Products>
        </SafeAreaView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
