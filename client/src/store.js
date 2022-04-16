import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// Slice 오브젝트 참조 구문 명시 위치
const logger = createLogger();

const store = configureStore({
    reducer: {
        // 개발자가 직접 작성한 Slice오브젝트
    },
    middleware: [
        ...getDefaultMiddleware({ serializableCheck: true }),
        createLogger(),
    ],
    devTools: true,
});

export default store;