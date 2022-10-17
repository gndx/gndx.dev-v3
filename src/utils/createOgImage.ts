export const createOgImage = ({
	title,
	meta,
}: {
	title: string;
	meta: string;
}) =>
	[
		// ACCOUNT PREFIX
		// Add your own Cloudinary account ID.
		`https://res.cloudinary.com/gndxdev/image/upload`,
		// Composed Image Transformations
		`w_1600,h_836,q_100`,

		// TITLE
		// Karla google font in light rose
		`l_text:Ubuntu_92_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1400,h_240`,
		// Positioning
		`fl_layer_apply,g_south_west,x_100,y_180`,

		// META
		// Karla, but smaller
		`l_text:Ubuntu_52_bold:${e(meta)},co_rgb:ffe4e680,c_fit,w_1400`,
		// Positioning
		`fl_layer_apply,g_south_west,x_100,y_100`,

		// PROFILE IMAGE
		// dynamically fetched from my twitter profile
		`l_twitter_name:gndx`,
		// Transformations
		`c_thumb,g_face,r_max,w_480,h_480,q_100`,
		// Positioning
		`fl_layer_apply,w_200,g_north_west,x_100,y_100`,

		// BG
		`og-base-gndx-purple_efdec6.png`,
	].join("/");

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));
