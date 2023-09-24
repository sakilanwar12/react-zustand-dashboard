import  {create}  from 'zustand'
import config from '../../config';


const useStore = create(() => ({
    ...config,
}))


export default useStore;