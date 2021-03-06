import React, {Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uuidv1 from "uuid";
import { tour1} from '../data'
import TourDetailsListItem from './TourDetailsListItem';
import dbInstance from '../database/Database';


export default class TourDetailsList extends Component {
  constructor(props){
    super(props);
    this.state={
      currentPOIs: dbInstance.getRouteContent(props.tourName)
    }
  }

  componentDidMount(){
    console.log(this.state.currentPOIs)
  }

  render(){
    return(
      tour1.map(item => (
        <TourDetailsListItem  style={styles.tourDetailListItem}
        goLocationDetails= {this.props.goToLocation}
        location={item.location} 
        time={item.time}
        recommendedTime={item.recommendedTime} 
        description={item.description}
        nextDestination={item.nextDestination}
        travelTimeToNextDestination={item.travelTimeToNextDestination} 
        key={uuidv1()}/>
    ))
  )
  }

}

  //     <View>
  //       {/* <Text>{this.props.tourName}</Text>
  //       <Text>{this.state.currentPOIs}</Text> */}

  //     </View>
     
  //   )
  // }



 

// export default TourDetailsList;


const styles = StyleSheet.create({
  tourDetailListItem: {
    marginTop: 50,
  }
})