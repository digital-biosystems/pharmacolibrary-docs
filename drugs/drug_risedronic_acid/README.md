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

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.95).">human + animal</span> | [Salek_2017_bone_uptake](drugs/drug_risedronic_acid/pd_Salek_2017_bone_uptake.md) | bone uptake ← 177 Lu-risedronate · model not identified | — | Salek N et al., Production, quality control, and determ…, Journal of labelled compoun… (2017) | [10.1002/jlcr.3466](https://doi.org/10.1002/jlcr.3466) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Giljević_2008_BR](drugs/drug_risedronic_acid/pd_Giljevi_2008_BR.md) | bone resorption rate biomarker turnover ← risedronate | — | Giljević Z, [Differences among bisfosfonates--speci…, Reumatizam (2008) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=risedronic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FDPS (inhibitor), Hydroxylapatite (target), PTGS2 (inducer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:17 | 3:20 | 0/0/0 | 1/1/0 | 0/0/0 | 156,546/1,677 | einfracz / qwen3.8-27b | 7 | 6/0 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 31 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cardozo_2021.pdf` | Cardozo B et al., Osteoporosis treatment with risedronate…, Osteoporosis international… (2021) | popPK | 10 | [10.1007/s00198-021-05944-0](https://doi.org/10.1007/s00198-021-05944-0) | [34002251](https://pubmed.ncbi.nlm.nih.gov/34002251) | The paper describes a population pharmacokinetic model for risedronate in humans, but the evidence provided is limited to the abstract and methods, which contain no numeric parameter values (such as CL or V) or tables. |

<sub>queue written 2026-10-07 03:17 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisedronic_acid%5D&body=Drug%3A%20risedronic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_risedronic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
