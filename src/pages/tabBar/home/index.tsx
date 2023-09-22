import {Image, View} from '@tarojs/components'
import Taro, {useDidShow, useLoad} from '@tarojs/taro'
import './index.scss'
// import '/src/app.scss'
import {FC, useMemo} from "react";
import {BackTop, Button, ConfigProvider} from "@nutui/nutui-react-taro";

// const theme = {
//     nutuiBrandColor: '#196DFF',
//     nutuiBrandColorStart: '#196DFF',
//     nutuiBrandColorEnd: '#196DFF'
// }
const Home: FC = () => {

    const page = useMemo(() => Taro.getCurrentInstance().page, [])

    useDidShow(() => {
    })

    const getData = (refresh?: boolean) => {

    }

    useLoad(() => {
        getData()
    })

    return (
        <ConfigProvider>
            <View className='home'>
                <View className='block-item'>
                    <Image mode='scaleToFill' className='ad-image' src='/assets/image/tabBar/home/ad.png'/>
                    <Button type='primary'>测试按钮</Button>
                </View>
                <BackTop/>
            </View>
        </ConfigProvider>
    )
}
export default Home;