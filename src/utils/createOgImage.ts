// double escape for commas and slashes
const e = (str) => encodeURIComponent(encodeURIComponent(str))


export const createOgImage = ({
    title,
	meta,
    domain = "feregri.no",
    useCDN = false,
    cloudinaryAccountId = "feregrino",
    twitterHandle = "@feregri_no",
    bgImagePath = 'og_ebgzzs.jpg'

}) => {
    const url = [
        // ACCOUNT PREFIX
        // Add your own Cloudinary account ID.
        `https://res.cloudinary.com/${cloudinaryAccountId}/image/upload`,
        // Composed Image Transformations 
        // optimization: https://twitter.com/colbyfayock/status/1615760720347398150
        `w_1600,h_836,q_auto,f_auto`,
        // TITLE
        // Karla google font in light rose
        `l_text:Karla_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1400,h_240`,
        // Positioning
        `fl_layer_apply,g_south_west,x_100,y_180`,

        // Domain
        // Karla, but smaller
        `l_text:Karla_48:${e(meta)},co_rgb:ffe4e680,c_fit,w_1400`,
        // Positioning
        `fl_layer_apply,g_south_west,x_100,y_100`,

        // PROFILE IMAGE
        // dynamically fetched from my twitter profile
        // https://cloudinary.com/cookbook/overlaying_social_profile_pictures_on_top_of_images
        `l_twitter_name:${twitterHandle}`,
        // Transformations
        `c_thumb,g_face,r_max,w_500,h_500,q_100`,
        // Positioning
        `fl_layer_apply,w_140,g_north_west,x_100,y_100`,

        // Background image
        bgImagePath
    ].join("/")

    if (useCDN) {
        return `https://wsrv.nl?url=${url}`
    }

    return url;
}


export default createOgImage;