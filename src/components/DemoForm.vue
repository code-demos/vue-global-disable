<template>
  <Form
    id="components-form-demo-validate-other"
    :form="form"
    v-bind="formItemLayout"
    @submit="handleSubmit"
  >
    <FormItem label="Plain Text">
      <span class="ant-form-text">China</span>
    </FormItem>
    <FormItem label="Select" has-feedback>
      <Select
        v-decorator="[
          'select',
          { rules: [{ required: true, message: 'Please select your country!' }] },
        ]"
        placeholder="Please select a country"
      >
        <Option value="china">China</Option>
        <Option value="usa">U.S.A</Option>
      </Select>
    </FormItem>

    <FormItem label="Select[multiple]">
      <Select
        v-decorator="[
          'select-multiple',
          {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          },
        ]"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <Option value="red">Red</Option>
        <Option value="green">Green</Option>
        <Option value="blue">Blue</Option>
      </Select>
    </FormItem>

    <FormItem label="InputNumber">
      <InputNumber v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
      <span class="ant-form-text">machines</span>
    </FormItem>

    <FormItem label="Switch">
      <ASwitch v-decorator="['switch', { valuePropName: 'checked' }]" />
    </FormItem>

    <FormItem label="Slider">
      <Slider
        v-decorator="['slider']"
        :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"
      />
    </FormItem>

    <FormItem label="Radio.Group">
      <RadioGroup v-decorator="['radio-group']">
        <Radio value="a">item 1</Radio>
        <Radio value="b">item 2</Radio>
        <Radio value="c">item 3</Radio>
      </RadioGroup>
    </FormItem>

    <FormItem label="Radio.Button">
      <RadioGroup v-decorator="['RadioButton']">
        <RadioButton value="a">item 1</RadioButton>
        <RadioButton value="b">item 2</RadioButton>
        <RadioButton value="c">item 3</RadioButton>
      </RadioGroup>
    </FormItem>

    <FormItem label="Checkbox.Group">
      <CheckboxGroup
        v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
        style="width: 100%;"
      >
        <Row>
          <ACol :span="8">
            <Checkbox value="A">A</Checkbox>
          </ACol>
          <ACol :span="8">
            <Checkbox disabled value="B">B</Checkbox>
          </ACol>
          <ACol :span="8">
            <Checkbox value="C">C</Checkbox>
          </ACol>
          <ACol :span="8">
            <Checkbox value="D">D</Checkbox>
          </ACol>
          <ACol :span="8">
            <Checkbox value="E">E</Checkbox>
          </ACol>
        </Row>
      </CheckboxGroup>
    </FormItem>

    <FormItem label="Rate">
      <Rate v-decorator="['rate', { initialValue: 3.5 }]" allow-half />
    </FormItem>

    <FormItem label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <Upload
        v-decorator="[
          'upload',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <Button>
          <Icon type="upload" />Click to upload
        </Button>
      </Upload>
    </FormItem>

    <FormItem label="Dragger">
      <div class="dropbox">
        <Dragger
          v-decorator="[
            'dragger',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="files"
          action="/upload.do"
        >
          <p class="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </Dragger>
      </div>
    </FormItem>

    <FormItem :wrapper-col="{ span: 12, offset: 6 }">
      <Button type="primary" html-type="submit">Submit</Button>
    </FormItem>
  </Form>
</template>

<script>
import {
  Form,
  Button,
  Col as ACol,
  Row,
  Select,
  Icon,
  Checkbox,
  Radio,
  InputNumber,
  Switch as ASwitch,
  Slider,
  Rate,
  Upload
} from "ant-design-vue";

const { Item: FormItem } = Form;
const { Option } = Select;
const { Group: CheckboxGroup } = Checkbox;
const { Group: RadioGroup, Button: RadioButton } = Radio;
const { Dragger } = Upload;

export default {
  components: {
    Form,
    Button,
    ACol,
    Row,
    Select,
    Option,
    Icon,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    RadioButton,
    FormItem,
    InputNumber,
    ASwitch,
    Slider,
    Rate,
    Upload,
    Dragger
  },
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "validate_other" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err /* values */) => {
        if (!err) {
          //   console.log('Received values of form: ', values);
        }
      });
    },
    normFile(e) {
      //   console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  }
};
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>