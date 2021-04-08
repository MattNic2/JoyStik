import React, {useState, forwardRef} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { RectButton } from 'react-native-gesture-handler'
import SwipeableImage from './SwipeableImage'

function Swipes({games, currentIndex, handleLike, handlePass, swipesRef}) {
    const [willLike, setWillLike] = useState(false)
    const [willPass, setWillPass] = useState(false)

    
const renderLeftActions = () =>{
    return (
        <RectButton style = {styles.container}>
            <SwipeableImage game= {games[currentIndex + 1]} ></SwipeableImage>
        </RectButton>
    )
}
const renderRightActions = () =>{
    return (
        <RectButton style = {styles.container}>
            <SwipeableImage game= {games[currentIndex + 1]} ></SwipeableImage>
        </RectButton>
    )
}

    return (
        <Swipeable
            ref={swipesRef}
            friction = {1.0}
            leftThreshld={40}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions ={renderRightActions}
            onSwipeableLeftOpen={() => {
                setWillLike(false)
                handleLike()
            }}
            onSwipeableRightOpen={() => {
                setWillPass(false)
                handlePass()
            }}
            onSwipeableLeftWillOpen={() => setWillLike(true)}
            onSwipeableRightWillOpen={() => setWillLike(true)}
        >
            <SwipeableImage game ={games[currentIndex]} willLike={willLike} willPass={willPass} />
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default React.forwardRef((props, ref) => <Swipes swipesRef={ref} {...props}></Swipes>)