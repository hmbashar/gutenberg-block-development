/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	BlockControls,
	PlainText,
	RichText,
} from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({
	className,
	attributes,
	setAttributes,
	isSelected,
}) {
	const { plainTextContent, richTextContent } = attributes;
	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="edit"
						label={__("Edit", "cb-my-block")}
						onClick={() => console.log("edit")}
					/>
					<ToolbarButton
						icon="trash"
						label={__("Delete", "cb-my-block")}
						onClick={() => console.log("Delete")}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						icon="edit"
						label={__("Edit", "cb-my-block")}
						onClick={() => console.log("edit")}
					/>
					<ToolbarButton
						icon="trash"
						label={__("Delete", "cb-my-block")}
						onClick={() => console.log("Delete")}
					/>
				</ToolbarGroup>
			</BlockControls>
			<p {...useBlockProps()}>
				{__("Cb Hello Block – hello from the editor!", "cb-my-block")}

				<PlainText
					{...useBlockProps()}
					value={plainTextContent}
					onChange={(newPlainTextContent) => setAttributes({ plainTextContent: newPlainTextContent })}
					placeholder={__("Type plain text here...", "cb-my-block")}
				/>
			</p>
			<p>
				<RichText
					{...useBlockProps}
					tagName="h2" 
					value={richTextContent} 
					allowedFormats={["core/bold", "core/italic"]} 
					onChange={(newRichTextContent) => setAttributes({ richTextContent: newRichTextContent })} 
					placeholder={__("Heading...")} 
				/>
			</p>
		</Fragment>
	);
}
