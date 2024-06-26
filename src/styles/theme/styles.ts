import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
export const globalStyles = {
	colors: {
		purple: {
			100: '#6D49FB',
			200: '#9E74DA',
		},
		grey: {
			100: '#e6e6e9',
			900: '#000614',
		},
		brand: {
			100: '#E9E3FF',
			200: '#422AFB',
			300: '#422AFB',
			400: '#7551FF',
			500: '#a378e1',
			600: '#3311DB',
			700: '#02044A',
			800: '#190793',
			900: '#11047A',
		},
		brandScheme: {
			100: '#E9E3FF',
			200: '#7551FF',
			300: '#7551FF',
			400: '#7551FF',
			500: '#422AFB',
			600: '#3311DB',
			700: '#02044A',
			800: '#190793',
			900: '#02044A',
		},
		brandTabs: {
			100: '#E9E3FF',
			200: '#422AFB',
			300: '#422AFB',
			400: '#422AFB',
			500: '#422AFB',
			600: '#3311DB',
			700: '#02044A',
			800: '#190793',
			900: '#02044A',
		},
		secondaryGray: {
			100: '#E0E5F2',
			200: '#E1E9F8',
			300: '#F4F7FE',
			400: '#E9EDF7',
			500: '#8F9BBA',
			600: '#A3AED0',
			700: '#707EAE',
			800: '#707EAE',
			900: '#1B2559',
		},
		red: {
			100: '#FEEFEE',
			500: '#EE5D50',
			600: '#E31A1A',
		},
		blue: {
			50: '#EFF4FB',
			500: '#3965FF',
		},
		orange: {
			100: '#FFF6DA',
			500: '#FFB547',
		},
		green: {
			100: '#E6FAF5',
			500: '#01B574',
		},
		navy: {
			50: '#d0dcfb',
			100: '#aac0fe',
			200: '#a3b9f8',
			300: '#728fea',
			400: '#3652ba',
			500: '#1b3bbb',
			600: '#24388a',
			650: '#282835',
			700: '#24243f',
			800: '#1b1b28',
			900: '#151523',
		},
		gray: {
			100: '#FAFCFE',
		},
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				overflowX: 'hidden',
				bg: mode('navy.900', 'navy.900')(props),
				fontFamily: 'DM Sans',
				letterSpacing: '-0.5px',
				color: 'grey.100',
			},
			input: {
				color: 'gray.700',
			},
			html: {
				fontFamily: 'DM Sans',
			},
			header: {
				bg: 'navy.800',
				borderBottom: '1px solid',
				borderColor: 'navy.700',
			},
			'.chakra-modal__content-container': {
				height: '0px !important',
			},
		}),
	},
}
