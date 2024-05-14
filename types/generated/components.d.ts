import type { Schema, Attribute } from '@strapi/strapi';

export interface DataFaq extends Schema.Component {
  collectionName: 'components_data_faqs';
  info: {
    displayName: 'faq';
    icon: 'question';
  };
  attributes: {
    question: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    answer: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 512;
      }>;
  };
}

export interface OperationHour extends Schema.Component {
  collectionName: 'components_operation_hours';
  info: {
    displayName: 'hour';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    monday: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    tuesday: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    wednesday: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    thursday: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    friday: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    saturday: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    sunday: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    from: Attribute.Time & Attribute.Required & Attribute.Unique;
    to: Attribute.Time & Attribute.Required & Attribute.Unique;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.faq': DataFaq;
      'operation.hour': OperationHour;
    }
  }
}
