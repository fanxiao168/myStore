import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert
} from 'react-native';


export default class Searchbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchValue:""
        }
    }

    _changeText = (newValue) => {
        this.setState({searchValue:newValue})
    }

    _search = () => {
        Alert.alert(this.state.searchValue);
    }
    render() {
        return (
        <View style={styles.searchBar}>
            <TextInput
                placeholder="输入搜索关键字"
                value={this.state.searchValue}
                onChangeText={this._changeText}
                style={styles.input}
            ></TextInput>
            <Button
                title="搜索"
                onPress={this._search}
                style={styles.button}
            ></Button>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
       flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height: 40,
        paddingHorizontal:10
    },
    input:{
        flex:1,
        marginRight:6,
        height: 30,
        borderWidth:2,
        paddingLeft:5,
        borderColor:'#ccc',
        borderRadius:5,
        lineHeight:12,
        fontSize:12
    },
    button:{
        width:40,
        height:30
    }

});