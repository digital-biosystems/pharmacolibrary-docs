<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;levamlodipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levamlodipine_Li2025_base&quot;,&quot;label&quot;:&quot;Li_2025_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levamlodipine_Li2025_final&quot;,&quot;label&quot;:&quot;Li_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/Levamlodipine_Li2025_final.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# levamlodipine

- **generic name:** levamlodipine
- **ATC codes:** `C08CA17`
- **DrugBank:** [DB09237](https://go.drugbank.com/drugs/DB09237) · **PubChem:** [CID 9822750](https://pubchem.ncbi.nlm.nih.gov/compound/9822750)
- **molar mass:** 408.88 g/mol (C20H25ClN2O5) — DrugBank
- **groups:** approved, investigational

## About

Levamlodipine, the single active enantiomer of amlodipine, is a calcium channel blocker used to treat high blood pressure. It is an approved medicine and is used in some countries as an alternative to standard amlodipine, though it is not authorised across the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6534831](https://www.wikidata.org/wiki/Q6534831) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levamlodipine | parent | 408.88 | C20H25ClN2O5 | DrugBank | [9822750](https://pubchem.ncbi.nlm.nih.gov/compound/9822750) | Li_2025 |
| levamlodipine besylate | metabolite | 567.05 | C26H31ClN2O8S | PubChem | [11365087](https://pubchem.ncbi.nlm.nih.gov/compound/11365087) | Li_2025 |

## Start here

> **Li_2025_base** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> smoking patients, n = &gt;=43. [Run it in the simulator](drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md?tab=Simulation) · [record](drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Li_2025_base](drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li G et al., Model-Informed Precision Dosing of Leva…, Drug design, development an… (2025) | [10.2147/DDDT.S501762](https://doi.org/10.2147/DDDT.S501762) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [↳ final](drugs/drug_levamlodipine/Levamlodipine_Li2025_final.md) | ▶ model + simulator | 1-compartment, oral | 3 |  |  |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levamlodipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | ileum | `SLC10A2` inhibitor | DrugBank actor |
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLC22A5` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (target), CACNA1D (target), NOS2 (inducer), NOS2 (target), NOS3 (inducer), NOS3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:30 | 4:42 | 2/0/0 | 0/0/0 | 0/0/0 | 70,794/12,920 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2009.pdf` | Kim KA et al., Effect of cytochrome P450 3A5*3 genotyp…, Chirality (2009) | pgx | 8 | [10.1002/chir.20588](https://doi.org/10.1002/chir.20588) | [18752284](https://www.ncbi.nlm.nih.gov/pubmed/18752284) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-07T03:26:02.258781+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kim_2009 | not_relevant | 0 | 0 | The paper studies amlodipine, not levamlodipine. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | The study is an in-vitro spectroscopic and molecular docking analysis of binding to hemoglobin, not a pharmacokinetic study reporting disposition parameters. |
| PD | Xu_2019 | not_relevant | 0 | 0 | The paper investigates the in vitro binding interaction between levamlodipine and hemoglobin using spectroscopy and docking, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:26 UTC</sub>
