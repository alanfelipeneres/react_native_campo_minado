import {Dimensions} from 'react-native'

const params = {
    blocksSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //Proporsão do painel superior
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blocksSize) //O floor arredonta o valor para baixo
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blocksSize)
    }
}

export default params