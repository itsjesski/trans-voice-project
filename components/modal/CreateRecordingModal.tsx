import { useEffect, useState } from "react";
import { VoiceRecorder } from "../recordings/VoiceRecorder";
import { Button } from "../ui/button";
import { Dialog, DialogActions, DialogBody, DialogTitle } from "../ui/dialog";
import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "../ui/fieldset";
import { Input } from "../ui/input";
import { useCreateRecording } from "../../hooks/api/useCreateRecording";
import { Modal } from "./Modal";

export const CreateRecordingModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}) => {
  const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null);
  const [recordingName, setRecordingName] = useState("");

  const { mutate: createRecording, isPending: isCreatingRecording } =
    useCreateRecording();

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setRecordingBlob(null);
      setRecordingName("");
    }
  }, [isOpen]);

  const handleFileUpload = async () => {
    if (!recordingBlob || !recordingName || isCreatingRecording) return;

    createRecording(
      { recordingName, file: recordingBlob },
      {
        onSuccess: () => {
          close();
        },
      }
    );
  };

  return (
    <Modal
      title="New Recording"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      panelClassName="sm:max-w-2xl"
    >
      {/* <Dialog open={isOpen} onClose={() => setIsOpen(false)} size="2xl"> */}
      {/* <DialogTitle>New Recording</DialogTitle> */}
      <DialogBody>
        {isOpen && (
          <VoiceRecorder
            onRecordingComplete={(newRecordingBlob) => {
              setRecordingBlob(newRecordingBlob);
            }}
          />
        )}
        {recordingBlob && (
          <Fieldset className="mt-5">
            <FieldGroup>
              <Field>
                <Label>Recording name</Label>
                <Input
                  name="recording_name"
                  color=""
                  value={recordingName}
                  onChange={(event) => setRecordingName(event.target.value)}
                />
                <Description>Only you will ever see this.</Description>
              </Field>
            </FieldGroup>
          </Fieldset>
        )}
      </DialogBody>
      <DialogActions className="z-50">
        <Button plain onClick={close} disabled={isCreatingRecording}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleFileUpload();
          }}
          color="violet"
          disabled={!recordingBlob || !recordingName || isCreatingRecording}
        >
          {isCreatingRecording ? "Uploading..." : "Create"}
        </Button>
      </DialogActions>
      {/* </Dialog> */}
    </Modal>
  );
};
