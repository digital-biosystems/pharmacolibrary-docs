<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09A&quot;,&quot;href&quot;:&quot;atc/V09A.md&quot;},{&quot;label&quot;:&quot;iodine ioflupane (123I)&quot;}]"></div>

# iodine ioflupane (123I)

- **generic name:** iodine ioflupane (123I)
- **ATC codes:** `V09AB03`
- **DrugBank:** [DB08824](https://go.drugbank.com/drugs/DB08824) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ioflupane I-123 is a radiopharmaceutical used as an imaging agent for brain scans, notably in assessing movement disorders and dementia. It is authorised in the European Union and used in radionuclide imaging, mainly in specialist settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3801359](https://www.wikidata.org/wiki/Q3801359) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:42 | 3:07 | 0/0/0 | 0/0/0 | 0/0/0 | 60,838/3,427 | openai / gpt-6-luna | 7 | 1/5 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=iodine_ioflupane_123i) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SLC6A3 (modulator), SLC6A3 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Booij_2024 | not_relevant | 0 | 0 | The paper reports an association between CYP3A4 inhibitor use and ioflupane binding ratios, but does not assess any gene variant, genotype, or genetically defined phenotype. |
| popPK | Delva_2020 | irrelevant | 0 | 0 | Iodine-123 FP-CIT is only a diagnostic comparator, and no disposition parameters are reported. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Hähnel_2024 | irrelevant | 0 | 0 | Ioflupane is used only for DaTSCAN imaging, and no pharmacokinetic disposition parameters are reported. |
| PGx | Langsteger_2016 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype effect on an ioflupane PK or PD parameter is reported. |
| popPK | Mao_2016 | irrelevant | 0 | 0 | This is a human pharmacodynamic study of carbidopa-levodopa; iodine-123 ioflupane is only mentioned in background, with no disposition parameters reported. |
| popPK | Schuderer_2026 | irrelevant | 0 | 0 | Ioflupane is only an in vitro BBB-translocation positive control, and its numeric result appears only in Fig. 4B, which is not provided. |
| popPK | Takahashi_2017 | irrelevant | 1 | 0 | Human imaging study reports cerebellar ratios over time, not quantitative pharmacokinetic disposition parameters. |
| popPK | Takano_1999 | irrelevant | 1 | 0 | Human biodistribution and dosimetry are described, but no quantitative pharmacokinetic parameter values are provided. |
| popPK | Ye_2021 | irrelevant | 0 | 0 | Ioflupane is only used for DAT imaging, and no quantitative pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
