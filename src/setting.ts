import {config} from 'dotenv';


export const SETTING = {
    PORT: process.env.PORT || 3014,
    PATH: {
        VIDEO: '/videos',
        VIDEOID: '/videos/:id',
        TEST_CLEAR_DB: '/testing/all-data'
    }
};

export const HTTP_STATUSES = {
    OK_200:             200,
    CREATED_201:        201,
    NO_CONTENT_204:     204,
    BAD_REQUEST_400:    400,
    NOT_FOUND_404:      404 
};

