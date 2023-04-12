package org.example;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.discos.Disco;
import com.github.britooo.looca.api.group.discos.DiscoGrupo;
import com.github.britooo.looca.api.group.memoria.Memoria;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.rede.Rede;
import com.github.britooo.looca.api.group.sistema.Sistema;

import java.util.List;

public class CodigoLooca {
    public static void main(String[] args) {
        Looca looca = new Looca();
        Sistema sistema = looca.getSistema();
        Memoria memoria = looca.getMemoria();
        Processador cpu = looca.getProcessador();
        Rede rede = looca.getRede();

        System.out.println("---------------------Sistema-----------------------");
        System.out.println(sistema);
        System.out.println("---------------------Memória-----------------------");
        System.out.println(memoria);
        System.out.println("---------------------CPU-----------------------");
        System.out.println(cpu);
        System.out.println("---------------------Rede-----------------------");
        System.out.println(rede.getParametros());

        System.out.println("---------------------Disco-----------------------");
    // Listando as informações de disco (nome, modelo, serial, tamanho,
        // leitura, bytes de leitura, escritas, bytes de escritas, tamanho atual da fila, tempo de transferência)

        DiscoGrupo grupoDeDiscos = looca.getGrupoDeDiscos();
        List<Disco> discos = grupoDeDiscos.getDiscos();
        for (Disco disco : discos) {
            System.out.println(disco);
        }




    }
}