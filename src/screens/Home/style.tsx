import { StyleSheet } from "react-native";
import { colorPallet } from "../../colors/colors";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: colorPallet.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    height:173,
  },
  image:{
    marginTop:60,
    width:50
  },
  main:{
    flex:1,
    backgroundColor:colorPallet.gray600,
    paddingHorizontal:24,
  },
  addTask:{
    flexDirection:"row",
    marginTop:-30,
  },
  input:{
    paddingLeft:16,
    backgroundColor:colorPallet.gray500,
    marginRight:4,
    borderRadius:6,
    borderColor:colorPallet.gray700,
    borderWidth:1,
    flex:1,
    color:colorPallet.gray100,
  },
  inputFocused: {
    borderColor:colorPallet.purpleDark,
  },
  addButton: {
    padding:18,
    backgroundColor:colorPallet.blueDark,
    borderRadius:6
  },
  counterMenu:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingBottom:20,
    borderBottomWidth:1,
    borderBottomColor:colorPallet.gray300,
    marginTop:32,
    marginBottom:20,
  },
  totalMenu:{
    flexDirection:"row",
  },
  totalText:{
    color:colorPallet.blue,
    fontWeight:'bold',
    fontSize:14,
    marginRight:8,
  },
  doneMenu:{
    flexDirection:"row",
  },
  doneText:{
    color:colorPallet.purple,
    fontWeight:'bold',
    fontSize:14,
    marginRight:8,
  },
  counter:{
    color:colorPallet.gray200,
    fontWeight:'bold',
    fontSize:12,
    paddingHorizontal:8,
    borderRadius:100,
    backgroundColor:colorPallet.gray400,
    paddingTop:1.5
  },
  emptyListContainer:{
    alignItems:'center'
  },
  clipboard:{
    marginTop:28,
    marginBottom:16
  },
  emptyListText1:{
    fontSize:14,
    fontWeight:'bold',
    color:colorPallet.gray200,
    marginBottom:2
  },
  emptyListText2:{
    fontSize:14,
    color:colorPallet.gray300,
  }
});
