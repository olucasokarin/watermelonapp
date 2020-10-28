import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    // padding: 24,
  },

  searchForm: {
    margin: 24,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },
})

export default styles
