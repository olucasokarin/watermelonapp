import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  post: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderRadius: 8,
    marginBottom: 15,

    elevation: 3,
  },

  title: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 37,
    padding: 12,
  },

  content: {
    marginLeft: 15,
    color: '#000',
    fontSize: 16,
    lineHeight: 26,
    paddingHorizontal: 12,
  },

  detailsButton: {
    marginTop: 12,
  },

  detailsButtonRemove: {
    marginTop: 12,
  },

  detailsButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },

  detailsButtonTextRemove: {
    fontWeight: '700',
    fontSize: 16,
    color: '#F15E5E',
  },

  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafafc',
    paddingVertical: 22,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    marginTop: 24,
    borderColor: '#e6e6f0',
  }

})

export default styles
