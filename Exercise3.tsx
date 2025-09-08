import React from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';

const Exercise3 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto Profil */}
      <Image source={require('./assets/natan2.jpg')} style={styles.image} />

      {/* Nama & Jabatan */}
      <Text style={styles.name}>Nataniel Immanuel Ratuwongo</Text>
      <Text style={styles.subtitle}>Informatics Student</Text>

      {/* Kontak */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📞 Kontak</Text>
        <Text>Email: nataniel@email.com</Text>
        <Text>Telepon: +62 812 3456 7890</Text>
      </View>

      {/* Pendidikan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎓 Pendidikan</Text>
        <Text>Universitas Klabat</Text>
        <Text>Informatika - 2022 s/d Sekarang</Text>
      </View>

      {/* Skill */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💡 Skills</Text>
        <Text>- React Native</Text>
        <Text>- JavaScript</Text>
        <Text>- UI/UX Design</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3, // bayangan untuk Android
    shadowColor: '#000', // bayangan untuk iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
});

export default Exercise3;
