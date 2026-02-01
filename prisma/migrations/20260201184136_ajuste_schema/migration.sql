-- AlterTable
ALTER TABLE "Sabor" ADD COLUMN     "imagem" TEXT;

-- AlterTable
ALTER TABLE "Sorveteria" ADD COLUMN     "descricao" TEXT,
ADD COLUMN     "fotoPerfil" TEXT;

-- CreateTable
CREATE TABLE "Foto" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "descricao" TEXT,
    "sorveteriaId" INTEGER NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_sorveteriaId_fkey" FOREIGN KEY ("sorveteriaId") REFERENCES "Sorveteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
