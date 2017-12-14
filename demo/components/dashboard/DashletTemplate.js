import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import Chart from './react-native-chart/dist/Chart.js';


/*
    Includes templates for all the necessary charts
    and the functions needed to extract the correct data
*/

export default class Template {
    constructor() {}
    
    /*
    Chart 1: Piechart per region
    */

    _drivesByRegionData (systems) {
        data = {}
        for (var key in systems) {
            if (systems[key]['includeInAggregate'] == true) {
                region = systems[key]['location.region'];
                data[region] += 1;   
            }
        }
        return Object.keys(data).map((value, index) => {value});
    };

    _drivesByRegionChart(data) {
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text>Drives by Region</Text>
            <Chart
                style={styles.chart}
                data={data}
                type={'pie'}
                showDataPoint={true}
            />
        </View>
    }; 
    
}




/*
    StyleSheet
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },

  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#999999',
  },
    
  chart: {
    width: 100,
    height: 100,
    marginRight: 30,
    borderRadius: 3,
  },

});