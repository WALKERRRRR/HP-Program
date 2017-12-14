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
        filtered = systems.map(x => x['location.region']);
        
        plotdata = {}
        for (x in filtered) {
            if (typeof plotdata[filtered[x]] == 'undefined') {
                plotdata[filtered[x]] = 0;
            }
            plotdata[filtered[x]] += 1;   
        }
        return Object.keys(plotdata).map(x => [x, plotdata[x]]);
    };

    _drivesByRegionChart(plotdata) {
        console.log(plotdata);
        return (
            <View style={{height: 200, width: 400, alignItems: 'center'}}>
                <Text>Drives by Region</Text>
                <Chart
                    style={styles.chart}
                    data={plotdata}
                    type={'pie'}
                    showAxis={false}
                    tightBounds={true}
                />
                <Text></Text>
            </View>
        );
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
    width: 200,
    height: 200,
    
    borderRadius: 3,
    borderColor: 'red', 
    borderWidth: 2,
    alignItems: 'center'
  },

});