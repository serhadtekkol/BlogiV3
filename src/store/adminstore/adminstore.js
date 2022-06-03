import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, onValue, child, get, update, set, query, orderByChild, equalTo } from "firebase/database";
export const adminstore = {
    namespaced: true,
    state: {
        loadingmessage: "Please Wait While Components Loading"


    },
    mutations: {



    },
    actions: {
        async addnewtag({ commit, dispatch }, { payload }) {

            try {
                await axios.post("/tags.json", { tagname: payload.tagname, tagdesc: payload.tagdesc })
                return Promise.resolve("Success")

            } catch (error) {

                console.log(error)
                return Promise.reject(error)
            }

        },
        async getTags({ commit, dispatch }, ) {

            try {
                let response = await axios.get("/tags.json")

                return Promise.resolve(response)

            } catch (error) {

                console.log(error)
                return Promise.reject(error)
            }

        },


        async updateGeneral({ commit, dispatch }, { table, id, payload }) {


            try {
                const updates = {};
                const db = getDatabase();
                // console.log(table);
                // console.log(id);
                // console.log(payload);
                updates['/' + table + '/' + id] = payload;
                // console.log("updated");
                return update(ref(db), updates);
                // return Promise.resolve("Update succes")
            } catch (error) {
                return Promise.reject(error)
            }



        },



        async updateTags({ commit, dispatch }, { payload }) {

            try {
                const db = getDatabase();

                // A post entry.
                const postData = {
                    tagname: payload.tagname,
                    tagdesc: payload.tagdesc,
                    tagFilterQueryName: payload.tagFilterQueryName
                }

                // Get a key for a new Post.

                // console.log(payload.tagid);
                // Write the new post's data simultaneously in the posts list and the user's post list.
                const updates = {};

                updates['/tags/' + payload.tagid] = postData;

                update(ref(db), updates);
                return Promise.resolve("Success")
            } catch (error) {
                console.log("hata");
                return Promise.reject(error);

            }




        },



        async getpostlist({ commit, dispatch }) {

            const url = "posts/";

            try {

                const dbRef = ref(getDatabase());
                var c = get(child(dbRef, url)).then((snapshot) => {
                    if (snapshot.exists()) {
                        return snapshot.val();

                    } else {
                        console.log("No data available");
                    }

                }).catch((error) => {
                    console.error(error);
                });
                return Promise.resolve(c)
            } catch (error) {

                return Promise.reject(error)

            }



        },




        async filterData({ commit, dispatch }, { payload }) {



            try {

                const db = getDatabase();
                const recentPostsRef = await get(query(ref(db, payload.table), orderByChild(payload.where), equalTo(payload.value)));

                return Promise.resolve(recentPostsRef.val())
            } catch (error) {

                return Promise.reject(error)

            }



        },












        async getDetail({ commit, dispatch }, { payload }) {

            const url = payload.table + "/" + payload.id;

            try {

                const dbRef = ref(getDatabase());
                var c = await get(child(dbRef, url)).then((snapshot) => {
                    if (snapshot.exists()) {
                        return snapshot.val();

                    } else {
                        console.log("No data available");
                    }

                }).catch((error) => {
                    console.error(error);
                });
                return Promise.resolve(c)
            } catch (error) {

                return Promise.reject(error)

            }



        },


        async createPost({ commit, dispatch }, { payload }) {
            try {
                const db = getDatabase();
                set(ref(db, 'posts/' + uuidv4()), {
                    title: payload.title,
                    thumbnail: payload.thumbnail,
                    author: payload.author,
                    summary: payload.summary,
                    content: payload.content,
                    tag: payload.tag,
                    posteddate: Date.now(),
                    updateddate: Date.now(),
                    isdraft: payload.isdraft,


                });
                return Promise.resolve("success");

            } catch (error) {
                return Promise.reject(error);
            }






        },


        async addNewMenu({ commit, dispatch }, { payload }) {
            try {
                console.log("asd")
                const db = getDatabase();
                set(ref(db, 'menu/' + uuidv4()), {
                    menutitle: payload.menutitle,
                    menuOrder: payload.menuOrder,
                    link: payload.link,
                    active: false,
                    icon: payload.icon,

                    posteddate: Date.now(),
                    updateddate: Date.now(),



                });
                return Promise.resolve("success");

            } catch (error) {
                return Promise.reject(error);
            }






        },





        async getList({ commit, dispatch }, payload) {

            const url = payload + "/";

            try {

                const dbRef = ref(getDatabase());
                var c = get(child(dbRef, url)).then((snapshot) => {
                    if (snapshot.exists()) {
                        return snapshot.val();

                    } else {
                        console.log("No data available");
                    }

                }).catch((error) => {
                    console.error(error);
                });
                return Promise.resolve(c)
            } catch (error) {

                return Promise.reject(error)

            }



        },




    },
}