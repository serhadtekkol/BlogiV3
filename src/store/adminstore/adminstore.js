import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, onValue, child, get, update, set, query, orderByChild, equalTo, remove } from "firebase/database";


export const adminstore = {
    namespaced: true,
    state: {
        loadingmessage: "Please Wait While Components Loading"


    },
    mutations: {



    },
    actions: {

        async setAnnouncement({ commit, dispatch }, { payload }) {
            let message = { message: "", error: false }
            try {
                const db = getDatabase();
                console.log(payload)
                if (payload.isnew) {




                    set(ref(db, 'announcement/' + uuidv4()), {
                        description: payload.description,

                        createddate: Date.now(),
                        updateddate: Date.now(),



                    });
                    message.message = "Announcement created!",
                        message.show = true,
                        message.error = false
                    return message;
                } else {
                    const updates = {};


                    updates['/announcement/' + payload.id] = payload;

                    update(ref(db), updates);
                    message.message = "Announcement  updated!",
                        message.show = true,
                        message.error = false
                    return message;

                }

            } catch (error) {

                message.message = "An error accoured " + error,
                    message.show = true,
                    message.error = true
                return message;
            }



        },

        async deleteAnnouncement({ commit, dispatch }, { payload }) {

            try {

                const db = getDatabase();
                const t = '/announcement/' + payload.id;



                // remove(ref(db), rar);
                // const dbRef = ref(db, t);
                const dbRef = ref(db, t);
                remove(dbRef).then()

                return Promise.resolve("Success")
            } catch (error) {
                console.log("hata");
                return Promise.reject(error);

            }


        },



        async getAnnouncement({ commit, dispatch }) {

            const url = "announcement/";

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

        async getSocial({ commit, dispatch }) {

            const url = "settings/social";

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


        async setSocial({ commit, dispatch }, { payload }) {
            let message = { message: "", error: false }
            try {
                const db = getDatabase();

                if (payload.isnew) {




                    set(ref(db, 'settings/' + 'social'), {
                        twitter: payload.twitter,
                        linkedin: payload.linkedin,
                        github: payload.github,
                        mail: payload.mail,


                    });
                    message.message = "Social accounts saved to database!",
                        message.show = true,
                        message.error = false
                    return message;
                } else {
                    const updates = {};


                    updates['/settings/social'] = payload;

                    update(ref(db), updates);
                    message.message = "Social accounts updated!",
                        message.show = true,
                        message.error = false
                    return message;

                }

            } catch (error) {

                message.message = "An error accoured " + error,
                    message.show = true,
                    message.error = true
                return message;
            }


        },

        async addnewtag({ commit, dispatch }, { payload }) {

            try {
                // await axios.post("/tags.json", { tagname: payload.tagname, tagdesc: payload.tagdesc, tagFilterQueryName: payload.tagFilterQueryName })

                const db = getDatabase();
                set(ref(db, 'tags/' + uuidv4()), {
                    tagname: payload.tagname,
                    tagdesc: payload.tagdesc,
                    showninmenu: payload.showninmenu,
                    icon: payload.icon



                });


                return Promise.resolve("Success")

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
                    showninmenu: payload.showninmenu,
                    icon: payload.icon
                }


                const updates = {};

                updates['/tags/' + payload.tagid] = postData;

                update(ref(db), updates);
                return Promise.resolve("Success")
            } catch (error) {
                console.log("hata");
                return Promise.reject(error);

            }




        },

        async deleteRecord({ commit, dispatch }, { payload }) {

            try {
                const db = getDatabase();
                const t = '/' + payload.table + '/' + payload.id;


                console.log(t);
                // remove(ref(db), rar);
                // const dbRef = ref(db, t);
                const dbRef = ref(db, t);
                remove(dbRef).then()

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