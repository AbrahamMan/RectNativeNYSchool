import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    SectionList,
    TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import getSchoolList from '../actions/actionsCreator';
import { PropTypes } from 'prop-types';


class Schools extends Component {
    componentWillMount() {
        console.log('incomponentwillmount');
        this.props.getSchoolList();
    }

    render() {
        return (
            <View>
                <Text>Hello</Text>
                <FlatList
                    data={this.props.thelist}
                    title={this.props.thelist.dbn}
                    renderItem={({ item }) => <ListItem key={item.dbn} title={item.dbn} subtitle={item.school_name} />}

                />
            </View>
        );
    }

}

const mapStateToProps = (state) => (
    {
        thelist: state.schoolslist.item
    }
)
Schools.propTypes = {
    thelist: PropTypes.array.isRequired,
    getSchoolList: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})
export default connect(mapStateToProps, { getSchoolList })(Schools);