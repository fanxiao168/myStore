import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

export default class Adverticement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      advertisements: [
        {
          uri: require('../image/double-11.png'),
        },
        {
          uri: require('../image/eyes.png'),
        },
        {
          uri: require('../image/five-year.png'),
        },
      ],
    };
  }

  //挂载后启动定时器
  componentDidMount() {
    this._startTimer();
  }

  //卸载后清除定时器
  componentWillUnmount() {
    this._endTimer();
  }

  _startTimer = () => {
    this.timerId = setInterval(() => {
      //计算下页码
      let nextPage = this.state.currentPage + 1;
      nextPage = nextPage >= this.state.advertisements.length ? 0 : nextPage;
      this.setState({currentPage: nextPage});

      //计算scrollView组件的offsetX值，实现自动轮播
      let offsetX = Dimensions.get('window').width * this.state.currentPage;
      this.refs.scrollView.scrollTo({x: offsetX, y: 0, animated: true});
    }, 1500);
  };

  _endTimer = () => {
    clearInterval(this.timerId);
  };

  render() {
    return (
      <View style={styles.advertisement}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          ref="scrollView">
          {this.state.advertisements.map((item, index) => {
            return (
              <View key={index} style={styles.item}>
                <Image source={item.uri} style={styles.item} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  advertisement: {
    height: 200,
  },
  item: {
    width: Dimensions.get('window').width,
    height: 200,
  },
});
