<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;risedronic acid&quot;}]"></div>

# risedronic acid

- **generic name:** risedronic acid
- **ATC codes:** `M05BA07`, `M05BB02`, `M05BB07`
- **DrugBank:** [DB00884](https://go.drugbank.com/drugs/DB00884) · **PubChem:** [CID 5245](https://pubchem.ncbi.nlm.nih.gov/compound/5245)
- **molar mass:** 283.1123 g/mol (C7H11NO7P2) — DrugBank
- **groups:** approved, investigational

## About

Risedronic acid is a bisphosphonate used to treat osteoporosis and other bone diseases. It is an approved medicine, widely used for bone conditions, and is also available in combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408724](https://www.wikidata.org/wiki/Q408724) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:17 | 3:20 | 0/0/0 | 1/1/0 | 0/0/0 | 156,546/1,677 | einfracz / qwen3.8-27b | 7 | 6/0 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Salek_2017_bone_uptake](drugs/drug_risedronic_acid/pd_Salek_2017_bone_uptake.md) | bone uptake ← 177 Lu-risedronate · model not identified | — | Salek N et al., Production, quality control, and determ…, Journal of labelled compoun… (2017) | [10.1002/jlcr.3466](https://doi.org/10.1002/jlcr.3466) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Giljević_2008_BR](drugs/drug_risedronic_acid/pd_Giljevi_2008_BR.md) | bone resorption rate biomarker turnover ← risedronate | — | Giljević Z, [Differences among bisfosfonates--speci…, Reumatizam (2008) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=risedronic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FDPS (inhibitor), Hydroxylapatite (target), PTGS2 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cardozo_2021.pdf` | Cardozo B et al., Osteoporosis treatment with risedronate…, Osteoporosis international… (2021) | popPK | 10 | [10.1007/s00198-021-05944-0](https://doi.org/10.1007/s00198-021-05944-0) | [34002251](https://pubmed.ncbi.nlm.nih.gov/34002251) | The paper describes a population pharmacokinetic model for risedronate in humans, but the evidence provided is limited to the abstract and methods, which contain no numeric parameter values (such as CL or V) or tables. |

<sub>queue written 2026-10-07T03:17:08.496336+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper is a methodological study on machine learning for drug synergy prediction in cancer cell lines and does not contain any pharmacokinetic data for risedronic_acid. |
| popPK | Cardozo_2021 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for risedronate in humans, but the evidence provided is limited to the abstract and methods, which contain no numeric parameter values (such as CL or V) or tables. |
| popPK | Cuffaro_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on antibody-drug conjugates involving zoledronic acid and its analogs; risedronate is only mentioned in the context of previous work or as a comparator class, with no PK parameters reported for risedronic acid. |
| popPK | Denk_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the isotope 41Ca in response to risedronate treatment, not the pharmacokinetic parameters of risedronate itself. |
| popPK | He_2026 | irrelevant | 3 | 2 | The study reports non-compartmental bioequivalence parameters (Cmax, AUC) but does not provide the specific compartmental/population PK parameters (CL, V, Q, ka) or model structure required by the strict definition. |
| popPK | Jörg_2022 | irrelevant | 0 | 0 | The paper is a mathematical modeling study of bone turnover and osteoporosis treatment, but it does not report pharmacokinetic parameters (CL, V, etc.) for risedronic acid specifically, nor does it appear to focus on risedronic acid as the subject drug (it mentions bisphosphonates generally or alendronate). |
| popPK | Kashmoola_2026 | irrelevant | 0 | 0 | The paper is a review on polypharmacy in type 2 diabetes and its impact on bone health, with no mention of risedronic acid or any pharmacokinetic parameters. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The study focuses on machine learning for antiviral drug combinations and risedronate is only mentioned as a candidate compound with concentration-dependent effects, with no pharmacokinetic parameters reported. |
| popPK | McClung_2020 | irrelevant | 0 | 0 | The text is a historical review of the drug's development and commercial history, containing no original quantitative pharmacokinetic parameters. |
| popPK | Stoch_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of odanacatib, not risedronic acid. |
| popPK | Vélez_2023 | irrelevant | 0 | 0 | The paper reports in-vitro physicochemical properties and cytotoxicity of risedronate coordination complexes, not pharmacokinetic disposition parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper focuses on zoledronic acid pharmacokinetics/pharmacodynamics, mentioning risedronate only as a historical comparator with no PK data provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
