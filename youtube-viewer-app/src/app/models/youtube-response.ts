export interface YouTubeResponse {
    items: Video[];
}

export interface Video {
    snippet: Snippet;
    id: Id;
}

export interface Snippet {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: Thumbnails;
}

export interface Thumbnails {
    medium: Medium;
}

export interface Medium {
    url: string;
}

export interface Id {
    videoId: string
}
