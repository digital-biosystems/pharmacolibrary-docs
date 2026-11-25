<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;ciclesonide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ciclesonide_Rohatagi2003_reference&quot;,&quot;label&quot;:&quot;Rohatagi_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclesonide/Ciclesonide_Rohatagi2003_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# ciclesonide

- **generic name:** ciclesonide
- **ATC codes:** `R01AD13`, `R03BA08`
- **DrugBank:** [DB01410](https://go.drugbank.com/drugs/DB01410) · **PubChem:** [CID 6918155](https://pubchem.ncbi.nlm.nih.gov/compound/6918155)
- **molar mass:** 540.697 g/mol (C32H44O7) — DrugBank
- **groups:** approved, investigational

## About

Ciclesonide is a glucocorticoid that treats asthma and allergic rhinitis. It is given by inhalation or as a nasal spray. It is a listed essential medicine used for respiratory conditions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5119448](https://www.wikidata.org/wiki/Q5119448), [Wikipedia](https://en.wikipedia.org/wiki/Ciclesonide?oldid=1329246704) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ciclesonide | parent | 540.697 | C32H44O7 | DrugBank | [6918155](https://pubchem.ncbi.nlm.nih.gov/compound/6918155) | Rohatagi_2003, Rohatagi_2005, Xu_2010 |
| C21-desisobutyryl-ciclesonide | metabolite | — (mass units only) | — | — | — | — |
| ciclesonide-active principle (CIC-AP) (desisobutyryl-ciclesonide) | metabolite | 470.606 | C28H38O6 | PubChem | [6918281](https://pubchem.ncbi.nlm.nih.gov/compound/6918281) | Rohatagi_2003, Xu_2010 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Rohatagi_2005_reference](drugs/drug_ciclesonide/Ciclesonide_Rohatagi2005_reference.md) | held back | 1-compartment, oral | 2 | Rohatagi S et al., Model-based covariate pharmacokinetic a…, American journal of therape… (2005) | [10.1097/01.mjt.0000155110.69831.75](https://doi.org/10.1097/01.mjt.0000155110.69831.75) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Xu_2010_reference](drugs/drug_ciclesonide/Ciclesonide_Xu2010_reference.md) | — | 1-compartment (no model) | 5 | Xu J et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2010) | [10.1177/0091270009354994](https://doi.org/10.1177/0091270009354994) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Rohatagi_2003_reference](drugs/drug_ciclesonide/Ciclesonide_Rohatagi2003_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Rohatagi S et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | [10.1177/0091270002250998](https://doi.org/10.1177/0091270002250998) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Xu_2010_cortisol](drugs/drug_ciclesonide/pd_Xu_2010_cortisol.md) | serum cortisol ← desisobutyryl-ciclesonide · indirect response — drug inhibits the production of serum cortisol | — | Xu J et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2010) | [10.1177/0091270009354994](https://doi.org/10.1177/0091270009354994) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rohatagi_2005_cortisol](drugs/drug_ciclesonide/pd_Rohatagi_2005_cortisol.md) | circadian cortisol release biomarker turnover ← des-CIC | — | Rohatagi S et al., Model-based covariate pharmacokinetic a…, American journal of therape… (2005) | [10.1097/01.mjt.0000155110.69831.75](https://doi.org/10.1097/01.mjt.0000155110.69831.75) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:53 | 2:39 | 2/1/0 | 2/0/0 | 0/0/0 | 21,396/12,239 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2010.pdf` | Xu J et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009354994](https://doi.org/10.1177/0091270009354994) | [20150524](https://pubmed.ncbi.nlm.nih.gov/20150524) | The paper reports quantitative population PK parameters (ka, CL, V) for desisobutyryl-ciclesonide, the active metabolite of ciclesonide, which is explicitly defined as relevant to ciclesonide's pharmacokinetics. |

<sub>queue written 2026-11-23 19:51 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pu_2026 | irrelevant | 0 | 0 | This is a meta-analysis of adverse events for inhaled corticosteroids and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for ciclesonide. |
| PGx | Pu_2026 | not_relevant | 0 | 0 | The paper is a meta-analysis of adverse events and does not report any gene-based effects on the pharmacokinetic or pharmacodynamic parameters of ciclesonide. |
| PGx | Rohatagi_2003 | not_relevant | 0 | 0 | The paper reports population PK/PD parameters for ciclesonide but does not mention or analyze any gene variants or genotypes. |
| PGx | Rohatagi_2005 | not_relevant | 0 | 0 | The study analyzes standard clinical covariates (weight, race, gender) and lacks any analysis of genetic variants, genotypes, or pharmacogenomic effects on ciclesonide PK/PD. |
| popPK | Sanz_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study of inhaled ciclesonide in horses with asthma; no PK parameters (CL, V, ka, half-life, or PK model) are reported anywhere in the evidence. |
| PGx | Xu_2010 | not_relevant | 0 | 0 | The study does not investigate gene variants/genotypes/phenotypes, but rather focuses on conventional covariates like gender and treatment regimen. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bciclesonide%5D&body=Drug%3A%20ciclesonide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ciclesonide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:51 UTC</sub>
