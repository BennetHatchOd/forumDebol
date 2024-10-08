

export const SETTING = {
    PORT: process.env.PORT || 3014
};

export const HTTP_STATUSES = {
    OK_200:             200,
    CREATED_201:        201,
    NO_CONTENT_204:     204,
    BAD_REQUEST_400:    400,
    NO_AUTHOR_401:      401,
    NOT_FOUND_404:      404 
};

export const URL_PATH = {
    base:       '/',
    blogs:      '/blogs',
    posts:      '/posts',
    deleteAll:  '/testing/all-data',
}