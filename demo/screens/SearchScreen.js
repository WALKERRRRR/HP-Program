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
      toSearch: [{ "capacity.byType.ssd.sizeTiB": "9.75625", "cpgCount": "45", "serialNumber": "1", "capacity.total.compactionRatio": "6.599999904632568", "nodes.cpuAvgMax": "1", "capacity.total.sizeTiB": "67.06875", "performance.summary.portInfo.totalServiceTimeMillis": "0.8935664623975753", "performance.summary.portInfo.readServiceTimeMillis": "1.4700697481632232", "recommended.osVersion": "", "disks.total.diskCountNormal": "192", "performance.portBandwidthData.total.dataRateKBPSAvg": "20597.5", "capacity.byType.nl.freeTiB": "18.219140624999998", "performance.summary.vvInfo.vvsByType.ssd.writeBandwidthMBPS": "", "disks.total.diskCount": "192", "performance.summary.vvInfo.vvsByType.ssd.readServiceTimeMillis": "", "capacity.total.freePct": "53.699851989746094", "installDate": "2014-03-12T16:45:27Z", "performance.portBandwidthData.total.iopsAvg": "978.0", "performance.summary.portInfo.writeServiceTimeMillis": "0.3076309263706207", "tpvvCount": "30", "location.region": "Americas", "performance.summary.vvInfo.vvsByType.ssd.writeServiceTimeMillis": "", "capacity.byType.ssd.freeTiB": "7.4976562499999995", "nodes.nodeCount": "6", "capacity.total.freeTiB": "36.0158203125", "updated": "2017-09-20T09:30:13Z", "capacity.byType.nl.sizeTiB": "39.4625", "vvCount": "36", "companyName": "Frenzy", "performance.summary.delAckPct": "", "disksState": "normal", "disks.total.diskCountFailed": "", "capacity.total.dedupeRatio       ": "", "osVersion": "3.2.2.612 (MU4)", "capacity.total.compressionRatio": "", "productFamily": "7000", "disks.total.diskCountDegraded": "", "capacity.byType.fc.sizeTiB": "17.849999999999998", "performance.portBandwidthData.total.iopsMax": "1454.2", "nodes.nodeCountOffline": "0", "systemName": "Ricadonna", "capacity.byType.fc.freeTiB": "10.299023437499999", "location.country": "US", "model": "7200", "performance.summary.vvInfo.vvsByType.ssd.readBandwidthMBPS": "" }, { "capacity.byType.ssd.sizeTiB": "", "cpgCount": "6", "serialNumber": "2", "capacity.total.compactionRatio": "4.300000190734863", "nodes.cpuAvgMax": "1", "capacity.total.sizeTiB": "26.873437499999998", "performance.summary.portInfo.totalServiceTimeMillis": "2.3", "performance.summary.portInfo.readServiceTimeMillis": "1.738500040769577", "recommended.osVersion": "3.2.2(EMU4)", "disks.total.diskCountNormal": "72", "performance.portBandwidthData.total.dataRateKBPSAvg": "98430.5", "capacity.byType.nl.freeTiB": "", "performance.summary.vvInfo.vvsByType.ssd.writeBandwidthMBPS": "", "disks.total.diskCount": "72", "performance.summary.vvInfo.vvsByType.ssd.readServiceTimeMillis": "", "capacity.total.freePct": "61.79792404174805", "installDate": "2016-07-25T17:07:37Z", "performance.portBandwidthData.total.iopsAvg": "546.0", "performance.summary.portInfo.writeServiceTimeMillis": "2.0", "tpvvCount": "18", "location.region": "Americas", "performance.summary.vvInfo.vvsByType.ssd.writeServiceTimeMillis": "", "capacity.byType.ssd.freeTiB": "", "nodes.nodeCount": "6", "capacity.total.freeTiB": "16.6072265625", "updated": "2017-09-20T09:22:16Z", "capacity.byType.nl.sizeTiB": "", "vvCount": "24", "companyName": "Shanga", "performance.summary.delAckPct": "", "disksState": "normal", "disks.total.diskCountFailed": "", "capacity.total.dedupeRatio       ": "", "osVersion": "3.2.2.530 (MU3)", "capacity.total.compressionRatio": "", "productFamily": "8000", "disks.total.diskCountDegraded": "", "capacity.byType.fc.sizeTiB": "26.873437499999998", "performance.portBandwidthData.total.iopsMax": "679.8000000000001", "nodes.nodeCountOffline": "0", "systemName": "Brainchild", "capacity.byType.fc.freeTiB": "16.6072265625", "location.country": "MX", "model": "8200", "performance.summary.vvInfo.vvsByType.ssd.readBandwidthMBPS": "" }],
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
    filtered = tS.filter(sys => sys.serialNumber > 0);
    tT = filtered.map((sys) => sys.cpgCount);
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
          <ScrollView horizontal={true}>
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
