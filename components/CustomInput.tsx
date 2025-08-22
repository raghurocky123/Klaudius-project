import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

interface CustomInputProps extends TextInputProps {
  label: string;
  error?: string;
  isPassword?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  isPassword = false,
  style,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            error ? styles.inputError : null,
            style,
          ]}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
            activeOpacity={0.7}
          >
            {isPasswordVisible ? (
              <EyeOff size={20} color="#6B7280" />
            ) : (
              <Eye size={20} color="#6B7280" />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#111827',
  },
  inputError: {
    borderColor: '#EF4444',
  },
  eyeIcon: {
    position: 'absolute',
    right: 14,
    top: 16,
    padding: 2,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 6,
    marginLeft: 4,
  },
});