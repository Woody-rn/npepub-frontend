import { VStack } from '@chakra-ui/react'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'

function HomePage() {
    return (
        <VStack gap={10} align="start">
            <AboutSection />
            <SkillsSection />
        </VStack>
    )
}

export default HomePage