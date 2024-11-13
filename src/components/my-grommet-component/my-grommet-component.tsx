import React, { useState } from 'react';
import {
    Grommet,
    Box,
    PageHeader,
    Anchor,
    Button,
    Nav,
    Header,
    Main,
    Footer,
    Text,
    Card,
    Grid,
    Form,
    FormField,
    TextInput,
    TextArea,
    Layer,
} from 'grommet';
import { grommet } from 'grommet/themes';
import { Menu, Close, Mail, Github, Linkedin } from 'grommet-icons';
import styles from './my-grommet-component.module.scss';

// Custom theme to remove scrollbar
const customTheme = {
    ...grommet,
    global: {
        ...grommet.global,
        colors: {
            ...grommet.global.colors,
            background: '#ffffff',
        },
    },
};

const MyGrommetComponent: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

    const navItems = ['Home', 'About', 'Services', 'Contact'];

    const cards = [
        { title: 'Service 1', description: 'Description of service 1' },
        { title: 'Service 2', description: 'Description of service 2' },
        { title: 'Service 3', description: 'Description of service 3' },
    ];

    const handleSubmit = (event: { value: any }) => {
        console.log('Form submitted:', event.value);
        setFormValues({ name: '', email: '', message: '' });
    };

    return (
        <Grommet theme={customTheme} full>
            <Box fill>
                {/* Header Section */}
                <Header background="light-2" pad="medium">
                    <Box direction="row" align="center" gap="small">
                        <Button
                            icon={<Menu />}
                            onClick={() => setShowSidebar(!showSidebar)}
                        />
                        <Text size="large" weight="bold">Your Logo</Text>
                    </Box>
                    <Nav direction="row" gap="medium">
                        {navItems.map((item) => (
                            <Anchor key={item} href={`#${item.toLowerCase()}`} label={item} />
                        ))}
                    </Nav>
                </Header>

                {/* Sidebar */}
                {showSidebar && (
                    <Layer
                        position="left"
                        full="vertical"
                        onClickOutside={() => setShowSidebar(false)}
                        onEsc={() => setShowSidebar(false)}
                    >
                        <Box
                            pad="medium"
                            gap="medium"
                            width="medium"
                            background="light-2"
                        >
                            <Box
                                direction="row"
                                align="center"
                                justify="between"
                            >
                                <Text>Menu</Text>
                                <Button
                                    icon={<Close />}
                                    onClick={() => setShowSidebar(false)}
                                />
                            </Box>
                            <Nav gap="medium">
                                {navItems.map((item) => (
                                    <Anchor
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        label={item}
                                        onClick={() => setShowSidebar(false)}
                                    />
                                ))}
                            </Nav>
                        </Box>
                    </Layer>
                )}

                <Main overflow="auto">
                    <Box flex={false}>
                        {/* Hero Section */}
                        <Box 
                            pad="large" 
                            align="center" 
                            background="light-1"
                            height={{ min: "50vh" }}
                            justify="center"
                        >
                            <PageHeader
                                title="Welcome to Our Platform"
                                subtitle="Discover amazing features and services"
                                actions={<Button label="Get Started" primary />}
                            />
                        </Box>

                        {/* Services Section */}
                        <Box 
                            pad="large" 
                            id="services" 
                            background="white"
                            align="center"
                        >
                            <Box width="xlarge" gap="medium">
                                <Text size="xlarge" weight="bold" textAlign="center">Our Services</Text>
                                <Grid
                                    columns={{ count: 3, size: 'auto' }}
                                    gap="medium"
                                    fill="horizontal"
                                >
                                    {cards.map((card, index) => (
                                        <Card key={index} pad="medium" background="light-1">
                                            <Text weight="bold">{card.title}</Text>
                                            <Text margin={{ top: 'small' }}>{card.description}</Text>
                                            <Button
                                                margin={{ top: 'medium' }}
                                                label="Learn More"
                                                secondary
                                            />
                                        </Card>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>

                        {/* Contact Form */}
                        <Box 
                            pad="large" 
                            id="contact" 
                            background="light-2"
                            align="center"
                        >
                            <Box width="large" gap="medium">
                                <Text size="xlarge" weight="bold" textAlign="center">Contact Us</Text>
                                <Box width="medium" alignSelf="center">
                                    <Form
                                        value={formValues}
                                        onChange={setFormValues}
                                        onSubmit={handleSubmit}
                                    >
                                        <FormField name="name" label="Name">
                                            <TextInput name="name" />
                                        </FormField>
                                        <FormField name="email" label="Email">
                                            <TextInput name="email" type="email" />
                                        </FormField>
                                        <FormField name="message" label="Message">
                                            <TextArea name="message" />
                                        </FormField>
                                        <Box direction="row" gap="medium" margin={{ top: 'medium' }} justify="center">
                                            <Button type="submit" primary label="Send Message" />
                                        </Box>
                                    </Form>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Main>

                {/* Footer */}
                <Footer background="light-3" pad="medium">
                    <Box
                        direction="row"
                        gap="medium"
                        justify="center"
                        align="center"
                    >
                        <Anchor icon={<Mail />} href="mailto:contact@example.com" />
                        <Anchor icon={<Github />} href="https://github.com" />
                        <Anchor icon={<Linkedin />} href="https://linkedin.com" />
                    </Box>
                    <Text textAlign="center">© 2024 Your Company. All rights reserved.</Text>
                </Footer>
            </Box>
        </Grommet>
    );
};

export default MyGrommetComponent;
