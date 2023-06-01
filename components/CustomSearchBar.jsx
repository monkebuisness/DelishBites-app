import * as React from 'react';
import { Searchbar } from 'react-native-paper';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    gap: 4,
    position: 'absolute',
    left: '2.91%',
    right: '3.88%',
    top: '14.91%',
    bottom: '79.6%',
    backgroundColor: 'linear-gradient(0deg, rgba(75, 49, 44, 0.45), rgba(75, 49, 44, 0.45)), #FFFBFE',
    borderRadius: 28,
  },
};
CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.container}
      inputStyle={{paddingBottom:10}}
    />
  );
};

export default CustomSearchBar;