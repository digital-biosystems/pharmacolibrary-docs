<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;paricalcitol&quot;}]"></div>

# paricalcitol

- **generic name:** paricalcitol
- **ATC codes:** `H05BX02`
- **DrugBank:** [DB00910](https://go.drugbank.com/drugs/DB00910) · **PubChem:** [CID 5281104](https://pubchem.ncbi.nlm.nih.gov/compound/5281104)
- **molar mass:** 416.6365 g/mol (C27H44O3) — DrugBank
- **groups:** approved, investigational

## About

Paricalcitol is a vitamin D analogue used to treat secondary hyperparathyroidism in patients with kidney disease or kidney failure. It is an approved medicine and is used in clinical practice, mainly in the care of patients with chronic renal insufficiency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q155746](https://www.wikidata.org/wiki/Q155746) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:29 | 0:56 | 0/0/0 | 2/0/0 | 0/0/0 | 28,709/2,414 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu-Wong_2007_PAI_1](drugs/drug_paricalcitol/pd_Wu_Wong_2007_PAI_1.md) | plasminogen activator inhibitor-1 ← paricalcitol · direct sigmoid Emax (Hill) effect | — | Wu-Wong JR et al., Vitamin D analogs modulate the expressi…, Journal of vascular research (2007) | [10.1159/000097812](https://doi.org/10.1159/000097812) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu-Wong_2007_THBS1](drugs/drug_paricalcitol/pd_Wu_Wong_2007_THBS1.md) | thrombospondin-1 ← paricalcitol · direct sigmoid Emax (Hill) effect | — | Wu-Wong JR et al., Vitamin D analogs modulate the expressi…, Journal of vascular research (2007) | [10.1159/000097812](https://doi.org/10.1159/000097812) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu-Wong_2007_TM](drugs/drug_paricalcitol/pd_Wu_Wong_2007_TM.md) | thrombomodulin ← paricalcitol · direct sigmoid Emax (Hill) effect | — | Wu-Wong JR et al., Vitamin D analogs modulate the expressi…, Journal of vascular research (2007) | [10.1159/000097812](https://doi.org/10.1159/000097812) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wu-Wong_2011_VDR](drugs/drug_paricalcitol/pd_Wu_Wong_2011_VDR.md) | VDR expression ← paricalcitol · direct sigmoid Emax (Hill) effect | — | Wu-Wong JR et al., Differential effects of vitamin d recep…, Cardiovascular drugs and th… (2011) | [10.1007/s10557-011-6287-7](https://doi.org/10.1007/s10557-011-6287-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=paricalcitol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP24A1 (substrate), VDR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Noertersheuser_2012.pdf` | Noertersheuser PA et al., Exposure-clinical response analysis of…, Journal of clinical pharmac… (2012) | popPK | 10 | [10.1177/0091270011412966](https://doi.org/10.1177/0091270011412966) | [21940716](https://pubmed.ncbi.nlm.nih.gov/21940716) | The abstract provides quantitative population PK parameters (oral clearance, bioavailability) for paricalcitol in humans, though specific volume or half-life values are not listed in the provided text. |

<sub>queue written 2026-10-07T10:28:53.860305+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Negri_2014 | not_relevant | 2 | 1 | The text is a general review discussing calcitriol resistance and VDR polymorphisms in the context of non-selective VDRAs, mentioning paricalcitol only as a potential alternative for resistant patients, but it does not report a specific pharmacogenomic effect on a PK or PD parameter of paricalcitol. |
| PGx | Papadimitriou_2023 | not_relevant | 0 | 0 | The paper discusses clinical efficacy (autoantibody reversion) and safety (calcium levels) but does not report pharmacogenomic data or genotype-drug interactions affecting paricalcitol PK/PD parameters. |
| PGx | Shay_2016 | not_relevant | 0 | 0 | The text is a table of contents for a conference and contains no specific data or findings regarding pharmacogenomics or paricalcitol. |
| popPK | Sprague_2016 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (iPTH levels) of phosphate binders on paricalcitol, not quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Wu-Wong_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of paricalcitol's effect on PAI-1 expression in vascular cells and does not report any pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Wu-Wong_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of gene expression, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Wu-Wong_2011 | irrelevant | 0 | 0 | This is an in vitro mechanistic study measuring gene expression and enzyme activity, not pharmacokinetic parameters like clearance or volume. |
| popPK | Wu-Wong_2011_2 | irrelevant | 0 | 0 | The study investigates a novel VDR modulator (VS-105) and mentions paricalcitol only as a comparator, without reporting any pharmacokinetic parameters for paricalcitol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
