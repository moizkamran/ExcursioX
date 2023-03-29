import { Button, Flex, Switch, Text, Group } from '@mantine/core'
import { IconBrandSuperhuman, IconCalendar, IconDoor, IconGlobe, IconHeartHandshake, IconMan, IconMinus, IconPlaneArrival, IconPlaneDeparture, IconPlus, IconPower, IconSearch, IconUser, IconX } from '@tabler/icons'
import { white } from 'color-name'
import React, { useState } from 'react'

const FindBooking = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Flex>
                <Flex style={{ display: "flex", flexDirection: "column", width: "650px", marginRight: "35px", }}>
                    <Flex style={{
                        backgroundColor: "#07399E",
                        width: "650px",
                        height: "310px",
                        color: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",

                        borderRadius: "25px",
                    }}>
                        <Flex style={{
                            marginBottom: "5px",
                            paddingLeft: "32.5px",
                            paddingTop: "15px",
                        }}>
                            <Text style={{ fontSize: "30px" }}>Booking Dates</Text>
                        </Flex>
                        <Flex style={{
                            marginBottom: "25px",
                            paddingLeft: "32.5px",
                        }}>
                            <Flex style={{ marginRight: "25px" }}>
                                <Flex style={{ display: "flex", flexDirection: "column" }}>
                                    <Flex>
                                        <IconGlobe style={{ marginTop: "auto", marginBottom: "auto", marginRight: "8.5px" }} />
                                        <Text style={{ fontSize: "30px" }}>Destination</Text>
                                    </Flex>
                                    <Flex style={{
                                        backgroundColor: "#FFFFFF",
                                        color: "#000000",
                                        borderRadius: "5px",
                                        width: "185px",
                                        height: "40px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                        <Flex style={{ marginTop: "auto", marginBottom: "auto", }}>
                                            <IconCalendar style={{ marginRight: "10px" }} />
                                            <Text style={{ fontSize: "18px" }}>Mecca, KSA</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <Flex style={{ marginBottom: "10px", justifyContent: "center" }}>
                                    <IconUser style={{ marginTop: "auto", marginBottom: "auto", marginRight: "10px" }} />
                                    <Text style={{ fontSize: "20px" }}>Adults</Text>
                                </Flex>
                                <Flex>
                                    <Button onClick={() => (setCount(count - 1))}><IconMinus /></Button>
                                    <Flex style={{
                                        width: "45px",
                                        height: "45px",
                                        borderRadius: "100%",
                                        backgroundColor: "#000000"
                                    }}>
                                        <Text style={{
                                            fontSize: "25px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        }}>{count}</Text>
                                    </Flex>
                                    <Button onClick={() => (setCount(count + 1))}><IconPlus /></Button>
                                </Flex>
                            </Flex>
                            <Flex style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <Flex style={{ marginBottom: "10px", justifyContent: "center" }}>
                                    <IconUser style={{ marginTop: "auto", marginBottom: "auto", marginRight: "10px" }} />
                                    <Text style={{ fontSize: "20px" }}>Children</Text>
                                </Flex>
                                <Flex>
                                    <Button onClick={() => (setCount(count - 1))}><IconMinus /></Button>
                                    <Flex style={{
                                        width: "45px",
                                        height: "45px",
                                        borderRadius: "100%",
                                        backgroundColor: "#000000"
                                    }}>
                                        <Text style={{
                                            fontSize: "25px",
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                        }}>{count}</Text>
                                    </Flex>
                                    <Button onClick={() => (setCount(count + 1))}><IconPlus /></Button>
                                </Flex>

                            </Flex>
                        </Flex>
                        <Flex style={{ paddingLeft: "32.5px", }}>
                            <Flex style={{ marginRight: "25px", marginBottom: "110px" }}>
                                <Flex style={{ display: "flex", flexDirection: "column" }}>
                                    <Flex style={{ justifyContent: "start" }}>
                                        <IconPlaneArrival style={{ marginTop: "auto", marginBottom: "auto", marginRight: "8.5px" }} />
                                        <Text style={{ fontSize: "30px", }}>Arrival</Text>
                                    </Flex>
                                    <Flex style={{
                                        backgroundColor: "#F5E341",
                                        color: "#000000",
                                        borderRadius: "5px",
                                        width: "185px",
                                        height: "40px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                        <Flex style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <IconCalendar style={{ marginRight: "10px" }} />
                                            <Text style={{ fontSize: "18px" }}>Fri, Aug 28</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>

                            <Flex style={{ marginRight: "25px" }}>
                                <Flex style={{ display: "flex", flexDirection: "column" }}>
                                    <Flex style={{ justifyContent: "start" }}>
                                        <IconPlaneDeparture style={{ marginTop: "auto", marginBottom: "auto", marginRight: "8.5px" }} />
                                        <Text style={{ fontSize: "30px", }}>Departure</Text>
                                    </Flex>
                                    <Flex style={{
                                        backgroundColor: "#F5E341",
                                        color: "#000000",
                                        borderRadius: "5px",
                                        width: "185px",
                                        height: "40px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                        <Flex style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <IconCalendar style={{ marginRight: "10px" }} />
                                            <Text style={{ fontSize: "18px" }}>Mon, Aug 31</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>

                            <Flex>
                                <Flex style={{ display: "flex", flexDirection: "column" }}>
                                    <Flex style={{ justifyContent: "start" }}>
                                        <IconDoor style={{ marginTop: "auto", marginBottom: "auto", marginRight: "8.5px" }} />
                                        <Text style={{ fontSize: "30px", }}>Rooms</Text>
                                    </Flex>
                                    <Flex style={{
                                        backgroundColor: "#FFFFFF",
                                        color: "#000000",
                                        borderRadius: "5px",
                                        width: "140px",
                                        height: "40px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                        <Flex style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <Text style={{ fontSize: "18px" }}>One</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex style={{
                        backgroundColor: "#D9D9D9",
                        width: "560px",
                        height: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderBottomLeftRadius: "8px",
                        borderBottomRightRadius: "8px",
                    }}>
                        <IconSearch style={{ marginRight: "25px", }} />
                        <Text>Or simply search by name, chain, location or city</Text>
                    </Flex>
                </Flex>

                <Flex style={{
                    backgroundColor: "#000000",
                    width: "460px",
                    height: "310px",
                    borderRadius: "25px",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Flex style={{ display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", paddingBottom: "10px", paddingTop: "8px", }}>
                        <Text style={{ color: "#FFFFFF", fontSize: "30px", }}>Advance Filters</Text>
                    </Flex>
                    <Flex style={{ backgroundColor: "#2C2C2C", width: "460px", height: "245px", borderRadius: "25px", }}>
                        <Flex style={{ display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", marginTop: "10px" }}>
                            <Flex style={{ justifyContent: "center", }}>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>Budget</Button>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>Star Rating</Button>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>Property Type</Button>
                            </Flex>
                            <Flex style={{ justifyContent: "center", }}>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>Facilities</Button>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>Meals</Button>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>Chain</Button>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>Bed Setting</Button>
                            </Flex>
                            <Flex style={{ justifyContent: "center", }}>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>City</Button>
                                <Button color="gray" radius="xl" style={{ margin: "2.5px" }}>Landmarks</Button>
                            </Flex>

                            <Flex style={{ color: "#FFFFFF", display: "flex", flexDirection: "column", marginTop: "25px" }}>
                                <Flex style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "10px" }}>
                                    <Flex>
                                        <Switch color="gray" style={{ marginRight: "8px", marginLeft: "12px" }} />
                                        <Text style={{ fontSize: "15px" }}>Health & Safety</Text>
                                    </Flex>
                                    <Flex>
                                        <Switch color="gray" style={{ marginRight: "8px", marginLeft: "12px" }} />
                                        <Text style={{ fontSize: "15px" }}>Deals</Text>
                                    </Flex>
                                    <Flex>
                                        <Switch color="gray" style={{ marginRight: "8px", marginLeft: "12px" }} />
                                        <Text style={{ fontSize: "15px" }}>Beach</Text>
                                    </Flex>
                                </Flex>
                                <Flex style={{ display: "flex", flexDirection: "row", justifyContent: "center", }}>
                                    <Flex>
                                        <Switch color="gray" style={{ marginRight: "8px", marginLeft: "12px" }} />
                                        <Text style={{ fontSize: "15px" }}>Travel Sustainable</Text>
                                    </Flex>
                                    <Flex>
                                        <Switch color="gray" style={{ marginRight: "8px", marginLeft: "12px" }} />
                                        <Text style={{ fontSize: "15px" }}>Free Cancellation</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default FindBooking
