import { VStack } from '@chakra-ui/react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'

function HomePage() {
  return (
    <VStack gap={10} align="start">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </VStack>
  )
}

export default HomePage