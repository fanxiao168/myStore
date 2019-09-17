import React,{ Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class Detail extends Component {

    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
        this.navigationParams = this.navigation.state.params;
    }

    _pressBack = () => {
        const { navigation } = this.props;
        navigation && navigation.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._pressBack}>
                    <Text style={styles.back}>返回{this.navigationParams.a}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>商品详情</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20
    },
    back:{
        fontSize: 20,
        color:"yellow"
    }
})