import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./pages/Home/";
import Login from "./pages/Account/Login";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
        header: null
    })
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },

});

export default createAppContainer(AppNavigator);