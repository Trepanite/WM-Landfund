export const address = `http://localhost:9000`

export async function get(collection: string, id = "") {
    return fetch(`${address}/api/${collection}?populate=*`)
}

export function getImgUrl(img, size: string) {
    try {
        return address + img.data.attributes.formats[size].url
    }
    catch (e) { return address + img.data.attributes.url }
}