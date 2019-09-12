import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const width = Dimensions.get("window").width;
const circleSize = 8;
const circleMargin = 5;

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

  _scrollBeginDrag = () => {
    this._endTimer();
  }

  _scrollEndDrag = () => {
    this._startTimer();
  }

  render() {

    //计算轮播指示器的位置
    const advertisementCount = this.state.advertisements.length;
    const indicatorWidth = circleSize * advertisementCount + circleMargin * advertisementCount * 2;
    const indicatorOffsetX = (width - indicatorWidth) / 2;

    return (
      <View style={styles.advertisement}>
        <ScrollView
            ref="scrollView"
            onScrollBeginDrag={this._scrollBeginDrag}
            onScrollEndDrag={this._scrollEndDrag}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
          {this.state.advertisements.map((item, index) => {
            return (
              <View key={index} style={styles.item}>
                <Image source={item.uri} style={styles.item} />
              </View>
            );
          })}
        </ScrollView>

        <View style={[styles.indicator,{left:indicatorOffsetX}]}>
          {
            this.state.advertisements.map((item,i) => {
              const dynamicStyle =
                  i === this.state.currentPage
                      ? styles.circleSelected : {};
              return ( <View key={i} style={[styles.circle,dynamicStyle]}></View> )

            })
          }
        </View>

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
  indicator:{
    position:"absolute",
    bottom:circleSize + circleMargin,
    flexDirection:"row"
  },
  circle:{
    width:circleSize,
    height:circleSize,
    borderRadius:circleSize / 2,
    backgroundColor:"#ccc",
    marginHorizontal:circleMargin
  },
  circleSelected:{
    backgroundColor: "#fff"
  }

});
