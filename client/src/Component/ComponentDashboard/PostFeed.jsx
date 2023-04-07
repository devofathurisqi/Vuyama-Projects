import React, { useEffect, useState } from 'react'
import {
    Box, Flex, FormControl, Input, FormHelperText,
    FormLabel, Text, Button, useToast, TableContainer, Table, TableCaption,
    Thead, Tr, Th, Tbody, Td
} from "@chakra-ui/react"
import axios from "axios"
import { Link } from "react-router-dom"

const PostFeed = () => {
    const [feed, setFeed] = useState(null)
    const [link, setLink] = useState("")
    const [msg, setMsg] = useState("")
    const [data, setData] = useState([])
    console.log(data)
    const toast = useToast()

    const handlePictureChange = (e) => {
        setFeed(e.target.files[0]);
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData()
            formData.append('file', feed)
            formData.append('link', link)

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            await axios.post("http://localhost:2000/instagram/postFeed", formData, config)
            setMsg("")
            toast({
                title: 'Post Product success.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
            if (err.response) {
                setMsg(err.response.data)
            }
        }
    }

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:2000/instagram/getProduct")
            setData(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteProductInstagram = async (item) => {
        try {
            await axios.delete(`http://localhost:2000/instagram/deleteInstagram/${item.id}`)
            toast({
                title: 'Delete Product success.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            getData()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Box>
            <Box width="350px" margin="auto" height="400px" marginTop="10px" padding="10px" border="1px solid black" borderRadius="10px">
                <Text textAlign="center">Post Instagram kamu disini!</Text>
                <FormControl marginTop="20px">
                    <FormLabel>Post Your Feed</FormLabel>
                    <Input type='file' onChange={handlePictureChange} />
                    <FormHelperText>We will share your feed on landing page</FormHelperText>
                </FormControl>
                <FormControl marginTop="20px">
                    <FormLabel>Your Link Feed</FormLabel>
                    <Input type='text' onChange={(e) => setLink(e.target.value)} />
                    <FormHelperText>So that users can go to product details from your feed</FormHelperText>
                </FormControl>
                <Flex justifyContent="center" alignItems="center" marginTop="30px">
                    <Button width="200px" variant="outline" colorScheme="facebook" onClick={handleSubmit}>Post!</Button>
                </Flex>
                <Text marginTop="10px" color="red.400" textAlign="center">{msg}</Text>
            </Box>
            <Box marginTop="10px">
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>Hapus Product Instagram Yang Sudah Tidak Di Tampilkan Di Landing Page!</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Link</Th>
                                <Th isNumeric>Settings</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item, index) => (
                                <Tr>
                                    <Td>{index + 1}</Td>
                                    <Td>
                                        <Link to={item.link}>
                                            <Text textDecorationLine="underline" color="blue">
                                                {item.link}
                                            </Text>
                                        </Link>
                                    </Td>
                                    <Td isNumeric>
                                        <Button colorScheme="red" onClick={() => deleteProductInstagram(item)}>
                                            Delete!
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default PostFeed
