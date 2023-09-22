import {Image, View} from '@tarojs/components'
// @ts-ignore
import background from '@/assets/image/tabBar/personal/background.png'
// @ts-ignore
import tabIndex1 from '@/assets/image/tabBar/personal/order_status1.png'
// @ts-ignore
import tabIndex2 from '@/assets/image/tabBar/personal/order_status2.png'
// @ts-ignore
import tabIndex4 from '@/assets/image/tabBar/personal/order_status4.png'
// @ts-ignore
import collection from '@/assets/image/tabBar/personal/collection.png'
import {RectRight,} from '@nutui/icons-react-taro'
import Taro, {useDidShow} from '@tarojs/taro'
import './index.scss'
import React, {ReactElement, useMemo, useState} from "react";
import PageConst from "../../../constants/router-const";
import {Badge, Button, Cell} from "@nutui/nutui-react-taro";
import CustomTabBar from "../../../custom-tab-bar";
import {UserInfo} from "@/types/global";
import {defaultAvatarUrl} from "../../../constants/const";

const Personal: React.FC = (): ReactElement => {

    const [userInfo, setUserInfo] = useState<UserInfo>(Taro.getStorageSync('userInfo'))
    const page = useMemo(() => Taro.getCurrentInstance().page, [])

    useDidShow(() => {
        setUserInfo(Taro.getStorageSync('userInfo'))
        const tabbar = Taro.getTabBar<CustomTabBar>(page)
        tabbar?.setSelected(2)
    })


    const login = () => {

    }

    return (
        <View className='personal'>
            <Image className='background' src={background}/>
            <View className='user-info layout-flex flex-align-center flex-content-start' onClick={login}>
                <Image className='user-avatar' src={defaultAvatarUrl}/>
                <View className="nickname">{userInfo ? userInfo.nickname : '点击登录'}</View>
            </View>
            <Button>测试按钮</Button>


            <View className='user-order block-item'>
                <View className='user-order-title layout-flex flex-align-center flex-content-between'
                      onClick={async () => {
                          await Taro.navigateTo({url: PageConst.PAGES_ORDER_LIST})
                      }}>
                    <View className='left'>我的订单</View>
                    <View className='right'>
                        全部订单
                        <RectRight className='right-icon' size={12} color={'#a8a8a8'}/>
                    </View>
                </View>

                <View className='order-status layout-flex flex-content-around'>
                    <Badge value={1} max={99}>
                        <View
                            className='order-status-item flex-column layout-flex flex-align-center flex-content-between'
                            onClick={async () => {
                                await Taro.navigateTo({url: PageConst.PAGES_ORDER_LIST + '?tabIndex=1'})
                            }}>
                            <Image className='order-status-image' src={tabIndex1}/>
                            已取消
                        </View>
                    </Badge>
                    <Badge value={2} max={99}>
                        <View
                            className='order-status-item flex-column layout-flex flex-align-center flex-content-between'
                            onClick={async () => {
                                await Taro.navigateTo({url: PageConst.PAGES_ORDER_LIST + '?tabIndex=2'})
                            }}>
                            <Image className='order-status-image' src={tabIndex2}/>
                            待发货
                        </View>
                    </Badge>
                    <Badge value={3} max={99}><View
                        className='order-status-item flex-column layout-flex flex-align-center flex-content-between'
                        onClick={async () => {
                            await Taro.navigateTo({url: PageConst.PAGES_ORDER_LIST + '?tabIndex=3'})
                        }}>
                        <Image className='order-status-image' src={tabIndex1}/>
                        待收货
                    </View>
                    </Badge>
                    <Badge value={4} max={99}><View
                        className='order-status-item flex-column layout-flex flex-align-center flex-content-between'
                        onClick={async () => {
                            await Taro.navigateTo({url: PageConst.PAGES_ORDER_LIST + '?tabIndex=4'})
                        }}>
                        <Image className='order-status-image' src={tabIndex4}/>
                        已完成
                    </View>
                    </Badge>
                </View>
            </View>

            <View className='personal-list block-item'>
                {/*<Cell className='nutui-cell--clickable' title='我的收藏' align='center' extra={<RectRight size={12} color={'#a8a8a8'}/>}/>*/}
                <Cell className='nutui-cell--clickable' title='我的任务' align='center'
                      extra={<RectRight size={12} color={'#a8a8a8'}/>}/>
                <Cell className='nutui-cell--clickable' title='我的钱包' align='center'
                      extra={<RectRight size={12} color={'#a8a8a8'}/>}/>
                <Cell className='nutui-cell--clickable' title='设置' align='center'
                      extra={<RectRight size={12} color={'#a8a8a8'}/>}/>
                <Cell className='nutui-cell--clickable' title='我有话说' align='center'
                      extra={<RectRight size={12} color={'#a8a8a8'}/>}/>
            </View>
        </View>
    )
}
export default Personal;