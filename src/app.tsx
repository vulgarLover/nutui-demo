import React, {PropsWithChildren, ReactElement} from 'react'
import './app.scss'
import '@nutui/nutui-react-taro/dist/style.css'
import {View} from "@tarojs/components";

const App: React.FC<PropsWithChildren> = (props: PropsWithChildren): ReactElement => {
    return <View>
        {props.children}
    </View>
}
export default App