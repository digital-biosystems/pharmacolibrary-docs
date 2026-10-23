<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;doripenem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doripenem_Nonoshita2020_base_model&quot;,&quot;label&quot;:&quot;Nonoshita_2020_base_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Nonoshita2020_base_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Nonoshita2020_population_mean&quot;,&quot;label&quot;:&quot;Nonoshita_2020_population_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Nonoshita2020_population_mean.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Tanaka2017_based_on_ppk_model&quot;,&quot;label&quot;:&quot;Tanaka_2017_based_on_ppk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Tanaka2017_based_on_ppk_model.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Tanaka2017_bayesian_estimated&quot;,&quot;label&quot;:&quot;Tanaka_2017_bayesian_estimated&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Tanaka2017_bayesian_estimated.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doripenem_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doripenem/Doripenem_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# doripenem

- **generic name:** doripenem
- **ATC codes:** `J01DH04`
- **DrugBank:** [DB06211](https://go.drugbank.com/drugs/DB06211) · **PubChem:** [CID 73303](https://pubchem.ncbi.nlm.nih.gov/compound/73303)
- **molar mass:** 420.504 g/mol (C15H24N4O6S2) — DrugBank
- **groups:** approved, withdrawn

## About

Doripenem is a carbapenem antibiotic that was used to treat bacterial infections, including pneumonia, urinary tract infections, and hospital-acquired infections. It is no longer marketed in the European Union, where its product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411552](https://www.wikidata.org/wiki/Q411552) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doripenem | parent | 420.504 | C15H24N4O6S2 | DrugBank | [73303](https://pubchem.ncbi.nlm.nih.gov/compound/73303) | Nonoshita_2020, Tanaka_2017 |

## Start here

> **Nonoshita_2020_base_model** — <span class="pk-badge pk-badge--green">Reproduces paper</span> Japanese ICU patients, n = 21. [Run it in the simulator](drugs/drug_doripenem/Doripenem_Nonoshita2020_base_model.md?tab=Simulation) · [record](drugs/drug_doripenem/Doripenem_Nonoshita2020_base_model.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 4.7 | L/h | 4.7 L/h | ICU patients | This paper analyzes population PK for **doripenem** in ICU patients.  - **is_poppk**: yes (uses a 2-compartment population PK model).  - **paper_class**: drug_pk (models doripenem concentrations).  - **final_table_hint**: Table 2 (typically contains PK parameter estimates in such papers; Tables 1, 3, 4, 5 are likely demographics, PK/PD results, or simulations).  - **software**: unknown (not specified in the provided text).  - **has_control_stream**: no (no mention of NONMEM code or supplement in the text).  - **dose_compound**: doripenem.  - **primary_analyte**: doripenem.  - **population**: ICU patients (specifically adult ICU patients based on context of | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tanaka_2017_bayesian_estimated](drugs/drug_doripenem/Doripenem_Tanaka2017_bayesian_estimated.md) |
| CL | CL | 10.8 | L/h | 10.8 L/h | ICU patients | This paper analyzes population PK for **doripenem** in ICU patients.  - **is_poppk**: yes (uses a 2-compartment population PK model).  - **paper_class**: drug_pk (models doripenem concentrations).  - **final_table_hint**: Table 2 (typically contains PK parameter estimates in such papers; Tables 1, 3, 4, 5 are likely demographics, PK/PD results, or simulations).  - **software**: unknown (not specified in the provided text).  - **has_control_stream**: no (no mention of NONMEM code or supplement in the text).  - **dose_compound**: doripenem.  - **primary_analyte**: doripenem.  - **population**: ICU patients (specifically adult ICU patients based on context of | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tanaka_2017_based_on_ppk_model](drugs/drug_doripenem/Doripenem_Tanaka2017_based_on_ppk_model.md) |
| V | V1 | 6.76 | L | 6.76 L | Japanese ICU patients | 21 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Nonoshita_2020_base_model](drugs/drug_doripenem/Doripenem_Nonoshita2020_base_model.md) |
| V | V1 | 8.17 | L | 8.17 L | review reference |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wang_2022_reference](drugs/drug_doripenem/Doripenem_Wang2022_reference.md) |
| V | V1 | 9.6 | L | 9.6 L | ICU patients | This paper analyzes population PK for **doripenem** in ICU patients.  - **is_poppk**: yes (uses a 2-compartment population PK model).  - **paper_class**: drug_pk (models doripenem concentrations).  - **final_table_hint**: Table 2 (typically contains PK parameter estimates in such papers; Tables 1, 3, 4, 5 are likely demographics, PK/PD results, or simulations).  - **software**: unknown (not specified in the provided text).  - **has_control_stream**: no (no mention of NONMEM code or supplement in the text).  - **dose_compound**: doripenem.  - **primary_analyte**: doripenem.  - **population**: ICU patients (specifically adult ICU patients based on context of | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tanaka_2017_bayesian_estimated](drugs/drug_doripenem/Doripenem_Tanaka2017_bayesian_estimated.md) |
| V | V1 | 10.04 | L | 10.04 L | Japanese ICU patients | 21 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Nonoshita_2020_population_mean](drugs/drug_doripenem/Doripenem_Nonoshita2020_population_mean.md) |
| V | V1 | 10.6 | L | 10.6 L | ICU patients | This paper analyzes population PK for **doripenem** in ICU patients.  - **is_poppk**: yes (uses a 2-compartment population PK model).  - **paper_class**: drug_pk (models doripenem concentrations).  - **final_table_hint**: Table 2 (typically contains PK parameter estimates in such papers; Tables 1, 3, 4, 5 are likely demographics, PK/PD results, or simulations).  - **software**: unknown (not specified in the provided text).  - **has_control_stream**: no (no mention of NONMEM code or supplement in the text).  - **dose_compound**: doripenem.  - **primary_analyte**: doripenem.  - **population**: ICU patients (specifically adult ICU patients based on context of | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tanaka_2017_based_on_ppk_model](drugs/drug_doripenem/Doripenem_Tanaka2017_based_on_ppk_model.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Tanaka_2017 · CL</text><circle cx="307.6" cy="30.0" r="4" fill="#2e7d32"><title>Tanaka_2017 · CL: 4.7 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Tanaka_2017 · CL</text><circle cx="370.8" cy="46.0" r="4" fill="#2e7d32"><title>Tanaka_2017 · CL: 10.8 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="128" viewBox="0 0 560 128" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="106" stroke="#ddd"/><text x="190.0" y="120" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="106" stroke="#ddd"/><text x="365.0" y="120" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="106" stroke="#ddd"/><text x="540.0" y="120" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Nonoshita_2020 · V1</text><circle cx="335.2" cy="30.0" r="4" fill="#2e7d32"><title>Nonoshita_2020 · V1: 6.76 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Wang_2022 · V1</text><circle cx="349.6" cy="46.0" r="4" fill="#ef6c00"><title>Wang_2022 · V1: 8.17 L</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Tanaka_2017 · V1</text><circle cx="361.9" cy="62.0" r="4" fill="#2e7d32"><title>Tanaka_2017 · V1: 9.6 L</title></circle><text x="184" y="82.0" font-size="11" text-anchor="end">Nonoshita_2020 · V1</text><circle cx="365.3" cy="78.0" r="4" fill="#2e7d32"><title>Nonoshita_2020 · V1: 10.04 L</title></circle><text x="184" y="98.0" font-size="11" text-anchor="end">Tanaka_2017 · V1</text><circle cx="369.4" cy="94.0" r="4" fill="#2e7d32"><title>Tanaka_2017 · V1: 10.6 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Nonoshita_2020_base_model](drugs/drug_doripenem/Doripenem_Nonoshita2020_base_model.md) | ▶ model + simulator | 2-compartment, IV | 5 | Nonoshita K et al., Population pharmacokinetic analysis of…, Scientific reports (2020) | [10.1038/s41598-020-79076-6](https://doi.org/10.1038/s41598-020-79076-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [↳ population_mean](drugs/drug_doripenem/Doripenem_Nonoshita2020_population_mean.md) | ▶ model + simulator | 2-compartment, IV | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Tanaka_2017_based_on_ppk_model](drugs/drug_doripenem/Doripenem_Tanaka2017_based_on_ppk_model.md) | ▶ model + simulator | 2-compartment, IV | 4 | Tanaka R et al., Pharmacokinetic/Pharmacodynamic Analysi…, Biological & pharmaceutical… (2017) | [10.1248/bpb.b17-00008](https://doi.org/10.1248/bpb.b17-00008) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [↳ bayesian_estimated](drugs/drug_doripenem/Doripenem_Tanaka2017_bayesian_estimated.md) | ▶ model + simulator | 2-compartment, IV | 4 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Wang_2022_reference](drugs/drug_doripenem/Doripenem_Wang2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Wang Y et al., Pharmacokinetics and Safety of Doripene…, Antibiotics (Basel, Switzer… (2022) | [10.3390/antibiotics11070958](https://doi.org/10.3390/antibiotics11070958) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ikawa_2009_reference](drugs/drug_doripenem/Doripenem_Ikawa2009_reference.md) | — | 1-compartment (no model) | 0 | Ikawa K et al., Pharmacokinetic-pharmacodynamic target…, International journal of an… (2009) | [10.1016/j.ijantimicag.2008.08.031](https://doi.org/10.1016/j.ijantimicag.2008.08.031) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.99).">rat</span> | [Soon_2013_bacterial_burden](drugs/drug_doripenem/pd_Soon_2013_bacterial_burden.md) | bacterial burden ← doripenem · direct sigmoid Emax (Hill) effect | — | Soon RL et al., Pharmacodynamic variability beyond that…, Antimicrobial agents and ch… (2013) | [10.1128/AAC.01224-12](https://doi.org/10.1128/AAC.01224-12) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=doripenem).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DPEP1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:43 | 4:45 | 5/1/0 | 1/0/0 | 0/0/0 | 203,996/15,881 | einfracz / qwen3.8-27b | 8 | 2/6 | 8/0 | 2 |

## Coverage

- **PubMed hits:** 54 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 6  ·  extracted 4  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chung_2017.pdf` | Chung EK et al., Population Pharmacokinetics and Pharmac…, The Annals of pharmacothera… (2017) | popPK | 10 | [10.1177/1060028016676831](https://doi.org/10.1177/1060028016676831) | [28168884](https://pubmed.ncbi.nlm.nih.gov/28168884) | The paper reports a population PK model for doripenem, but specific numeric parameter values (CL, V, Q, half-life) are described qualitatively or by association, and the actual values are likely in the results tables or supplementary material not included in the evidence. |
| `Ikawa_2009.pdf` | Ikawa K et al., Pharmacokinetic-pharmacodynamic target…, International journal of an… (2009) | popPK | 10 | [10.1016/j.ijantimicag.2008.08.031](https://doi.org/10.1016/j.ijantimicag.2008.08.031) | [19095418](https://pubmed.ncbi.nlm.nih.gov/19095418) | The study reports a quantitative two-compartment population PK model for doripenem with explicit numeric values for clearance, volume, and intercompartmental clearance in the abstract. |
| `Harada_2013.pdf` | Harada M et al., Pharmacokinetic analysis of doripenem i…, International journal of an… (2013) | popPK | 8 | [10.1016/j.ijantimicag.2013.03.012](https://doi.org/10.1016/j.ijantimicag.2013.03.012) | [23684002](https://pubmed.ncbi.nlm.nih.gov/23684002) | The paper reports non-compartmental PK metrics (Cmax, AUC, t1/2) and identifies covariates, but specific compartmental parameter values (CL, V, Q) are not listed in the provided text. |

<sub>queue written 2026-10-07 10:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chung_2017 | relevant | 10 | 2 | The paper reports a population PK model for doripenem, but specific numeric parameter values (CL, V, Q, half-life) are described qualitatively or by association, and the actual values are likely in the results tables or supplementary material not included in the evidence. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | The paper is a radioprotection study using doripenem as a candidate drug in mice, and it does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for doripenem. |
| popPK | Harada_2013 | relevant | 8 | 2 | The paper reports non-compartmental PK metrics (Cmax, AUC, t1/2) and identifies covariates, but specific compartmental parameter values (CL, V, Q) are not listed in the provided text. |
| popPK | Katsube_2008 | irrelevant | 4 | 0 | The study focuses on PD modeling and simulation for bactericidal effects in mice; while it uses doripenem PK data, the abstract does not report specific quantitative PK parameter values (CL, V, etc.) for doripenem, and the primary focus is on meropenem and imipenem indices. |
| popPK | Lim_2018 | irrelevant | 2 | 0 | The study uses Monte Carlo simulation with PK parameters cited from other sources to evaluate dosing regimens and cost-effectiveness, but does not report original quantitative PK parameter values for doripenem. |
| popPK | Morales_2022 | irrelevant | 1 | 0 | This is a scoping review of beta-lactam PK/PD targets in children; doripenem is mentioned as one of several drugs studied in the literature, but no specific quantitative PK parameters for doripenem are reported in the text. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | The study investigates doripenem as a radioprotective agent in mice and reports efficacy metrics (EC50, radiation damage foci), but contains no pharmacokinetic parameters (CL, V, half-life) or dose-time data for doripenem. |
| popPK | Tanaka_2025 | irrelevant | 3 | 0 | This is a review article that summarizes multiple studies, including a population PK model for doripenem in ICU patients, but no specific numeric parameter values (e.g., CL, V, Q) are provided in the text, only qualitative descriptions of model development and simulation outcomes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoripenem%5D&body=Drug%3A%20doripenem%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doripenem/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 10:40 UTC</sub>
