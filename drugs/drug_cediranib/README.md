<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;cediranib&quot;}]"></div>

# cediranib

- **generic name:** cediranib
- **ATC codes:** `L01EK02`
- **DrugBank:** [DB04849](https://go.drugbank.com/drugs/DB04849) · **PubChem:** [CID 9933475](https://pubchem.ncbi.nlm.nih.gov/compound/9933475)
- **molar mass:** 450.5053 g/mol (C25H27FN4O3) — DrugBank
- **groups:** investigational

## About

Cediranib is an investigational anticancer drug, a VEGFR tyrosine kinase inhibitor studied as a treatment for cancer. It is not approved for use; it remains under clinical investigation and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057052](https://www.wikidata.org/wiki/Q5057052) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cediranib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: KDR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:53 | 1:46 | 0/0/0 | 0/0/0 | 0/0/0 | 12,590/1,417 | openai / gpt-6-luna | 3 | 1/2 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2017.pdf` | Li J et al., Population pharmacokinetic and exposure…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13266](https://doi.org/10.1111/bcp.13266) | [28213941](https://pubmed.ncbi.nlm.nih.gov/28213941) | Human cediranib population-PK model is described, but numeric disposition parameter values are not provided. |
| `Al-Huniti_2018.pdf` | Al-Huniti N et al., Population exposure-safety analysis of…, British journal of clinical… (2018) | pd | 5 | [10.1111/bcp.13495](https://doi.org/10.1111/bcp.13495) | [29274100](https://www.ncbi.nlm.nih.gov/pubmed/29274100) | metadata signals extractable PD data (indirectresponse) |
| `Gu_2014.pdf` | Gu R et al., The multikinase inhibitor axitinib is a…, Biochemical pharmacology (2014) | pgx | 7 | [10.1016/j.bcp.2014.01.016](https://doi.org/10.1016/j.bcp.2014.01.016) | [24462920](https://www.ncbi.nlm.nih.gov/pubmed/24462920) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-06T22:53:12.678339+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adamu_2024 | not_relevant | 0 | 0 | The review reports BRCA status associations with progression-free survival for treatment combinations, but no pharmacogenomic effect on a cediranib PK or PD parameter. |
| popPK | Al-Huniti_2018 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| popPK | Grkovski_2017 | irrelevant | 0 | 0 | The kinetic parameters are for the imaging tracer 18F-FMISO, not cediranib. |
| PGx | Gu_2014 | not_relevant | 0 | 0 | The paper studies axitinib inhibition of CYP enzymes, not genetic effects on cediranib PK or PD. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper evaluates ctDNA dynamics as response biomarkers, not how a gene variant or genotype changes a cediranib PK or PD parameter. |
| PGx | Lassen_2013 | not_relevant | 0 | 0 | Reports drug–drug interactions with ketoconazole and rifampicin, not a genetic or phenotypic effect on cediranib PK/PD. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | XRCC1 polymorphisms were assessed for association with PFS, but no association was found and no genotype effect on cediranib PK or PD parameters is reported. |
| PGx | Lheureux_2020 | not_relevant | 0 | 0 | Genomic resistance mechanisms are associated with clinical outcomes on cediranib plus olaparib, but no pharmacokinetic or pharmacodynamic parameter of cediranib is reported. |
| popPK | Li_2017 | relevant | 10 | 1 | Human cediranib population-PK model is described, but numeric disposition parameter values are not provided. |
| PGx | Tao_2009 | not_relevant | 0 | 0 | The study examines cediranib inhibiting ABCB1/ABCC1 transport in cell models, not how a genetic variant or phenotype changes cediranib’s PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
