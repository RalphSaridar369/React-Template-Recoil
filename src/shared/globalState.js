import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: sessionStorage, // configurate which stroage will be used to store the data
  })

export const usertoken = atom({
    key:'token',
    default:'',
    effects_UNSTABLE: [persistAtom],
})

export const userdata = atom({
    key:'userdata',
    default:{},
    effects_UNSTABLE: [persistAtom],
})