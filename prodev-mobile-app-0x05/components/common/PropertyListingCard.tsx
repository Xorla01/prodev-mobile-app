import { PropertyListingProps } from "@/interfaces";
import { styles } from "@/styles/_propertyCardStyle";
import { EvilIcons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { ImageBackground, Text, View } from "react-native";

const PropertyListingCard = ({rate, currency, amount, location, favorite, propertyName }: PropertyListingProps) => {
    return(
        <ImageBackground source={require('@/assets/images/sample-image.png')} style={styles.container}>
            <View style={styles.overlay}>
                <View style={styles.favoriteGroup}>
                    <View style={styles.favoriteOverlay}>
                        {favorite?(
                            <FontAwesome name="heart" size={24} color='#e50000' />
                            ) : (
                            <EvilIcons name="heart" size={32} color='#fff' />
                        )}
                    </View>
                </View>

                <View style={styles.group}>
                    <View style={styles.rateGroup}>
                        <MaterialIcons name="star-rate" size={40} color='#fac03b' />
                        <Text style={styles.rateText}>{rate}</Text>
                    </View>

                    <View style={styles.cardGroup}>
                        <View style={styles.cardTextGroup}>
                            <Text style={styles.cardLargeText}>{propertyName}</Text>
                            <Text style={styles.cardSmallText}>{location.street}, {location.city}, {location.country}</Text>
                        </View>
                    </View>

                    <View style={styles.priceGroup}>
                        <Text style={styles.priceText}>{currency} {amount}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default PropertyListingCard;