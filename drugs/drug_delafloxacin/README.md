<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;delafloxacin&quot;}]"></div>

# delafloxacin

- **generic name:** delafloxacin
- **ATC codes:** `J01MA23`
- **DrugBank:** [DB11943](https://go.drugbank.com/drugs/DB11943) · **PubChem:** [CID 487101](https://pubchem.ncbi.nlm.nih.gov/compound/487101)
- **molar mass:** 440.76 g/mol (C18H12ClF3N4O4) — DrugBank
- **groups:** approved, investigational

## About

Delafloxacin is a fluoroquinolone antibiotic used to treat bacterial infections, including community-acquired infections. It is approved and authorised in the European Union, though it remains a relatively specialised antibacterial rather than a widely used one.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5253067](https://www.wikidata.org/wiki/Q5253067) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Alexandre_2025_Totalpop](drugs/drug_delafloxacin/pd_Alexandre_2025_Totalpop.md) | total viable population ← delafloxacin · inhibition effect | — | Alexandre K et al., Effect of pH on antimicrobial activity…, Microbiology spectrum (2025) | [10.1128/spectrum.02338-25](https://doi.org/10.1128/spectrum.02338-25) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Lepak_2016_CFU](drugs/drug_delafloxacin/pd_Lepak_2016_CFU.md) | organism burden in the lung (CFU counts) biomarker turnover ← delafloxacin | — | Lepak AJ et al., In Vivo Pharmacodynamic Target Assessme…, Antimicrobial agents and ch… (2016) | [10.1128/AAC.00647-16](https://doi.org/10.1128/AAC.00647-16) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=delafloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inducer, `CYP2E1` inducer, `CYP3A4` inducer, `UGT1A1` substrate, `UGT1A3` substrate, `UGT2B15` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCG2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCB5 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:49 | 0:34 | 0/0/0 | 2/0/0 | 0/0/0 | 37,108/1,515 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lepak_2016.pdf` | Lepak AJ et al., In Vivo Pharmacodynamic Target Assessme…, Antimicrobial agents and ch… (2016) | popPK | 8 | [10.1128/AAC.00647-16](https://doi.org/10.1128/AAC.00647-16) | [27216072](https://pubmed.ncbi.nlm.nih.gov/27216072) | Reports single-dose non-compartmental PK parameters (Cmax, AUC, t1/2) for delafloxacin in mice, though population PK values (CL, V) are not explicitly listed. |

<sub>queue written 2026-10-07T11:49:07.752734+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alexandre_2025 | irrelevant | 1 | 0 | This is an in-vitro pharmacodynamic study measuring MICs and bacterial killing, not a pharmacokinetic study; PK parameters for simulations are in the supplementary material which is not provided. |
| popPK | Crass_2019 | irrelevant | 0 | 0 | The paper is a review discussing regulatory guidance for renal function estimation using delafloxacin only as an example, without providing original quantitative PK parameter values. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in-vitro investigation of MICs and efficacy of delafloxacin and other drugs against Mycobacterium abscessus, not a pharmacokinetic study. |
| popPK | Lv_2024 | relevant | 10 | 1 | The study is a population PK/PD trial for delafloxacin in humans, but the specific numeric parameter estimates (CL, V, Q, etc.) are located in Table 2, which is in the supplemental material and not provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
