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
	InspectorControls
} from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { ToolbarButton, ToolbarGroup, PanelBody, SelectControl } from "@wordpress/components"; 
import "./editor.scss";


export default function Edit({
	className,
	attributes,
	setAttributes,
	isSelected,
}) {
	const { plainTextContent, richTextContent,type } = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Settings", "cb-my-block")} initialOpen={true}>
					<SelectControl 
						label={__("Select", "cb-my-block")}
						value={type}
						options={[
							{ label: "Small", value: "25%" },
							{ label: "Medium", value: "50%" },
							{ label: "Large", value: "100%" },													
						]}
						onChange={(type) => { setAttributes( { type } ) }}
					/>
				</PanelBody>
			</InspectorControls>
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
			<div>
				<RichText
					{...useBlockProps} 
					style={{ fontSize: type }}
					tagName="h2" 
					value={richTextContent} 
					allowedFormats={["core/bold", "core/italic"]} 
					onChange={(newRichTextContent) => setAttributes({ richTextContent: newRichTextContent })} 
					placeholder={__("Heading...")} 
				/>
			</div>
		</Fragment>
	);
}
