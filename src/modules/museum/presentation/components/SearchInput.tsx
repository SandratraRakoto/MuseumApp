import React, {FC} from 'react';

import {MaterialIcons} from '@expo/vector-icons';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '@/constants/Colors';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};
const SearchInput: FC<SearchInputProps> = ({onChange, value}) => {
  return (
    <View style={styles.searchContainer}>
      <MaterialIcons
        name="search"
        size={20}
        color="#000"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="Search Museum"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    zIndex: 2,
    backgroundColor: Colors.light.background,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    margin: 16,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
});

export default SearchInput;
