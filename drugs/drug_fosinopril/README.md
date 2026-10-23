<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;fosinopril&quot;}]"></div>

# fosinopril

- **generic name:** fosinopril
- **ATC codes:** `C09AA09`, `C09BA09`
- **DrugBank:** [DB00492](https://go.drugbank.com/drugs/DB00492) · **PubChem:** [CID 55891](https://pubchem.ncbi.nlm.nih.gov/compound/55891)
- **molar mass:** 563.672 g/mol (C30H46NO7P) — DrugBank
- **groups:** approved, investigational

## About

Fosinopril is an ACE inhibitor used to treat high blood pressure and congestive heart failure. It is an approved medicine and remains in use, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425293](https://www.wikidata.org/wiki/Q425293) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosinopril | parent | 563.672 | C30H46NO7P | DrugBank | [55891](https://pubchem.ncbi.nlm.nih.gov/compound/55891) | Hu_1997 |
| fosinoprilat | metabolite | 435.501 | C23H34NO5P | PubChem | [62956](https://pubchem.ncbi.nlm.nih.gov/compound/62956) | Hu_1997 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Hu_1997_caucasian](drugs/drug_fosinopril/Fosinopril_Hu1997_caucasian.md) | — | 1-compartment (no model) | 11 | Hu OY et al., Pharmacokinetics of fosinoprilat in Chi…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb05632.x](https://doi.org/10.1002/j.1552-4604.1997.tb05632.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ chinese](drugs/drug_fosinopril/Fosinopril_Hu1997_chinese.md) | — | 1-compartment (no model) | 11 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ford_1995_MAP](drugs/drug_fosinopril/pd_Ford_1995_MAP.md) | mean arterial pressure change ← fosinoprilat · direct Emax (saturable) effect | — | Ford NF et al., Invasive pharmacodynamics of fosinopril…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04121.x](https://doi.org/10.1002/j.1552-4604.1995.tb04121.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ford_1995_PAWP](drugs/drug_fosinopril/pd_Ford_1995_PAWP.md) | pulmonary artery wedge pressure (PAWP) change ← fosinoprilat · direct linear effect | — | Ford NF et al., Invasive pharmacodynamics of fosinopril…, Journal of clinical pharmac… (1995) | [10.1002/j.1552-4604.1995.tb04121.x](https://doi.org/10.1002/j.1552-4604.1995.tb04121.x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gehr_1993_ACE_inhibition](drugs/drug_fosinopril/pd_Gehr_1993_ACE_inhibition.md) | percentage inhibition of serum ACE activity ← fosinoprilat · direct Emax (saturable) effect | — | Gehr TW et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (1993) | [10.1007/BF00315514](https://doi.org/10.1007/BF00315514) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:30 | 1:33 | 0/2/0 | 2/0/0 | 0/0/0 | 42,889/1,990 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 5/1 | 2/4 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 7  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ford_1995.pdf` | Ford NF et al., Invasive pharmacodynamics of fosinopril…, Journal of clinical pharmac… (1995) | popPK | 8 | [10.1002/j.1552-4604.1995.tb04121.x](https://doi.org/10.1002/j.1552-4604.1995.tb04121.x) | [8522635](https://pubmed.ncbi.nlm.nih.gov/8522635) | The study reports quantitative pharmacokinetic parameters (AUC, Cmax, half-life, Tmax) for fosinoprilat, the active metabolite of fosinopril, in human patients. |

<sub>queue written 2026-10-07T06:29:32.707969+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anfinogenova_2024 | not_relevant | 0 | 0 | The paper analyzes drug-drug interactions in cardiovascular patients and does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of fosinopril. |
| PGx | Ding_2000 | not_relevant | 2 | 0 | The paper is a review discussing ethnic differences and mentions the ACE I/D polymorphism, but it does not report specific pharmacogenomic effects of a gene variant on fosinopril PK/PD parameters. |
| PGx | Filigheddu_2008 | not_relevant | 0 | 0 | The text is a fragment of a review or introduction discussing general hypertension guidelines and fosinopril efficacy, but it does not report specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper is a computational drug repositioning study that mentions fosinopril only as an example of a drug with anti-arrhythmia effects, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Zitta_2000 | irrelevant | 0 | 0 | The study uses fosinopril as an antihypertensive treatment to assess renal function (GFR) via sinistrin and PAH clearance, not to determine the pharmacokinetic parameters of fosinopril itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 06:29 UTC</sub>
