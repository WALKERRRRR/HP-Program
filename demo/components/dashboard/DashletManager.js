import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
} from 'react-native';

import Template from './DashletTemplate.js'

const template = new Template()

class Dashlet {
    constructor(text, active, dataFunc, systems, viewFunc) {
        this.text = text;
        this.active = active;
        this._dataFunc = (sys) => dataBuilder(sys);
        // Set the data needed to render the chart
        this.plotData = dataFunc(systems);
        // Now we can make the view
        this._viewFunc = () => viewFunc(this.plotData);
    }
    
    _setData(systems) {
        return 1;
    }
    
    _setAsActive() {
        this.active = true;
    }
    
    _setAsInactive() {
        this.active = false;
    }
    
    _isActive() {
        return this.active;
    }
}


export default class DashletManager {
    
    constructor(systems) {
        usable = systems.filter(x => x['includeInAggregate'] == true);
        // Rebuild all of the dashlets
        this.dashlets = {
            // Dashlet 1
            "0": new Dashlet(text='Drives by Region',
                            active=true,
                            dataFunc = (sys) => template._drivesByRegionData(sys),
                            systems=usable,
                            viewFunc = (d) => template._drivesByRegionChart(d)),
            // Dashlet 2
            "1": new Dashlet(text='Drives by Region 2',
                            active=true,
                            dataFunc = (sys) => template._drivesByRegionData(sys),
                            systems=usable,
                            viewFunc = (d) => template._drivesByRegionChart(d)),
            // Dashlet 3
            "2": new Dashlet(text='Drives by Region 3',
                            active=true,
                            dataFunc = (sys) => template._drivesByRegionData(sys),
                            systems=usable,
                            viewFunc = (d) => template._drivesByRegionChart(d)),
            
            // Dashlet 4, etc
        };
    }
    
    // Function to update the dashlets based on new data
    _updateDashlets(d) {
        return 1;
    }
    
    // get all dashlets
    _getDashlets() {
        return this.dashlets;
    }
    
    // Function to get active Dashlets
    
    // Function to get inactive Dashlets
    _getInactiveDashlets() {
        inactive = {}
        for (var key in this.dashlets) {
            if (this.dashlets[key].active == false) {
                inactive[key] = this.dashlets[key].text;
            }
        }
        return inactive;
    }
    
    // Funtion to set Dashlets as Active
    _setActiveDashlets(toAdd) {
        for (var i = 0; i < toAdd.length; i++) {
            this.dashlets[toAdd[i]]._setAsActive();
        }
    }
    
}