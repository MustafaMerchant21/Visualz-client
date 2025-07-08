import { useCallback, useState } from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { UploadCloud } from "lucide-react";
import {
  addToast,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Spinner,
} from "@heroui/react";

import DefaultLayout from "@/layouts/default";
import BlurText from "@/components/BlurText";
import Silk from "@/components/Silk";
import GlareHover from "@/components/GlareHover";
import TiltedCard from "@/components/TiltedCard";

export default function IndexPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loadingResults, setLoadingResults] = useState(false);
  const [matches, setMatches] = useState<any[]>([]);
  const [predictedPlace, setPredictedPlace] = useState<string | null>(null);
  const [googleMapsLink, setGoogleMapsLink] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      setUploadProgress(10);

      // Reset UI state
      setPredictedPlace(null);
      setGoogleMapsLink(null);
      setMatches([]);
      setLoadingResults(true);
      onClose();
      onOpen(); // Open modal with spinner

      const res = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      const isMatchFound = data.matches && data.matches.length > 0;

      setPredictedPlace(data.predicted_place || null);
      setGoogleMapsLink(data.google_maps_link || null);
      setMatches(data.matches || []);
      setUploadProgress(100);
      setLoadingResults(false);

      if (isMatchFound) {
        addToast({
          title: "Success",
          description: "Image uploaded and matched successfully.",
          color: "success",
        });
      } else {
        addToast({
          title: "No Match Found",
          description: "Image uploaded, but no similar place found.",
          color: "warning",
        });
      }
    } catch (error) {
      console.error(error);
      setLoadingResults(false);
      addToast({
        title: "Error",
        description: "Failed to upload. Server error.",
        color: "danger",
      });
    } finally {
      setUploading(false);
      setTimeout(() => setUploadProgress(0), 2000);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleFileUpload(file);
      e.dataTransfer.clearData();
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) handleFileUpload(file);
    e.target.value = "";
  };

  return (
    <DefaultLayout>
      <div className="absolute inset-0 -z-10">
        <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
      </div>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative z-10 h-full">
        <BlurText
          text="AI-Powered Place Recognition."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl font-bold mb-8 text-center justify-center"
        />
        <BlurText
          text="The World Is a Clue — We Solve It."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-5xl font-bold mb-8 text-center justify-center"
        />

        <GlareHover glareColor="#ffffff" glareOpacity={0.3} glareAngle={-30} glareSize={300} transitionDuration={800}>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            className={`border-2 border-dashed rounded-3xl p-6 text-center transition-all w-full duration-200 ${
              isDragging ? "border-primary bg-primary/10" : "border-gray-300 dark:border-gray-600"
            }`}
          >
            <label
              htmlFor="image-upload"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                class: "cursor-pointer inline-flex items-center gap-2",
              })}
            >
              <UploadCloud size={18} />
              Upload Image
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">or drag and drop here</p>

            {uploading && (
              <div className="mt-4">
                <Spinner color="primary" label="Uploading your image..." />
              </div>
            )}
          </div>
        </GlareHover>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Drop a photo. We'll tell you where it was taken. <Code color="primary">v1.0.0</Code>
            </span>
          </Snippet>
        </div>
      </section>

      {/* Match Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        className="max-w-full md:max-w-5xl w-full"
        backdrop={loadingResults ? "blur" : "opaque"}
        scrollBehavior="inside" 
        placement = "center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {loadingResults ? "Matching..." : matches.length > 0 ? "Top Matches" : "No Place Found"}
              </ModalHeader>
              <ModalBody>
                {loadingResults ? (
                  <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
                    <Spinner color="primary" label="Finding the best matches..." />
                  </div>
                ) : (
                  <>
                    {predictedPlace && (
                      <div className="mb-4 text-center">
                        <h2 className="text-xl font-semibold">Predicted Place</h2>
                        {googleMapsLink ? (
                          <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline italic"
                          >
                            {predictedPlace}
                          </a>
                        ) : (
                          <p className="text-gray-600 italic">{predictedPlace}</p>
                        )}
                      </div>
                    )}

                    <p className="text-sm text-gray-500 mb-4">
                      {matches.length === 0
                        ? "No similar location found in our database."
                        : "Here are the most similar locations from our database:"}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {matches.slice(0, 4).map((match, idx) => (
                        <a
                          key={match.path || idx}
                          href={`https://www.google.com/maps/search/${(predictedPlace || "").replace(/\s+/g, "+")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full"
                        >
                          <TiltedCard
                            imageSrc={`http://localhost:5000/db/${match.path}`}
                            altText="Match"
                            captionText={`${(match.distance * 100).toFixed(1)}%`}
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                              <p className="tilted-card-demo-text">
                                {`${(match.distance * 100).toFixed(2)}% match`}
                              </p>
                            }
                          />
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}
