import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import logo from './assets/logo.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    id: 1,
    title: "Code Now!",
    description: '"You can code now faster."',
    image: img1
  },
  {
    id: 2,
    title: "Be Tech!",
    description: '"Be Tech in every aspect."',
    image: img2
  },
  {
    id: 3,
    title: "Be Bold!",
    description: '"Bold faster."',
    image: img3
  }
]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false)

  const buttonLabel = (label) => {
    return(
      <View style={{
        position: 'absolute',
        top: 40,
        left: 40
      }}>
        <Text style={{
          color: '#000000',
          fontSize: 18,
          fontWeight: '600'
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage){
    return(
      <AppIntroSlider 
        data={slides}
        renderItem={({item})=>{
          return(
            <View style={styles.container}>
              <Image 
                source={item.image}
                style={{
                  width: Dimensions.get('screen').width-80,
                  height: 400
                }}
                resizeMode='contain' 
              />
              <Text >{item.title}</Text>
              <Text style={{fontWeight: 100}}>{item.description}</Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: '#F43939',
          width: 30
        }}
        showSkipButton
        showNextButton={false}
        showDoneButton={false}
        renderSkipButton={()=>buttonLabel("Skip")}
        onSkip={()=>{
          
          setShowHomePage(true);
        }}
      />
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>WELCOME TO FIRST PAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
  }
});
