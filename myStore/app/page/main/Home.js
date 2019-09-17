import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, SafeAreaView} from 'react-native';
import Searchbar from '../../components/Searchbar';
import Adverticement from '../../components/Adverticement';
import Products from '../../components/Products';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} animated={true} translucent={false} />
        <SafeAreaView style={styles.container}>
          {/* 搜索条 */}
          <Searchbar />

          {/* 轮播广告 */}
          <Adverticement />

          {/* 商品列表 */}
          <Products />
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
});
