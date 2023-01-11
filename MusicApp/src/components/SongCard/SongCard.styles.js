import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  inner_container: {
    marginLeft: 10,
    // padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  artist: {
    color: 'black',
  },
  year: {
    marginLeft: 8,
    fontWeight: 'bold',
    color: 'gray',
  },
  soldOut_container: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'red',
    padding: 5,
  },
  soldOut_title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
  content_container: {
    flexDirection: 'row',
    marginRight: 10,
  },
  albumContainer: {
    marginTop: 2,
  },
});