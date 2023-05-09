import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getuserList} from './redux/Action';

const UserFile = () => {
  const dispatch = useDispatch();
  const result = useSelector(state => state.reducer);

  useEffect(() => {
    dispatch(getuserList());
  }, []);

  return (
    <View>
      {result.length
        ? result.map(item => (
            <View key={item.id}>
              <Text>
                {console.log(item)}
                {item.price}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
};

export default UserFile;
