import { Flex, Group, Navbar, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { IconAlertCircle, IconDatabase, IconGitPullRequest, IconMessages, IconMoneybag, IconPaint, IconUser } from '@tabler/icons';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import FinanceSetting from './FinanceSetting';

const data = [
    { icon: <IconUser size="1rem" />, color: 'blue', label: 'User Information'},
    { icon: <IconMoneybag size="1rem" />, color: 'teal', label: 'Finance' },
    { icon: <IconPaint size="1rem" />, color: 'violet', label: 'Personalization' },
    { icon: <IconDatabase size="1rem" />, color: 'grape', label: 'Databases' },
  ];


const SettingsPage = () => {

    const [currentSetting, setCurrentSetting] = useState('User Information')


  return (
    <>
    <Flex>
    <Navbar p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
      <Text fz={25}>System Preferences</Text>
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <MainLinks setCurrentSetting={setCurrentSetting} />
      </Navbar.Section>
      <Navbar.Section>
        <Text>HELLO</Text>
      </Navbar.Section>
    </Navbar>
    <Flex p={20} direction={'column'}>
        <Flex>
            <Text fz={25}>{currentSetting}</Text>
        </Flex>
        <Flex mt={20}>
        {
        currentSetting === 'Finance'
        ? <FinanceSetting />
        : null
        }
        </Flex>
    </Flex>
    </Flex>
    </>
  )
}


function MainLinks({setCurrentSetting}) {
    const links = data.map((link) => <MainLink {...link} key={link.label} setCurrentSetting={setCurrentSetting}/>);
    return <div>{links}</div>;
  }

function MainLink({ icon, color, label, setCurrentSetting }) {
    return (
      <UnstyledButton
        onClick={() => setCurrentSetting(label)}
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
  
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>
  
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    );
  }

export default SettingsPage