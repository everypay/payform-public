/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

import {WebView} from 'react-native-webview';




const App: () => React$Node = () => {
  return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
            style={{flex: 1}}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
          <ScrollView
              style={{flex: 1}}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-between',
              }}>
            <Header />
            <WebView
                originWhitelist={['*']}
                source={{
                  html:
                      '<!doctype html>' +
                      '<html lang="en">' +
                      '  <head>' +
                      '    <meta charset="utf-8">' +
                      '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' +
                      '  </head>' +
                      '<body style="background-color:#fff; height: 100%;">' +
                      '  <div id="pay-form"></div>' +
                      '   </body>' +
                      '   <script src="https://sandbox-js.everypay.gr/v3"></script>' +
                      '<script>' +
                      '  function handleResponse(r) {' +
                      "    console.log('r', r);" +
                      '  }' +
                      'const defaultForm = {' +
                      "  pk: 'your-public-key'," +
                      '  amount: 5013,' +
                      "  locale: 'el'," +
                      '  display: {' +
                      '    mobile: true,' +
                      '  },' +
                      '  buttonOptions: {' +
                      '    fontSize: 16' +
                      '  },' +
                      '  formOptions: {' +
                      '    descriptionOptions: {' +
                      '      fontSize: 16' +
                      '    }' +
                      '  }' +
                      '}\n' +
                      'everypay.payform(defaultForm, handleResponse);' +
                      '</script>' +
                      '</html>',
                }}
                style={{
                  width: Dimensions.get('window').width,
                  flex: 1,
                }}
            />
            <View>
              <Text style={{ textAlign: 'center' }}>This is still part of my mobile app</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
  );
};

export default App;
