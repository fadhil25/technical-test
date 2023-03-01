import React, {useCallback, useEffect, useState} from 'react';
import {API_CATEGORIES} from './constant'
import {Text, View, Alert} from 'react-native';
export default function fetchAPI() {
  const [categories, setCategories] = useState([]);
  
const getCategories = async () => {
  try {
    await fetch(API_CATEGORIES)
    .then(res => res.json())
    .then(json => { setCategories(json.categories) })
  } catch (err) { 
    Alert.alert("Error", err.message )
  }
 
};


  return {getCategories , categories};
}
