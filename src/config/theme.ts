const theme: Theme = {
    buttons: {
        buttonShape: {
            borderRadius: 50,
            height: 60,
            width: 300,
        },
    },
    colorScheme: {
        backgroundColor: '#CCC',
        borders: {
            divider: '#888',
        },
        forms: {
            backgroundColor: '#68979B',
            borderColor: '#222',
        },
        links: '#9476AB',
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
    buttons: {
        buttonShape: {
            borderRadius: number;
            height: number;
            width: number;
        };
    };
    colorScheme: {
        backgroundColor: string;
        borders: {
            divider: string;
        };
        forms: {
            backgroundColor: string;
            borderColor: string;
        };
        links: string;
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
