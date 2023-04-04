import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
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
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          sunting profil
        </Text>
        <Text color="#378694">Wajib diisi*</Text>
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex align="center" w="30%">
          <Heading textTransform="uppercase" fontSize="18px" fontWeight="bold">
            alamat email
          </Heading>
          <Text color="#378694">*</Text>
        </Flex>
        <Text w="70%">{biodata.email}</Text>
      </Flex>
      <Checkbox>Ganti alamat e-mail</Checkbox>
      <Box my="5">
        <Text>
          Disclaimer: kami dapat melakukan pengiriman ke rumah dan Cash on
          Delivery (COD) kecuali pada area tertentu. Order yang tidak bisa di
          layani akan di batalkan secara otomatis.
        </Text>
        <Text textDecor="underline">
          Silahkan klik disini untuk informasi lebih lanjut.
        </Text>
      </Box>
      <Text>
        Jika Anda ingin menggunakan alamat profil sebagai "Alamat Keanggotaan",
        harap lengkapi semua informasi termasuk nama dan nomor telepon Anda.
      </Text>
      <Box>
        <FormControl my="3">
          <Flex align="center">
            <Box w="30%">
              <FormLabel
                textTransform="uppercase"
                fontSize="16px"
                fontWeight="bold"
              >
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
        <FormControl my="3">
          <Flex align="center">
            <Box w="30%">
              <FormLabel
                textTransform="uppercase"
                fontSize="16px"
                fontWeight="bold"
              >
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
        <FormControl my="3">
          <Flex align="center">
            <Box w="30%">
              <FormLabel
                textTransform="uppercase"
                fontSize="16px"
                fontWeight="bold"
              >
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
        <FormControl my="3">
          <Flex align="center">
            <Box w="30%">
              <FormLabel
                textTransform="uppercase"
                fontSize="16px"
                fontWeight="bold"
              >
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
        <FormControl my="3">
          <Flex align="center">
            <Box w="30%">
              <FormLabel
                textTransform="uppercase"
                fontSize="16px"
                fontWeight="bold"
              >
                telepon
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input
                type="text"
                variant="flushed"
                value={biodata.telephone}
                w="60%"
              />
              <FormHelperText fontSize="14px" color="black">
                Mohon untuk tidak memasukkan kode negara (+62) jika nomor
                melebihi 11 digit
              </FormHelperText>
            </Box>
          </Flex>
        </FormControl>
        <FormControl my="3">
          <Flex align="center">
            <Box w="30%">
              <FormLabel
                textTransform="uppercase"
                fontSize="16px"
                fontWeight="bold"
              >
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
              <Input
                type="text"
                variant="flushed"
                value={biodata.phone}
                w="60%"
              />
              <FormHelperText fontSize="14px" color="black">
                Mohon untuk tidak memasukkan kode negara (+62) jika nomor
                melebihi 11 digit
              </FormHelperText>
            </Box>
          </Flex>
        </FormControl>
        <FormControl my="3">
          <Flex align="center">
            <Box w="30%">
              <FormLabel
                textTransform="uppercase"
                fontSize="16px"
                fontWeight="bold"
              >
                tanggal lahir
              </FormLabel>
            </Box>
            <Box w="70%">
              <Input
                type="date"
                variant="flushed"
                value={biodata.dob}
                w="60%"
              />
              <FormHelperText fontSize="14px">
                Tidak dapat mengubah tanggal lahir setelah Anda mendaftar.
              </FormHelperText>
            </Box>
          </Flex>
        </FormControl>
        <FormControl my="3">
          <Flex align="center">
            <Box w="30%">
              <FormLabel
                textTransform="uppercase"
                fontSize="16px"
                fontWeight="bold"
              >
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
      <Text textTransform="uppercase" fontWeight="bold" fontSize="16px" my="3 ">
        KONFIRMASI LANGGANAN
      </Text>
      <Box>
        <Checkbox>Newsletter Uniqlo</Checkbox>
      </Box>
      <Button
        textTransform="uppercase"
        fontWeight="bold"
        mt="5"
        variant="outline"
        bgColor="black"
        color="white"
        borderRadius="0"
        w="30%"
      >
        simpan perubahan
      </Button>
    </>
  );
};

export default EditProfile;
