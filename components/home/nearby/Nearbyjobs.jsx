
import { useRouter } from 'expo-router'

import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { COLORS } from '../../../constants'

import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {

  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearbyjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data?.map((job) => (
              <NearbyJobCard
              />
            ))
          )
        }

      </View>
    </View>
  )
}

export default Nearbyjobs