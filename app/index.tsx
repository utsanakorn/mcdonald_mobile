import { Text, Image, View, Alert, StyleSheet, TouchableOpacity, StatusBar, ScrollView} from "react-native";
import React from 'react'


export default function Index() {
  const alertNotification = () => {
    Alert.alert('Alert Button Pressed');
  };

  return (
    <View style={style.container}>  
      <View style={style.header}>
        <Image 
          source = {require("../assets/images/McDonald.png")}
          style={style.logo}
        />
      </View>

      <ScrollView style={style.content}>
        <Text style={style.menuTitle}>Menu</Text>

        <View style={style.card}>
          <View style={style.cardContent}>
            <View style={style.textSection}>
              <Text style={style.cardTitle}>Hungry?</Text>
              <Text style={style.cardSubtitle}>Let's fix that</Text>
              <TouchableOpacity style={style.yellowButton}>
                <Text style={style.yellowButtonText}>Start an order</Text>
              </TouchableOpacity>
            </View>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg' }}
              style={style.cardImage}
            />
          </View>
        </View>

        {/* My Offers Title */}
        <Text style={style.sectionTitle}>My Offers</Text>

        {/* Daily Deals Card */}
        <View style={style.yellowCard}>
          <View style={style.cardContent}>
            <View style={style.textSection}>
              <Text style={style.blackTitle}>Daily deals</Text>
              <Text style={style.blackSubtitle}>On everything you love</Text>
              <TouchableOpacity style={style.whiteButton}>
                <Text style={style.blackButtonText}>View offers</Text>
              </TouchableOpacity>
            </View>
            <Image 
              source={require("../assets/images/fries.jpg")}
              style={style.cardImage}
            />
          </View>
        </View>

        {/* What's New Title */}
        <Text style={style.sectionTitle}>What's new</Text>

        {/* Double Cheesy Melt Card */}
        <View style={style.darkCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800' }}
            style={style.fullCardImage}
          />
          <View style={style.darkCardContent}>
            <Text style={style.whiteTitle}>Double Cheesy Melt</Text>
            <Text style={style.whiteSubtitle}>Melt into warm, cheesy deliciousness.</Text>
            <TouchableOpacity style={style.yellowButtonSmall}>
              <Text style={style.yellowButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={style.bottomNav}>
        <TouchableOpacity style={style.navItem} onPress={alertNotification}>
          <Text style={style.navIcon}>🏠</Text>
          <Text style={style.navTextActive}>Home</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}



const style = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight,
  },
  header: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingTop: 20,
  },
  logo: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  menuTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 16,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 16,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    borderWidth: 1,
    borderColor: '#FFC72C',
  },
  yellowCard: {
    backgroundColor: '#FFC72C',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  darkCard: {
    backgroundColor: '#2C2C2C',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  textSection: {
    flex: 1,
    paddingRight: 16,
  },
  cardTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 18,
    color: '#000',
    marginBottom: 16,
  },
  blackTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  blackSubtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
  },
  whiteTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  whiteSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16,
  },
  yellowButton: {
    backgroundColor: '#FFC72C',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  yellowButtonSmall: {
    backgroundColor: '#FFC72C',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  whiteButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  yellowButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  blackButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  fullCardImage: {
    width: '100%',
    height: 200,
  },
  darkCardContent: {
    padding: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 10,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navTextActive: {
    fontSize: 10,
    color: '#000',
    fontWeight: '600',
  },
})
