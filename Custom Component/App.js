import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';
import CardStyle from './components/Card/Card.style';

function App(){
  return(
    <SafeAreaView style={styles.container}>
        <Card title="Albert Einstein" text="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. "/>
        <Card title="Georg C. Lichtenberg" text="It is strange that only extraordinary men make the discoveries, which later appear so easy and simple."/>
        <Card title="John Archibald Wheeler" text="There is no law except the law that there is no law."/>
        <Card title="Isaac Asimov" text=" The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom. "/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
