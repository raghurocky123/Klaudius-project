import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '@/contexts/AuthContext';
import { CustomButton } from '@/components/CustomButton';
import { Chrome as Home, User, Mail } from 'lucide-react-native';

export default function HomeScreen() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#3B82F6', '#1D4ED8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Home size={32} color="#FFFFFF" />
            <Text style={styles.headerTitle}>Welcome Home</Text>
            <Text style={styles.headerSubtitle}>
              You're successfully logged in!
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <User size={24} color="#3B82F6" />
              <Text style={styles.cardTitle}>User Information</Text>
            </View>

            <View style={styles.userInfo}>
              <View style={styles.infoRow}>
                <User size={20} color="#6B7280" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Full Name</Text>
                  <Text style={styles.infoValue}>{user?.name}</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <Mail size={20} color="#6B7280" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Email Address</Text>
                  <Text style={styles.infoValue}>{user?.email}</Text>
                </View>
              </View>
            </View>

            <CustomButton
              title="Logout"
              onPress={handleLogout}
              variant="secondary"
              style={styles.logoutButton}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 16,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#BFDBFE',
    marginTop: 8,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 12,
  },
  userInfo: {
    marginBottom: 32,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 8,
  },
  infoContent: {
    marginLeft: 16,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  logoutButton: {
    marginTop: 8,
  },
});