export interface PaginationResponse {
    total: number;
    limit: number;
    skip:  number;
    data:  UserDetails[];
}

export interface UserDetails {
    _id:            string;
    sonidero_name:  string;
    avatar:         string;
    email:          string;
    associated_acc: string;
    createdAt:      string;
    updatedAt:      string;
    __v:            number;
}
