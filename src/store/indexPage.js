import { v4 as uuidv4 } from 'uuid';
import { ref, onValue, child, get, update, set, query, orderByChild, equalTo, remove, getDatabase } from "firebase/database";
export const indexPageStore = {
    namespaced: true,
    state: {
        loadingmessage: "Please Wait While Components Loading"


    },

    actions: {


        async getPostList({ commit, dispatch }, category) {


            try {

                const db = getDatabase();
                const recentPostsRef = await get(query(ref(db, "posts"), orderByChild("tag"), equalTo(category)));
                // console.log(recentPostsRef.val());
                return Promise.resolve(recentPostsRef.val())
            } catch (error) {

                return Promise.reject(error)

            }



        },


        async getPostdetail({ commit, dispatch }, id) {
            console.log(id)
            try {
                const db = getDatabase();
                const recentPostsRef = await get(query(ref(db, "posts"), orderByChild("id"), equalTo(id)));

                return Promise.resolve(recentPostsRef.val())
            } catch (error) {
                console.log(error)
                return Promise.reject(error)
            }


        },










    }
}