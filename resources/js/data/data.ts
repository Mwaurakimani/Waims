const level1 = ['Admin'];


const level2 = ['Moderator', ...level1];

const level3 = ['Project Manager', ...level2];

const level4 = ['Contractor', ...level3];


export const roles = {
    level1,
    level2,
    level3,
    level4,
};

