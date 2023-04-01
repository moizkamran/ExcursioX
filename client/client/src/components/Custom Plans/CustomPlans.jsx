import { IconPlane, IconBed, IconEPassport, IconBus, IconUser, IconStar } from '@tabler/icons'
import React from 'react'

export const CustomPlans = (props) => {
    return (
        <>
            <div
                style={{
                    width: 268,
                    height: 363,
                    borderRadius: 30,
                    color: "#FFFFFF",
                }}
            >
                <div style={{ textAlign: "center", paddingTop: 15 }}>
                    <div>
                        <span style={{ fontSize: 24 }}>{props.tourPrice}</span>
                    </div>
                    <div
                        style={{
                            backgroundColor: "#07399E",
                            width: 105,
                            height: "12.5px",
                            borderRadius: "41.5px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <span style={{ fontSize: "8.2px" }}>VAT included</span>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 85,
                        marginLeft: "22.5px",

                    }}
                >
                    <div>
                        <div>
                            <span style={{ fontSize: "28.95px" }}>{props.city} Umrah</span>
                        </div>
                        <div>
                            <div style={{ display: "flex" }}>
                                <div style={{ marginRight: 7 }}>
                                    <span style={{ fontSize: "13.75px" }}>Plan Name</span>
                                </div>
                                <div>
                                    <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                                        {props.planName}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "13.5px" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ marginRight: 8 }}>
                                <IconUser />
                            </div>
                            <div>
                                <span style={{ fontSize: 11 }}>{props.noOfPeople}</span>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ marginRight: 8 }}>
                                <IconBed />
                            </div>
                            <div style={{ marginRight: 8 }}>
                                <span style={{ fontSize: 11 }}>{props.nights}</span>
                            </div>
                            <div style={{ display: "flex" }}>
                                <IconStar /><IconStar /><IconStar />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <div>
                            <div>
                                <span style={{ fontSize: "11.2px" }}>Includes</span>
                            </div>
                            <div style={{ display: "flex", marginTop: 4 }}>
                                <div style={{ marginRight: 10 }}>
                                    <div
                                        style={{
                                            background:
                                                "linear-gradient(180deg, #1E4FFF 0%, rgba(0, 29, 130, 0.97) 100%)",
                                            width: "35.85px",
                                            height: "35.85px",
                                            borderRadius: "100%"
                                        }}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <IconPlane style={{
                                                transform: "rotate(270deg)",
                                                marginTop: "5px"
                                            }} />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            backgroundColor: "#05FF00",
                                            width: "19.35px",
                                            height: "4.15px",
                                            borderRadius: "62.15px",
                                            marginLeft: 9,
                                            marginTop: 6
                                        }}
                                    />
                                </div>
                                <div style={{ marginRight: 10 }}>
                                    <div
                                        style={{
                                            background: "linear-gradient(180deg, #FF9E0D 0%, #895200 100%)",
                                            width: "35.85px",
                                            height: "35.85px",
                                            borderRadius: "100%"
                                        }}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <IconBed style={{
                                                marginTop: "5px"
                                            }} />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            backgroundColor: "#05FF00",
                                            width: "19.35px",
                                            height: "4.15px",
                                            borderRadius: "62.15px",
                                            marginLeft: 9,
                                            marginTop: 6
                                        }}
                                    />
                                </div>
                                <div style={{ marginRight: 10 }}>
                                    <div
                                        style={{
                                            background:
                                                "linear-gradient(180deg, #07DF10 0%, rgba(1, 98, 5, 0.9) 100%)",
                                            width: "35.85px",
                                            height: "35.85px",
                                            borderRadius: "100%"
                                        }}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <IconEPassport style={{
                                                marginTop: "5px"
                                            }} />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            backgroundColor: "#FAFF09",
                                            width: "19.35px",
                                            height: "4.15px",
                                            borderRadius: "62.15px",
                                            marginLeft: 9,
                                            marginTop: 6
                                        }}
                                    />
                                </div>
                                <div style={{ marginRight: 10 }}>
                                    <div
                                        style={{
                                            background:
                                                "linear-gradient(180deg, #D21EFF 0%, rgba(92, 43, 104, 0.96) 100%)",
                                            width: "35.85px",
                                            height: "35.85px",
                                            borderRadius: "100%"
                                        }}
                                    >
                                        <div style={{ textAlign: "center" }}>
                                            <IconBus style={{
                                                marginTop: "5px"
                                            }} />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            backgroundColor: "#05FF00",
                                            width: "19.35px",
                                            height: "4.15px",
                                            borderRadius: "62.15px",
                                            marginLeft: 9,
                                            marginTop: 6
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CustomPlans
