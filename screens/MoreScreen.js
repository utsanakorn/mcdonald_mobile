import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function MoreScreen({ navigation }) {
  const handleMenuPress = (menuName) => {
    Alert.alert(menuName, `Click ${menuName}!`);
  };

  const MenuItem = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <Text style={styles.menuIcon}>{icon}</Text>
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );

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
        <MenuItem 
          icon="👤" 
          title="Log In" 
          onPress={() => handleMenuPress('Log In')}
        />
        
        <MenuItem 
          icon="🔄" 
          title="Recent Orders & Favourites" 
          onPress={() => handleMenuPress('Recent Orders & Favourites')}
        />
        
        <MenuItem 
          icon="🧾" 
          title="Add Points from Receipt" 
          onPress={() => handleMenuPress('Add Points from Receipt')}
        />
        
        <MenuItem 
          icon="📍" 
          title="Locations" 
          onPress={() => handleMenuPress('Locations')}
        />
        
        <MenuItem 
          icon="🍔" 
          title="Nutrition" 
          onPress={() => handleMenuPress('Nutrition')}
        />
        
        <MenuItem 
          icon="❓" 
          title="Frequently Asked Questions" 
          onPress={() => handleMenuPress('Frequently Asked Questions')}
        />
        
        <MenuItem 
          icon="👥" 
          title="Careers at McDonald's" 
          onPress={() => handleMenuPress('Careers at McDonald\'s')}
        />
        
        <MenuItem 
          icon="ℹ️" 
          title="About, Contact & Legal" 
          onPress={() => handleMenuPress('About, Contact & Legal')}
        />

        <View style={{ height: 50 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Order', 'ยังไม่ได้สร้างหน้า Order')}>
          <Text style={styles.navIcon}>🍔</Text>
          <Text style={styles.navText}>Order</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Rewards & Offers', 'ยังไม่ได้สร้างหน้า Rewards & Offers')}>
          <Text style={styles.navIcon}>🎁</Text>
          <Text style={styles.navText}>Rewards&Offers</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Code', 'ยังไม่ได้สร้างหน้า Code')}>
          <Text style={styles.navIcon}>📱</Text>
          <Text style={styles.navText}>Code</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⋯</Text>
          <Text style={styles.navTextActive}>More</Text>
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
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    fontSize: 28,
    marginRight: 20,
    width: 40,
  },
  menuText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  chevron: {
    fontSize: 28,
    color: '#999',
    fontWeight: '300',
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