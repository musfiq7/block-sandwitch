// const { registerBlockType } = wp.blocks;
     
// registerBlockType('awp/firstblock', {
// 	title: 'Block Sandwitch',
// 	category: 'common',
// 	icon: 'smiley',
// 	description: 'Learning in progress',
// 	keywords: ['example', 'test'],
// 	edit: () => { 
// 		return <div>:)</div> 
// 	},
// 	save: () => { 
// 		return <div>:)</div> 
// 	}
// }); 




const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, colorPalette } = wp.blockEditor;
const { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker } = wp.components;

// registerBlockType('awp/firstblock', {
registerBlockType('bs/block-sandwitch', {
	title: 'Block Sandwitch',
	category: 'common',
	icon: 'smiley',
	description: 'Learning in progress',
	keywords: ['example', 'test'],
	attributes: {
		myRichHeading: {
			type: 'string',
		},
		myRichText: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},
		toggle: {
			type: 'boolean',
			default: true
		},
		favoriteAnimal: {
			type: 'string',
			default: 'dogs'
		},
		favoriteColor: {
			type: 'string',
			default: '#DDDDDD'
		},
		activateLasers: {
			type: 'boolean',
			default: false
		}
	},
	edit: (props) => { 
		const { attributes, setAttributes } = props;
		return (
			<div>
				<InspectorControls>
					<PanelBody
						title="Most awesome settings ever"
						initialOpen={true}
					>
						<PanelRow>
							<ToggleControl
								label="Toggle me"
								checked={attributes.toggle}
								onChange={(newval) => setAttributes({ toggle: newval })}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="What's your favorite animal?"
								value={attributes.favoriteAnimal}
								options={[
									{label: "Dogs", value: 'dogs'},
									{label: "Cats", value: 'cats'},
									{label: "Something else", value: 'weird_one'},
								]}
								onChange={(newval) => setAttributes({ favoriteAnimal: newval })}
							/>
						</PanelRow>
						<PanelRow>
							<ColorPicker
								color={attributes.favoriteColor}
								onChangeComplete={(newval) => setAttributes({ favoriteColor: newval.hex })}
								disableAlpha
							/>
						</PanelRow>
						<PanelRow>
							<CheckboxControl
								label="Activate lasers?"
								checked={attributes.activateLasers}
								onChange={(newval) => setAttributes({ activateLasers: newval })}
							/>
						</PanelRow>

				    
					</PanelBody>
					
				</InspectorControls>
				<RichText 
					tagName="h2"
					placeholder="Write your heading here"
					value={attributes.myRichHeading}
					onChange={(newtext) => setAttributes({ myRichHeading: newtext })}
					style={{color:attributes.favoriteColor}}
				/>
				<RichText
					tagName="p"
					placeholder="Write your paragraph here"
					value={attributes.myRichText}
					onChange={(newtext) => setAttributes({ myRichText: newtext })}
					style={{color:attributes.favoriteColor}}
				/>
			</div>
		);
	},
	save: (props) => { 
		const { attributes } = props;
		return (
			<div>
				<RichText.Content 
					tagName="h2"
					value={attributes.myRichHeading}
					style={{color:attributes.favoriteColor}}
				/>
				<RichText.Content 
					tagName="p"
					value={attributes.myRichText}
				/>
			</div>
		);
	}
});