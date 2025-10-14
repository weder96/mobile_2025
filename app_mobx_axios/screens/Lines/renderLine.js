import makeStyles from './styles';
import makeStylesBtn from './stylesBtn';

import React from "react";
import { View, Text} from 'react-native';

import { observer } from "mobx-react-lite";
import { useTheme } from 'react-native-paper';


function  RenderLine({data}) { 

   const { colors } = useTheme();
   const styles = makeStyles(colors)
   const stylesBtn = makeStylesBtn(colors)

    return (
    <View>
        <View style={styles.item}>            
        <Text>{data.nome}</Text>          
        </View>    
    </View>    
    );
}

export default observer(RenderLine);

