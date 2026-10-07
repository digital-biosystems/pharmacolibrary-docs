<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;doxercalciferol&quot;}]"></div>

# doxercalciferol

- **generic name:** doxercalciferol
- **ATC codes:** `H05BX03`
- **DrugBank:** [DB06410](https://go.drugbank.com/drugs/DB06410) · **PubChem:** [CID 46705423](https://pubchem.ncbi.nlm.nih.gov/compound/46705423)
- **molar mass:** 412.6478 g/mol (C28H44O2) — DrugBank
- **groups:** approved

## About

Doxercalciferol, an ergocalciferol derivative, is used to treat hyperparathyroidism, including secondary hyperparathyroidism of renal origin. It is an approved medicine, classified as an anti-parathyroid agent affecting calcium homeostasis, and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5303688](https://www.wikidata.org/wiki/Q5303688) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:27 | 3:44 | 0/0/0 | 0/0/0 | 0/0/0 | 155,406/1,677 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=doxercalciferol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP27A1 (substrate), VDR (suppressor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bailie_2002 | irrelevant | 2 | 1 | The paper is a review without original quantitative disposition parameters (CL, V) for doxercalciferol, only mentioning the half-life of its metabolite. |
| popPK | Brown_2002 | irrelevant | 0 | 0 | The paper is a mechanistic review discussing the therapeutic properties and clearance of vitamin D analogs, but it does not report quantitative pharmacokinetic parameters for doxercalciferol. |
| popPK | Dennis_2006 | irrelevant | 0 | 0 | This is a clinical review that discusses the pharmacokinetics of doxercalciferol but does not report original quantitative PK parameter values (CL, V, etc.) in the provided text. |
| PGx | Fan_2009 | not_relevant | 0 | 0 | The paper studies the induction of transporters/enzymes by vitamin D analogs in Caco-2 cells and does not report pharmacogenomic effects (gene variant impact) on the PK/PD of doxercalciferol. |
| popPK | Fisher_2024 | irrelevant | 0 | 0 | The paper is a transcriptomic and network biology study of sex-biased adverse events and does not contain pharmacokinetic data for doxercalciferol. |
| popPK | Foissac_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 25-hydroxycholecalciferol (vitamin D3 metabolite), not doxercalciferol. |
| popPK | Foissac_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vitamin D3 (cholecalciferol) and its metabolite 25(OH)D, not doxercalciferol. |
| popPK | Giangreco_2022 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reporting in a pediatric database and does not contain any pharmacokinetic parameters for doxercalciferol. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | The paper is a review on immune system measures and natural products for coronavirus infection, with no mention of doxercalciferol or pharmacokinetic parameters. |
| popPK | Masuda_2006 | irrelevant | 0 | 0 | The study focuses on the metabolism of 1alpha-hydroxyvitamin D2 (an analog) in vitro, not doxercalciferol (1alpha-hydroxyvitamin D3). |
| popPK | Palchak_2026 | irrelevant | 0 | 0 | The study focuses on the formulation of terpenes (carnosic acid, etc.) in polymer micelles and does not involve doxercalciferol or pharmacokinetic parameter estimation. |
| popPK | Pereira_2021 | irrelevant | 0 | 0 | The paper is a review on the neuroprotective effects of seaweed diets and contains no pharmacokinetic data for doxercalciferol. |
| popPK | Shapiro_2016 | irrelevant | 0 | 0 | The study investigates vitamin D3 and the pharmacokinetics of aromatase inhibitors (anastrozole/letrozole), not doxercalciferol. |
| popPK | Shenoy_2026 | irrelevant | 0 | 0 | The paper is an in silico study on ergosterol and ezetimibe regarding NPC1L1 interactions and does not involve doxercalciferol. |
| popPK | Thiel_2023 | irrelevant | 0 | 0 | This is a review article discussing the mechanisms and clinical use of vitamin D analogues (including doxercalciferol) in Alzheimer's disease, but it does not report original quantitative pharmacokinetic parameters (CL, V, t1/2) for doxercalciferol. |
| popPK | Wimalawansa_2025 | irrelevant | 0 | 0 | The paper is a systematic review on Vitamin D and SARS-CoV-2, containing no pharmacokinetic data or parameter values for doxercalciferol. |
| popPK | Wu-Wong_2011 | irrelevant | 0 | 0 | The study investigates a novel VDR modulator (VS-105) in rats, with doxercalciferol mentioned only as a background comparator and no pharmacokinetic parameters for doxercalciferol reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
