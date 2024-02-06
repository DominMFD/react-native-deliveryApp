import {View, Text, FlatList} from 'react-native'
import { CATEGORIES } from "@/utils/data/products"
import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'
import { useState } from 'react'

export default function Home() {

    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategories(item: string) {
        setCategory(item)
    }   

    return (
        <View className="flex-1 pt-8">
            <Header title="Cardápio"/>

            <FlatList 
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({item}) => 
                    <CategoryButton title={item} isSelected={item === category} onPress={() => handleCategories(item)}/>}
                horizontal
                className='max-h-10 mt-5'
                contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
                showsHorizontalScrollIndicator={false}
            />
            
        </View>
    )
}