import axios from 'axios'

interface lyricsResponse {
    lyrics: string
}

export async function fetchLyrics(
    artist: string,
    song: string,
): Promise<lyricsResponse> {
    return await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}
