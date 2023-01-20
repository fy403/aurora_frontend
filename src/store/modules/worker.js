import { workerInfo } from "@/api/task";

const worker = {
    state: {
        workerInfo: [],
    },

    mutations: {
        SET_WORKER_INFO: (state, workerInfo) => {
            state.workerInfo = workerInfo
        }
    },

    actions: {
        GetWorkerInfo({ commit }) {
            return new Promise((resolve, reject) => {
                workerInfo().then(res=> {
                    if(res.message != '') {
                        reject(res.message)
                        return
                    }else{
                        commit('SET_WORKER_INFO', res.data)
                        resolve(res.data)
                    }
                }).catch(error => {
                    reject(error)
                }) 
            })
        }
    }
}


export default worker