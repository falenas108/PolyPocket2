const theme: Theme = {
    colorScheme: {
        backgroundColor: '#9476AB',
        forms: {
            backgroundColor: '#FFF',
            borderColor: '#222',
        },
        paragraphTextColor: '#222',
    },
    fontFamilies: {
        logo: 'Trebuchet',
        paragraph: 'Trebuchet',
    },
    sizes: {
        h2: 20,
        paragraph: 16,
        logo: 50,
    },
};

export interface Theme {
    colorScheme: {
        backgroundColor: string;
        forms: {
            backgroundColor: string;
            borderColor: string;
        };
        paragraphTextColor: string;
    };
    fontFamilies: {
        logo: string;
        paragraph: string;
    };
    sizes: {
        h2: number;
        paragraph: number;
        logo: number;
    };
}

export default theme;
