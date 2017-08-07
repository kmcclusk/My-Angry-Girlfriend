class Navigation extends React.Component{
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute=\{\{id: 'first'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        return (<First navigator={navigator} title="first"/>);
      case 'DJ':
        return (<Second navigator={navigator} title="DJ" />);
      case 'Kimmy':
        return (<Second navigator={navigator} title="Kimmy" />);
      case 'Stephanie':
        return (<Second navigator={navigator} title="Stephanie" />);
      case 'Michelle':
        return (<Second navigator={navigator} title="Michelle" />);
    }
  }
}