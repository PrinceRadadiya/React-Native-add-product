import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTOcart, removeTOcart} from '../redux/Action';

const Product = props => {
  const [removepro, setremovepro] = useState(false);
  const result = useSelector(state => state.reducer);
  const item = props.item;
  const dispatch = useDispatch();

  useEffect(() => {
    // if (result && result.length) {
    //   result.forEach(element => {
    //     if (element.name === item.name) {
    //       setremovepro(true);
    //     }
    //   });
    // }

    result.filter((element)=>{
      return element.id === item.id
    })

    if(result.length){
      setremovepro(true)
    }else{
      setremovepro(false)
    }
  }, [result]);

  const handleAddto = item => {
    dispatch(addTOcart(item));
  };

const removeproduct = (item) =>{
  dispatch(removeTOcart(item.id))
}

  return (
    <View
      style={{
        alignItems: 'center',
        margin:20,
        padding: 20,
        borderWidth: 1,
        borderColor: 'black',
      }}>
      <Text>{item.id}</Text>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.font}>{item.name}</Text>
      <Text style={styles.font}>{item.color}</Text>
      <Text style={styles.font}>${item.price}</Text>
      {removepro ? (
        <Button title="Remove pro" onPress={() => removeproduct(item)} />
      ) : (
        <Button title="Add to pro" onPress={() => handleAddto(item)} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 260,
  },
  font: {
    fontSize: 20,
  },
});

export default Product;
