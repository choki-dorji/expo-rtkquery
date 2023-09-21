import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useGetProductsQuery } from '../../state/Dashboard/Dashboard.slice';
import DashboardComponents from '../../components/Dashboard/DashboardComponents';
import LOader from '../../components/Dashboard/loader/loader';


export default function DashboardScreen() {
    const {data, isLoading, error} = useGetProductsQuery()
    if(isLoading){
       return <LOader />
    }
  return (
    //@ts-ignore
        <DashboardComponents products={data} />   
    );
}



