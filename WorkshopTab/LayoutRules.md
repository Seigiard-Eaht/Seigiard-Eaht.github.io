## Правила работы

SceneBuilder используется только как просмоторщик. Все изменения в код должны вводиться руками.

Надо максимально избегать стилей в тексте: ``minWidth``, ``prefHeight``, ``minWidth``, ``minHeight``, ``<Insets>`` и прочая ерунда запрещены. ``maxWidth`` или ``prefWidth`` может быть использован пару раз, эти случаи описываются ниже.

При переверстке текущих шаблонов надо особенно аккуратными быть с параметрами ``text``, ``fx:define``, ``fx:id`` и ``id``. Не копируйте бездумно из примеров, а обязательно заменяйте на текущие значения.

## Основной файл визарда

    <SplitPane id="splitPane" dividerPositions="0.24"
           stylesheets="@../../../common/css/metro-ui.css"
           styleClass="wtb-scene"
           xmlns="http://javafx.com/javafx/8" xmlns:fx="http://javafx.com/fxml/1">
        <items>
          <VBox styleClass="wtb-sidebar">
             <Label styleClass="wtb-sidebar--header" fx:id="mainTitle"/>
             <GridPane styleClass="wtb-sidebar--menu" fx:id="navigationPane" />
          </VBox>
          <AnchorPane styleClass="wtb-content" fx:id="contentAnchorPane">
          </AnchorPane>
        </items>
    </SplitPane>

Мы используем ``SplitPane.wtb-scene`` с подключенным файлом стилей ``metro-ui.css``. 

Сайдбар слева реализуется через ``VBox.wtb-sidebar``. В нем находятся ``Label.wtb-sidebar--header`` и ``GridPane.wtb-sidebar--menu`` или ``Accordeon.wtb-sidebar--accordeon``

### Меню одноуровневое

### Меню аккордеон

## Файлы форм визарда

Используйте VBox, как форму, и HBox, Grid и прочие Pane, как строки формы.

Для VBox указывайте класс ``.wtb-form``, который дает отступы справа и слева. Ширину и высоту формы указывать не нужно.

    <VBox id="MainPane" fx:id="mainAnchorPane" styleClass="wtb-form"
      stylesheets="@../../../common/css/metro-ui.css"
      xmlns="http://javafx.com/javafx/8" xmlns:fx="http://javafx.com/fxml/1">

### Заголовок и подзаголовок

![](http://seigiard-eaht.github.io/WorkshopTab/title.png)

Заголовок должен быть один в форме и идти первым элементом.

    <HBox styleClass="wtb-form--row__title">
        <children>
            <Label styleClass="wtb-form--title"
                    text="%some_title" />
        </children>
    </HBox>

Подзаголовков может быть несколько в зависимости от нужд.

    <VBox styleClass="wtb-form--row__subtitle">
        <children>
            <Label styleClass="wtb-form--subtitle"
                    text="%some_subtitle" />
            <Separator styleClass="wtb-form--subtitle-border" />
        </children>
    </VBox>

Подзаголовок с хелпером

![](http://seigiard-eaht.github.io/WorkshopTab/subtitle.png)

    <VBox styleClass="wtb-form--row__subtitle">
        <HBox>
            <children>
                <Label styleClass="wtb-form--subtitle"
                  text="%some_subtitle" />
                <Pane styleClass="wtb-form--spacer-10px" HBox.hgrow="NEVER"/>
                <Pane fx:id="backupData_helper" />
            </children>
        </HBox>
        <Separator styleClass="wtb-form--subtitle-border" />
    </VBox>

### Секция формы

Секции формы формируются из ``HBox``, ``Grid`` и прочих ``Pane`` с ``.wtb-form--row``, который дает вертикальные отступы между строками формы.

    <HBox styleClass="wtb-form--row">

#### Заголовки секции

Для лэйблов форм используйте ``Label.wtb-form--label``.

    <Label styleClass="wtb-form--label" text="%some-label"/>

Если после лейбла необходим знак вопроса с подсказкой, надо использовать следующую конструкцию: спейсер и компонент подсказки

    <Pane styleClass="wtb-form--spacer-10px" HBox.hgrow="NEVER"/>
    <Pane fx:id="WSCardINWTReader_helper" />

После кажого лейбла со знаком вопроса или без надо размещать спейсер.
    
    <Pane HBox.hgrow="ALWAYS"/>

#### Радиобаттоны и чекбоксы

Радиобаттоны и чекбоксы должны иметь классы ``.wtb-form--radiobutton`` и ``.wtb-form--checkbox`` соответственно.

Перед каждым чекбоксом, радибаттоном или инпутом, чтобы отбить его от текста, надо размещать pane с классом ``wtb-form--spacer-30px``

    <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
    <RadioButton styleClass="wtb-form--radiobutton" fx:id="rbManipulationOk" text="OK" toggleGroup="$tgManipulation" userData="0"/>

    <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
    <CheckBox styleClass="wtb-form--checkbox" fx:id="cbErrorMemory"/>


## Библиотека элементов

### Подсказка

![](http://seigiard-eaht.github.io/WorkshopTab/text-important.png)

    <HBox styleClass="wtb-form--row" >
        <children>
            <Label styleClass="wtb-form--notice-important" text="%some_text"/>
        </children>
    </HBox>


### Название и Радиокнопки

![](http://seigiard-eaht.github.io/WorkshopTab/label-radiobuttons.png)

Обратите внимание, тут мы используем ``maxWidth="550"`` для ``Label``. Это значение не универсально, оно зависит от ширины надписи в радиокнопках.

    <HBox styleClass="wtb-form--row">
        <children>
            <Label styleClass="wtb-form--label" maxWidth="520" text="%label_text" />

            <Pane HBox.hgrow="ALWAYS"/>

            <fx:define>
                <ToggleGroup fx:id="manipulationsHintsRecognizable"/>
            </fx:define>

            <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
            <RadioButton styleClass="wtb-form--radiobutton"
                         fx:id="radioButton1" text="%radiobutton_text1"
                         toggleGroup="$manipulationsHintsRecognizable"/>
            <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
            <RadioButton styleClass="wtb-form--radiobutton"
                         fx:id="radioButton2" text="%radiobutton_text2"
                         toggleGroup="$manipulationsHintsRecognizable"/>
        </children>
    </HBox>

### Название, Хелпер и Радиокнопки

![](http://seigiard-eaht.github.io/WorkshopTab/label-helper-radiobuttons.png)

Обратите внимание, тут мы используем ``maxWidth="520"`` для ``Label``. Это значение не универсально, оно зависит от ширины надписи в радиокнопках.

    <HBox styleClass="wtb-form--row">
        <children>
            <Label styleClass="wtb-form--label" maxWidth="520" text="%label_text" />
    
            <Pane styleClass="wtb-form--spacer-10px" HBox.hgrow="NEVER"/>
            <Pane fx:id="hintQuesionSign"/>
    
            <Pane HBox.hgrow="ALWAYS"/>
    
            <fx:define>
                <ToggleGroup fx:id="manipulationsHintsRecognizable"/>
            </fx:define>
    
            <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
            <RadioButton styleClass="wtb-form--radiobutton"
                         fx:id="radioButton1" text="%radiobutton_text1"
                         toggleGroup="$manipulationsHintsRecognizable"/>
            <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
            <RadioButton styleClass="wtb-form--radiobutton"
                         fx:id="radioButton2" text="%radiobutton_text2"
                         toggleGroup="$manipulationsHintsRecognizable"/>
        </children>
    </HBox>

### Название и Чекбокс

![](http://seigiard-eaht.github.io/WorkshopTab/label-helper-checkbox.png)

Обратите внимание, тут мы используем ``maxWidth="780"`` для ``Label``

    <HBox styleClass="wtb-form--row">
        <Label styleClass="wtb-form--label" text="%label_text" maxWidth="780"/>

        <Pane HBox.hgrow="ALWAYS"/>
        <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
        <CheckBox styleClass="wtb-form--checkbox" fx:id="manipulationCheck"></CheckBox>
    </HBox>

### Название, Хелпер и Чекбокс

![](http://seigiard-eaht.github.io/WorkshopTab/label-helper-checkbox.png)

Обратите внимание, тут мы используем ``maxWidth="750"`` для ``Label``

    <HBox styleClass="wtb-form--row">
        <Label styleClass="wtb-form--label" text="%label_text" maxWidth="750"/>
        <Pane styleClass="wtb-form--spacer-10px" HBox.hgrow="NEVER"/>
        <Pane fx:id="hintQuesionSign" />
        <Pane HBox.hgrow="ALWAYS"/>
        <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
        <CheckBox styleClass="wtb-form--checkbox" fx:id="manipulationCheck"></CheckBox>
    </HBox>

### Кнопка на всю длину и Чекбокс

![](http://seigiard-eaht.github.io/WorkshopTab/button_full_width-helper-checkbox.png)

Обратите внимание, тут мы используем ``prefWidth="780.0" minWidth="-Infinity" maxWidth="-Infinity"`` для ``Button``

    <HBox styleClass="wtb-form--row">
        <Button fx:id="buttonId" mnemonicParsing="false" styleClass="wtb-form--button"
                prefWidth="780.0" minWidth="-Infinity" maxWidth="-Infinity"
                text="%button_text" />

        <Pane HBox.hgrow="ALWAYS"/>
        <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
        <CheckBox styleClass="wtb-form--checkbox" fx:id="manipulationCheck"/>
    </HBox>

### Кнопка на всю длину, Хелпер и Чекбокс

![](http://seigiard-eaht.github.io/WorkshopTab/button_full_width-helper-checkbox.png)

Обратите внимание, тут мы используем ``prefWidth="750.0" minWidth="-Infinity" maxWidth="-Infinity"`` для ``Button``

    <HBox styleClass="wtb-form--row">
        <Button fx:id="buttonId" mnemonicParsing="false" styleClass="wtb-form--button"
                prefWidth="750.0" minWidth="-Infinity" maxWidth="-Infinity"
                text="%button_text" />
        <Pane styleClass="wtb-form--spacer-10px" HBox.hgrow="NEVER"/>
        <Pane fx:id="hintQuesionSign" />
        <Pane HBox.hgrow="ALWAYS"/>
        <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
        <CheckBox styleClass="wtb-form--checkbox" fx:id="manipulationCheck"/>
    </HBox>

### Название и Поле ввода

![](http://seigiard-eaht.github.io/WorkshopTab/label-input.png)

    <HBox styleClass="wtb-form--row">
        <Label styleClass="wtb-form--label" text="%label_text"/>
        <Pane HBox.hgrow="ALWAYS"/>

        <Pane styleClass="wtb-form--spacer-30px" HBox.hgrow="NEVER"/>
        <TextField styleClass="wtb-form--input__xs" fx:id="fieldID"/>
    </HBox>
