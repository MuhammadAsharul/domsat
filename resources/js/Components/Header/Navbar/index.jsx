import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import Logo from '../../../Assets/Logo/Domsat.io.png';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w='full' px={10} pt={4}> 
      <Flex
        color={useColorModeValue('gray.600', 'wihte')}
        minH={'65px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={'solid'}
        align={'center'}
        borderColor={useColorModeValue('gray.200', 'whiteAlpha.400')}
        >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex w={'full'} justifyContent={{ base: 'center', md: 'space-between' }} alignItems={'center'} color={useColorModeValue('black', 'white')}>
          <p style={{ fontWeight: '900', fontSize:'28px', margin: 0, padding:0 }}>
            Domsat.<span style={{ fontWeight: 'normal', margin: 0 }}>io</span>
          </p>
          <DesktopNav />
          <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'} gap={{ lg: '3'}}>
            <Button borderRadius="50px" bg={'transparent'} borderWidth="1.5px" borderColor={useColorModeValue('black', 'white')}>Contact Us</Button>
            <Button
              bg={'transparent'}
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: 'none' }}
              w="fit-content"
            >
              {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} display={{ base: 'none', md: 'flex' }} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: 'Work',
    href: '#',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Service',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
  // {
  //   label: 'Portofolio',
  //   children: [
  //     {
  //       label: 'Job Board',
  //       subLabel: 'Find your dream design job',
  //       href: '#',
  //     },
  //     {
  //       label: 'Freelance Projects',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#',
  //     },
  //   ],
  // },
];
