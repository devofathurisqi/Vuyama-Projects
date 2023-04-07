import React from 'react'
import { Box, Flex, Text, List, ListItem, ListIcon, useMediaQuery } from "@chakra-ui/react"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { AiOutlineCheck } from "react-icons/ai"

const FAQ = () => {
    const [isMobile] = useMediaQuery('(max-width: 481px)');
    return (
        <Box>
            {isMobile !== true ? (
                <Box>
                    <Navbar />
                    <Box width="100%" height="max-content" marginTop="30px">
                        <Flex>
                            <Flex flexDirection="column" width="50%" gap="5px" paddingLeft="150px">
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Bahan hijab motifnya apa kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Pengiriman dari mana kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Ukuran hijabnya berapa kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Apakah dihijab dan mukenanya ada label kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Bisa pasang brand kami sendiri kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Ada penambahan biaya untuk pemasangan label kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Bagaimana cara ordernya kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Reseller minimal beli berapa pcs kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Pinggirannya jahitan biasa ya kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Apakah bisa dropship kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Apakah bisa order via shopee atau tiktokshop kak?</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Untuk 1kg muat berapa pcs ya kak?</Text>
                            </Flex>
                            <Flex flexDirection="column" width="50%" gap="30px">
                                <Box paddingRight="160px" id='reseller'>
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Bahan hijab motifnya apa kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Material yang Vuyama gunakan untuk hijab motif kami ialah Voal Sublime
                                        dengan beberapa keunggulan sebagai berikut:</Text>
                                    <List spacing={3} marginTop="10px">
                                        <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                            <ListIcon as={AiOutlineCheck} />
                                            Voal terbaik di kelasnya
                                        </ListItem>
                                        <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                            <ListIcon as={AiOutlineCheck} />
                                            Lebih halus dan lebih lembut
                                        </ListItem>
                                        <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                            <ListIcon as={AiOutlineCheck} />
                                            Lebih mudah dibentuk meskipun tidak disetrika
                                        </ListItem>
                                        {/* You can also use custom icons from react-icons */}
                                        <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                            <ListIcon as={AiOutlineCheck} />
                                            Tidak mudah kusut
                                        </ListItem>
                                        <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                            <ListIcon as={AiOutlineCheck} />
                                            Tidak bikin budeg
                                        </ListItem>
                                        <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                            <ListIcon as={AiOutlineCheck} />
                                            Tidak luntur
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Pengiriman dari mana kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Pengiriman dari Gudang Vuyama yang terletak di Cibinong, Bogor, JawaBarat</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Ukuran hijabnya berapa kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Kami menyediakan 2 ukuran hijab, yakni standar dengan 115x115cm danjumbo 130x130cm</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Apakah dihijab dan mukenanya ada label kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Produk Vuyama tidak menggunakan label, baik hijab dan mukena</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Bisa pasang brand kami sendiri kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Bisa dong! Dengan minimum order Rp. 1.000.000,- ya vuyamababes.</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Ada penambahan biaya untuk pemasangan label kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Apabila label tersebut memerlukan jahitan tanpa seperti label logam, maka
                                        akan dikenakan biaya pemasangan Rp. 1.000,-/pcs baik untuk hijab dan
                                        mukena. Namun, apabila label yang digunakan hanya roll paper maka tidak
                                        akan dikenakan biaya tambahan.</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Bagaimana cara ordernya kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Untuk order ecer, grosir dan partai bisa hubungi Vumin di WA +62 821-
                                        1329-4501</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Reseller minimal beli berapa pcs kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Untuk mendapatkan harga reseller, minimal order hanya 10 pcs loh! Kalaumukena hanya 3 pcs</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Pinggirannya jahitan biasa ya kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Finishing jahitan Hijab Vuyama ialah laser cut sekeliling</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Apakah bisa dropship kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Bisa! Pada saat melakukan pemesanan harap sertakan nama dan alamat
                                        penerima dan sertakan juga nama dan nomor handphone kamu ya,
                                        vuyamababes!</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Apakah bisa order via shopee atau tiktokshop kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Bisa dong! Vuyamababes bisa search Vuyama baik di Shopee maupun
                                        Tiktokshop.</Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Untuk 1kg muat berapa pcs ya kak?</Text>
                                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Untuk hijab ukuran standar muat hingga 12 pcs, sedangkan jumbo hanya 10
                                        pcs dan mukena hanya 2-3 pcs tergantung material yang digunakan pada
                                        mukena Vuyama.</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Footer />
                </Box>
            ) : (
                <Box>
                    <Navbar />
                    <Box width="100%" height="max-content" marginTop="20px" padding="0px 20px">
                        <Text fontFamily="archivo" fontWeight="bold" fontSize="22px" letterSpacing="0.1em">FAQ</Text>
                        <Flex flexDirection="column" gap="10px" marginTop="20px">
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Bahan hijab motifnya apa kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">Material yang Vuyama gunakan untuk hijab motif kami ialah Voal Sublime
                                    dengan beberapa keunggulan sebagai berikut:</Text>
                                <List spacing={3} marginTop="10px">
                                    <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                        <ListIcon as={AiOutlineCheck} />
                                        Voal terbaik di kelasnya
                                    </ListItem>
                                    <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                        <ListIcon as={AiOutlineCheck} />
                                        Lebih halus dan lebih lembut
                                    </ListItem>
                                    <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                        <ListIcon as={AiOutlineCheck} />
                                        Lebih mudah dibentuk meskipun tidak disetrika
                                    </ListItem>
                                    {/* You can also use custom icons from react-icons */}
                                    <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                        <ListIcon as={AiOutlineCheck} />
                                        Tidak mudah kusut
                                    </ListItem>
                                    <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                        <ListIcon as={AiOutlineCheck} />
                                        Tidak bikin budeg
                                    </ListItem>
                                    <ListItem fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">
                                        <ListIcon as={AiOutlineCheck} />
                                        Tidak luntur
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Pengiriman dari mana kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Pengiriman dari Gudang Vuyama yang terletak di Cibinong, Bogor, Jawa
                                    Barat
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Ukuran hijabnya berapa kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Kami menyediakan 2 ukuran hijab, yakni standar dengan 115x115cm dan
                                    jumbo 130x130cm
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Apakah dihijab dan mukenanya ada label kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Produk Vuyama tidak menggunakan label, baik hijab dan mukena
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Bisa pasang brand kami sendiri kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Bisa dong! Dengan minimum order Rp. 1.000.000,- ya vuyamababes.
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Ada penambahan biaya untuk pemasangan label kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Apabila label tersebut memerlukan jahitan tanpa seperti label logam, maka
                                    akan dikenakan biaya pemasangan Rp. 1.000,-/pcs baik untuk hijab dan
                                    mukena. Namun, apabila label yang digunakan hanya roll paper maka tidak
                                    akan dikenakan biaya tambahan.
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Bagaimana cara ordernya kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Untuk order ecer, grosir dan partai bisa hubungi Vumin di WA +62 821-
                                    1329-4501
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Reseller minimal beli berapa pcs kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Untuk mendapatkan harga reseller, minimal order hanya 10 pcs loh! Kalau
                                    mukena hanya 3 pcs
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Pinggirannya jahitan biasa ya kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Finishing jahitan Hijab Vuyama ialah laser cut sekeliling
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Apakah bisa dropship kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Bisa! Pada saat melakukan pemesanan harap sertakan nama dan alamat
                                    penerima dan sertakan juga nama dan nomor handphone kamu ya,
                                    vuyamababes!
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Apakah bisa order via shopee atau tiktokshop kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Bisa dong! Vuyamababes bisa search Vuyama baik di Shopee maupun
                                    Tiktokshop.
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" fontSize="16px" letterSpacing="0.1em" textDecorationLine="underline" fontStyle="normal">Untuk 1kg muat berapa pcs ya kak?</Text>
                                <Text marginTop="10px" fontWeight="700" fontSize="14px" lineHeight="15px" letterSpacing="0.05em" fontFamily="archivo">
                                    Untuk hijab ukuran standar muat hingga 12 pcs, sedangkan jumbo hanya 10
                                    pcs dan mukena hanya 2-3 pcs tergantung material yang digunakan pada
                                    mukena Vuyama.
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Footer />
                </Box>
            )}
        </Box>
    )
}

export default FAQ
