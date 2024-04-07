/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon: {
		src: (
			<svg
			xmlns="http://www.w3.org/2000/svg"
			width="640"
			height="640"
			viewBox="0 0 480 480"
		  >
			<path d="M240 0C107.453 0 0 107.453 0 240s107.453 240 240 240 240-107.453 240-240C479.852 107.516 372.484.148 240 0zm8.566 69.191L332 35.84a224.492 224.492 0 0127.414 14.777l.219.137a225.29 225.29 0 0124.695 18.11l.672.585a227.354 227.354 0 0110.223 9.262c.418.41.855.8 1.273 1.219a234.39 234.39 0 0110.09 10.484c.27.305.527.625.797.93 2.855 3.199 5.601 6.511 8.265 9.879.641.8 1.282 1.601 1.903 2.402 2.89 3.742 5.687 7.55 8.328 11.48l-16.633 70.704-81.832 27.28-78.828-63.073zm-186.125 34.48c.621-.8 1.254-1.6 1.895-2.398a224.935 224.935 0 018.168-9.777c.305-.336.586-.68.887-1.016A217.481 217.481 0 0183.44 80c.399-.39.797-.8 1.215-1.16a228.569 228.569 0 0110.137-9.207l.8-.672a226.15 226.15 0 0124.462-18l.312-.2A224.738 224.738 0 01147.617 36l83.817 33.191v80.801l-78.832 63.063-81.832-27.23-16.633-70.704a233.682 233.682 0 018.304-11.45zm-9.64 259.09a222.72 222.72 0 01-6.746-10.96l-.52-.899a210.277 210.277 0 01-6.055-11.293l-.066-.12a222.882 222.882 0 01-10.535-24.802v-.078c-1.422-4-2.719-8.097-3.918-12.218l-.434-1.52a220.618 220.618 0 01-2.984-11.742c-.078-.387-.176-.754-.254-1.137a222.66 222.66 0 01-4.227-27.097l48.84-58.606 81.266 27.086 23.586 94.336L132 375.273zm240.472 94.782c-4 .992-8.105 1.848-12.21 2.617-.575.113-1.16.207-1.735.313-3.496.625-7.031 1.16-10.574 1.597-.945.121-1.883.25-2.824.364-3.29.382-6.61.671-9.938.91-1.047.07-2.082.176-3.129.242-4.254.262-8.543.414-12.863.414-3.957 0-7.89-.105-11.8-.313-.473 0-.927-.078-1.4-.113-3.48-.199-6.945-.46-10.402-.797l-.398-.074a227.948 227.948 0 01-22.559-3.598l-47.32-74.09 38.145-50.863h111.468l38.77 51.2zM458.77 288c-.082.383-.176.754-.258 1.137a230.481 230.481 0 01-2.985 11.742l-.43 1.52a224.8 224.8 0 01-3.921 12.218v.078a222.149 222.149 0 01-10.535 24.801l-.067.121a221.793 221.793 0 01-6.054 11.293l-.52.899a198.32 198.32 0 01-6.734 10.945l-78.93 12.445-39.023-51.52 23.574-94.312 81.265-27.086 48.84 58.606A222.142 222.142 0 01458.77 288zm0 0"></path>
		  </svg>
		),
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
