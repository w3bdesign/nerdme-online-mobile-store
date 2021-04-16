import React from 'react';
import Container from './shared/Container';
import Links from './shared/Links';
import { HELP_DROPDOWN_LINKS } from '../../../state/constants'

const Help = () => {

    return (
        <Container classes="w-56">
            <Links links={HELP_DROPDOWN_LINKS} />
        </Container>
    );
}

export default Help;