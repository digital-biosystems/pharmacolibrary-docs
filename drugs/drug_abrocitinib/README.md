<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;abrocitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abrocitinib_Wojciechowski2022_reference&quot;,&quot;label&quot;:&quot;Wojciechowski_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# abrocitinib

- **generic name:** abrocitinib
- **ATC codes:** `D11AH08`
- **DrugBank:** [DB14973](https://go.drugbank.com/drugs/DB14973) · **PubChem:** not captured
- **molar mass:** 323.42 g/mol (C14H21N5O2S) — DrugBank
- **groups:** approved, investigational

## About

Abrocitinib is a protein kinase inhibitor used to treat atopic dermatitis. It is authorised in the European Union as a dermatological medicine for dermatitis and is in approved use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76656815](https://www.wikidata.org/wiki/Q76656815) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| abrocitinib | parent | 323.42 | C14H21N5O2S | DrugBank | — | Wojciechowski_2022 |

## Start here

> **Wojciechowski_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy individuals and patients with psoriasis or atopic dermatitis, n = 995. [Run it in the simulator](drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md?tab=Simulation) · [record](drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 21.7 | L/h | 21.7 L/h | healthy individuals and patients with psoriasis or atopic dermatitis | 995 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wojciechowski_2022_reference](drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md) |
| V | V1 | 86.3 | L | 86.3 L | healthy individuals and patients with psoriasis or atopic dermatitis | 995 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wojciechowski_2022_reference](drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md) |
| ka | kabs | 3.99 | 1/h | 3.99 h−1 | healthy individuals and patients with psoriasis or atopic dermatitis | 995 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wojciechowski_2022_reference](drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md) |
| F | Fab | 0.013 |  | 1.3 | healthy individuals and patients with psoriasis or atopic dermatitis | 995 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Wojciechowski_2022_reference](drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_cmax</sub><br><sub>blocking: unreported model parameter default(s): F</sub> | [Wojciechowski_2022_reference](drugs/drug_abrocitinib/Abrocitinib_Wojciechowski2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+5 cov.) | Wojciechowski J et al., Population Pharmacokinetics of Abrociti…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01104-z](https://doi.org/10.1007/s40262-021-01104-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Soto_2020_PLT](drugs/drug_abrocitinib/pd_Soto_2020_PLT.md) | platelet count ← abrocitinib · indirect response — drug inhibits the production of platelet count | — | Soto E et al., Kinetic-Pharmacodynamic Model of Platel…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12548](https://doi.org/10.1002/psp4.12548) |
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Wojciechowski_2022_2_CIRC](drugs/drug_abrocitinib/pd_Wojciechowski_2022_2_CIRC.md) | platelet count ← abrocitinib · disease-progression model | model (no simulator) | Wojciechowski J et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2022) | [10.1111/bcp.15334](https://doi.org/10.1111/bcp.15334) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Wang_2022_2_HR](drugs/drug_abrocitinib/pd_Wang_2022_2_HR.md) | change from baseline in HR (∆HR) ← abrocitinib · direct linear effect | model (no simulator) | Wang X et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1111](https://doi.org/10.1002/cpdd.1111) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Wang_2022_2_QTcF](drugs/drug_abrocitinib/pd_Wang_2022_2_QTcF.md) | change from baseline in Fridericia-corrected QT (∆QTcF) ← abrocitinib · direct linear effect | model (no simulator) | Wang X et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1111](https://doi.org/10.1002/cpdd.1111) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=abrocitinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor, `SLC22A8` substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: JAK1 (inhibitor), JAK2 (inhibitor), JAK3 (inhibitor), TYK2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:45 | 3:30 | 1/0/0 | 2/1/0 | 0/0/0 | 243,422/23,741 | einfracz / qwen3.8-27b | 7 | 0/7 | 6/1 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fostvedt_2024.pdf` | Fostvedt L et al., Meta-Analysis of Noncompartmental Pharm…, Clinical pharmacology in dr… (2024) | popPK | 8 | [10.1002/cpdd.1465](https://doi.org/10.1002/cpdd.1465) | [39212958](https://pubmed.ncbi.nlm.nih.gov/39212958) | The study is a meta-analysis of human clinical data reporting specific quantitative estimates (percentage changes in AUC) for abrocitinib's active moiety based on genetic polymorphisms. |

<sub>queue written 2026-10-07T07:42:52.143301+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fostvedt_2024 | relevant | 8 | 3 | The study is a meta-analysis of human clinical data reporting specific quantitative estimates (percentage changes in AUC) for abrocitinib's active moiety based on genetic polymorphisms. |
| popPK | Schlösser_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study regarding dose reduction in atopic dermatitis, not a pharmacokinetic study, and contains no quantitative disposition parameters (CL, V, ka, etc.). |
| popPK | Soto_2020 | irrelevant | 2 | 1 | This is a Kinetic-Pharmacodynamic (K-PD) model of platelet counts, not a pharmacokinetic (PK) study; it explicitly states that no abrocitinib concentration data were available and does not report PK parameters like clearance or volume. |
| popPK | Tachet_2025_2 | irrelevant | 2 | 0 | This is a study protocol for a prospective observational trial, and while it plans to characterize PK, it does not report any final quantitative pharmacokinetic parameter values (CL, V, etc.) for abrocitinib. |
| popPK | Wang_2022_2 | irrelevant | 2 | 0 | The paper is a pharmacodynamic study focusing on QTc interval prolongation (concentration-response), not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for abrocitinib. |
| popPK | Wojciechowski_2022_2 | irrelevant | 2 | 0 | This is a PK-PD model of platelet counts (pharmacodynamics), not a study reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for abrocitinib itself; PK values are cited from a previous separate study (ref 8). |
| popPK | Wojciechowski_2022_3 | irrelevant | 0 | 0 | The provided evidence is a correction notice regarding the licensing and copyright of the original article, containing no pharmacokinetic data, model parameters, or numeric values for abrocitinib. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 07:43 UTC</sub>
