import { Progress, Chip, Button, Flex, Switch, Text, Group, Image } from '@mantine/core'
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';
import { IconBrandSuperhuman, IconCalendar, IconDoor, IconGlobe, IconHeartHandshake, IconMan, IconMinus, IconPlaneArrival, IconPlaneDeparture, IconPlus, IconPower, IconSearch, IconUser, IconX, } from '@tabler/icons'
import { white } from 'color-name'
import React, { useState } from 'react'

// Cumtom Plans
import CustomPlans from '../../Custom Plans/CustomPlans';

import AirtimeBadge from '../../Badges/Airtime'

// Loyalty Tiers Import
import S_Tier from '../../../assets/Tiers/S Tier.svg'
import P_Tier from '../../../assets/Tiers/P Tier.svg'
import T_Tier from '../../../assets/Tiers/T Tier.svg'

const FindBooking = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Text style={{
                fontSize: "50px",
                marginBottom: "35px",
                fontWeight: "500",
                marginLeft: "50px",
            }}>Find your perfect stay!</Text>
            <Flex mt={50} ml={50}>
                <Flex style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "650px",
                    marginRight: "35px",
                }}>
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
                                        <Text style={{ fontSize: "30px" }}>Arrival</Text>
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
                                        <Flex style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <IconCalendar style={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                                            <DatePickerInput color='dark' placeholder="Pick date" styles={{
                                                input: {
                                                    border: 0,
                                                },

                                            }} />
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
                                        backgroundColor: "#FFFFFF",
                                        color: "#000000",
                                        borderRadius: "5px",
                                        width: "185px",
                                        height: "40px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                        <Flex style={{ marginTop: "auto", marginBottom: "auto" }}>
                                            <IconCalendar style={{ marginRight: "10px", marginTop: "auto", marginBottom: "auto" }} />
                                            <DatePickerInput placeholder="Pick date" styles={{
                                                input: {
                                                    border: 0,
                                                },
                                            }} />
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
                    flexDirection: "column",
                    marginRight: "35px",
                }}>
                    <Flex style={{ display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", paddingBottom: "10px", paddingTop: "8px", }}>
                        <Text style={{ color: "#FFFFFF", fontSize: "30px", }}>Advance Filters</Text>
                    </Flex>
                    <Flex style={{ backgroundColor: "#2C2C2C", width: "460px", height: "245px", borderRadius: "25px", }}>
                        <Flex gap={5} style={{ display: "flex", flexDirection: "column", marginLeft: "auto", marginRight: "auto", marginTop: "10px" }}>
                            <Flex justify={'center'} gap={5}>
                                <Chip color="gray" variant="filled" >Budget</Chip>
                                <Chip color="gray" variant="filled" >Star Rating</Chip>
                                <Chip color="gray" variant="filled" >Property Type</Chip>
                            </Flex>
                            <Flex justify={'center'} gap={5}>
                                <Chip color="gray" variant="filled" >Facilities</Chip>
                                <Chip color="gray" variant="filled" >Meals</Chip>
                                <Chip color="gray" variant="filled" >Chain</Chip>
                                <Chip color="gray" variant="filled" >Bed Setting</Chip>
                            </Flex>
                            <Flex justify={'center'} gap={5}>
                                <Chip color="gray" variant="filled" >City</Chip>
                                <Chip color="gray" variant="filled" >Landmarks</Chip>
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
                <Flex style={{
                    display: "flex",
                    flexDirection: "column",
                }}>

                    <Flex style={{
                        backgroundColor: "#002368",
                        color: "#FFFFFF",
                        width: "300px",
                        height: "165px",
                        borderTopRightRadius: "19.5px",
                        borderTopLeftRadius: "19.5px",
                    }}>
                        <Flex style={{
                            display: "flex",
                            flexDirection: "column",
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}>
                            <Flex style={{ marginTop: "30px", textAlign: "center", }}><Text style={{ fontSize: "35px" }}>Loyalty Status</Text></Flex>
                            <Flex gap={15} style={{ justifyContent: "center", }}>
                                <Image src={S_Tier} width={55} />
                                <Image src={P_Tier} width={55} />
                                <Image src={T_Tier} width={55} />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex style={{
                        backgroundColor: "#00143D",
                        color: "#FFFFFF",
                        width: "300px",
                        height: "145px",
                        borderBottomLeftRadius: "19.5px",
                        borderBottomRightRadius: "19.5px",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Flex style={{
                            display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: "15px",
                        }}>
                            {/* <AirtimeBadge /> */}
                            <Flex style={{
                                width: "137.5px",
                                marginTop: "auto",
                                marginBottom: "auto",
                                marginLeft: "5px",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <Flex style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontSize: "12px", fontWeight: "500" }}>Airtime</Text><Text style={{ fontSize: "12px", }}>1025 Clouds</Text>
                                </Flex>
                                <Progress value={50} />
                            </Flex>
                        </Flex>
                        <Flex style={{
                            width: "117px",
                            height: "40px",
                            textAlign: "center",
                            marginTop: "18px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}><Text style={{ fontSize: "16.5px" }}>120 Clouds Left To Avance!</Text></Flex>
                    </Flex>

                </Flex>
            </Flex>

            <Flex mt={25} ml={50} style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Text style={{
                    fontSize: "47px",
                    fontWeight: "500",
                }}>Custom Plans</Text>
            </Flex>

            <Flex mt={25} ml={50} gap={25}>
                <Flex style={{
                    background: "black",
                    borderRadius: "30px"
                }}>
                    <Text><CustomPlans tourPrice="456,200 PKR" package="Lahore Umrah" noOfPeople="Couple" planName="AMG-UM5445" /></Text>
                </Flex>
                <Flex style={{
                    background: "grey",
                    borderRadius: "30px"
                }}>
                    <Text><CustomPlans tourPrice="1,236,200 PKR" package="Mutan Hajj" noOfPeople="Family of 6" planName="AMG-UM5985" /></Text>
                </Flex>

                <Flex style={{
                    width: 268,
                    height: 363,
                    border: "5px dashed rgba(7, 57, 158, 1)",
                    borderRadius: 29,
                    boxSizing: "border-box"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 85,
                        alignItems: "center",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}>
                        <div style={{
                            background: "#F0F0F0",
                            width: 137,
                            height: 137,
                            borderRadius: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 10
                        }}>
                            <div style={{
                                marginTop: "auto",
                                marginBottom: "auto"
                            }}><IconPlus /></div>
                        </div>
                        <div><Text style={{
                            color: "#000000",
                            fontSize: "26px"
                        }}>Create New Plan</Text></div>
                    </div>
                </Flex>
            </Flex>

        </>
    )
}

export default FindBooking
