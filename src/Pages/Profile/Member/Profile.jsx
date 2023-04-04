import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
  return (
    <>
      <Box>
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          Profil
        </Text>
      </Box>
      <Flex>
        <Box>
          <Box my="3">
            <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
              alamat email
            </Text>
            <Text fontSize="16px">jieunssiu@gmail.com</Text>
          </Box>
          <Box my="3">
            <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
              Nama
            </Text>
            <Text fontSize="16px">jieunssiu</Text>
          </Box>
          <Box my="3">
            <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
              alamat
            </Text>
            <Text fontSize="16px">
              wdqdqdqwdqwdqwdq, Langensari, West Java, Kota Banjar
            </Text>
          </Box>
        </Box>
        <Box ml="10">
          <Box my="3">
            <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
              nomor ponsel
            </Text>
            <Text fontSize="16px">21312312</Text>
          </Box>
          <Box my="3">
            <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
              jenis kelamin
            </Text>
            <Text fontSize="16px">tidak dipilih</Text>
          </Box>
        </Box>
      </Flex>
      <Divider />
      <Box>
        <Text
          fontWeight="bold"
          fontSize="20px"
          textTransform="uppercase"
          my="4"
        >
          barcode keanggotaan
        </Text>
        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAABGCAMAAABFa97bAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAAB71BMVEX///8AAAD+/v79/f1UVFQvLy8nJyfNzc14eHhBQUEPDw84ODjh4eFHR0cEBAQYGBhfX1+xsbEQEBCSkpLj4+N+fn6qqqo1NTXi4uKGhob6+vrp6enMzMz4+Pi5ubmmpqZ8fHzIyMgHBwclJSXt7e3k5OQXFxfZ2dmQkJAuLi5eXl75+fktLS3u7u4MDAyBgYEiIiLT09O7u7sNDQ0SEhJtbW0JCQnCwsIICAgyMjICAgK0tLRgYGCRkZH8/PyDg4N5eXkoKCiioqIREREaGhrs7Ox6enoFBQXX19dMTExXV1fl5eXz8/PBwcF2dnYgICBhYWFPT082NjYdHR0+Pj7q6uo5OTmysrJxcXG/v7/Ly8uurq7a2tpiYmKdnZ2MjIykpKRZWVlmZmbHx8fv7+9/f38wMDBnZ2fw8PCAgIDx8fGCgoImJiYpKSmsrKzQ0NA6Ojre3t4sLCzo6Og9PT3Dw8MBAQHm5ua9vb1FRUXR0dFsbGxJSUkUFBSoqKgWFhZISEjKyspRUVFKSkq6urpSUlLJycm3t7f7+/tcXFyZmZkkJCQeHh739/fV1dU/Pz9OTk5aWlqzs7MVFRWgoKC+vr5paWmenp7c3NxYWFjg4OAODg6cnJxycnKTk5NGRkbr6+tNTU1ubm64uLiXl5fAbZ5AAAADU0lEQVR4nO2WB1MTQRSA911iMIVETyFUlaCIBoMYSoxUQUGICoSioGKNlWIh1ggWEBERRVEsWH+oub1LsldCkhnjjM67mbv93s7b974kuzchAIQIt/CMjJGZWBSJY5nx1rFzyputyEaxWCtia7Nd6Y36qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6adT/89dfqI36iVqkszbqJ2qRztqon6hFOmujfqIW6az9j+v/ZxenN9DLnC/G20oz2PmmgzQ6QnlIWpOX7Yuuj+QrmYw+0ub4DlKvlC7dGvGvERTQsKgEdojzZeJ0K41aKJ+U1jTApsjyaL6CyT33Yw2eyX3hCbxVsryXpd02sTCf2oewmwqFcbODB0NsusYDdRTcXUzyFX64XkI2X7b2tt/VpsFVMLcQglkVM70+8mD8GnSk5J8FucKwCYq3M/oFbu9+ChzUMslXYUQiNl+2VmeEh0SDef4lscCYipleevhMyCAcSsF+PZjzhDFny1YS06+o9OwTyQd8T+1xafoSH9BJyObL1g7B/Whxloet8+QNTKmY6bXYzIWfocXk7S08nxMNYvpm8NRaKDmP0q3P0eAy9JPR6xr5Mb7pgOqJJxUqJuMlnqlg0wcVM71sn2bCz0pb8vqZkK1WIGRP1V5olnYt19tvgNMCnTd1c8QTWFU/C4DnwdGmZEJmAbzviJpjvZZhKf/bCmQmbZ8BZiZidUgdswcH4IwwXBBeO0ySln4flHNcrrgxWPY9h8wRe7BRp2C2V84EfQv9Slp/LWyIp1/P81H2gV0YAnDNYIDWGzWr6Fe6w6+merdfyZ1QGj7KSzCkYFmv3i89xeAvTFrfCBvj6rtLojwIZ4XhoviOtg6uou+iO9dmUjJPj2U+/bVZVvTi2uFn0vbEYNUxUURhlzP85TRAe6RkP289p/UZtfRvwR1CnoJRyQGYDj/fw7KCFb1W4Efy9sQkO+WSgtPlMOuLoaVDCDo6u8On75TaM47+eND6YNLrnVbyM2/w1WszVFfIWdaLkGz47kxB37yOjew7xbF8t7u6rPEA5cMuf9+xE0zSWKcqX8ZFd0OhyQI1D+jnYLFrXslsr/Cp6Iq78X8DCp6mFXIvA58AAAAASUVORK5CYII=" />
        <Text my="4">
          Silakan tunjukkan barcode keanggotaan Anda di kasir saat Anda membeli
          barang.
        </Text>
        <Button
          my="4"
          variant="outline"
          borderColor="black"
          textTransform="uppercase"
          fontWeight="bold"
          borderRadius="0"
          w="25%"
        >
          cetak barcode
        </Button>
      </Box>
    </>
  );
};

export default Profile;
