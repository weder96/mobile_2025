import { StyleSheet } from 'react-native';

const makeStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#000000"
  },
  base: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#000000"
  },
  text: {
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.primary
  },  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },  
  color: {
    color: colors.primary
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  image: {
    width: '100%', 
    height: 400,
    paddingVertical: 50,
    paddingHorizontal: 12
  },
  item: {
    backgroundColor: "#c62c2cff",
    padding: 20,    
    marginHorizontal: 16,
    marginVertical: 0
  },
  itemFooter: {
    backgroundColor: colors.accent,    
    width: '92%',
    height: 40,
    fontSize: 15,
    marginBottom: 30,
    marginRight: 15,
    marginLeft: 15
  },
  title: {
    color: colors.title,
    fontSize: 13,
    fontWeight: '600',
    justifyContent: 'flex-start'
  },
  containerEmpty:{
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleEmpty: {
    color: "#000000",
    fontSize: 36,        
  },
  input: {
      height: 40,   
      padding:10   
  },
});


export default makeStyles;