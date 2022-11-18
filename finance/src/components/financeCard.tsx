import React from "react";
import { useQuery } from 'react-query';
import { fetchTransactions } from "../utils/api-fetches";
import { ApiTransactions } from "../utils/api-types";
import {MaterialTableComponent} from '../components/materialTable'


export default function FinanceCard() {
    const { useState } = React;

    const {data: data, status} = useQuery<ApiTransactions[]>(
        'fetchTransactions',
        fetchTransactions
    )

    return <MaterialTableComponent columns2={data} data2={data}></MaterialTableComponent>
}