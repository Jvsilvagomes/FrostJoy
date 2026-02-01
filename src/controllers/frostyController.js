import prisma from "../pismaClient.js";

//Listar todas as sorveterias
export const getAllSorveterias = async (req, res) => {
    try {
        const sorveteria =  await prisma.sorveteria.findMany({
            include: {
                sabores: true,
                fotos: true
            }
        });

        res.status(200).json({
            total: sorveteria.length,
            sorveteria: sorveteria
        });
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar sorveterias." });
    }
};

//buscar sorveteria por ID

export const getSorveteriaById = async (req, res) => {
    try {
        const { id } = req.params; 
        const sorveteria = await prisma.sorveteria.findUnique({
            where: { id: parseInt(id) },
            include: {
                sabores: true,
                fotos: true
            }
        });
        if (!sorveteria) {
            return res.status(404).json({ error: "Sorveteria não encontrada." });
        }
        res.status(200).json({
            message: "Sorveteria encontrada com sucesso!",
            sorveteria: sorveteria
        });

    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar sorveteria." });
    }
};

// Criar uma sorveteria

export const criarSorveteria = async (req, res) => {
    try {
        const { nome, desricao, endereco, telefone, fotoPerfil } = req.body;

        const novaSorveteria = await prisma.sorveteria.create({
            data: {
                nome,
                desricao,
                endereco,
                telefone,
                fotoPerfil
            }
        });

        res.status(201).json({
            total: sorveteria.length,
            message: "Sorveteria criada com sucesso!",
            sorveteria: novaSorveteria
        })
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar sorveteria." });
    }
}

//Atualizar a sorveteria

export const atualizarSorveteria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, desricao, endereco, telefone, fotoPerfil } = req.body;

        const sorveteriaAtualizada = await prisma.sorveteria.update({
            where: { id: parseInt(id) },
            data: {
                nome,
                desricao,
                endereco,
                telefone,
                fotoPerfil
            }
        });

        res.status(200).json({
            message: "Sorveteria atualizada com sucesso!",
            sorveteria: sorveteriaAtualizada
        });

    } 
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar sorveteria." });
    }
};

//Deletar uma sorveteria

export const deletarSorveteria = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.sorveteria.delete({
            where: { id: Number(id) }
        });

        res.status(200).json({ message: "Sorveteria deletada com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar sorveteria." });
    }
};

