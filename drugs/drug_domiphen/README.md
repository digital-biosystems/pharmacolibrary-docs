<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;domiphen&quot;}]"></div>

# domiphen

- **generic name:** domiphen
- **ATC codes:** `A01AB06`
- **DrugBank:** [DB11594](https://go.drugbank.com/drugs/DB11594) · **PubChem:** [CID 3149](https://pubchem.ncbi.nlm.nih.gov/compound/3149)
- **molar mass:** 334.567 g/mol (C22H40NO) — DrugBank
- **groups:** approved

## About

Domiphen is an antiseptic used for local treatment of infections in the mouth, such as in stomatological preparations. It is an approved drug, though no European Union authorisation is recorded in the available facts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27098012](https://www.wikidata.org/wiki/Q27098012) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Biosca_2019_Growth_inhibition](drugs/drug_domiphen/pd_Biosca_2019_Growth_inhibition.md) | P. falciparum growth inhibition ← domiphen bromide · direct sigmoid Emax (Hill) effect | — | Biosca A et al., An ImmunoPEGliposome for Targeted Antim…, Pharmaceutics (2019) | [10.3390/pharmaceutics11070341](https://doi.org/10.3390/pharmaceutics11070341) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 00:40 | 0:28 | 0/0/0 | 1/0/0 | 0/0/0 | 16,111/633 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/2 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Long_2014.pdf` | Long Y et al., Inhibition of HERG potassium channels b…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.05.002](https://doi.org/10.1016/j.ejphar.2014.05.002) | [24846011](https://www.ncbi.nlm.nih.gov/pubmed/24846011) | metadata signals extractable PD data (IC50) |
| `Long_2021.pdf` | Long Y et al., Proarrhythmic effects induced by benzet…, Toxicology and applied phar… (2021) | pd | 4 | [10.1016/j.taap.2021.115731](https://doi.org/10.1016/j.taap.2021.115731) | [34592322](https://www.ncbi.nlm.nih.gov/pubmed/34592322) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T00:39:49.522615+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biosca_2019 | irrelevant | 0 | 0 | The paper is an in-vitro nanomedicine study focusing on liposome formulation and antimalarial activity, reporting no pharmacokinetic parameters for domiphen. |
| popPK | Chen_2006 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying surfactants in bioprocess intermediates, not a pharmacokinetic study of domiphen in a biological subject. |
| popPK | Goerke_2005 | irrelevant | 0 | 0 | The paper describes a bioprocess purification method using domiphen bromide as a reagent, not a pharmacokinetic study of domiphen. |
| popPK | Hu_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study reporting MIC and MBC values, not a pharmacokinetic study with disposition parameters for domiphen. |
| PD | Hu_2021 | not_relevant | 2 | 1 | The paper reports antimicrobial susceptibility (MIC, MBC, MBEC50) and synergy (FIC) data, which are pharmacological endpoints but do not constitute a pharmacodynamic (exposure-response) model with parameters like Emax or EC50 for the drug's effect on a physiological target. |
| popPK | Long_2014 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Long_2021 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper is a mechanistic antimicrobial study focusing on domiphen's interaction with bacterial enzymes and membranes, not a pharmacokinetic study reporting disposition parameters. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper describes antimicrobial synergy and in vivo efficacy but does not report pharmacokinetic data or numeric exposure-response/dose-response parameters for domiphen. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
