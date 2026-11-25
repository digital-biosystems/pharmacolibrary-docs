<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;choline theophyllinate&quot;}]"></div>

# choline theophyllinate

- **generic name:** choline theophyllinate
- **ATC codes:** `R03DA02`, `R03DB02`
- **DrugBank:** [DB01303](https://go.drugbank.com/drugs/DB01303) · **PubChem:** none
- **groups:** approved

## About

Choline theophyllinate is a xanthine derivative and bronchodilator used to treat asthma, pulmonary emphysema, acute bronchitis, and bradycardia. It is administered orally in forms such as tablets, extended-release tablets, syrups, solutions, and elixirs. The drug is approved and available under brand names like Choledyl.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5104342](https://www.wikidata.org/wiki/Q5104342), [Wikipedia](https://en.wikipedia.org/wiki/Choline_theophyllinate?oldid=1330780042) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| choline theophyllinate | parent | 283.332 | C12H21N5O3 | PubChem | [656652](https://pubchem.ncbi.nlm.nih.gov/compound/656652) | Mondal_1990 |
| theophylline | metabolite | 180.167 | C7H8N4O2 | PubChem | [2153](https://pubchem.ncbi.nlm.nih.gov/compound/2153) | Mondal_1990 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Mondal_1990_reference](drugs/drug_choline_theophyllinate/CholineTheophyllinate_Mondal1990_reference.md) | — | 1-compartment (no model) | 3 | Mondal BK et al., Pharmacokinetic study of controlled-rel…, The British journal of clin… (1990) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Bülow_1975_FEV1](drugs/drug_choline_theophyllinate/pd_B_low_1975_FEV1.md) | FEV1 ← theophylline · stimulation effect | — | Bülow KB et al., Plasma level and broncholytic effect of…, European journal of clinica… (1975) | [10.1007/BF00561559](https://doi.org/10.1007/BF00561559) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:33 | 1:20 | 0/1/0 | 0/1/0 | 0/0/0 | 20,876/10,476 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mondal_1990.pdf` | Mondal BK et al., Pharmacokinetic study of controlled-rel…, The British journal of clin… (1990) | popPK | 10 |  | [2206815](https://pubmed.ncbi.nlm.nih.gov/2206815) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for choline theophyllinate (via plasma theophylline levels) in human subjects. |

<sub>queue written 2026-11-23 17:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bilcíková_1987 | irrelevant | 0 | 0 | The study is an in-vitro/in-ex-vivo pharmacological investigation of tracheal muscle tension and membrane potential, not a pharmacokinetic study. |
| PGx | Bilcíková_1987 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of choline theophyllinate on tracheal smooth muscle in animals, but it does not involve any gene variants, genotypes, or pharmacogenomic analysis. |
| popPK | Bülow_1975 | relevant | 5 | 2 | Study reports plasma concentration data (Cmax, Tmax) for choline theophyllinate (via metabolite theophylline) in humans, but lacks explicit disposition parameters (CL, V, Ka, t1/2) or a compartmental model. |
| PGx | Bülow_1975 | not_relevant | 0 | 0 | The paper describes the PK/PD of choline theophyllinate in a general population of asthmatics and does not investigate any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Cartwright_1990 | irrelevant | 4 | 0 | The study reports qualitative therapeutic outcome and correlation data for transdermal choline theophyllinate in infants but lacks explicit quantitative PK parameter values (CL, V, ka) in the provided evidence. |
| PGx | Cartwright_1990 | not_relevant | 0 | 0 | The paper investigates transdermal drug delivery in premature infants and correlates PK parameters with physiological factors like gestation, but it does not report pharmacogenomic effects (gene variants) on PK/PD. |
| popPK | Chan_1985 | irrelevant | 2 | 0 | The study reports only plasma concentration levels (peak/trough) for a clinical comparison, without deriving quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| PGx | Chan_1985 | not_relevant | 0 | 0 | The study compares the pharmacokinetics and efficacy of two different theophylline formulations, but it does not examine or report any gene variants or genotypes (pharmacogenomics) that influence these parameters. |
| popPK | Jones_1979 | irrelevant | 3 | 2 | The study reports PK parameters for theophylline (via aminophylline/choline theophyllinate) in preterm infants, not a population PK model for choline theophyllinate itself, and lacks specific choline salt kinetic values. |
| PGx | Jones_1979 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic parameters for a cohort of preterm infants but does not investigate or report any association with genetic variants, genotypes, or phenotypes. |
| popPK | McKenzie_1978 | irrelevant | 4 | 1 | The study reports specific drug concentrations at specific times (2h post-dose, pre-dose) rather than quantitative population PK parameter estimates (CL, V, ka, t1/2) for choline theophyllinate. |
| PGx | McKenzie_1978 | not_relevant | 0 | 0 | The paper investigates the effect of dosage timing on theophylline levels, not the impact of gene variants or genotypes on pharmacokinetics or pharmacodynamics. |
| PGx | Mondal_1990 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics in elderly patients but contains no information on gene variants or pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcholine_theophyllinate%5D&body=Drug%3A%20choline_theophyllinate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_choline_theophyllinate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:32 UTC</sub>
