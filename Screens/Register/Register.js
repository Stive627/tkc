import { Image, Text, TextInput, View } from "react-native"

function Register() {
  return (
    <View className='flex h-screen items-center justify-center'>
        <View className='flex flex-row  items-center'>
            <Image alt="The logo of TKC" source={{uri:'https://tkcapi.tsasoft.com/logo.png'}} resizeMode="center" width={105} height={105}/>
            <Text className='text-2xl font-semibold'>TSA Knowledge Center</Text>
        </View>
        <Text className='font-semibold text-2xl mb-3'>Register to continue</Text>
        <View className='w-full flex items-center gap-2'>
            <TextInput className='border w-4/5 rounded-md no-underline' placeholder=" Enter your username"/>
            <TextInput className='border w-4/5 rounded-md'placeholder="Enter your password"/>
            <TextInput className='border w-4/5 rounded-md' placeholder="Re-Enter your password"/>
        </View>
        
        <TextInput/>
        <TextInput/>
    </View>
  )
}

export default Register
