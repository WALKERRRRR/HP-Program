class Dashlet {
    constructor(name, view, active) {
        this.name = name;
        this.view = view;
        this.active = active;
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


class DashletManager {
    constructor(data) {
        // Rebuild all of the dashlets
        this.dashlets = {
            // Dashlet 1
            "0": new Dashlet('Dashlet 1',
                        <View><Text>This is some text</Text></View>,
                         true
                        ),
            // Dashlet 2
            "1": new Dashlet('Dashlet 2',
                        <View><Text>This is some text</Text></View>,
                         true
                        ),
            // Dashlet 3
            "2": new Dashlet('Dashlet 3',
                        <View><Text>This is some text</Text></View>,
                         true
                        )
            // Dashlet 4, etc
        };
    }
    
    // Function to update the dashlets based on new data
    _updateDashlets(data) {
        return 1;
    }
    
    // get all dashlets
    _getDashlets() {
        return this.dashlets();
    }
    
    // Function to get active Dashlets
    
    // Function to get inactive Dashlets
    _getInActiveDashlets() {
        inactive = {}
        for (var key in this.dashlets) {
            if (this.dashlets[key].active == false) {
                inactive[key] = this.dashlets[key];
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