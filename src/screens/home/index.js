import {Text, View, SectionList, Button, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import callAPI from '../../utils/callAPI';
import styles from './style';

export default function index() {
  const {getCategories, categories} = callAPI();
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.headerText}>Test APP</Text>

      {categories &&
        categories.map((item, index) => {
          const number = index + 1;
          return (
            <View key={index} style={styles.header}>
              <Text style={styles.number}>{number}</Text>
              <Text>{item}</Text>
              <Button onPress={() => {}} title="Go Top" color="blue" />
            </View>
          );
        })}
    </View>
  );
}
