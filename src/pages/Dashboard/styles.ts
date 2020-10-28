import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f0f0f7',
  },

  title: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 32,
    marginBottom: 14,

  },

  touchableOpacityStyle: {
    backgroundColor: '#ff9000',
    borderRadius: 50,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom: 20,
    zIndex: 15,
  },

})

export default styles
