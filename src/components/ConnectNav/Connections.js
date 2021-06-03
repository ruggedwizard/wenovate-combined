import React, { useState } from 'react'
import { Flex, Text, Button, Spacer } from '@chakra-ui/react'


const Connections = () => {
    const [member, setMember] = useState(false)
    return (
        <div className='col-md-2'>
            {member ? (
                <div className="connect_cards">
            
       
                <Flex className="connect_card" flexDirection="column" borderLeft="1px solid #ddd" borderTop="1px solid #ddd" boxShadow="5px 5px 2px #ddd" h={220} w={250} p={20}>
                    <Flex fontSize={20}>
                        <Text fontWeight="bold" color="#070941">Sale</Text>
                        <Spacer />
                        <Text color="red">00</Text>
                    </Flex>
                        <Spacer />
                    <Text>When you male sales, you can keep track pf then by clicking this card</Text>
                        <Spacer />
                    <Button w={130} p={6} color="#fff" bg="#070941">Start</Button>
                </Flex>
                <Flex className="connect_card" flexDirection="column" borderLeft="1px solid #ddd" borderTop="1px solid #ddd" boxShadow="5px 5px 2px #ddd" h={220} w={250} p={20}>
                    <Flex fontSize={20}>
                        <Text fontWeight="bold" color="#070941">Discussions</Text>
                        <Spacer />
                        <Text color="#68F195">99+</Text>
                    </Flex>
                        <Spacer />
                    <Text>When you male sales, you can keep track pf then by clicking this card</Text>
                        <Spacer />
                    <Button w={130} p={6} color="#fff" bg="#070941">Learn</Button>
                </Flex>
                <Flex className="connect_card" flexDirection="column" borderLeft="1px solid #ddd" borderTop="1px solid #ddd" boxShadow="5px 5px 2px #ddd" h={220} w={250} p={20}>
                    <Flex fontSize={20}>
                        <Text fontWeight="bold" color="#070941">Sale</Text>
                        <Spacer />
                        <Text color="#68F195">99+</Text>
                    </Flex>
                        <Spacer />
                    <Text>When you male sales, you can keep track pf then by clicking this card</Text>
                        <Spacer />
                    <Button w={130} p={6} color="#fff" bg="#070941">Start</Button>
                </Flex>
                <Flex className="connect_card" flexDirection="column" borderLeft="1px solid #ddd" borderTop="1px solid #ddd" boxShadow="5px 5px 2px #ddd" h={220} w={250} p={20}>
                    <Flex fontSize={20}>
                        <Text fontWeight="bold" color="#070941">Sale</Text>
                        <Spacer />
                        <Text color="#68F195">99+</Text>
                    </Flex>
                        <Spacer />
                    <Text>When you male sales, you can keep track pf then by clicking this card</Text>
                        <Spacer />
                    <Button w={130} p={6} color="#fff" bg="#070941">Start</Button>
                </Flex>
                <Flex className="connect_card" flexDirection="column" borderLeft="1px solid #ddd" borderTop="1px solid #ddd" boxShadow="5px 5px 2px #ddd" h={220} w={250} p={20}>
                    <Flex fontSize={20}>
                        <Text fontWeight="bold" color="#070941">Sale</Text>
                        <Spacer />
                        <Text color="#68F195">99+</Text>
                    </Flex>
                        <Spacer />
                    <Text>When you male sales, you can keep track pf then by clicking this card</Text>
                        <Spacer />
                    <Button w={130} p={6} color="#fff" bg="#070941">Start</Button>
                </Flex>
                <Flex className="connect_card" flexDirection="column" borderLeft="1px solid #ddd" borderTop="1px solid #ddd" boxShadow="5px 5px 2px #ddd" h={220} w={250} p={20}>
                    <Flex fontSize={20}>
                        <Text fontWeight="bold" color="#070941">Sale</Text>
                        <Spacer />
                        <Text color="#68F195">99+</Text>
                    </Flex>
                        <Spacer />
                    <Text>When you male sales, you can keep track pf then by clicking this card</Text>
                        <Spacer />
                    <Button w={130} p={6} color="#fff" bg="#070941">Start</Button>
                </Flex>
        
                </div>
            ) : (
                <Flex h={500} flexDirection="column" justifyContent="center" alignItems="center">
                <Text textAlign="center" color="#070941" fontSize={18}> Connections keep track of <br/>
                people or business you have interacted <br/>
                with in the past or currently interacting with.</Text>
                <span style={{color:"#070941",fontSize:"18px", fontWeight:"bold", margin:"10px 0"}}>You don't have any connections yet.</span> 
                <Button onClick={() => setMember(!member)} bg="#68F195" w={250} color="#070941" p={10} fontSize={20} fontWeight="bold">How do I connect?</Button>
            </Flex>
            )}
        </div>
    )
}

export default Connections
