import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const result = useSelector(state => state.reducer);

  const [pro, setpro] = useState(0);
  // console.warn(result);
  useEffect(() => {
    setpro(result.length);
  }, [result]);

  return (
    <View style={{padding: 20, backgroundColor: '#2323'}}>
      <Text style={{textAlign: 'right', fontSize: 20, display: 'flex'}}>
        {pro}
      </Text>
    </View>
  );
};



export default Header;
