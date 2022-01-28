export class Post {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;

    constructor(init?: Partial<Post>) {
        Object.assign(this, init);
    }
}