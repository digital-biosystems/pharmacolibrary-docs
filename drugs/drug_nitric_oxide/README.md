<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;nitric oxide&quot;}]"></div>

# nitric oxide

- **generic name:** nitric oxide
- **ATC codes:** `R07AX01`
- **DrugBank:** [DB00435](https://go.drugbank.com/drugs/DB00435) · **PubChem:** [CID 145068](https://pubchem.ncbi.nlm.nih.gov/compound/145068)
- **molar mass:** 30.0061 g/mol (NO) — DrugBank
- **groups:** approved, investigational

## About

Nitric oxide, a gaseous signaling molecule with bronchodilator activity, is used as an inhaled respiratory medicine, mainly to treat dangerous blood-pressure problems in the lungs of newborn babies. It is an approved medicine used in specialised hospital settings, and it is also being studied for other investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q207843](https://www.wikidata.org/wiki/Q207843) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:00 | 1:02 | 0/0/0 | 0/0/0 | 0/0/0 | 112,174/2,709 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nitric_oxide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `ALDH2` inhibitor, `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GUCY1A1 (stimulator), GUCY1A2 (inducer), GUCY1B1 (stimulator), IDO1 (inhibitor), MT1A (disruptor), NOS3 (product).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1585 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2008 | irrelevant | 2 | 0 | The paper is a qualitative review analyzing discrepancies in published NO concentration data and does not report original quantitative pharmacokinetic disposition parameters (CL, V, etc.) for nitric oxide. |
| popPK | Frey_2018 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of riociguat, a drug that targets the nitric oxide pathway, but nitric oxide itself is not the subject drug for which PK parameters are reported. |
| popPK | Fritsch_2024 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of vericiguat, a soluble guanylate cyclase stimulator, and does not report PK parameters for nitric oxide itself, which is only mentioned as a pathway component. |
| popPK | García-Río_2011 | irrelevant | 2 | 0 | The paper is a review of diagnostic compartmental models for exhaled NO to characterize asthma, not a pharmacokinetic study of NO as a dosed drug, and no numeric parameter values are provided in the evidence. |
| popPK | George_2004 | irrelevant | 2 | 0 | The paper describes a physiologic model for pulmonary gas exchange of endogenous exhaled nitric oxide, not pharmacokinetic disposition parameters (CL, Vd) for nitric oxide as an administered drug, and no numeric values are provided. |
| popPK | Högman_2022 | irrelevant | 0 | 0 | The paper investigates nitric oxide as a diagnostic biomarker for lung function (alveolar NO/CANO) in COPD patients, not as a pharmacokinetic drug subject with disposition parameters like clearance or volume. |
| popPK | Kotani_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for astegolimab, not nitric oxide; nitric oxide is only mentioned as a biomarker (FeNO). |
| popPK | Lei_2025 | irrelevant | 0 | 0 | The study measures fractional exhaled nitric oxide as a respiratory health outcome marker, not pharmacokinetic parameters of nitric oxide as a drug. |
| popPK | Ly_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tezepelumab, not nitric oxide (FeNO is a biomarker/response variable, not the subject drug). |
| popPK | Morais_2019 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic study of diosgenin, where nitric oxide is only measured as a biomarker of antioxidant effect rather than as the subject drug for PK profiling. |
| popPK | Mülsch_1994 | irrelevant | 0 | 0 | The paper is a mechanistic study on nitrogen monoxide (NO) transport and DNIC complexes, containing no pharmacokinetic parameters (CL, V, t1/2) for NO. |
| popPK | Permeisari_2022 | irrelevant | 1 | 0 | The paper is a review of renal protective agents (including nitric oxide) for preventing AKI post-CPB and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for nitric oxide itself. |
| popPK | Titze_2010 | irrelevant | 0 | 0 | The paper discusses sodium sensing and hypertension mechanisms, mentioning nitric oxide only in the context of endothelial nitric oxide synthase expression, with no pharmacokinetic parameters or modeling of nitric oxide. |
| popPK | Weitzberg_2002 | irrelevant | 0 | 0 | The study investigates nasal nitric oxide concentrations related to sinus ventilation mechanics, not the pharmacokinetic disposition parameters (clearance, volume, etc.) of nitric oxide as a dosed drug. |
| popPK | Yildirim_2026 | irrelevant | 0 | 0 | The study investigates the vasorelaxant pharmacodynamics of BPC 157 on human arterial rings, with nitric oxide serving as a signaling mechanism rather than the subject drug for pharmacokinetic analysis. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics and pharmacodynamics of dupilumab, using fractional exhaled nitric oxide (FeNO) only as a covariate rather than as the subject drug. |
| popPK | Zhu_2017 | irrelevant | 0 | 0 | The study reports PK parameters for lebrikizumab, while nitric oxide is only a biomarker (FeNO), not the subject drug. |
| popPK | Świerczek_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dexamethasone in rats, with nitric oxide serving only as a biomarker for inflammation, not the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
