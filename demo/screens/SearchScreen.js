import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import '../data/data.js'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  state: {
    query: String,
  }

  constructor(props) {
    super(props);
    this.state = {
      query: ' ',
    };
  }




  render() {

    tableHead = ['companyName', 'systemName', 'serialNumber','productFamily','model','osVersion','cpgCount','recommended.osVersion','location.region','location.country','installDate', 'updated'];

    toProcess = global.accountData;
    tableData = toProcess.map(elem => [elem['companyName'], elem['systemName'], elem['serialNumber'],elem['productFamily'],elem['model'],elem['osVersion'],elem['cpgCount'],elem['recommended.osVersion'],elem['location.region'],elem['location.country'],elem['installDate'], elem['updated']]);

    widthArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
    var query = this.state.query;
    var filteredTableData = query = '' ? tableData : tableData.filter(row=> row.some(elem => elem.includes(query)));
    return (
        <View>
        <SearchBar
        onChangeText = {(query) => this.setState({query})}
        placeholder='Search'/>

        <ScrollView>
        <Table style={styles.table}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data= {'Dashboard Toggle'} style={styles.head} textStyle={styles.headText}/>
            {
              filteredTableData.map((row, i) => (
                <TouchableOpacity style={[styles.toggle, i%2 && {backgroundColor: '#DFF5F2'}]} widthArr={widthArr} textStyle={styles.listText} onPress ={function myFunction(){}}>
                <Text>My button</Text>
                </TouchableOpacity>
              ))
            }
          </TableWrapper>

          {/* Right scrollview Wrapper */}
          <ScrollView horizontal={true}>
            {/* If parent element is not table element, you should add the type of borderstyle. */}
            <TableWrapper borderStyle={{borderWidth: 0,borderColor: '#000',}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr}/>
              {
                filteredTableData.map((data, i) => (
                  <Row key={i} data={data} style={[styles.list, i%2 && {backgroundColor: '#DFF5F2'}]} widthArr={widthArr} textStyle={styles.listText}/>
                ))
              }
            </TableWrapper>
          </ScrollView>
        </Table>
        <View style={{width: 50, height: 55}} />
        </ScrollView>

        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  table: { width: 360, flexDirection: 'row' },
  head: { backgroundColor: '#333', height: 40 },
  headText: { color: '#fff', textAlign: 'center' },
  titleText: { marginLeft: 6 },
  list: { height: 33, backgroundColor: '#f0f0f0' },
  listText: { textAlign: 'right', marginRight: 6 },
  toggle: {height: 33, backgroundColor: '#f0f0f0', borderBottomWidth: 1, borderBottomColor: 'black'},
});
