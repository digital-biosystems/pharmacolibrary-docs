<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;loxoprofen&quot;}]"></div>

# loxoprofen

- **generic name:** loxoprofen
- **ATC codes:** `M01AE19`, `M02AA31`
- **DrugBank:** [DB09212](https://go.drugbank.com/drugs/DB09212) · **PubChem:** [CID 3965](https://pubchem.ncbi.nlm.nih.gov/compound/3965)
- **molar mass:** 246.3016 g/mol (C15H18O3) — DrugBank
- **groups:** approved, investigational

## About

Loxoprofen is a non-steroidal anti-inflammatory drug used to treat painful inflammatory conditions such as periarthritis. It is an approved medication, available as oral and topical products for joint and muscular pain, and is used mainly in Asian countries such as Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2759348](https://www.wikidata.org/wiki/Q2759348) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=loxoprofen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | small intestine | `CYP3A4` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CBR1 (substrate), PTGS1 (target), PTGS2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:54 | 1:36 | 0/0/0 | 0/0/0 | 0/0/0 | 20,695/604 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jang_2024.pdf` | Jang JH et al., Population Pharmacokinetics of Loxoprof…, Daru : journal of Faculty o… (2024) | popPK | 10 | [10.1007/s40199-024-00533-y](https://doi.org/10.1007/s40199-024-00533-y) | [39145828](https://pubmed.ncbi.nlm.nih.gov/39145828) | The paper describes a population pharmacokinetic model for loxoprofen in humans and identifies covariates (BSA, CrCL, albumin), but the specific numeric parameter estimates (means, SDs, typical values) are not explicitly listed in the provided abstract text, only qualitative trends and simulation outcomes. |
| `Kim_2017.pdf` | Kim TH et al., Development of a Physiologically Releva…, Molecular pharmaceutics (2017) | popPK | 9 | [10.1021/acs.molpharmaceut.6b00677](https://doi.org/10.1021/acs.molpharmaceut.6b00677) | [27809538](https://pubmed.ncbi.nlm.nih.gov/27809538) | The study reports a population PK model for loxoprofen in Beagle dogs with specific formulation parameters, but the actual numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Tanaka_2016.pdf` | Tanaka S et al., Prediction of fetal ductus arteriosus c…, International journal of cl… (2016) | pd | 5 | [10.5414/CP202532](https://doi.org/10.5414/CP202532) | [27285464](https://www.ncbi.nlm.nih.gov/pubmed/27285464) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07T01:54:09.721966+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jang_2024 | relevant | 10 | 4 | The paper describes a population pharmacokinetic model for loxoprofen in humans and identifies covariates (BSA, CrCL, albumin), but the specific numeric parameter estimates (means, SDs, typical values) are not explicitly listed in the provided abstract text, only qualitative trends and simulation outcomes. |
| popPK | Kim_2017 | relevant | 9 | 2 | The study reports a population PK model for loxoprofen in Beagle dogs with specific formulation parameters, but the actual numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| PGx | Liang_2026 | not_relevant | 0 | 0 | The paper is a study of traditional Chinese medicine plasters in a rat model and does not investigate pharmacogenomic effects on loxoprofen. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper describes the synthesis and anticancer activity of novel hybrid compounds, not the pharmacogenomics of loxoprofen itself. |
| PGx | Paudel_2019 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A modulation) in a mouse model, not pharmacogenomic effects of gene variants on human PK/PD parameters. |
| PGx | Shrestha_2018 | not_relevant | 0 | 0 | The study investigates metabolic enzymes (CYPs, UGTs) but does not report pharmacogenomic variants or their effects on PK/PD parameters. |
| popPK | Tanaka_2016 | irrelevant | 2 | 0 | The study is a modeling/prediction paper that uses loxoprofen as one of many NSAIDs, but no quantitative PK parameter values for loxoprofen are provided in the evidence (data was collected from literature but not displayed). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
