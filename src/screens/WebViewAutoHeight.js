import React, { useState } from 'react'
import { Dimensions} from 'react-native'
import { WebView } from 'react-native-webview'


export default (props) => {

  const [webViewHeight, setWebViewHeight] = useState(10)

  const onWebViewMessage = (event) => {
    setWebViewHeight(Number(event.nativeEvent.data))
  }
  const deviceWidth=Dimensions.get('window').width;
  const deviceHeight=Dimensions.get('window').height;

  
  const fonts = {
    Raleway: {
        bold: 'Raleway-Bold',
        extraBold: 'Raleway-ExtraBold',
        light: 'Raleway-Light',
        italic: 'Raleway-Italic',
        hasaninki: 'Oswald-VariableFont_wght',
        blackitalic: 'Raleway-BlackItalic',
        mediumitalic: 'Raleway-MediumItalic',
        medium: 'Raleway-Medium'
    },
}
  return (
    <WebView onMessage={onWebViewMessage} 
    injectedJavaScript={'window.ReactNativeWebView.postMessage(document.body.scrollHeight)'}
    source={{html: '<meta name="viewport" content="width=deviceWidth, initial-scale=1.0"></meta>' +  props.html}} 
    style={{width: deviceWidth, 
    height: webViewHeight, flexShrink:1}} />
  )
}