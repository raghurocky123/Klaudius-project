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
import { LogIn } from 'lucide-react-native';

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setErrors({});

    const result = await login(email, password);

    if (!result.success && result.message) {
      setErrors({ general: result.message });
    } else if (result.success) {
      router.push('/(tabs)');
    }

    setLoading(false);
  };

  const navigateToSignup = () => {
    router.push('/auth/signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
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
              <LogIn size={48} color="#FFFFFF" />
              <Text style={styles.headerTitle}>Welcome Back</Text>
              <Text style={styles.headerSubtitle}>Sign in to your account</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.form}>
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
                  placeholder="Enter your password"
                  isPassword
                  autoCapitalize="none"
                  error={errors.password}
                />

                {errors.general && (
                  <Text style={styles.errorText}>{errors.general}</Text>
                )}

                <CustomButton
                  title="Sign In"
                  onPress={handleLogin}
                  loading={loading}
                  style={styles.loginButton}
                />

                <Text style={styles.dividerText}>Don't have an account?</Text>

                <CustomButton
                  title="Create Account"
                  onPress={navigateToSignup}
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
    color: '#E0E7FF',
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
    marginBottom: 24,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  loginButton: {
    marginBottom: 24,
  },
  dividerText: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 16,
  },
});
