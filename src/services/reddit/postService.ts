import axios from 'axios'


export const getTopPosts = (subReddit: string) => {
    let url = `https://www.reddit.com/r/${subReddit}/top.json`
    const regex = ''
    let retArr = []
    axios
    .get(url)
    .then((data) => {
        data.data.data.children.forEach((elem) =>{
            const postTitle = elem.data.title 
            retArr.push(postTitle)
        })
        return retArr
    })
    .catch((error) => {
        return []
    })
}