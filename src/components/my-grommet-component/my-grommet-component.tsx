import React from 'react';
import { Grommet, Box, PageHeader, Anchor, Button } from 'grommet';
import { grommet } from 'grommet/themes';
import styles from './my-grommet-component.module.scss';

const MyGrommetComponent: React.FC = () => {
    return (
        <div>
            <Grommet theme={grommet}>
                <div className={styles.box}>
                    <Box pad="medium" style={{ maxWidth: '1024px', margin: '0 auto' }}>
                        <PageHeader
                            title="Pages Title"
                            subtitle="A subtitle for the page."
                            parent={<Anchor label="Parent Page" href="#" />}
                            actions={<Button label="Edit" primary />}
                        />
                    </Box>
                </div>
            </Grommet>
        </div>
    );
};

export default MyGrommetComponent;
