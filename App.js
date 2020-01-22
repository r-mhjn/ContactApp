import {createAppContainer, createStackNavigator} from 'react-navigation';

// import Screens
import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';


const AppNavigator  =  createStackNavigator(  
    {
      Home: {screen: HomeScreen},
      Add: {screen: AddNewContactScreen},
      View: {screen: ViewContactScreen},
      Edit:{screen: EditContactScreen},
    },
    
    {
        defaultNavigationOptions:{
          headerTintColor:"#fff",
          headerStyle:{
            backgroundColor:"#B83227",
            headerTitleStyle:{
              color:"rgba(57,62,70,0.7)",
            }
          }
        }
   }
);

const App = createAppContainer(AppNavigator);
export default App; 