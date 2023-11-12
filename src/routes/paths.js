const ROOTS_DASHBOARD = '/dashboard';

export const PATH_DASHBOARD = {
    
    root: ROOTS_DASHBOARD,

    user: {
        list: `${ROOTS_DASHBOARD}/user`,
        create: `${ROOTS_DASHBOARD}/user/create`,
        edit: (id = ':id') => `${ROOTS_DASHBOARD}/user/${id}/edit`,
    },

    role: {
        list: `${ROOTS_DASHBOARD}/role`,
        create: `${ROOTS_DASHBOARD}/role/create`,
        edit: (id = ':id') => `${ROOTS_DASHBOARD}/role/${id}/edit`,
    },

    permission: {
        list: `${ROOTS_DASHBOARD}/permission`,
        create: `${ROOTS_DASHBOARD}/permission/create`,
        edit: (id = ':id') => `${ROOTS_DASHBOARD}/permission/${id}/edit`,
    },
}

export const PATH_AUTH = {
    root: '/auth',
    login: '/auth/sign-in',
    register: '/auth/register',
    resetPassword: '/auth/reset-password',
    verify: '/auth/verify',
    notFound: '/auth/*',
}