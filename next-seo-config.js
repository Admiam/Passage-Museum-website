const title = 'Passage West Maritime Museum'
const description = 'The Museum’s collection extends across a range of categories such as maritime history, shipbuilding and ship repair, emigration, the US naval presence in Cork Harbour and of course the stories of the generations of seamen associated with the town.'

const SEO = {
    title,
    description,
    canonical: 'https://www.admiam.com',
    openGraph: {
        type: 'website',
        locate: 'en_IE',
        url: 'https://www.admiam.com',
        title,
        description,
        images: [
            {
                url: 'https://www.admiam.com/logo.png',
                alt: title,
                width: 1280,
                height: 720
            }
        ]     
    }
}
export default SEO