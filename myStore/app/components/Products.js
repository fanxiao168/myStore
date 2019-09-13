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
            isRefreshing:false,
            products:[
                {key: 'Devin', data: {
                        image: require("../image/eyes.png"),
                        title: "商品1",
                        subTitle: "描述1"
                    }},
                {key: 'Jackson', data: {
                        image: require("../image/eyes.png"),
                        title: "商品2",
                        subTitle: "描述2"
                    }},
                {key: 'James', data: {
                        image: require("../image/eyes.png"),
                        title: "商品3",
                        subTitle: "描述3"
                    }},
                {key: 'Joel', data: {
                        image: require("../image/eyes.png"),
                        title: "商品4",
                        subTitle: "描述4"
                    }},
                {key: 'John', data: {
                        image: require("../image/eyes.png"),
                        title: "商品5",
                        subTitle: "描述5"
                    }},
                {key: 'Jillian', data: {
                        image: require("../image/eyes.png"),
                        title: "商品6",
                        subTitle: "描述6"
                    }},
                {key: 'Jimmy', data: {
                        image: require("../image/eyes.png"),
                        title: "商品7",
                        subTitle: "描述7"
                    }},
                {key: 'Julie', data: {
                        image: require("../image/eyes.png"),
                        title: "商品8",
                        subTitle: "描述8"
                    }},
            ]
        }
    }

    _renderItem = ({item,index}) => {
        return (
            <View style={styles.item}>
                <Image
                    source={item.data.image}
                    style={styles.image}
                ></Image>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.data.title}</Text>
                    <Text style={styles.subTitle}>{item.data.subTitle}</Text>
                </View>
            </View>
        )
    }

    _renderSeparator = ({index}) => {
        return (
            <View key={index} style={styles.divider}></View>
        )
    }

    _renderRefreshContrl = () => {
        this.setState({isRefreshing:true});
        setTimeout(() => {
            const newProducts = Array.from(Array(10)).map((v,i) =>({
                key:"" + i,
                data:{
                    image:require("../image/eyes.png"),
                    title:`新商品${i+1}`,
                    subTitle:`新描述${i+1}`
                }
            }));
            this.setState({isRefreshing:false,products:newProducts})
        },2000);
    }

    render() {
        return (
            // 默认情况下每一行都需要提供一个不重复的key属性，你也可以提供keyExtractor函数来生成key.
            <FlatList
                data={this.state.products}
                renderItem={this._renderItem}
                onRefresh={this._renderRefreshContrl}
                refreshing={this.state.isRefreshing}
                ItemSeparatorComponent={this._renderSeparator}

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
    },
    divider:{
        height:1,
        marginHorizontal: 5,
        backgroundColor:"#f5f5f5"
    }
});