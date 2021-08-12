export type Blog = {
    id: string;
    title: string;
    details: string;
    type: string;
    photo: string;
};

export type Member = {
    name: string;
    city: string;
    photo: string;
};

export type Filter = {
    value: string;
    checked: boolean;
};

export type Facets = {
    [key: string]: Filter[];
};

export type MembersData = {
    [key: string]: string & { [key: string]: string };
};

export type BlogForm = {
    title: string;
    details: string;
};
