import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//This creates a numbers component that can be re-used with diffrent props
class Numbers extends React.Component {
  render() {
    return (
      <Text>Number: {this.props.num}</Text>
    );
  }
}


export default class App extends React.Component {
  render() {
    return (

      // a prop named num is created to allow the customization of the numbers component
      <View style={styles.container}>
       <Numbers num = "1"/>
       <Numbers num = "2"/>
       <Numbers num = "3"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
