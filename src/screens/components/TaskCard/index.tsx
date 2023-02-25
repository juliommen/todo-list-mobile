import { View, Text, TouchableOpacity } from "react-native"
import CircleSVG from "../../../assets/CircleSVG"
import DoneSVG from "../../../assets/DoneSVG"
import TrashSVG from "../../../assets/TrashSVG"
import { Task } from "../../Home"
import { styles } from "./style"


interface TaskCardProps extends Task {
  onRemove: () => void,
  onDone: () => void,
}


export function TaskCard({name, done, onRemove, onDone}: TaskCardProps) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onDone}>
        { done 
          ? <DoneSVG />
          : <CircleSVG/>
        }
      </TouchableOpacity>
      
      <Text style={styles.taskName}>{name}</Text>
      
      <TouchableOpacity onPress={onRemove}>
        <TrashSVG/>
      </TouchableOpacity>
    </View>
  )
}