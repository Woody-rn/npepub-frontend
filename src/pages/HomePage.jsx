import { VStack } from '@chakra-ui/react'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'

function HomePage() {
    return (
        <VStack gap={10} align="start">
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </VStack>
    )
}

export default HomePage