import { createStackNavigator } from 'react-navigation';
import Home from '../page/main/Home';
import ProductDetail from '../page/product/Detail';

export default createStackNavigator(
    {
        //导航规则
        Home: {
            screen: Home,
            navigationOptions: () => ({
                header: null,
            }),
        },
        productDetail: {
            screen: ProductDetail,
            navigationOptions: () => ({
                tabBarLabel: '商品详情',
            }),
        },
    },
    {
       initialRouteName:"home"
    }
    );