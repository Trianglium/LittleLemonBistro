import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
} from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#000' }
          : { backgroundColor: '#fff' },
      ]}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text
          style={[
            styles.headerText,
            colorScheme === 'light'
              ? { color: '#fff' }
              : { color: '#000' },
          ]}>
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          styles.regularText,
          colorScheme === 'light' ? { color: '#fff' } : { color: '#000' },
        ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#000',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
