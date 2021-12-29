import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const worksDir = path.join(process.cwd(), 'data', 'works')

export function getSortedWorks(){
    const filenames = fs.readdirSync(worksDir)
    const allWorksData = filenames.map(fn => {
        const id = fn.replace(/\.md$/, '')
        const filepath = path.join(worksDir, fn)
        const contents = fs.readFileSync(filepath, 'utf8')

        const matterRes = matter(contents)
        return {
            id,
            ...matterRes.data,
        }
    })

    return allWorksData.sort(({name: a}, {name: b}) => {
        if (a < b){
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}