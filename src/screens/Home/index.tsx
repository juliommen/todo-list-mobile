import { Alert, TextInput, TouchableOpacity, View , Text, FlatList, Image} from "react-native";
import { styles } from "./style";
import LogoSVG from "../../assets/LogoSVG";
import PlusSVG from "../../assets/PlusSVG";
import { colorPallet } from "../../colors/colors";
import { useState } from "react";
import { TaskCard } from "../components/TaskCard";

export interface Task {
  name: string,
  done: boolean,
}

export function Home() {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAdd() {
    if (!task) {
      Alert.alert('Tarefa sem nome','Adicione um nome para a tarefa')
      return
    }
    const isTaskRepeated = tasks.find( item => item.name === task) ? true : false
    if (isTaskRepeated) {
      Alert.alert('Tarefa repetida','Uma tarefa com este mesmo nome já foi criada.')
      return
    }
    setTasks(state => [...state,{name:task,done:false}])
    setTask('')
  }

  function handleRemove(taskToRemove: string) {
    Alert.alert('Remover tarefa','Tem certeza que deseja remover esta tarefa?', [
      {
        text:"Sim",
        onPress: () => setTasks(tasks => tasks.filter(task => task.name !== taskToRemove))
      },
      {
        text:"Cancelar",
        style: 'cancel'
      }
    ])
  }

  function handleDone(taskToChange: string) {

    setTasks( tasks => {
      const task = tasks.find( task => task.name === taskToChange)
      if (task) {
        task.done = !task.done
      }
      return [...tasks]
    })
  }

  const tasksDone = tasks.reduce(
    (total, task) => {
      if (task.done){
        return total+=1
      }
      return total
    },0)

  const tasksTotal = tasks.length

  return(
    <>
      <View  style={styles.header}>
        <LogoSVG />
      </View>
      <View  style={styles.main}>
        <View style={styles.addTask}>
          <TextInput 
            style={isInputFocused ? [styles.input, styles.inputFocused] : styles.input} 
            cursorColor={colorPallet.gray100}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colorPallet.gray300}
            onFocus={()=>setIsInputFocused(true)}
            onBlur={()=>setIsInputFocused(false)}
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleAdd}
          >
            <PlusSVG/>
          </TouchableOpacity>
        </View>
        <View style={styles.counterMenu}>
          <View  style={styles.totalMenu}>
            <Text  style={styles.totalText}>Criadas</Text>
            <Text  style={styles.counter}>{tasksTotal}</Text>
          </View>
          <View  style={styles.doneMenu}>
            <Text style={styles.doneText}>Concluídas</Text>
            <Text style={styles.counter}>{tasksDone}</Text>
          </View>
        </View>
       <FlatList
        data={tasks}
        keyExtractor={task => task.name}
        renderItem={({item}) => 
            <TaskCard 
              done={item.done} 
              onRemove={() => handleRemove(item.name)} 
              name={item.name}
              onDone={() => handleDone(item.name)} 
            />
          }
        ListEmptyComponent={()=> {
          return (
            <View style={styles.emptyListContainer} >
              <Image style={styles.clipboard} source={require('../../assets/Clipboard.png')} />
              <Text style={styles.emptyListText1} >Você ainda não tem tarefaz cadastradas</Text>
              <Text style={styles.emptyListText2} >Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )
        }}
        showsVerticalScrollIndicator={false}
       >

       </FlatList>
      </View>
   </>
  )
}