<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nebivolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nebivolol_Marques2022_reference&quot;,&quot;label&quot;:&quot;Marques_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# nebivolol

- **generic name:** nebivolol
- **ATC codes:** `C07AB12`, `C07BB12`, `C07FB12`, `C09BX07`, `C09DX05`, `C10BX22`
- **DrugBank:** [DB04861](https://go.drugbank.com/drugs/DB04861) · **PubChem:** [CID 71301](https://pubchem.ncbi.nlm.nih.gov/compound/71301)
- **molar mass:** 405.435 g/mol (C22H25F2NO4) — DrugBank
- **groups:** approved, investigational

## About

Nebivolol is a selective beta blocker used to treat high blood pressure (arterial hypertension). It is an approved medicine, available alone and in fixed combinations with thiazides, calcium channel blockers, ACE inhibitors, ARBs, or lipid-lowering drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418130](https://www.wikidata.org/wiki/Q418130) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nebivolol | parent | 405.435 | C22H25F2NO4 | DrugBank | [71301](https://pubchem.ncbi.nlm.nih.gov/compound/71301) | Marques_2022 |

## Start here

> **Marques_2022_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> young and healthy individuals. [Run it in the simulator](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md?tab=Simulation) · [record](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.22 | L/h | 0.22 L/h | young and healthy individuals | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) |
| V | V1 | 4.21 | L | 4.21 L | young and healthy individuals | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) |
| ka | kabs | 2.06 | 1/h | 2.06 1/h | young and healthy individuals | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Marques L et al., New Data for Nebivolol after In Silico…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091911](https://doi.org/10.3390/pharmaceutics14091911) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:31 | 6:08 | 1/0/0 | 0/0/0 | 0/0/0 | 156,762/12,807 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Briciu_2014.pdf` | Briciu C et al., A pharmacokinetic drug interaction stud…, Journal of clinical pharmac… (2014) | popPK | 8 | [10.1111/jcpt.12180](https://doi.org/10.1111/jcpt.12180) | [24845234](https://pubmed.ncbi.nlm.nih.gov/24845234) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, AUC) for nebivolol in humans, though it lacks specific clearance or volume values. |

<sub>queue written 2026-10-07T00:26:38.941604+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bocci_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study that reports EC50 values for nebivolol against SARS-CoV-2, but it does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Bundkirchen_2001 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of nebivolol on cardiac calcium sensitivity in skinned fibers and isolated trabeculae, not its pharmacokinetic disposition parameters. |
| PD | Bundkirchen_2001 | not_relevant | 0 | 0 | The study reports a negative result (no effect) on cardiac calcium sensitivity and does not provide a pharmacodynamic exposure-response or dose-response model for nebivolol. |
| popPK | Garbán_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of action (estrogen receptor binding and vascular response) in isolated rat aortic rings and cell lines, not pharmacokinetic disposition parameters. |
| popPK | Gschwend_2009 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular function in rats and does not report pharmacokinetic parameters for nebivolol. |
| PD | Gschwend_2009 | not_relevant | 2 | 1 | The study reports pharmacodynamic effects (endothelial relaxation) at fixed doses but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like EC50 or slope. |
| popPK | Kannan_2012 | irrelevant | 0 | 0 | Nebivolol is used only as a positive control in a zebrafish cardiovascular toxicity assay, and no pharmacokinetic parameters (CL, V, ka, etc.) are reported. |
| PD | Kannan_2012 | not_relevant | 1 | 0 | Nebivolol is used only as a single-dose positive control for comparison; no dose-response curve or numeric PD parameters (EC50, Emax) are reported for nebivolol. |
| popPK | Okamoto_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial assessing blood pressure effects and mechanisms of action, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for nebivolol. |
| popPK | Rawat_2023 | relevant | 4 | 8 | The study reports ocular PK parameters (Cmax, AUC, Tmax) for nebivolol in rabbits, but lacks standard systemic disposition parameters like clearance (CL) or volume of distribution (V). |
| popPK | Rosenkranz_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilatory properties in rat aorta, not a pharmacokinetic study reporting disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:26 UTC</sub>
