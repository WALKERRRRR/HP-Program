



class NestedRootNavigation extends React.Component {
    constructor(props)  {
        super(props);
    }
    render() {
        return (
            <DashboardNavigator screenProps={{ rootNavigation: this.props.navigation }} />
        );
    }
}
