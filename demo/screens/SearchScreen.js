import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
    tableHead: [],
    tableTitle: [],
    tableData: [],
    toSearch: [],
  }
  
  constructor(props) {
    super(props);
    this.state = {
      query: ' ',
      tableHead: ['companyName','systemName','serialNumber','productFamily','model','osVersion','cpgCount','recommended.osVersion','location.region','location.country','installDate'],
      tableTitle: ['System 1', 'System 2'],
      tableData: [
        ['1', '2', '3', '4','5', '6','7','8','9','0','10','11'],
        ['a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ],
      toSearch: global.data,
    };
  }

  handleSearch = (text) => {
    this.setState({ query: text });
    tT = [];
    tD = [];
    tS = this.state.toSearch;
    tT = ["One System"];
    tD = [
      ['1', '2', '3', '4', '5', '6','7','8','9','0','10','11'],
      ['2', '4', '4', '2', '6', '6','4','6','2','8','3','45'],
    ];
    filtered = tS.filter(sys => sys["serialNumber"] > 0);
    tT = filtered.map((sys) => sys["cpgCount"]);
    tD = filtered.map(sys => [sys["companyName"],sys["systemName"],sys["serialNumber"],sys["productFamily"],sys["model"],sys["osVersion"],sys["cpgCount"],sys["recommended.osVersion"],sys["location.region"],sys["location.country"],sys["installDate"]]);
    this.setState({ tableTitle: tT});
    this.setState({ tableData: tD});
  }

  

  render() {
        widthArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

    return (
        <View>
        <SearchBar
        onChangeText = {this.handleSearch}
        placeholder='Search'/>
        <Text> {' ' + this.state.query+ ' '} </Text>


        <Table style={styles.table}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data= {''+ this.state.query+ ''} style={styles.head} textStyle={styles.headText}/>
            {
              this.state.tableTitle.map((title, i) => (
                <Cell key={i} data={title} height={28} style={i%2 && {backgroundColor: '#DFF5F2'}} textStyle={styles.titleText}/>
              ))
            }
          </TableWrapper>
 
          {/* Right scrollview Wrapper */}
          <ScrollView horizontal={true} vertical={true}>
            {/* If parent element is not table element, you should add the type of borderstyle. */}
            <TableWrapper borderStyle={{borderWidth: 1,borderColor: '#000',}}>
              <Row data={this.state.tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr}/>
              {
                this.state.tableData.map((data, i) => (
                  <Row key={i} data={data} style={[styles.list, i%2 && {backgroundColor: '#DFF5F2'}]} widthArr={widthArr} textStyle={styles.listText}/>
                ))
              }
            </TableWrapper>
          </ScrollView>
        </Table>


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
  list: { height: 28, backgroundColor: '#f0f0f0' },
  listText: { textAlign: 'right', marginRight: 6 },
});
