import { Checkbox, Flex, ScrollArea, Switch, Text, Title } from '@mantine/core'
import { IconBrandMastercard, IconCards, IconDoorEnter, IconWallet } from '@tabler/icons'
import React, { useState } from 'react'
import CustomCard from '../../widgets/CustomCard/CustomCard'

// ICONS IMPORT FOR PAYMENT METHODS
import MastercardIcon from '../../../../../assets/payments/Mastercard.svg'
import VisaIcon from '../../../../../assets/payments/Visa.svg'

export const PropertyPayments = () => {

    const [creditCards, setCreditCards] = useState(false);
    const [bindingWallet, setBindingWallet] = useState(false);
    const [agreement, setAgreement] = useState(false);

    console.log(bindingWallet)
  return (
    <>
    <Flex p={20} gap={50}>
        <Flex direction={'column'} gap={20} w={'600px'}>
            {/* Payment Methods */}
            <Flex direction={'column'} gap={10}>
                <Title>Credits</Title>
                    <Flex justify={'space-between'}>
                        <Text>Do you accept Credit/Debit cards at your property?</Text>
                        <div style={{flex: 1}}></div>
                        <Switch value='yes' onChange={() => setCreditCards(!creditCards)}/>
                    </Flex>
            
            {creditCards && (
                <Flex className="animate-text">
            <CustomCard heading="Payment Methods" icon={<IconCards color='white'/>}>
                <Flex gap={30}>
                    <Flex direction={'column'} gap={12} justify={'space-between'}>
                        <Flex gap={10}  align={'center'}> <img src={MastercardIcon} /> <Text>Mastercard</Text> <div style={{flex: 1}}></div> <Switch size={'xs'} justify={'flex-end'}/></Flex>
                        <Flex gap={10} align={'center'}> <img src={VisaIcon} /> <Text>VISA</Text> <div style={{flex: 1}}></div> <Switch size={'xs'}/></Flex>
                        
                    </Flex>
                    <Flex direction={'column'} gap={12} justify={'space-between'}>
                        <Flex gap={10}  align={'center'}> <img src={MastercardIcon} /> <Text>Mastercard</Text> <div style={{flex: 1}}></div> <Switch size={'xs'} justify={'flex-end'}/></Flex>
                        <Flex gap={10} align={'center'}> <img src={VisaIcon} /> <Text>VISA</Text> <div style={{flex: 1}}></div> <Switch size={'xs'}/></Flex>
                        
                    </Flex>
                </Flex>
            </CustomCard>
            </Flex>
            )}

            </Flex>

            {/* Binding Wallet */}
            <Flex direction={'column'} gap={10} style={{transitionDuration: '0.5s'}}>
                <Title>Bind Payments</Title>
                    <Flex justify={'space-between'}>
                        <Text>Would you us to register your wallet in the CRM itself?</Text>
                        <div style={{flex: 1}}></div>
                        <Switch value='yes' onChange={() => setBindingWallet(!bindingWallet)}/>
                    </Flex>
                <Text w={550} c="dimmed">If you receive payments outside of the CRM, you'll need to manually enter the payment details. 
                    Your wallet balance will show as negative until you pay it back using your preferred payment method. There are no fees for this process. 
                    The system also offers the option to register your wallet within the CRM.</Text>
                    {bindingWallet && (<Flex direction={'column'} bg={'#F3F3F3'} p={20} style={{borderRadius: '15px'}} className={'animate-text'}>
                        <Text>Your Wallets</Text>
                            <Flex gap={20}>
                            <div style={{width:'260px', borderRadius: '14px', padding: 10, color: 'white', marginTop: 20, cursor: 'pointer'}} className='gradient1 animate-text'>
                                    <Flex>
                                        <Title>56,200<span style={{opacity: "50%"}}>.56</span></Title>
                                        <div style={{flex: 1}}></div>
                                        <div style={{display: 'flex', justifyContent: 'flex-end', alignContent:'flex-end', alignItems: 'center', gap: 5}}>
                                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3px 6px', backgroundColor: 'black', borderRadius: '65px',}}>
                                                <Text fz={'sm'}>PKR</Text>
                                            </div>
                                            <IconWallet/>
                                        </div>
                                    </Flex>
                                <Text>~ SAR 220</Text>
                                <div style={{display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end'}}><Text>Booking <span style={{fontWeight: 100}}>Wallet</span></Text></div>
                            </div>
                            <div style={{width:'260px', borderRadius: '14px', padding: 10, color: 'white', marginTop: 20, cursor: 'pointer'}} className='gradient2 animate-text'>
                                    <Flex>
                                        <Title>12,165,200</Title>
                                        <div style={{flex: 1}}></div>
                                        <div style={{display: 'flex', justifyContent: 'flex-end', alignContent:'flex-end', alignItems: 'center', gap: 5}}>
                                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3px 6px', backgroundColor: 'black', borderRadius: '65px',}}>
                                                <Text fz={'sm'}>PKR</Text>
                                            </div>
                                            <IconWallet/>
                                        </div>
                                    </Flex>
                                <Text>~ SAR 164,404</Text>
                                <div style={{display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end'}}><Text>Company <span style={{fontWeight: 100}}>Wallet</span></Text></div>
                            </div>
                            </Flex>
                    </Flex>)}
            </Flex>
        </Flex>
        {/* Agrremetns */}
        <Flex>
            <Flex direction={'column'} gap={20} style={{marginLeft: 20}}>
                <Title>License {'&'} Agreements</Title>
                    <div style={{backgroundColor: '#F3F3F3', borderRadius: '14px', padding: 20, width: '600px', height: '400px'}}>
                        <ScrollArea h={400}>
                        <Text fz={13}>
                                                                Parties Involved:
                                        This registration agreement ("Agreement") is entered into by and between:

                                        [Your Company Name], a company incorporated under the laws of [insert country or state of incorporation], with its principal place of business located at [insert address], hereinafter referred to as "Website Owner"; and

                                        [Property Owner Company Name], a company incorporated under the laws of [insert country or state of incorporation], with its principal place of business located at [insert address], hereinafter referred to as "Property Owner."

                                        Property Listing:
                                        Property Owner hereby grants Website Owner a non-exclusive, non-transferable right to list and promote the property described as [insert property description] ("Property") on Website Owner's website for the purpose of advertising and marketing the Property to potential renters.

                                        Term and Termination:
                                        This Agreement shall commence upon the date of registration of the Property on the Website Owner's website and shall continue until terminated by either party upon written notice to the other party.

                                        Property Information:
                                        Property Owner shall provide Website Owner with complete and accurate information about the Property, including but not limited to its location, size, features, availability, and rental rates. Property Owner shall promptly update such information on the Website Owner's website as necessary to ensure its accuracy.

                                        Rental Bookings:
                                        Property Owner shall be solely responsible for managing rental bookings and collecting rental fees from renters. Website Owner shall have no responsibility or liability with respect to rental bookings or rental fees.

                                        Fees:
                                        Property Owner shall pay Website Owner a fee in accordance with the pricing plan agreed upon by both parties. Payment terms shall be [insert payment terms].

                                        Ownership:
                                        Property Owner represents and warrants that it has the right to list and promote the Property on the Website Owner's website, and that such listing and promotion do not violate any applicable laws or third-party rights. Property Owner retains ownership of the Property and all intellectual property rights therein.

                                        Indemnification:
                                        Property Owner agrees to indemnify and hold Website Owner harmless from any and all claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with the Property Owner's breach of any representation or warranty contained in this Agreement.

                                        Governing Law and Jurisdiction:
                                        This Agreement shall be governed by and construed in accordance with the laws of [insert governing law and jurisdiction]. Any legal action arising out of or in connection with this Agreement shall be brought exclusively in the courts of [insert jurisdiction].

                                        Entire Agreement:
                                        This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous agreements, understandings, or representations, whether written or oral. This Agreement may not be amended or modified except in writing signed by both parties.

                                        IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.

                                        [Signature blocks for both parties]
                        </Text>
                        </ScrollArea>                       
                    </div>
                    <Flex gap={10} w={500}>
                        <Checkbox value='yes' onChange={() => setAgreement(!agreement)}/> <Text>I hereby, have read and agreed to all the licences and agreements mentioned in the above block</Text>
                    </Flex>
            </Flex>
        </Flex>
    </Flex>
    </>
  )
}

export default PropertyPayments
