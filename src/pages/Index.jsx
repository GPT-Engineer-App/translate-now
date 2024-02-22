import React, { useState } from "react";
import { Box, Heading, Container, Select, Textarea, Button, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaGlobe, FaMicrophone, FaSyncAlt } from "react-icons/fa";

const Index = () => {
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [translation, setTranslation] = useState("");
  const toast = useToast();

  const handleTranslate = () => {
    // This would be where the actual translation API call would be made
    // Since we can't make external calls, we're simulating a translation
    setTranslation(`Translated text from ${sourceLanguage} to ${targetLanguage}`);
    toast({
      title: "Translation successful",
      description: "The text has been translated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl" textAlign="center">
          Real-Time Call Translation
        </Heading>
        <Box w="100%">
          <HStack justifyContent="space-between">
            <Box flexBasis="45%">
              <Select placeholder="Select Source Language" value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                {/* Assuming we have a list of languages with their ISO codes */}
                {/* This should be dynamically generated */}
                <option value="en">English</option>
                <option value="es">Spanish</option>
                {/* ... and so on for 50 languages */}
              </Select>
            </Box>
            <Box textAlign="center">
              <Button onClick={handleTranslate} leftIcon={<FaSyncAlt />} colorScheme="teal" variant="solid">
                Translate
              </Button>
            </Box>
            <Box flexBasis="45%">
              <Select placeholder="Select Target Language" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                {/* Again, a dynamic list */}
                <option value="en">English</option>
                <option value="es">Spanish</option>
                {/* ... and so on for 50 languages */}
              </Select>
            </Box>
          </HStack>
        </Box>
        <Textarea placeholder="Start speaking..." size="sm" height="200px" />
        <Button leftIcon={<FaMicrophone />} colorScheme="blue" variant="solid">
          Start Call
        </Button>
        <Box w="100%" bg="gray.100" p={3} borderRadius="md">
          <Heading as="h3" size="md">
            Translated Text:
          </Heading>
          <Box mt={2} p={4} bg="white" borderRadius="md">
            {translation || "Translation will appear here..."}
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
