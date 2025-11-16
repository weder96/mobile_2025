import makeStyles from './styles'
import React, { useEffect, useState } from 'react'


import { FlatList, Text, TextInput, View } from 'react-native'
import RenderLine from './renderLine'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'react-native-paper'
import lineStore from '../../store/lines/LineStore'


import { observer } from "mobx-react-lite";

//import useCounterStore from '../../store/zustand/LineStoreZustand'


function Lines({ ...props }) {
  const { colors } = useTheme()
  const styles = makeStyles(colors)  
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(undefined)


  const searchFilter = (text) => {
    if (text) {
      const newData = lineStore.lines.filter(function (item) {
        if (item.nome) {
          const itemData = item.nome.toUpperCase()
          const textData = text.toUpperCase()
          return itemData.indexOf(textData) > -1
        }
      })
      setFiltered(newData)
    } else {
      setFiltered(lineStore.lines)
    }
    setSearch(text)
  }

  useEffect(() => {  
      lineStore.getLines();      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Card = () => {
    return (
      <View style={styles.containerEmpty}>
        <Text style={styles.titleEmpty}> Você ainda não </Text>
        <Text style={styles.titleEmpty}> Favoritou </Text>
        <Text style={styles.titleEmpty}> nenhuma linha </Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => searchFilter(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Pesquisar linhas de Ônibus"
          />          
        </View>

        <Text style={styles.line}>Linhas</Text>
       
        <FlatList
          data={filtered || lineStore.lines}
          renderItem={({ item }) => <RenderLine data={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default observer(Lines)