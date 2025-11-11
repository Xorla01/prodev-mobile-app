import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={BACKGROUNDIMAGE} resizeMode="cover" style={styles.backgroundImageContainer}>
          <View style={styles.logoContainer}>
            <Image source={HEROLOGO} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Find your favorite place here</Text>
            
            <View style={styles.titleSubTextContainer}>
              <Text style={styles.titleSubText}>The best prices for over 2</Text>
              <Text style={styles.titleSubText}>millions properties worldwide</Text>
            </View>
          </View>

          <View style={{ position: 'absolute', bottom: 0, width: '100%'}}>
            <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push('/join')}>
              <Text style={styles.buttonPrimaryText}>Join</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/signin')}>
              <Text style={styles.buttonSecondaryText}>Sign in</Text>
            </TouchableOpacity>
            </View>

            <Link href={'/(home)'} style={styles.buttonGroupSubText} >
              <Text style={styles.titleSubText}>Continue to home</Text>
              <Ionicons name="arrow-forward" size={25} color= 'white' />
            </Link>
          </View>
          
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}