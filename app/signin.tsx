import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { styles } from "@/styles/_joinstyle";

export default function Index() {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.iconSection}>
                    <Ionicons name="arrow-back" size={25} color= 'black' />
                    <Image source={HEROLOGOGREEN}/>
                </View>

                <View style={styles.titleTextGroup}>
                  <Text style={styles.titleText}>Create your</Text>
                  <Text style={styles.titleText}>Account</Text>
                  <Text style={styles.subText}>Enter your details to create your account.</Text>
                </View>

                {/* form */}
                <View style={styles.formGroup}>
                  <View>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput style={styles.formControl} />
                  </View>

                  <View>
                    <Text style={styles.formLabel}>Password</Text>
                    <View style={styles.formPasswordControl}>
                      <TextInput style={styles.passwordControl} />
                      <FontAwesome name="eye-slash" size={20} color= '#c2c1c1ff' />
                    </View>
                  </View>

                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </View>

                {/* Create button */}
                <View>
                  <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Create</Text>
                  </TouchableOpacity>
                </View>
                
                {/* Divider */}
                <View style={styles.dividerGroup}>
                  <View style={styles.divider} />
                  <Text style={styles.dividerText}>OR</Text>
                  <View style={styles.divider} />
                </View>

                {/* Secondary button */}
                <View style={styles.secondaryButtonGroup}>
                  <View>
                    <TouchableOpacity style={styles.secondaryButton}>
                      <Image source={GOOGLELOGO} />
                      <Text>Continue with Google</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity style={styles.secondaryButton}>
                      <Image source={FACEBOOKLOGO} />
                      <Text>Continue with Facebook</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.signupGroup}>
                  <Text style={styles.signupTitleText}>Don&apos;t have an account?</Text>
                  <Text style={styles.signupSubTitleText}>Join now</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}