import { StyleSheet } from 'react-native';

const makeStylesBtn = (colors) => StyleSheet.create({
  btnClickContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#007E7A',    
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    height: 35
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderRadius: 10,
    height: 15
  },
  btnText: {
    fontSize: 15,
    color: '#FAFAFA',
    marginLeft: 10,    
  },
  btnClickContainClock: {    
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,        
    marginTop: 3,    
    width: 100,    
    padding: 10     
  },
  containerBtn: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  rectangleA: {
    height: 35,
    width: 252,
  },
  rectangleB: {    
    height: 35,
    flex: 1,
  },
  containerBtnFav: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  rectangleFavA: {
    height: 40,
    width: 238,
  },
  rectangleFavB: {    
    height: 40,
    flex: 1,
  },
  btnTextFav: {
    fontSize: 15,
    color: '#FAFAFA',
    marginLeft: 10,    
  },
  btnContainerFav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderRadius: 10,
    height: 15
  },
  containerDistance: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 15
  },
  rectangleDistanceA: {
    height: 40,
    width: 200,
  },
  rectangleDistanceB: {    
    height: 40,
    flex: 1,
  },
  btnTextDistance: {
    fontSize: 15,
    color: '#FAFAFA',
    marginLeft: 10,    
  },
  textDistance: {
    color: colors.title,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  dataDistance: {
    color: colors.title,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerBus: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15
  },
  rectangleBus: {
    height: 40,
    width: 60,    
  },
  rectangleBox: {    
    height: 40,
    flex: 1,
    textAlign: 'center',
  },
  rectangleRemoveA: {
    height: 40,
    width: 238,
  },
  rectangleRemoveB: {    
    height: 40,
    flex: 1,
  },
  btnContainerRemove: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderRadius: 10,
    height: 15
  },
  btnClickContainRemove: {    
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',                
    marginTop: 3,    
    width: 100,    
    padding: 10 ,
    borderWidth: 1,
    borderColor: "thistle",       
  },
  btnTextRemove: {
    fontSize: 15,
    color: '#430647',
    marginLeft: 10,    
  },  
});


export default makeStylesBtn;