import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, } from 'react-native';
import {Button} from 'react-native-elements' ;
import { Separator } from 'native-base';
// import Icon from 'react-native-vector-icons/AntDesign';
import { Icon } from 'react-native-elements'
import AntIcon from "react-native-vector-icons/AntDesign";
// import {Button} from 'react-native-paper'
// import { Table, TableWrapper, Row } from 'react-native-table-component';
import { Col, Row, Grid } from "react-native-easy-grid"; 
import { Card } from 'react-native-elements';
import {AccordionList} from "accordion-collapse-react-native";
import MyHeader from "./MyHeader";

 
export default class CLoudScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['App_Name','Creator'],
      widthArr: [80, 100 ],
      data: [{}],
      isLoggedIn : true
    }
  }

  componentDidMount = () => {
    fetch('https://api.myjson.com/bins/y26zw', {
    method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
    // console.log(responseJson);
    this.setState({
    data: responseJson, loading: false 
    });
    })
    .catch((error) => {
    console.error(error);
    }) ;
}

_head(item){
  return(
      <Separator bordered style={{alignItems:'center'}}>
        <Text>{item.app_name}</Text>
      </Separator>
  );
}

_body(item){
  return (
      <View style={{padding:10}}>
        
        <Text style={{textAlign:'center'}}>Application ID : {item.app_id}</Text>
        <Text style={{textAlign:'center'}}>Application Type : {item.app_type}</Text>
        <Text style={{textAlign:'center'}}>Creator : {item.creator}</Text>
        <View style={{marginTop:30,flexDirection:'row'}}>
        
        <AntIcon name="cloud" color="blue" size={20} style={{paddingLeft: 100}} />
        <AntIcon name="edit" color="blue" size={20} style={{paddingLeft: 10}} />
        <AntIcon name="export" color="blue" size={20} style={{paddingLeft: 10}}/>
        <AntIcon name="delete" color="blue" size={20} style={{paddingLeft: 10}}/>
        {/* <AntIcon name="file" color="blue" size={20} style={{paddingLeft: 10}}/> */}
        <AntIcon name="lock" color="blue" size={20} style={{paddingLeft: 10}}/>
      

        {/* <Icon name="arrow" size={20} color="#32CD32" style={{paddingLeft:20}}/>  
        <Icon name="rocket" size={20} color="#32CD32" style={{paddingLeft:20}}/>  
        <Icon name="trash" size={20} color="#32CD32" style={{paddingLeft:20}}/>  
        <Icon name="lock" size={20} color="#32CD32" style={{paddingLeft:20}}/>  
        <Icon name="unlock" size={20} color="#32CD32" style={{paddingLeft:20}} />  */}
        
        </View> 
      </View>
  );
}
 
  render() {

    var list = []; 
    list = this.state.data;


    let {isLoggedIn} = this.state;
    let getData = false ;
    let name ;
    let i = 1 ;
    const renderPattern = (app_name )=>{
      getData = true ;
      name = app_name ;
      alert(name.app_name)

      // if(isLoggedIn){
      //   return <Button title = "Logout"></Button>
      // } else{
      //   return <Button title = "Login"></Button>
      // }
      
    }
  
  
    return (
        
      <View style={{}}>
        <MyHeader/>
       
<ScrollView style={{
     margin: 20 }}>
<Grid  style={{}}>
    <Col> 
   
{/*     
{list.map(list =>  */}

<AccordionList
            list={list}
            header={this._head}
            body={this._body}
          />

{/* )} */}
    </Col>
</Grid>



</ScrollView>
{/* <Card title="Local Modules">
          <Text>
            This is a card from the react-native-elements
          </Text>
        </Card> */}


      </View>
    )
      
      
  }
}
 
const styles = StyleSheet.create({
  col1:{
    backgroundColor: '#D3D3D3',
    marginBottom: 15,
    
  },
  iconss:{
  paddingLeft: 8,
  width: 100,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
  },
  submit:{},
  serverTable:{
      paddingTop: 20,
      paddingLeft: 15,
      paddingRight: 15,
      // paddingBottom: 120,
      marginBottom : 50,
    //   fontFamily: 'Helvetica,Verdana,Arial,sans-serif'
      
      
      // backgroundColor: 'red',
  },
  subhead: {
    fontSize: 20,
    // backgroundColor: '#D3D3D3',
    paddingBottom: 30,
    paddingLeft: 10,
    
  },
  scrollView: {
    // backgroundColor: Colors.lighter,
  },iconss:{
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 210,
    },
  
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 2
  },
});