## Правила работы

SceneBuilder используется только как просмоторщик. Все изменения в код должны вводиться руками.

Надо максимально избегать стилей в тексте: ``minWidth``, ``prefHeight``, ``minWidth``, ``minHeight``, ``<Insets>`` и прочая ерунда запрещены. ``maxWidth`` или ``prefWidth`` может быть использован пару раз, эти случаи описываются ниже.

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
        <Text styleClass="wtb-form--title" id="title-text" text="%some_title"  HBox.hgrow="ALWAYS" />        
    </HBox>

![](http://seigiard-eaht.github.io/WorkshopTab/subtitle.png)

Подзаголовков может быть несколько в зависимости от нужд.

    <VBox styleClass="wtb-form--row__subtitle">
        <Text styleClass="wtb-form--subtitle" id="subtitle-text" text="%some_subtitle" HBox.hgrow="ALWAYS" />
        <Separator styleClass="wtb-form--subtitle-border" HBox.hgrow="ALWAYS" />
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


Лейбл без хинта и с чекбоксом справа должен иметь максимальную ширину в 780пх 

    maxWidth="780.0"

Лейбл с хинтом и чекбоксом справа должен иметь максимальную ширину в 750пх

    maxWidth="750.0"

Кнопка на всю ширину без хинта и с чекбоксом справа должна иметь следующие параметры: 

    prefWidth="780.0" minWidth="-Infinity" maxWidth="-Infinity"

Кнопка на всю ширину с хинтом и с чекбоксом справа должна иметь следующие параметры: 

    prefWidth="750.0" minWidth="-Infinity" maxWidth="-Infinity"
    
## Примеры кода

### Подсказка

![](http://seigiard-eaht.github.io/WorkshopTab/text-important.png)


### Подсказка

![](http://seigiard-eaht.github.io/WorkshopTab/label-radiobuttons.png)


### Подсказка

![](http://seigiard-eaht.github.io/WorkshopTab/label-input.png)


### Подсказка

![](http://seigiard-eaht.github.io/WorkshopTab/label-helper-radiobuttons.png)

### Подсказка

![](http://seigiard-eaht.github.io/WorkshopTab/label-helper-checkbox.png)


### Подсказка

![](http://seigiard-eaht.github.io/WorkshopTab/button_full_width-helper-checkbox.png)
