import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {alpabhetSort, Colors, currencyFormatter, dateSort} from '../common';
import {Container, Content, Header, ModalPicker, Text} from '../components';
import Card from '../components/Card';
import {transactionStyles} from '../styles/transaction.style';
import SearchFilter from './SearchFilter';
Icon.loadFont();

const TransactionList = () => {
  const navigation = useNavigation();
  const [transaction, setTransaction] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [pickerVisible, setVisible] = React.useState(false);
  const [picked, setPicked] = React.useState('URUTKAN');
  const [search, setSearch] = React.useState('');

  const transactionData = search
    ? transaction.filter(
        item =>
          item.beneficiary_name.toLowerCase().indexOf(search.toLowerCase()) >
            -1 ||
          item.beneficiary_bank.toLowerCase().indexOf(search.toLowerCase()) >
            -1 ||
          item.sender_bank.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
          item.amount.toString().indexOf(search) > -1,
      )
    : picked === 'Nama A-Z'
    ? alpabhetSort(true, transaction)
    : picked === 'Nama Z-A'
    ? alpabhetSort(false, transaction)
    : picked === 'Tanggal Terbaru'
    ? dateSort(true, transaction)
    : picked === 'Tanggal Terlama'
    ? dateSort(false, transaction)
    : transaction;

  function onCardPress(params) {
    navigation.navigate('Transaction Detail', params);
  }

  function getTransaction() {
    fetch('https://nextar.flip.id/frontend-test')
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        setTransaction(Object.values(res));
        setRefreshing(false);
      })
      .catch(error => console.log(error));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getTransaction();
  }, []);

  function onPicked(item) {
    setPicked(item);
    setVisible(false);
  }

  function onClosePicker() {
    setVisible(false);
  }
  function onOpenPicker() {
    setVisible(true);
  }
  function onChangeText(params) {
    setSearch(params);
  }

  React.useEffect(() => {
    setLoading(true);
    getTransaction();
  }, []);

  return (
    <Container>
      <Header title="Transaksi" />
      {loading ? (
        <Content center flex={1} backgroundColor={Colors.background}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text size={16} marginTop={6}>
            Loading
          </Text>
        </Content>
      ) : (
        <Content flex={1} backgroundColor={Colors.background}>
          <SearchFilter
            searchValue={search}
            onChangeText={onChangeText}
            picked={picked}
            onOpenPicker={onOpenPicker}
          />
          <FlatList
            contentContainerStyle={transactionStyles.listContent}
            data={transactionData}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({item}) => {
              return (
                <Card
                  beneficiaryName={item.beneficiary_name}
                  senderBank={item.sender_bank}
                  beneficiaryBank={item.beneficiary_bank}
                  amount={currencyFormatter(item.amount)}
                  createdAt={item.created_at}
                  status={item.status}
                  onPress={() => onCardPress(item)}
                />
              );
            }}
            keyExtractor={res => res.id}
          />
        </Content>
      )}
      <ModalPicker
        visible={pickerVisible}
        picked={picked}
        onClose={onClosePicker}
        onPicked={onPicked}
      />
    </Container>
  );
};

export default TransactionList;
