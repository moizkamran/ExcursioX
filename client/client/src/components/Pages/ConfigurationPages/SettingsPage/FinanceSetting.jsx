import { Alert, Checkbox, Flex, Select, Text } from "@mantine/core"
import { randomId, useListState } from "@mantine/hooks";
import { IconAlertCircle } from "@tabler/icons"

const FinanceSetting = () => {

    

    const currencies = [
        { value: 'usd', label: 'USD' },
        { value: 'eur', label: 'EUR' },
        { value: 'rub', label: 'RUB' },
        { value: 'gbp', label: 'GBP' },
        { value: 'jpy', label: 'JPY' },
        { value: 'cad', label: 'CAD' },
        { value: 'aud', label: 'AUD' },
        { value: 'chf', label: 'CHF' },
        { value: 'pkr', label: 'PKR' },
        ];

  return (
    <>
    <Flex direction={'column'}>
        <Alert icon={<IconAlertCircle size="1rem" />} title="Can't update?" color="gray" radius="xl">
        It may be because some of the settings are managed by your enterprise management. 
        </Alert>

        <Flex mt={20} direction={'column'}>
            <Text fz={19}>Basic Preferences</Text>
            <Flex gap={15}>
                {/* Currency */}
                <Flex mt={20} direction={'column'}>
                    <Text fz={15}>Local Currency</Text>
                    <Select
                    mt={5}
                    radius={'md'}
                    data={currencies}
                    />
                </Flex>
                {/* Currency ENDE */}
                {/* Currency */}
                <Flex mt={20} direction={'column'}>
                    <Text fz={15}>Buying Primary Currency</Text>
                    <Select
                    mt={5}
                    radius={'md'}
                    data={currencies}
                    />
                </Flex>
                {/* Currency ENDE */}
                {/* Currency */}
                <Flex mt={20} direction={'column'}>
                    <Text fz={15}>Selling Primary Currency</Text>
                    <Select
                    mt={5}
                    radius={'md'}
                    data={currencies}
                    />
                </Flex>
                {/* Currency ENDE */}
            </Flex>
            <Flex mt={20} direction={'column'}>
                <Text fz={19}>Notifications</Text>
                <Flex mt={20} direction={'column'}><NotificationToggles /></Flex>
            </Flex>
        </Flex>
    </Flex>
    </>
  )
}

function NotificationToggles() {
    const initialValues = [
        { label: 'Receive email notifications for due invoices', checked: false, key: randomId() },
        { label: 'Receive email notifications for new invoices', checked: false, key: randomId() },
        { label: 'Receive email notifications for recall invoices', checked: false, key: randomId() },
        { label: 'Receive email notifications for invoices that were updated', checked: false, key: randomId() },
        { label: 'Receive email notifications for invoices that have been paid', checked: false, key: randomId() },
        { label: 'Receive sms notifications for login alerts', checked: false, key: randomId() },
        { label: 'Receive push notifications', checked: false, key: randomId() },
      ];

    const [values, handlers] = useListState(initialValues);
  
    const allChecked = values.every((value) => value.checked);
    const indeterminate = values.some((value) => value.checked) && !allChecked;
  
    const items = values.map((value, index) => (
      <Checkbox
        mt="xs"
        ml={33}
        label={value.label}
        key={value.key}
        checked={value.checked}
        onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
      />
    ));
  
    return (
      <>
        <Checkbox
          checked={allChecked}
          indeterminate={indeterminate}
          label="Receive all notifications"
          transitionDuration={0}
          onChange={() =>
            handlers.setState((current) =>
              current.map((value) => ({ ...value, checked: !allChecked }))
            )
          }
        />
        {items}
      </>
    );
  }

export default FinanceSetting