import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
  const handleStartOrder = () => {
    Alert.alert('Start Order', 'Click the ‘Start an Order’ button!');
  };

  const handleViewOffers = () => {
    Alert.alert('View Offers', 'Click the ‘View Offers’ button!');
  };

  const handleOrderNow = () => {
    Alert.alert('Order Now', 'Click the ‘Order Nows’ button!');
  };

  const handleOrder = () => {
    Alert.alert('Order', 'Haven’t created the Order page yet');
  };

  const handleRewards = () => {
    Alert.alert('Rewards & Offers', 'Haven’t created the Order page yet');
  };

  const handleCode = () => {
    Alert.alert('Code', 'Haven’t created the Order page yet');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png' }}
          style={styles.logo}
        />
      </View>

      <ScrollView style={styles.content}>
        {/* Menu Title */}
        <Text style={styles.menuTitle}>Menu</Text>

        {/* Hungry Card */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.textSection}>
              <Text style={styles.cardTitle}>Hungry?</Text>
              <Text style={styles.cardSubtitle}>Let's fix that</Text>
              <TouchableOpacity style={styles.yellowButton} onPress={handleStartOrder}>
                <Text style={styles.yellowButtonText}>Start an order</Text>
              </TouchableOpacity>
            </View>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg' }}
              style={styles.cardImage}
            />
          </View>
        </View>

        {/* My Offers Title */}
        <Text style={styles.sectionTitle}>My Offers</Text>

        {/* Daily Deals Card */}
        <View style={styles.yellowCard}>
          <View style={styles.cardContent}>
            <View style={styles.textSection}>
              <Text style={styles.blackTitle}>Daily deals</Text>
              <Text style={styles.blackSubtitle}>On everything you love</Text>
              <TouchableOpacity style={styles.whiteButton} onPress={handleViewOffers}>
                <Text style={styles.blackButtonText}>View offers</Text>
              </TouchableOpacity>
            </View>
            <Image 
              source={{ uri: 'https://www.pexels.com/photo/fast-food-on-white-background-4109257/' }}
              style={styles.cardImage}
            />
          </View>
        </View>

        {/* What's New Title */}
        <Text style={styles.sectionTitle}>What's new</Text>

        {/* Double Cheesy Melt Card */}
        <View style={styles.darkCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800' }}
            style={styles.fullCardImage}
          />
          <View style={styles.darkCardContent}>
            <Text style={styles.whiteTitle}>Double Cheesy Melt</Text>
            <Text style={styles.whiteSubtitle}>Melt into warm, cheesy deliciousness.</Text>
            <TouchableOpacity style={styles.yellowButtonSmall} onPress={handleOrderNow}>
              <Text style={styles.yellowButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={handleOrder}>
          <Text style={styles.navIcon}>🍔</Text>
          <Text style={styles.navText}>Order</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={handleRewards}>
          <Text style={styles.navIcon}>🎁</Text>
          <Text style={styles.navText}>Rewards&Offers</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={handleCode}>
          <Text style={styles.navIcon}>📱</Text>
          <Text style={styles.navText}>Code</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('More')}>
          <Text style={styles.navIcon}>⋯</Text>
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  navText: {
    fontSize: 10,
    color: '#666',
  },
  navTextActive: {
    fontSize: 10,
    color: '#000',
    fontWeight: '600',
  },
});