import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';


export default class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            products:[
                {
                    id: "1",
                    title: "小米MIX3",
                    subTitle: "滑盖手机，咔咔咔",
                    image: ""
                },
                {
                    id: "2",
                    title: "华为Mate20",
                    subTitle: "黑科技，牛逼牛逼",
                    image: ""
                },
                {
                    id: "3",
                    title: "魅族",
                    subTitle: "漂亮无需多言",
                    image: ""
                },
                {
                    id: "4",
                    title: "锤子",
                    subTitle: "漂亮的不像实力派",
                    image: ""
                },
                {
                    id: "5",
                    title: "三星",
                    subTitle: "我的电池绝对靠谱",
                    image: ""
                },
                {
                    id: "6",
                    title: "苹果",
                    subTitle: "我的价格是真的不贵",
                    image: ""
                }
            ]
        }
    }

    _renderItem = ({item,index}) => {
        return (
            <View style={styles.item}>
                <Image
                    source={item.uri}
                    style={styles.image}
                ></Image>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                </View>
            </View>
        )
    }

    _keyExtractor = (item,index) => {
        return item.id;
    }

    render() {
        return (
            <FlatList
                data={this.state.products}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            ></FlatList>
            )
    }
}

const styles = StyleSheet.create({
    products: {
        flex: 1,
        backgroundColor: 'blue',
    },
    item:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        marginHorizontal:10,
        marginTop:10,
        height: 60
    },
    image:{
        marginRight:10,
        width:50,
        height:50,
        backgroundColor:"green"
    },
    content:{
        flex: 1
    },
    title:{
        lineHeight:28,
        fontSize:16,
        color:"#000"
    },
    subTitle:{
        lineHeight:18,
        fontSize:12,
        color:"#ccc"
    }
});