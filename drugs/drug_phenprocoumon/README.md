<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;phenprocoumon&quot;}]"></div>

# phenprocoumon

- **generic name:** phenprocoumon
- **ATC codes:** `B01AA04`
- **DrugBank:** [DB00946](https://go.drugbank.com/drugs/DB00946) · **PubChem:** [CID 54680692](https://pubchem.ncbi.nlm.nih.gov/compound/54680692)
- **molar mass:** 280.3178 g/mol (C18H16O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Phenprocoumon is a vitamin K antagonist anticoagulant used to treat and prevent blood clots such as pulmonary embolism. It is an approved anticoagulant, used mainly in some European countries, though it has also been withdrawn in some markets.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q267896](https://www.wikidata.org/wiki/Q267896) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="" data-sim="no"></span><span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: </sub> | [Abduljalil_2013_patients on steady-state phenprocoumon](drugs/drug_phenprocoumon/Phenprocoumon_Abduljalil2013_patients_on_steady_state_phenpr.md) | — | — (no model) | 0 | Abduljalil K et al., Quantifying the effect of covariates on…, Clinical pharmacokinetics (2013) | [10.1007/s40262-013-0043-z](https://doi.org/10.1007/s40262-013-0043-z) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenprocoumon).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder/regulator, `ORM1` unknown | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: VKORC1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:12 | 0:17 | 0/0/1 | 0/0/0 | 0/0/0 | 6,595/521 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abduljalil_2013.pdf` | Abduljalil K et al., Quantifying the effect of covariates on…, Clinical pharmacokinetics (2013) | popPK | 10 | [10.1007/s40262-013-0043-z](https://doi.org/10.1007/s40262-013-0043-z) | [23519598](https://pubmed.ncbi.nlm.nih.gov/23519598) | The study reports a population PK/PD model for phenprocoumon in humans with specific numeric clearance values (mL/h) provided in the abstract. |
| `Sinn_1990.pdf` | Sinn D et al., [The treatment basis for anticoagulants…, Tierarztliche Praxis (1990) | popPK | 10 | not captured | [2264055](https://pubmed.ncbi.nlm.nih.gov/2264055) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance, bioavailability) for phenprocoumon in horses. |

<sub>queue written 2026-10-05T15:11:51.086994+00:00</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 15:11 UTC</sub>
