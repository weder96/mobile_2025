import { StyleSheet } from 'react-native';

const styleModal = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextSet: {
    fontSize: 16,
    textAlign: 'center',
  },
  modalTextColor: {
    marginBottom: 50,
    textAlign: 'center',
    color: '#430647'    ,
    fontSize: 27,
    fontWeight: 'bold'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
    modalTextWidth: {
      width: '100%'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#430647",    
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'stretch',
    height: 40
  },
  appButtonContainerCancel: {           
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'stretch',
    height: 40,
    borderWidth: 1,
    borderColor: "thistle", 
  },
  bold:{
    fontWeight: "bold",
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerBtn: {    
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 40
  },
  rectangleA: {
    height: 35,
    width: '45%'    
  },
  rectangleB: {    
    height: 35,
    flex: 1,
    width: '45%',    
    paddingLeft: 10
  },
  btnTextRemove: {
    fontSize: 15,
    color: '#430647',
    marginLeft: 10,    
  },
  textStyleCancel:{
    fontSize: 15,
    color: '#430647',
    marginLeft: 10,     
    fontWeight: 'bold',
    textAlign: 'center',   
  }
  
});


export default styleModal;