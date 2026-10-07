<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;fludeoxyglucose (18F)&quot;}]"></div>

# fludeoxyglucose (18F)

- **generic name:** fludeoxyglucose (18F)
- **ATC codes:** `V09IX04`
- **DrugBank:** [DB09502](https://go.drugbank.com/drugs/DB09502) · **PubChem:** [CID 68614](https://pubchem.ncbi.nlm.nih.gov/compound/68614)
- **molar mass:** 181.15 g/mol (C6H11FO5) — DrugBank
- **groups:** approved, investigational

## About

Fludeoxyglucose (18F) is a radioactive glucose analogue used as a diagnostic imaging agent, mainly to help detect tumours in PET scans. It is an approved radiopharmaceutical in widespread clinical use for tumour detection, though some related uses remain investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419849](https://www.wikidata.org/wiki/Q419849) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:52 | 2:24 | 0/0/0 | 0/0/0 | 0/0/0 | 84,607/1,433 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 0/8 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fludeoxyglucose_18f) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HK1 (substrate), SLC2A1 (substrate), SLC2A10 (substrate), SLC2A11 (substrate), SLC2A12 (substrate), SLC2A2 (substrate), SLC2A3 (substrate), SLC2A4 (substrate), SLC2A5 (substrate), SLC2A6 (substrate), SLC2A7 (substrate), SLC2A8 (substrate), SLC2A9 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 268 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergstrom_2008 | irrelevant | 0 | 0 | The study uses (18)F-FDG as a diagnostic PET tracer to monitor tumor response to a drug, rather than modeling the pharmacokinetic disposition parameters (CL, V, etc.) of the tracer itself. |
| popPK | Carson_2022 | irrelevant | 0 | 0 | The paper is a review of SV2A PET imaging and does not report pharmacokinetic parameters for fludeoxyglucose_18f. |
| popPK | Chung_2025 | irrelevant | 2 | 1 | The study reports tissue-specific blood flow and extraction fraction parameters for 18F-FDG, not systemic population pharmacokinetic parameters (CL, V, Q, ka) for the drug itself. |
| popPK | Davies_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacology of AZD5363, and 18F-FDG is used only as a diagnostic imaging probe to measure tumor glucose uptake, not as the subject of a pharmacokinetic analysis. |
| popPK | Kamp_2023 | relevant | 9 | 2 | The paper presents a compartmental biokinetic model for 2-[18F]FDG in humans, but the specific numeric transfer coefficients (Table 1) and TIACs (Table 3) are not included in the provided text evidence. |
| popPK | Moroz_2011 | irrelevant | 0 | 0 | The study uses [18F]FDG as a diagnostic imaging agent to monitor tumor response to AZD1152, rather than reporting pharmacokinetic disposition parameters (CL, V, etc.) for the tracer itself. |
| popPK | Muzic_2001 | irrelevant | 2 | 0 | The paper describes a software tool (COMKAT) for compartment modeling and mentions 18F-FDG as an example model type, but does not report original quantitative PK parameter values for a specific study population. |
| popPK | Onos_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for levetiracetam, while 18F-FDG is used only as a PET imaging tracer for pharmacodynamic assessment. |
| popPK | Parodi_2024 | irrelevant | 2 | 1 | The study reports voxel-wise Patlak Ki values (net accumulation rates) for FDG in lung cancer lesions, which are diagnostic imaging parameters rather than standard population pharmacokinetic disposition parameters (CL, V, Q, ka) for the drug itself. |
| popPK | Reinfelder_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of TSH analogs on tracer uptake in cells and mice, not on the population pharmacokinetic parameters (CL, V, etc.) of fludeoxyglucose_18f. |
| popPK | Rey-Bretal_2024 | irrelevant | 2 | 0 | The study focuses on PET imaging metrics (SUV) and glucose metabolism modeling in rats rather than reporting standard population pharmacokinetic parameters (CL, V, Q) for fludeoxyglucose_18f. |
| popPK | Rybczynska_2008 | irrelevant | 0 | 0 | The study uses (18)F-FDG as a diagnostic tracer to measure metabolic changes in rat glioma cells, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Tristão-Pereira_2023 | irrelevant | 0 | 0 | The study uses [18F]FDG-PET as a diagnostic biomarker for cerebral glucose metabolism and neurodegeneration, not as a pharmacokinetic study of the drug's disposition parameters (CL, V, etc.). |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis of the diagnostic accuracy (sensitivity/specificity) of 18F-FDG PET/CT for ovarian cancer, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wang_2024 | relevant | 9 | 2 | The paper reports a compartmental kinetic model for 18F-FDG in humans with specific rate constants (K1, k2, k3, etc.), but the actual numeric parameter values are contained in Tables 1-3 which are not included in the provided evidence text. |
| popPK | Zhong_2026 | irrelevant | 2 | 1 | The paper is a computational simulation study using literature-derived parameters to validate compartmental models, rather than an original pharmacokinetic study reporting new quantitative disposition parameters for fludeoxyglucose_18f. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
