import React from 'react'
import { Box, Flex, Text, OrderedList, ListItem, Image, useMediaQuery, UnorderedList } from "@chakra-ui/react"

//import Component
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

import logoWa from "../Asset/logo-wa.png"
import bgImage from "../Asset/bg-reseller.png"
import { Link } from 'react-router-dom'

const Reseller = () => {
    const [isMobile] = useMediaQuery('(max-width: 481px)');
    return (
        <Box>
            <Navbar />
            {isMobile !== true ? (
                <Box width="100%" height="max-content" marginTop="30px">
                    <Flex>
                        <Flex flex="1">
                            <Flex flexDirection="column" gap="30px">
                                <Box marginLeft="17%" width="70%">
                                    <Text fontWeight="700" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em" fontStyle="normal">Kenapa VUYAMA?</Text>
                                    <UnorderedList>
                                        <ListItem fontWeight="700" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em" fontStyle="normal" marginTop="20px">FLEKSIBEL</ListItem>
                                        <Text fontWeight="300" fontSize="14px" lineHeight="22px" >Sampaikan kebutuhanmu dan akan kami carikan solusinya!</Text>
                                        <ListItem fontWeight="700" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em" fontStyle="normal" marginTop="10px">QUALITY GUARANTEED</ListItem>
                                        <Text fontWeight="300" fontSize="14px" lineHeight="22px">100% jaminan uang kembali apabila bahan yang kamu terima jelek</Text>
                                        <ListItem fontWeight="700" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em" fontStyle="normal" marginTop="10px">1 STOP SOLUTION</ListItem>
                                        <Text fontWeight="300" fontSize="14px" lineHeight="22px">Vuyama memberikan kemudahan dengan menyediakan berbagai macam kerudung dan
                                            menerima pemasangan label brand kamu sendiri loh!</Text>
                                    </UnorderedList>
                                </Box>
                                <Box marginLeft="17%" width="70%">
                                    <Text fontWeight="700" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em" fontStyle="normal">Apa keuntungan mengikuti program reseller?</Text>
                                    <OrderedList marginTop="40px">
                                        <ListItem>
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Reseller Vuyama ialah prioritas kami
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Bisa dimulai dari modal kecil loh!
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Bergabung menjadi reseller Vuyama tidak dipungut biaya apapun dan tanpa syarat apapun
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Hijab Vuyama tidak mengenakan label dan diperbolehkan untuk mengenakan brand kamu sendiri
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Bahan yang Vuyama gunakan berbeda dari yang lain. Lebih lembut dan mudah dibentuk dan
                                                menampilkan kesan premium, sehingga kamu dapat menaikkan harga lebih dari 2x lipat
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Tersedia ratusan motif yang setiap hari selalu diperbarui sehingga kamu tidak perlu takut
                                                jualan kamu tidak laku
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Produk kami hanya 1x produksi sehingga dijamin motif kami tidak pasaran
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Kamu bisa mendapatkan foto kualitas tinggi tanpa watermark
                                            </Text>
                                        </ListItem>
                                    </OrderedList>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex flex="1" position="relative">
                            <Flex flexDirection="column">
                                <Link to="https://linktr.ee/vuyama.id">
                                    <Box width="394px" height="80px" bg="#128C7E" position="absolute" top="10%" left="50%" transform="translate(-50%, -50%)" borderRadius="15px" cursor="pointer">
                                        <Flex justifyContent="center" alignItems="center" gap="20px" marginTop="21px">
                                            <Image src={logoWa} width="35px" objectFit="cover" />
                                            <Text color="white" fontWeight="600" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em">Join Reseller Group</Text>
                                        </Flex>
                                    </Box>
                                </Link>
                                <Box width="100%" position="absolute" top="23%" left="50%" transform="translate(-50%, -50%)">
                                    <Text fontWeight="600" fontSize="22px" textAlign="center">Ikut program reseller kami</Text>
                                    <Text fontWeight="600" fontSize="22px" textAlign="center">untuk mendapatkan berbagai keuntungan!</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            ) : (
                <Box width="100%">
                    <Box width="100%" height="254px" position="relative" >
                        <Image src={bgImage} width="100%" objectFit="cover" />
                        <Text color="black" fontWeight="500" lineHeight="22px" fontSize="12px"
                            fontStyle="normal" letterSpacing="0.05em" position="absolute" top="40%" left="50%" transform="translate(-50%, -50%)" textAlign="center">Ikut Program Reseller Kami</Text>
                        <Text color="black" fontWeight="500" lineHeight="22px" fontSize="12px"
                            fontStyle="normal" letterSpacing="0.05em" position="absolute" top="52%" left="50%" transform="translate(-50%, -50%)" textAlign="center">untuk mendapatkan berbagai keuntungan!</Text>
                        <Link to="https://linktr.ee/vuyama.id">
                            <Box position="absolute" top="82%" left="50%" transform="translate(-50%, -50%)" bg="#128C7E" width="220px" height="44px" borderRadius="15px" cursor="pointer">
                                <Flex justifyContent="center" alignItems="center" gap="15px" paddingTop="9px">
                                    <Image src={logoWa} />
                                    <Text color="white" fontWeight="600" fontSize="13px" lineHeight="14px" fontStyle="normal" letterSpacing="0.1em">Join Reseller Group</Text>
                                </Flex>
                            </Box>
                        </Link>
                    </Box>
                    <Box padding="0px 25px">
                        <Text fontWeight="500" fontSize="16px" lineHeight="17px" letterSpacing="0.1em" fontStyle="normal" marginTop="80px" textAlign="center">Kenapa Vuyama?</Text>
                        <UnorderedList>
                            <ListItem fontWeight="500" fontSize="16px" lineHeight="17px" letterSpacing="0.1em" fontStyle="normal" marginTop="40px">FLEKSIBEL</ListItem>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" >Sampaikan kebutuhanmu dan akan kami carikan solusinya!</Text>
                            <ListItem fontWeight="500" fontSize="16px" lineHeight="17px" letterSpacing="0.1em" fontStyle="normal" marginTop="5px">QUALITY GUARANTEED</ListItem>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">100% jaminan uang kembali apabila bahan yang kamu terima jelek</Text>
                            <ListItem fontWeight="500" fontSize="16px" lineHeight="17px" letterSpacing="0.1em" fontStyle="normal" marginTop="5px">1 STOP SOLUTION</ListItem>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">Vuyama memberikan kemudahan dengan menyediakan berbagai macam kerudung dan
                                menerima pemasangan label brand kamu sendiri loh!</Text>
                        </UnorderedList>
                    </Box>
                    <Box padding="0px 25px">
                        <Text fontWeight="500" fontSize="16px" lineHeight="17px" letterSpacing="0.1em" fontStyle="normal" marginTop="80px" textAlign="center">Apa keuntungan mengikuti program reseller?</Text>
                        <OrderedList marginTop="40px">
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Reseller Vuyama ialah prioritas kami
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Bisa dimulai dari modal kecil loh!
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Bergabung menjadi reseller Vuyama tidak dipungut biaya apapun dan tanpa syarat apapun
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Hijab Vuyama tidak mengenakan label dan diperbolehkan untuk mengenakan brand kamu
                                    sendiri
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Bahan yang Vuyama gunakan berbeda dari yang lain. Lebih lembut dan mudah dibentuk dan
                                    menampilkan kesan premium, sehingga kamu dapat menaikkan harga lebih dari 2x lipat
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Tersedia ratusan motif yang setiap hari selalu diperbarui sehingga kamu tidak perlu takut
                                    jualan kamu tidak laku
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Produk kami hanya 1x produksi sehingga dijamin motif kami tidak pasaran
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    TKamu bisa mendapatkan foto kualitas tinggi tanpa watermark
                                </Text>
                            </ListItem>
                        </OrderedList>
                    </Box>
                </Box>
            )}
            <Footer />
        </Box>
    )
}

export default Reseller
