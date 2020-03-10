import React, { Component } from 'react'
import { View, Text, ActivityIndicator, ScrollView,StyleSheet, Button } from 'react-native'
// import { Button } from 'native-base';
// import { string } from 'prop-types'
// import axios from 'axios';
// function Separator() {
// return <View style={styles.separator} />;
// }

class Hardware extends Component {
state = {
data: [{}],
loading: true,
}
componentDidMount = () => {
fetch('https://67cb0a28.ngrok.io/', {
method: 'GET'
}).then((response) => response.json())
.then((responseJson) => {
// console.log(responseJson);


this.setState({
data: responseJson, loading: false 
});
})
.catch((error) => {
console.error(error);
});

// this.setState({loading: true});

}
render() {
var list = []; 
list = this.state.data;
// {console.log(typeof(list))}
// {alert(String(list.app_id))}

return( 
    <>
    <Text> </Text>
    <Button title = { "yo!"}></Button>
    

    {list.map(list => 
    <Text>
    Application ID:{"\t"}{list.app_id}{"\n"}

    _____________________________________
    </Text>
    )}


{/* <Text style={{marginTop:100}}>Raw Data for Environment profiles </Text>
   
    

   {list.map(list => 
   <Text style={{marginTop:50}}>
   Application ID:{"\t"}{list.name}{"\n"}
   Created:{"\t"}{list.created}{"\n"}
   Storage Reserved: {"\t"}{list.storage_reserved}{"\n"}   
   Current Message  {"\t"}{list.currentmessage}{"\n"}   
   _____________________________________
   </Text>
   )} */}
    {/* {list.map(list => 
<Button title = {String(list.app_name) }  type="clear">
</Button>


)} */}
    </>
)
// if(this.state.loading){

// return (<> 
// <View style={{marginTop: 200}}>
// <Text>Please wait while{"\n"}the Virtual System Patterns{"\n"}are loading      

// </Text>
// <ActivityIndicator size="large" color="#0000ff" /> 

// </View>
// </>);

// // this.setState({loading:false});
// }
// else{



// return (
// <>
// <ScrollView>
// <View>

// <Text style={{marginTop: 100}}>

// </Text>
// {console.log("balehbaleh!!")}
// {console.log(list)}
// {console.log(typeof(list))}
// {/* {list[0]['app_type']} */}

// {list.map(list => 
// <Text>
// Application ID:{"\t"}{list.app_id}{"\n"}

// _____________________________________
// </Text>
// )}




// </View>
// </ScrollView>
// </>
// )
}
}
// }

const styles = StyleSheet.create({


// separator: 
});
export default Hardware;