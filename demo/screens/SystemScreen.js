import React from 'react';
import { SectionList, Image, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import '../data/accountData.js';
import '../data/data.js';
import '../data/dashlets.js';

var systemindex = 0;

export default class SystemScreen extends React.Component {
  static navigationOptions = {
    title: 'System Details',
  };
  render() {
    const { manifest } = Constants;
    //systemindex = this.props.navigation.params.index
    var sections = [
      { data: [{ value: global.data[systemindex]['model'] }], title: 'model' },
      { data: [{ value: global.data[systemindex]['disksState'] }], title: 'disksState' },
      { data: [{ value: global.data[systemindex]['serialNumber'] }], title: 'serialNumber' },

      { data: [{ value: global.data[systemindex]['osVersion'] }], title: 'osVersion' },
      { data: [{ value: global.data[systemindex]['productFamily'] }], title: 'productFamily' },
      { data: [{ value: global.data[systemindex]['updated'] }], title: 'updated' },
      { data: [{ value: global.data[systemindex]['installDate'] }], title: 'installDate' },
      { data: [{ value: global.data[systemindex]['tpvvCount'] }], title: 'tpvvCount' },
      { data: [{ value: global.data[systemindex]['vvCount'] }], title: 'vvCount' },
      { data: [{ value: global.data[systemindex]['cpgCount'] }], title: 'cpgCount' },

      { data: [{ value: global.data[systemindex]['recommended.osVersion'] }], title: 'recommended.osVersion' },

      { data: [{ value: global.data[systemindex]['capacity.total.dedupeRatio'] }], title: 'capacity.total.dedupeRatio' },
      { data: [{ value: global.data[systemindex]['capacity.total.compactionRatio'] }], title: 'capacity.total.compactionRatio' },
      { data: [{ value: global.data[systemindex]['capacity.total.compressionRatio'] }], title: 'capacity.total.compressionRatio' },
      { data: [{ value: global.data[systemindex]['capacity.byType.ssd.sizeTiB'] }], title: 'capacity.byType.ssd.sizeTiB' },
      { data: [{ value: global.data[systemindex]['capacity.byType.ssd.freeTiB'] }], title: 'capacity.byType.ssd.freeTiB' },
      { data: [{ value: global.data[systemindex]['capacity.byType.nl.sizeTiB'] }], title: 'capacity.byType.nl.sizeTiB' },
      { data: [{ value: global.data[systemindex]['capacity.byType.nl.freeTiB'] }], title: 'capacity.byType.nl.freeTiB' },
      { data: [{ value: global.data[systemindex]['capacity.byType.fc.sizeTiB'] }], title: 'capacity.byType.fc.sizeTiB' },
      { data: [{ value: global.data[systemindex]['capacity.byType.fc.freeTiB'] }], title: 'capacity.byType.fc.freeTiB' },
      { data: [{ value: global.data[systemindex]['capacity.total.sizeTiB'] }], title: 'capacity.total.sizeTiB' },
      { data: [{ value: global.data[systemindex]['capacity.total.freeTiB'] }], title: 'capacity.total.freeTiB' },
      { data: [{ value: global.data[systemindex]['capacity.total.freePct'] }], title: 'capacity.total.freePct' },

      { data: [{ value: global.data[systemindex]['performance.summary.portInfo.totalServiceTimeMillis'] }], title: 'performance.summary.portInfo.totalServiceTimeMillis' },
      { data: [{ value: global.data[systemindex]['performance.summary.portInfo.readServiceTimeMillis'] }], title: 'performance.summary.portInfo.readServiceTimeMillis' },
      { data: [{ value: global.data[systemindex]['performance.summary.vvInfo.vvsByType.ssd.writeBandwidthMBPS'] }], title: 'performance.summary.vvInfo.vvsByType.ssd.writeBandwidthMBPS' },
      { data: [{ value: global.data[systemindex]['performance.summary.portInfo.writeServiceTimeMillis'] }], title: 'performance.summary.portInfo.writeServiceTimeMillis' },
      { data: [{ value: global.data[systemindex]['performance.summary.vvInfo.vvsByType.ssd.readServiceTimeMillis'] }], title: 'performance.summary.vvInfo.vvsByType.ssd.readServiceTimeMillis' },
      { data: [{ value: global.data[systemindex]['performance.summary.vvInfo.vvsByType.ssd.writeServiceTimeMillis'] }], title: 'performance.summary.vvInfo.vvsByType.ssd.writeServiceTimeMillis' },
      { data: [{ value: global.data[systemindex]['performance.portBandwidthData.total.dataRateKBPSAvg'] }], title: 'performance.portBandwidthData.total.dataRateKBPSAvg' },
      { data: [{ value: global.data[systemindex]['performance.portBandwidthData.total.iopsAvg'] }], title: 'performance.portBandwidthData.total.iopsAvg' },
      { data: [{ value: global.data[systemindex]['performance.summary.delAckPct'] }], title: 'performance.summary.delAckPct' },
      { data: [{ value: global.data[systemindex]['performance.portBandwidthData.total.iopsMax'] }], title: 'performance.portBandwidthData.total.iopsMax' },
      { data: [{ value: global.data[systemindex]['performance.summary.vvInfo.vvsByType.ssd.readBandwidthMBPS'] }], title: 'performance.summary.vvInfo.vvsByType.ssd.readBandwidthMBPS' },

      { data: [{ value: global.data[systemindex]['poo'] }], title: 'disks.total.diskCountNormal' },
      { data: [{ value: global.data[systemindex]['poo'] }], title: 'disks.total.diskCount' },
      { data: [{ value: global.data[systemindex]['poo'] }], title: 'disks.total.diskCountFailed' },
      { data: [{ value: global.data[systemindex]['poo'] }], title: 'disks.total.diskCountDegraded' },


      { data: [{ value: global.data[systemindex]['location.region'] }], title: 'location.region' },
      { data: [{ value: global.data[systemindex]['location.country'] }], title: 'location.country' },

      { data: [{ value: global.data[systemindex]['nodes.nodeCount'] }], title: 'nodes.nodeCount' },
      { data: [{ value: global.data[systemindex]['nodes.cpuAvgMax'] }], title: 'nodes.cpuAvgMax' },
      { data: [{ value: global.data[systemindex]['nodes.nodeCountOffline'] }], title: 'nodes.nodeCountOffline' },
    ];
    return (
      <SectionList
        style={styles.container}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        stickySectionHeadersEnabled={true}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={ListHeader}
        sections={sections}
      />
    );
  }

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} />;
  };

  _renderItem = ({ item }) => {
    if (item.type === 'color') {
      return (
        <SectionContent>
          {item.value && <Color value={item.value} />}
        </SectionContent>
      );
    } else {
      return (
        <SectionContent>
          <Text style={styles.sectionContentText}>
            {item.value}
          </Text>
        </SectionContent>
      );
    }
  };
}

const ListHeader = () => {
  const { manifest } = Constants;

  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleIconContainer}>
        <AppIconPreview iconUrl={'https://cdn4.iconfinder.com/data/icons/database/PNG/512/Database_4.png'} />
      </View>

      <View style={styles.titleTextContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          {global.data[systemindex]['systemName']}
        </Text>

        <Text style={styles.slugText} numberOfLines={1}>
          {'Company: ' + global.data[systemindex]['companyName']}
        </Text>
        <Text style={styles.descriptionText}>
          {'Included in dashlets: ' + global.data[systemindex]['includeInAggregate']}
        </Text>
      </View>
    </View>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>
        {title}
      </Text>
    </View>
  );
};

const SectionContent = props => {
  return (
    <View style={styles.sectionContentContainer}>
      {props.children}
    </View>
  );
};

const AppIconPreview = ({ iconUrl }) => {
  if (!iconUrl) {
    iconUrl =
      'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
  }

  return (
    <Image
      source={{ uri: iconUrl }}
      style={{ width: 64, height: 64 }}
      resizeMode="cover"
    />
  );
};

const Color = ({ value }) => {
  if (!value) {
    return <View />;
  } else {
    return (
      <View style={styles.colorContainer}>
        <View style={[styles.colorPreview, { backgroundColor: value }]} />
        <View style={styles.colorTextContainer}>
          <Text style={styles.sectionContentText}>
            {value}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2,
  },
  sectionHeaderContainer: {
    backgroundColor: '#fbfbfb',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 14,
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15,
  },
  sectionContentText: {
    color: '#808080',
    fontSize: 14,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
  },
  slugText: {
    color: '#a39f9f',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: '#4d4d4d',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  colorTextContainer: {
    flex: 1,
  },
});
