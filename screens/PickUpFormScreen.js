import React, { Component} from 'react';
import {View } from 'react-native';
import PickUpForm from '../components/PickUpForm';
import AvatarComponent from '../components/AvatarComponent';
import MainButton from '../components/MainButton';
import dbInstance from '../database/Database';


export default class PickUpFormScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentRoute : dbInstance.getCurrentRouteName(),

    }
  }

  render(){
    return(
      <View>
        <AvatarComponent text={`Great! You selected the ${this.state.currentRoute} Tour.`}/>
        <PickUpForm />
        <MainButton pressFunction={() => this.props.navigation.navigate('Payment')} text="Next" />
      </View>

    )
  }

}
  

