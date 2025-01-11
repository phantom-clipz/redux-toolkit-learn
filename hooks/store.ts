import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/features/counterSlice';

const store = configureStore({
   reducer: {
      counter: counterReducer,
   },
});

// infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;

//inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

