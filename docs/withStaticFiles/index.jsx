import React from 'react';
import { HelpImagePng } from './helpImage';
import { group1_data } from './group_1';
import { filter1_data } from './filter_1';
import { search1_data } from './search_1';
import { overall_data } from './overall';
import { columnchooser1_data } from './column_chooser';
import { templates1_data } from './templates_1';
import { templates2_data } from './templates_2';
import { templates3_data } from './templates_3';
import { templates4_data } from './templates_4';
export const HelpImageGroup1 = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={group1_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);

export const ImgFilter1 = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={filter1_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);

export const SearchImage = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={search1_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);

export const OverallImage = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={overall_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);

export const ColumnChooserImage = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={columnchooser1_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);

export const TemplatesImage_1 = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={templates1_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);

export const TemplatesImage_2 = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={templates2_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);

export const TemplatesImage_3 = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={templates3_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);

export const TemplatesImage_4 = ({ className = '', imgMaxWidth = null }) => (
  <HelpImagePng
    data={templates4_data}
    className={className}
    imgMaxWidth={imgMaxWidth}
  />
);
