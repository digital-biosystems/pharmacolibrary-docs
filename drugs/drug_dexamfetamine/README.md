<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexamfetamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexamfetamine_Roberts2015_final_final_plasma_model_mean_para&quot;,&quot;label&quot;:&quot;Roberts_2015_final_final_plasma_model_mean_parameter_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model_mean_para.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# dexamfetamine

- **generic name:** dexamfetamine
- **ATC codes:** `N06BA02`
- **DrugBank:** [DB01576](https://go.drugbank.com/drugs/DB01576) · **PubChem:** none
- **groups:** approved, illicit, investigational

## About

Dexamfetamine is a central nervous system stimulant used to treat attention deficit hyperactivity disorder and narcolepsy. The drug is widely used, though its illicit application for performance enhancement and recreational use is also common.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1706418](https://www.wikidata.org/wiki/Q1706418), [Wikipedia](https://en.wikipedia.org/wiki/Dextroamphetamine?oldid=1383928500) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dexamfetamine (dextroamphetamine) | parent | 135.21 | C9H13N | PubChem | [5826](https://pubchem.ncbi.nlm.nih.gov/compound/5826) | Roberts_2015 |

## Start here

> **Roberts_2015_final_final_plasma_model_mean_parameter_estimate** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy adults. [Run it in the simulator](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model_mean_para.md?tab=Simulation) · [record](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model_mean_para.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Roberts_2015_final_final_plasma_model_mean_parameter_estimate](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final_final_plasma_model_mean_para.md) | ▶ model + simulator | 1-compartment, oral | 4 | Roberts JK et al., A Population Pharmacokinetic Analysis o…, Clinical drug investigation (2015) | [10.1007/s40261-015-0323-5](https://doi.org/10.1007/s40261-015-0323-5) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ final](drugs/drug_dexamfetamine/Dexamfetamine_Roberts2015_final.md) | — | 2-compartment (no model) | 6 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2019_DA](drugs/drug_dexamfetamine/pd_van_2019_DA.md) | extracellular striatal dopamine biomarker turnover ← d-amphetamine (brain extracellular fluid) | — | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:51 | 0:06 | 1/1/0 | 1/0/0 | 0/0/0 | 5,545/168 | einfracz / qwen3.8-27b | 4 | 0/4 | 3/1 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aljabasini_2025 | irrelevant | 0 | 0 | This is a zebrafish toxicity study of MDPV; dextroamphetamine is only a reference compound for PPI validation, and no PK disposition parameters (CL, V, ka, half-life) for dexamfetamine are reported. |
| popPK | Aumann_2025 | irrelevant | 0 | 0 | PET/behavioral study using dexamfetamine as a pharmacological challenge probe; no PK parameters (CL, V, ka, half-life) reported. |
| popPK | Fudala_1990 | irrelevant | 0 | 0 | The paper is a behavioral study on conditioned place aversion in rats and does not report any pharmacokinetic parameters for dexamphetamine. |
| PGx | Fudala_1990 | not_relevant | 0 | 0 | The paper investigates behavioral conditioning paradigms (place preference/aversion) and does not report pharmacokinetic or pharmacodynamic changes driven by genetic variants. |
| popPK | McElroy_2015 | irrelevant | 0 | 0 | The study evaluates the efficacy and safety of lisdexamfetamine for binge-eating disorder and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for dexamfetamine. |
| PGx | McElroy_2015 | not_relevant | 0 | 0 | The study is a clinical trial for lisdexamfetamine in binge-eating disorder and does not assess the impact of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Overholtzer_2026 | irrelevant | 0 | 0 | The paper is a neuroimaging study on brain structure associated with ADHD medication use, not a pharmacokinetic study, and contains no PK parameters for dexamfetamine. |
| PGx | Overholtzer_2026 | not_relevant | 0 | 0 | The paper investigates the neurostructural effects (brain volume/thickness) of ADHD medications, not pharmacogenomic variations affecting PK/PD parameters of dexamfetamine. |
| PGx | Roberts_2015 | not_relevant | 0 | 0 | The study analyzes the pharmacokinetics of dexamfetamine in a healthy adult population using covariates such as body weight and melanin concentration, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | van_2019 | relevant | 8 | 2 | Population PK of dexamfetamine in plasma/brain ECF is the subject, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexamfetamine%5D&body=Drug%3A%20dexamfetamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dexamfetamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 11:44 UTC</sub>
