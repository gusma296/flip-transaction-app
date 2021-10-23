import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {Alert} from 'react-native';
import {Colors, currencyFormatter, dateFormatter} from '../common';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  Container,
  Content,
  Header,
  IconButton,
  Sparator,
  Text,
  Touchable,
} from '../components';

const TransactionDetail = () => {
  const [toogle, setToogle] = React.useState(false);
  const navigation = useNavigation();
  const {params} = useRoute();
  const {
    account_number,
    amount,
    beneficiary_bank,
    beneficiary_name,
    created_at,
    id,
    remark,
    sender_bank,
    unique_code,
  } = params;

  function onPress() {
    setToogle(!toogle);
  }

  function onCopyId() {
    Clipboard.setString(id);
    Alert.alert(null, `Id transaksi ${id} telah disalin ke cliperboard`);
  }

  return (
    <Container>
      <Header
        onBackPress={() => navigation.goBack()}
        title="Detail Transaksi"
      />
      <Content flex={1} backgroundColor={Colors.background}>
        <Content
          marginBottom={2}
          marginTop={16}
          padding={16}
          centerTop
          row
          backgroundColor={Colors.white}>
          <Text marginRight={4} size={16} bold>
            ID TRANSAKSI: #{id}
          </Text>
          <IconButton
            iconName="content-copy"
            iconSize={18}
            iconColor={Colors.primary}
            onPress={onCopyId}
          />
        </Content>
        <Content padding={16} row rowBetween backgroundColor={Colors.white}>
          <Text size={16} bold>
            DETAIL TRANSAKSI
          </Text>
          <Touchable onPress={onPress}>
            <Text size={16} color={Colors.primary} bold>
              {toogle ? 'Tutup' : 'Lihat'}
            </Text>
          </Touchable>
        </Content>
        <Sparator />
        {toogle && (
          <Content padding={16} backgroundColor={Colors.white}>
            <Content marginBottom={16} row centerTop>
              <Text size={18} bold>
                {sender_bank.toUpperCase()}
              </Text>
              <IconButton
                iconName="arrow-right-thick"
                iconSize={20}
                iconColor={Colors.black}
              />
              <Text size={18} bold>
                {beneficiary_bank.toUpperCase()}
              </Text>
            </Content>
            <Content marginBottom={24} row>
              <Content flex={1.5}>
                <Text marginBottom={4} size={16} bold>
                  {beneficiary_name.toUpperCase()}
                </Text>
                <Text size={16}>{account_number}</Text>
              </Content>
              <Content flex={1}>
                <Text marginBottom={4} size={16} bold>
                  NOMINAL
                </Text>
                <Text size={16}>{currencyFormatter(amount)}</Text>
              </Content>
            </Content>
            <Content marginBottom={24} row>
              <Content flex={1.5}>
                <Text marginBottom={4} size={16} bold>
                  BERITA TRANSFER
                </Text>
                <Text size={16}>{remark}</Text>
              </Content>
              <Content flex={1}>
                <Text marginBottom={4} size={16} bold>
                  KODE UNIK
                </Text>
                <Text size={16}>{unique_code}</Text>
              </Content>
            </Content>
            <Content row>
              <Content flex={1.5}>
                <Text marginBottom={4} size={16} bold>
                  WAKTU DIBUAT
                </Text>
                <Text size={16}>{dateFormatter(created_at)}</Text>
              </Content>
            </Content>
          </Content>
        )}
      </Content>
    </Container>
  );
};

export default TransactionDetail;
