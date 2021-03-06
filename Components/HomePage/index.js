import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import CoffeList from '../CoffeList';
import CoffeDetail from '../CoffeDetail';
import CoffeCart from '../CoffeCart';

import background from '../../images/10.jpg';
import MyHeader from '../MyHeader';

export default class HomePage extends Component {
  render() {
    return (
        <ImageBackground source={background} style={{height: null, width: null, flex: 1}}>
          <Container>
            <MyHeader />
            <Content>
              <CoffeCart />
            </Content>
            <Footer style={{backgroundColor: "transparent"}}>
              <FooterTab>
                <Button full>
                  <Text style={styles.footerbutton}>
                    <Icon name='cart' style={styles.footericon} />
                     Cart
                  </Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5cd6d6',
    opacity: 0.6,
  },
  topheader: {
    backgroundColor: '#5cd6d6',
    opacity: 0,

  },
  icon: {
    color: 'white',
    fontSize: 17,
    opacity: 1,
    },
    footericon: {
        color: 'white',
        fontSize: 15,
    },
  text: {
      color: 'white',
      fontSize: 15,
      marginTop: 19,
      opacity: 1,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
    opacity: 1,

    },
    footerbutton: {
        
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        },
    footer: {
        backgroundColor: '#5cd6d6',
        opacity: 0.6,
    }
});

