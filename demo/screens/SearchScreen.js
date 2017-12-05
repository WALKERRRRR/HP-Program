import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  state: {
    toChange: String,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      toChange: ' ',
    };
  }

  render() {
    const tableHead = ['companyName','systemName','serialNumber','productFamily','model','osVersion','cpgCount','recommended.osVersion','location.region','location.country','installDate'];
    const tableTitle = ['System 1','System 2'];
    const tableData = [
      ['1', '2', '3', '4','5', '6','7','8','9','0','10','11'],
      ['a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
    ];
        const widthArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

    return (
        <View>
        <SearchBar
        onChangeText={(toChange) => this.setState({toChange})}
        placeholder='Search'/>
        <Text> {' ' + this.state.toChange+ ' '} </Text>


        <Table style={styles.table}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="Head" style={styles.head} textStyle={styles.headText}/>
            {
              tableTitle.map((title, i) => (
                <Cell key={i} data={title} height={28} style={i%2 && {backgroundColor: '#DFF5F2'}} textStyle={styles.titleText}/>
              ))
            }
          </TableWrapper>
 
          {/* Right scrollview Wrapper */}
          <ScrollView horizontal={true}>
            {/* If parent element is not table element, you should add the type of borderstyle. */}
            <TableWrapper borderStyle={{borderWidth: 1,borderColor: '#000',}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr}/>
              {
                tableData.map((data, i) => (
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
