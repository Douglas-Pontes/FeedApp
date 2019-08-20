import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      marginVertical: 16,
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 10,
      alignItems: 'center'
    },
    txtName: {
      marginLeft: 10, 
      fontWeight: '700', 
      fontSize: 14
    },
    postContent: {
      height: 400
    },
    containerReactions: { 
      paddingHorizontal: 10, 
      paddingTop: 10, 
      flexDirection: 'row'
    },
    containerPostInfo: {
      paddingHorizontal: 10
    }
});

export default styles;