import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '@/contexts/AuthContext';
import { CustomButton } from '@/components/CustomButton';
import { User, Mail, Calendar, Shield } from 'lucide-react-native';

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#10B981', '#059669']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <View style={styles.profilePicture}>
              <User size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.headerTitle}>{user?.name}</Text>
            <Text style={styles.headerSubtitle}>{user?.email}</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Shield size={24} color="#10B981" />
              <Text style={styles.cardTitle}>Account Details</Text>
            </View>

            <View style={styles.profileInfo}>
              <View style={styles.infoRow}>
                <User size={20} color="#6B7280" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Display Name</Text>
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

              <View style={styles.infoRow}>
                <Calendar size={20} color="#6B7280" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Member Since</Text>
                  <Text style={styles.infoValue}>
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Text>
                </View>
              </View>
            </View>

            <CustomButton
              title="Sign Out"
              onPress={handleLogout}
              variant="primary"
              style={[styles.logoutButton, { backgroundColor: '#EF4444' }]}
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
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#D1FAE5',
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
  profileInfo: {
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
