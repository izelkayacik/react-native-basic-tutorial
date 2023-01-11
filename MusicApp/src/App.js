import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';

function App() {
  const RenderSong = ({item}) => <SongCard song={item} />;
  const SongSeperator = () => <View style={styles.line} />;
  const [list, setList] = useState(music_data);
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={list}
        renderItem={RenderSong}
        ItemSeparatorComponent={SongSeperator}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});