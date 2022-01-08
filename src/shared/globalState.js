import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

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