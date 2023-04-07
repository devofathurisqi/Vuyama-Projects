import React from 'react'
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'


const TermAndCondition = () => {
    const [isMobile] = useMediaQuery('(max-width: 481px)');
    return (
        <Box>
            {isMobile !== true ? (
                <Box>
                    <Navbar />
                    <Box width="100%" height="max-content" marginTop="30px">
                        <Flex>
                            <Flex flexDirection="column" width="50%" gap="5px" paddingLeft="150px">
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Tnc of Sale</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Return Policy</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Refund Times & Procedure</Text>
                                <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Courier</Text>
                            </Flex>
                            <Flex flexDirection="column" width="50%" gap="30px">
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Tnc of Sale</Text>
                                    <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                        Terms of sale items cannot be returned. Please do payment within 24 hours.
                                    </Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Return Policy</Text>
                                    <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                        We accept returns if there is torn material, defects in the seams, and the delivery of the
                                        goods is not as requested. Please process the returns within 7 working days of receiving the
                                        item.
                                    </Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Refund Times & Procedure</Text>
                                    <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                        100% money guaranteed if our materials are bad or don’t match your expectations as a
                                        buyer
                                    </Text>
                                </Box>
                                <Box paddingRight="160px">
                                    <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Courier</Text>
                                    <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                        We usually use Lion Parcel and ID Express as the courier of choice because they are the
                                        cheapest ones.
                                    </Text>
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
                        <Text fontWeight="bold" fontFamily="archivo" fontSize="20px" letterSpacing="0.1em" fontStyle="normal">Term & Condition</Text>
                        <Flex gap="20px" flexDirection="column" marginTop="30px">
                            <Box>
                                <Text fontFamily="archivo" fontWeight="700" fontSize="18px" lineHeight="15px" textDecorationLine="underline" letterSpacing="0.1em">Tnc of Sale</Text>
                                <Text fontStyle="archivo" fontWeight="300" fontSize="14px" lineHeight="16px" letterSpacing="0.05em" marginTop="10px">
                                    Terms of sale items cannot be returned. Please do payment within 24 hours.
                                </Text>
                            </Box>
                            <Box>
                                <Text fontFamily="archivo" fontWeight="700" fontSize="18px" lineHeight="15px" textDecorationLine="underline" letterSpacing="0.1em">Return Policy</Text>
                                <Text fontStyle="archivo" fontWeight="300" fontSize="14px" lineHeight="16px" letterSpacing="0.05em" marginTop="10px">
                                    We accept returns if there is torn material, defects in the seams, and the delivery of the
                                    goods is not as requested. Please process the returns within 7 working days of receiving the
                                    item.
                                </Text>
                            </Box>
                            <Box>
                                <Text fontFamily="archivo" fontWeight="700" fontSize="18px" lineHeight="15px" textDecorationLine="underline" letterSpacing="0.1em">Refund Times & Procedure</Text>
                                <Text fontStyle="archivo" fontWeight="300" fontSize="14px" lineHeight="16px" letterSpacing="0.05em" marginTop="10px">
                                    100% money guaranteed if our materials are bad or don’t match your expectations as a
                                    buyer
                                </Text>
                            </Box>
                            <Box>
                                <Text fontFamily="archivo" fontWeight="700" fontSize="18px" lineHeight="15px" textDecorationLine="underline" letterSpacing="0.1em">Courier</Text>
                                <Text fontStyle="archivo" fontWeight="300" fontSize="14px" lineHeight="16px" letterSpacing="0.05em" marginTop="10px">
                                    We usually use Lion Parcel and ID Express as the courier of choice because they are the
                                    cheapest ones.
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

export default TermAndCondition
