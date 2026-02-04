<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Resultado do Cadastro</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main>
        <?php
        
        $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS) ?? "Desconhecido";
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $idade = filter_input(INPUT_POST, 'idade', FILTER_SANITIZE_NUMBER_INT) ?? 0;

        
        if (!$email) {
            die("<h3>Erro: O e-mail digitado é inválido.</h3><a href='javascript:history.go(-1)'>Voltar</a>");
        }

        if ($idade < 18) {
            die("<h3>Erro: Cadastro permitido apenas para maiores de 18 anos.</h3>");
        }


        echo "<h1>Confirmação de Dados</h1>";
        echo "<p>Olá, <strong>$nome</strong>! Seu cadastro foi validado com sucesso.</p>";
        echo "<p>E-mail confirmado: $email</p>";
        echo "<p>Idade: $idade anos.</p>";
        ?>

        <button onclick="javascript:history.go(-1)">Voltar</button>
    </main>
</body>

</html>

