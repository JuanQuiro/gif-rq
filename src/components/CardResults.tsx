import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useStoreGifs } from "../zustand/store";
import { useFetchData } from "../hooks/useGif";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ButtonGroup,
  CardFooter,
} from "@nextui-org/react";

export default function App() {
  const { CopyGifs, Types } = useStoreGifs();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, isError, isLoading } = useFetchData();
  if (isLoading) return <Card className="py-4 mt-5">Cargando</Card>;
  if (isError) return <Card className="py-4 mt-5">Error</Card>;

  const favorito = () => {
    console.log("Cargando");
    toast("El ejemplo siempre es favorito");
  };

  const eliminar = () => toast("El ejemplo siempre es favorito");
  return (
    <>
      <Card
        isFooterBlurred
        isPressable
        onPress={onOpen}
        shadow="lg"
        className="py-4 mt-5 shadow-[-10px_-7px_0px_0px_#ed8936]"
      >
        <div className="grid gap-2 grid-cols-2">
          <div className=" ml-4 badge bg-amber-400 text-black">Favorito</div>
          <div className=" badge bg-red-400 text-black">Eliminar</div>
        </div>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{Types} #1</p>
          <small className="text-default-500">Texto = {CopyGifs}</small>
          <h4 className="font-bold text-large">{data?.data.data[0].title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 pb-10">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={`${data?.data.data[0].images.original.url}`}
            width={270}
          />
        </CardBody>
        <CardFooter className="absolute bottom-0 bg-black/40 z-10  border-default-600 dark:border-default-100">
          <ButtonGroup fullWidth={true}>
            <Button
              className="hover:bg-black hover:text-white duration-500"
              color="warning"
              onPress={favorito}
            >
              Favoritos
            </Button>
            <Button
              className="hover:bg-black hover:text-white duration-500"
              color="danger"
              onPress={() => eliminar()}
            >
              Eliminar
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {data.data.data[0].title}
              </ModalHeader>
              <ModalBody>
                <p>
                  Slug Gifs={" "}
                  <span className="text-green-800">
                    {data.data.data[0].slug}
                  </span>
                </p>
                <p>
                  Bitly Url ={" "}
                  <span className="uppercase text-green-800">
                    {data.data.data[0].bitly_gif_url}
                  </span>
                </p>
                <p>
                  Ranking ={" "}
                  <span className="uppercase text-green-800">
                    {data.data.data[0].rating}
                  </span>
                </p>

                <p>
                  Avatar ={" "}
                  <div className="flex items-center justify-center">
                    <Image
                      alt="Card background"
                      src={`${data?.data.data[0].user.avatar_url}`}
                      width={270}
                    />
                  </div>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
