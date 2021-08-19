export interface Article {
    url: string;
    issue_no: number;
    comments_url: string;
    title: string;
    author: string;
    content_body: string;
    created_at: Date;
    is_owner: boolean;
}