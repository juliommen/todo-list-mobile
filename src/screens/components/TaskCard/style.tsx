import { StyleSheet } from "react-native";
import { colorPallet } from "../../../colors/colors";


export const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    padding:12,
    borderRadius:8,
    color:colorPallet.gray500,
    borderColor:colorPallet.gray400,
    borderWidth:1,
    marginBottom:8,
    alignItems:'center'
  },
  taskName:{
    fontSize:14,
    color:colorPallet.gray100,
    flex:1,
    marginLeft:8,
    marginRight:18,
  },
  taskNameDone: {
    fontSize:14,
    color:colorPallet.gray300,
    flex:1,
    marginLeft:8,
    marginRight:18,
    textDecorationLine:'line-through'
  }
});
