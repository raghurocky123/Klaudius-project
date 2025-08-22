import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { CustomInput } from '@/components/CustomInput';
import { CustomButton } from '@/components/CustomButton';
import { UserPlus } from 'lucide-react-native';

export default function SignupScreen() {
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    setErrors({});

    const result = await signup(name, email, password);

    if (!result.success && result.message) {
      setErrors({ general: result.message });
    } else if (result.success) {
      router.push('/auth/login');
    }

    setLoading(false);
  };

  const navigateToLogin = () => {
    router.push('/auth/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#f093fb', '#f5576c']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
              <UserPlus size={48} color="#FFFFFF" />
              <Text style={styles.headerTitle}>Create Account</Text>
              <Text style={styles.headerSubtitle}>
                Join us today and get started
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.form}>
                <CustomInput
                  label="Full Name"
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your full name"
                  autoCapitalize="words"
                  error={errors.name}
                />

                <CustomInput
                  label="Email Address"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  error={errors.email}
                />

                <CustomInput
                  label="Password"
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Create a password"
                  isPassword
                  autoCapitalize="none"
                  error={errors.password}
                />

                <Text style={styles.passwordHint}>
                  Password must be at least 6 characters long
                </Text>

                {errors.general && (
                  <Text style={styles.errorText}>{errors.general}</Text>
                )}

                <CustomButton
                  title="Create Account"
                  onPress={handleSignup}
                  loading={loading}
                  style={styles.signupButton}
                />

                <Text style={styles.dividerText}>Already have an account?</Text>

                <CustomButton
                  title="Sign In"
                  onPress={navigateToLogin}
                  variant="secondary"
                  disabled={loading}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#FFE4E6',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 15,
  },
  form: {
    marginBottom: 0,
  },
  passwordHint: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: -12,
    marginBottom: 16,
    marginLeft: 4,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  signupButton: {
    marginBottom: 24,
  },
  dividerText: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 16,
  },
});
