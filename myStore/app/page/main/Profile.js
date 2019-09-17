import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>个人信息</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
