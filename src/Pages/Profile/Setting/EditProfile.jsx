import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { biodata } from '../data';

const EditProfile = () => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
          sunting profil
        </Heading>
        <Text color="#378694">Wajib diisi*</Text>
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Heading textTransform="uppercase" fontSize="18px" fontWeight="bold">
            alamat email
          </Heading>
          <Text color="#378694">*</Text>
        </Flex>
        <Text>{biodata.email}</Text>
      </Flex>
      <Checkbox>Ganti alamat e-mail</Checkbox>
      <Text>
        Disclaimer: kami dapat melakukan pengiriman ke rumah dan Cash on
        Delivery (COD) kecuali pada area tertentu. Order yang tidak bisa di
        layani akan di batalkan secara otomatis.
      </Text>
      <Text textDecor="underline">
        Silahkan klik disini untuk informasi lebih lanjut.
      </Text>
      <Text>
        Jika Anda ingin menggunakan alamat profil sebagai "Alamat Keanggotaan",
        harap lengkapi semua informasi termasuk nama dan nomor telepon Anda.
      </Text>
      <Box>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
                <Flex>
                  Nama Depan
                  <Text
                    verticalAlign="super"
                    fontSize="smaller"
                    color="#378694"
                  >
                    *
                  </Text>
                </Flex>
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input type="text" variant="flushed" value={biodata.firstName} />
            </Box>
          </Flex>
        </FormControl>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
                <Flex>
                  Nama belakang
                  <Text
                    verticalAlign="super"
                    fontSize="smaller"
                    color="#378694"
                  >
                    *
                  </Text>
                </Flex>
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input type="text" variant="flushed" value={biodata.lastName} />
            </Box>
          </Flex>
        </FormControl>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
                <Flex>
                  Alamat detail/jalan
                  <Text
                    verticalAlign="super"
                    fontSize="smaller"
                    color="#378694"
                  >
                    *
                  </Text>
                </Flex>
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input type="text" variant="flushed" value={biodata.address} />
            </Box>
          </Flex>
        </FormControl>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
                <Flex>
                  kode pos
                  <Text
                    verticalAlign="super"
                    fontSize="smaller"
                    color="#378694"
                  >
                    *
                  </Text>
                </Flex>
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input type="text" variant="flushed" value={biodata.postalCode} />
            </Box>
          </Flex>
        </FormControl>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
                telepon
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input type="text" variant="flushed" value={biodata.telephone} />
            </Box>
          </Flex>
        </FormControl>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
                <Flex>
                  nomor ponsel
                  <Text
                    verticalAlign="super"
                    fontSize="smaller"
                    color="#378694"
                  >
                    *
                  </Text>
                </Flex>
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input type="text" variant="flushed" value={biodata.phone} />
            </Box>
          </Flex>
        </FormControl>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
                tanggal lahir
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input type="date" variant="flushed" value={biodata.dob} />
            </Box>
          </Flex>
        </FormControl>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
                jenis kelamin
              </FormLabel>
            </Box>
            <Box w="70%">
              <RadioGroup>
                <Stack direction="row">
                  <Radio value="1">Pria</Radio>
                  <Radio value="2">Wanita</Radio>
                  <Radio value="3">Tidak Dipilih</Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Flex>
        </FormControl>
      </Box>
      <Text>
        Anda mungkin akan dihubungi melalui telepon atau email jika kami
        memiliki pertanyaan tentang pesanan dan pilihan pengiriman Anda.
      </Text>
      <Text textTransform="uppercase" fontWeight="bold" fontSize="16px">
        KONFIRMASI LANGGANAN
      </Text>
      <Box>
        <Checkbox>Newsletter Uniqlo</Checkbox>
      </Box>
      <Button textTransform="uppercase" fontWeight="bold">
        simpan perubahan
      </Button>
    </>
  );
};

export default EditProfile;
