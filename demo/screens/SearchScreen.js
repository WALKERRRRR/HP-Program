import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SearchBar } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import '../data/data.js'


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  state: {
<<<<<<< HEAD
    toChange: String,

=======
    query: String,
>>>>>>> 1fdc48691b5c1b6c3e44f621a621443b5bffecf3
  }
  
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      toChange: '',
    };
  }


  render() {

     tableHead = ['systemName', 'companyName', 'serialNumber','productFamily','model','osVersion','cpgCount','recommended.osVersion','location.region','location.country','installDate', 'updated'];
     tableTitle = ['Ricadonna','System 2','Ricadonna','System 2','Ricadonna','System 2','Ricadonna','System 2','Ricadonna','System 2','Ricadonna','System 2','Ricadonna','System 2','Ricadonna','System 2','Ricadonna','System 2','Ricadonna','lolol'];
     tableData = [
      ['Ricadonna', 'Frenzy','1', '7000','7200' , '3.2.2.612 ', '(MU4)',' 45', 'Americas' , 'US' , '2014-03-12T16:45:27Z ', '2017-09-20T09:30:13Z'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','Frenzy','1', '7000','7200' , '3.2.2.612 ', '(MU4)',' 45', 'Americas' , 'US' , '2014-03-12T16:45:27Z ', '2017-09-20T09:30:13Z'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['System 2' ,'a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['Ricadonna','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
      ['lolol','a', 'b', 'c', 'd','e','f','g','i','j','k','l','m','n','o'],
    ] ;
    widthArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
    var toChange = this.state.toChange;
    var filteredTableData = toChange == '' ? tableData : tableData.filter(row=> row.some(elem => elem.includes(toChange)));
=======
      query: ' ',
    };
  }

  
  render() {
>>>>>>> 1fdc48691b5c1b6c3e44f621a621443b5bffecf3

    tableHead = ['companyName', 'systemName', 'serialNumber','productFamily','model','osVersion','cpgCount','recommended.osVersion','location.region','location.country','installDate', 'updated'];
    
    toProcess = global.data;
    tableData = toProcess.map(elem => [elem['companyName'], elem['systemName'], elem['serialNumber'],elem['productFamily'],elem['model'],elem['osVersion'],elem['cpgCount'],elem['recommended.osVersion'],elem['location.region'],elem['location.country'],elem['installDate'], elem['updated']]);
    
    widthArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
    var query = this.state.query;
    var filteredTableData = query = '' ? tableData : tableData.filter(row=> row.some(elem => elem.includes(query)));
    return (
        <View>
        <SearchBar
        onChangeText = {(query) => this.setState({query})}
        placeholder='Search'/>
<<<<<<< HEAD

=======
        
>>>>>>> 1fdc48691b5c1b6c3e44f621a621443b5bffecf3
        <ScrollView>
        <Table style={styles.table}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
<<<<<<< HEAD
            <Cell data="System Name" style={styles.head} textStyle={styles.headText}/>
            {
              filteredTableData.map((row, i) => (
                <Cell key={i} data={row[0]} height={28} style={i%2 && {backgroundColor: '#DFF5F2'}} textStyle={styles.titleText}/>
=======
            <Cell data= {'checkBox here?'} style={styles.head} textStyle={styles.headText}/>
            {
              filteredTableData.map((row, i) => (
                <Cell key={i} data={row[3]} height={28} style={i%2 && {backgroundColor: '#DFF5F2'}} textStyle={styles.titleText}/>
>>>>>>> 1fdc48691b5c1b6c3e44f621a621443b5bffecf3
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
<<<<<<< HEAD

=======
>>>>>>> 1fdc48691b5c1b6c3e44f621a621443b5bffecf3

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
  table: { width: 360, flexDirection: 'row'},
  head: { backgroundColor: '#333', height: 40 },
  headText: { color: '#fff', textAlign: 'center' },
  titleText: { marginLeft: 6 },
  list: { height: 28, backgroundColor: '#f0f0f0' },
  listText: { textAlign: 'right', marginRight: 6 },
});
