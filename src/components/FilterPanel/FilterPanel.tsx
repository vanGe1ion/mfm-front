import BorderedSegment from "@components/BorderedSegment/BorderedSegment";
import React, { FC } from "react";
import { BaseContainer } from "./style";
import { IFilterChanged, IGetMoviesParams } from "@globalTypes";
import VoteRange from "@components/VoteRange/VoteRange";
import YearSelect from "@components/YearSelect/YearSelect";
import { useTranslation } from "react-i18next";

const FilterPanel: FC<IFilterChanged> = ({ filters, onChange }) => {
  const { voteAverage } = filters!;
  const { t } = useTranslation();

  const rangeChangeHandler = (rangeValue: number | number[]): void => {
    if (Array.isArray(rangeValue))
      onChange!({
        ...filters,
        voteAverage: { gte: rangeValue[0], lte: rangeValue[1] },
      } as IGetMoviesParams);
  };

  const selectChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    onChange!({
      ...filters,
      primaryReleaseYear: +e.target.value,
    } as IGetMoviesParams);
  };

  return (
    <BorderedSegment title={t("filterPanel")}>
      <BaseContainer>
        <VoteRange
          voteAverage={voteAverage!}
          onAfterChange={rangeChangeHandler}
        />
        <YearSelect onChange={selectChangeHandler} />
      </BaseContainer>
    </BorderedSegment>
  );
};

export default FilterPanel;
