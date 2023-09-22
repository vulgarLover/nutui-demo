/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
    interface ProcessEnv {
        TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
    }
}

export type UserInfo = {
    nickname: string;
    avatar: string;
    gender: number;
}

export type Result<T = any> = {
    code: number;
    message: string;
    data: T;
    status: boolean;
}

export type PageParam<T = any> = {
    currentPage: number
    pageSize: number
    [propName: string]: any
}

export type PageResult<T = any> = {
    count: number
    currentPage: number
    pageSize: number
    previousPage: boolean
    nextPage: boolean
    results: T[]
    totalPages: number
}

export type Goods = {
    id: number;
    memberId: number;
    memberNickname: string;
    avatar: string;
    goodsName: string;
    goodsImage: string;
    goodsDetail: string;
    goodsPrice: number;
    deliverType: number;
    createTime: string;
}

export type ProxyTask = {
    id: number;
    memberId: number;
    goodsName: string;
    goodsImage: string;
    goodsDetail: string;
    goodsPrice: number;
    deliverType: number
}

export type HomeInfo = {
    hotTopics: HotTopicInfo[]
}

export type HotTopicInfo = {
    type: number
    title: string
    extra: string
    iconUrl: string
    contentType: string
    goods?: Goods[]
    proxyTasks?: ProxyTask[]
}

export type WalletInfo = {
    balance: number;
    giveBalance: number;
    frozenAmount: number;
}
