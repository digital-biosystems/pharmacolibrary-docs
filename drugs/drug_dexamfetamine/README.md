<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexamfetamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexamfetamine_Roberts2015_final_final_plasma_model&quot;,&quot;label&quot;:&quot;Roberts_2015_final_final_plasma_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# dexamfetamine

- **generic name:** dexamfetamine
- **ATC codes:** `N06BA02`
- **DrugBank:** [DB01576](https://go.drugbank.com/drugs/DB01576) · **PubChem:** none
- **groups:** approved, illicit, investigational

## About

Dexamfetamine is a stimulant medicine used to treat attention deficit hyperactivity disorder and narcolepsy. It is an approved drug used widely for these conditions, though it is a controlled stimulant carrying a boxed warning and is also used illicitly.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1706418](https://www.wikidata.org/wiki/Q1706418) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dexamfetamine (dextroamphetamine) | parent | 135.21 | C9H13N | PubChem | [5826](https://pubchem.ncbi.nlm.nih.gov/compound/5826) | Roberts_2015 |

## Start here

> **Roberts_2015_final_final_plasma_model** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy adults, n = 40. [Run it in the simulator](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md?tab=Simulation) · [record](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 28.3 | L/h | 28.3 L/h | healthy adults | 40 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Roberts_2015_final_final_plasma_model](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md) |
| V | V/F | 377 | L | 377 L | healthy adults | 40 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Roberts_2015_final_final_plasma_model](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Roberts_2015_final_final_plasma_model](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model.md) | ▶ model + simulator | 1-compartment, oral | 4 | Roberts JK et al., A Population Pharmacokinetic Analysis o…, Clinical drug investigation (2015) | [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ final](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final.md) | — | 2-compartment (no model) | 5 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2019_DA](drugs/drug_dexamfetamine/pd_van_2019_DA.md) | extracellular striatal dopamine biomarker turnover ← d-amphetamine (brain extracellular fluid) | — | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dexamfetamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (inducer), ADRA1A (inhibitor), ADRA1B (target), SLC18A2 (inducer), SLC6A2 (negative modulator), SLC6A3 (negative modulator), SLC6A3 (unknown), TAAR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:26 | 1:16 | 1/1/0 | 0/1/0 | 0/0/0 | 84,314/4,170 | ollama / glm-5.3-flash | 4 | 0/4 | 3/1 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `van_2019.pdf` | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | popPK | 8 | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) | [30733244](https://pubmed.ncbi.nlm.nih.gov/30733244) | Population PK of dexamfetamine in plasma/brain ECF is the subject, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-07 00:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aljabasini_2025 | irrelevant | 0 | 0 | This is a zebrafish toxicity study of MDPV; dextroamphetamine is only a reference compound for PPI validation, and no PK disposition parameters (CL, V, ka, half-life) for dexamfetamine are reported. |
| popPK | Aumann_2025 | irrelevant | 0 | 0 | PET/behavioral study using dexamfetamine as a pharmacological challenge probe; no PK parameters (CL, V, ka, half-life) reported. |
| popPK | Fudala_1990 | irrelevant | 0 | 0 | Behavioral conditioning study in rats with no pharmacokinetic parameters reported. |
| popPK | McElroy_2015 | irrelevant | 0 | 0 | Efficacy/safety trial of lisdexamfetamine with no PK parameters reported. |
| popPK | Overholtzer_2026 | irrelevant | 0 | 0 | This is a neuroimaging study of ADHD medication effects on brain structure, with no pharmacokinetic parameters for dexamfetamine reported. |
| popPK | van_2019 | relevant | 8 | 2 | Population PK of dexamfetamine in plasma/brain ECF is the subject, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexamfetamine%5D&body=Drug%3A%20dexamfetamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dexamfetamine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 00:25 UTC</sub>
