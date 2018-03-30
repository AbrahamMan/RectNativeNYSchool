import React, { Component } from 'react';
import {
StyleSheet,
View,
Text,
FlatList,
TouchableOpacity
} from 'react-native';
import {connect } from 'react-redux';
import getSchoolList from '../actions/actionsCreator';
import {PropTypes} from 'prop-types';

class Schools extends Component{
    componentWillMount(){
        console.log('incomponentwillmount');
        this.props.getSchoolList();
    
    }

    render(){
        return(
            <View>
                <Text>Hello</Text>
                    <FlatList
                            data={this.props.thelist}
                            renderItem={({item}) => <Text>{item.school_name}</Text>}
                    />
            
            
            </View>
        );
    }

    

}

const mapStateToProps=(state)=>(
   {
    thelist:state.schoolslist.item
   }
)

export default connect(mapStateToProps,{getSchoolList})(Schools);