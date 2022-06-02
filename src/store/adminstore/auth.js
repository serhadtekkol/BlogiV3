import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const authstore = {
    namespaced: true,
    state: {
        user: null,
        token: '',
        userid: '',

    },
    getters: {
        getLogin(state) {
            return typeof state.token === 'string' && state.token !== ''
        },
        getToken(state) {
            return state.token
        },
        getUserId(state) {
            return state.userid
        },
        getUserType(state) {
            return state.user_type
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            // console.log("payload " + state.user.email)

        },

        setSession(state, n) {
            state.token = n.accessToken;
            state.userid = n.uid;


        },
        logoutSession(state) {
            sessionStorage.clear()
            state.token = ''
            state.userid = ''
            state.user_type = 0
        }

    },
    actions: {
        async logout({ commit }) {

            const auth = getAuth();
            signOut(auth).then(() => {
                commit('logoutSession')
                localStorage.clear();
            }).catch((error) => {
                // An error happened.
            });


        },
        loginSession({ commit }, data) {
            sessionStorage.setItem('session', data)
            commit('setSession', data)
        },
        getSession({ commit }) {
            const session = sessionStorage.getItem('session')

            if (session && typeof session === 'string' && session !== '') {


                commit('setSession', session)

                return session;
            } else {
                return null;

            }


        },
        async login({ commit, dispatch }, { payload }) {
            try {
                // console.log(payload);
                const auth = getAuth();


                const data = await signInWithEmailAndPassword(auth, payload.email, payload.password)
                    .then((userCredential) => {
                        // Signed in 
                        // 
                        // console.log(userCredential);
                        // console.log(userCredential.user.email);
                        sessionStorage.setItem('session', JSON.stringify(userCredential.user))

                        // updateProfile(auth.currentUser, {
                        //     displayName: "Serhad TEKKOL"
                        // }).then(() => {
                        //     console.log("update")
                        //         // ...
                        // }).catch((error) => {
                        //     console.log("update fail")
                        //         // ...
                        // });
                        return Promise.resolve(userCredential.user)
                            // ...
                    })
                    .catch((error) => {
                        // return Promise.reject(error);
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(error)
                        return Promise.reject(error);
                        // ..
                    });

                commit("setUser", data);
                localStorage.setItem("username", data.displayName)
                commit('setSession', data)
                    // console.log(data.displayName);
            } catch (error) {
                console.log(error)
                return Promise.reject(error);

            }




        },



    }



}