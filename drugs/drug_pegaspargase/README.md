<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;pegaspargase&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pegaspargase_Sassen2017_reference&quot;,&quot;label&quot;:&quot;Sassen_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pegaspargase/Pegaspargase_Sassen2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pegaspargase

- **generic name:** pegaspargase
- **ATC codes:** `L01XX24`
- **DrugBank:** [DB00059](https://go.drugbank.com/drugs/DB00059) · **PubChem:** none
- **groups:** approved, investigational

## About

Pegaspargase is a PEGylated asparaginase enzyme used as an antineoplastic drug to treat lymphoid leukemias and lymphomas, including acute lymphoblastic leukemia/lymphoma. It is an approved medicine, with one product authorised in the European Union for precursor cell lymphoblastic leukemia-lymphoma, and it is also used in the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7160547](https://www.wikidata.org/wiki/Q7160547) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Sassen_2017_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_pegaspargase/Pegaspargase_Sassen2017_reference.md?tab=Simulation) · [record](drugs/drug_pegaspargase/Pegaspargase_Sassen2017_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.44 ‡ | L/h | 0.44 L/h/70kg | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Sassen_2017_reference](drugs/drug_pegaspargase/Pegaspargase_Sassen2017_reference.md) |
| CL | CL | — | L/h | 0.084 L/day/m² | pediatric acute lymphoblastic leukemia patients | 92 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kloos_2021_reference](drugs/drug_pegaspargase/Pegaspargase_Kloos2021_reference.md) |
| CL | CL | — | L/h | 0.126 | children with acute lymphoblastic leukemia | 2545 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Würthwein_2021_reference](drugs/drug_pegaspargase/Pegaspargase_Wrthwein2021_reference.md) |
| V | V | — | L | 0.94 L/m² | pediatric acute lymphoblastic leukemia patients | 92 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Kloos_2021_reference](drugs/drug_pegaspargase/Pegaspargase_Kloos2021_reference.md) |
| V | V | — | L | 1.69 | children with acute lymphoblastic leukemia | 2545 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Würthwein_2021_reference](drugs/drug_pegaspargase/Pegaspargase_Wrthwein2021_reference.md) |
| V | V1 | 3.2 ‡ | L | 3.2 L/70kg | review reference |  | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Sassen_2017_reference](drugs/drug_pegaspargase/Pegaspargase_Sassen2017_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Sassen_2017_reference](drugs/drug_pegaspargase/Pegaspargase_Sassen2017_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Sassen SD et al., Population pharmacokinetics of intraven…, Haematologica (2017) | [10.3324/haematol.2016.149195](https://doi.org/10.3324/haematol.2016.149195) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Dam_2024_reference](drugs/drug_pegaspargase/Pegaspargase_Dam2024_reference.md) | — | 1-compartment (no model) | 1 | Dam M et al., Increase in peg-asparaginase clearance…, Leukemia (2024) | [10.1038/s41375-024-02153-6](https://doi.org/10.1038/s41375-024-02153-6) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q61 — no SI value to build from</sub> | [Kloos_2021_reference](drugs/drug_pegaspargase/Pegaspargase_Kloos2021_reference.md) | — | 1-compartment (no model) | 2 | Kloos RQH et al., Individualized dosing guidelines for PE…, Haematologica (2021) | [10.3324/haematol.2019.242289](https://doi.org/10.3324/haematol.2019.242289) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61, Q22, Q30, Q354 — no SI value t…</sub> | [Würthwein_2021_reference](drugs/drug_pegaspargase/Pegaspargase_Wrthwein2021_reference.md) | — | 1-compartment (no model) | 4 | Würthwein G et al., Population Pharmacokinetics of PEGylate…, European journal of drug me… (2021) | [10.1007/s13318-021-00670-8](https://doi.org/10.1007/s13318-021-00670-8) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hempel_2010_reference](drugs/drug_pegaspargase/Pegaspargase_Hempel2010_reference.md) | — | 1-compartment (no model) | 0 | Hempel G et al., A population pharmacokinetic model for…, British journal of haematol… (2010) | [10.1111/j.1365-2141.2009.07923.x](https://doi.org/10.1111/j.1365-2141.2009.07923.x) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Koh_2025_reference](drugs/drug_pegaspargase/Pegaspargase_Koh2025_reference.md) | — | 1-compartment (no model) | 0 | Koh K et al., Phase 2 multicenter study of pegasparga…, International journal of he… (2025) | [10.1007/s12185-025-03976-4](https://doi.org/10.1007/s12185-025-03976-4) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Lin_2023_reference](drugs/drug_pegaspargase/Pegaspargase_Lin2023_reference.md) | — | 1-compartment (no model) | 2 | Lin T et al., Population pharmacokinetics of intramus…, Clinical and translational… (2023) | [10.1111/cts.13499](https://doi.org/10.1111/cts.13499) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pegaspargase).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: L-asparagine (substrate), SERPINA7 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:45 | 9:23 | 4/3/0 | 0/0/0 | 0/0/0 | 1,132,853/56,637 | einfracz / qwen3.8-27b | 26 | 1/24 | 24/2 | 0 |

## Coverage

- **PubMed hits:** 150 matched, 72 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 1  ·  needs review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hempel_2010.pdf` | Hempel G et al., A population pharmacokinetic model for…, British journal of haematol… (2010) | popPK | 10 | [10.1111/j.1365-2141.2009.07923.x](https://doi.org/10.1111/j.1365-2141.2009.07923.x) | [19821822](https://pubmed.ncbi.nlm.nih.gov/19821822) | The study provides a population pharmacokinetic model for pegaspargase with explicit numeric values for volume of distribution and initial clearance. |
| `Würthwein_2017.pdf` | Würthwein G et al., Population Pharmacokinetics to Model th…, European journal of drug me… (2017) | popPK | 10 | [10.1007/s13318-017-0410-5](https://doi.org/10.1007/s13318-017-0410-5) | [28349335](https://pubmed.ncbi.nlm.nih.gov/28349335) | The paper reports a population PK model for pegaspargase (Oncaspar) in humans with specific modeling details, but no quantitative parameter values (e.g., median CL, V) are provided in the extracted evidence text. |
| `Panetta_2021.pdf` | Panetta JC et al., Pharmacodynamics of cerebrospinal fluid…, Cancer chemotherapy and pha… (2021) | popPK | 9 | [10.1007/s00280-021-04315-0](https://doi.org/10.1007/s00280-021-04315-0) | [34170389](https://pubmed.ncbi.nlm.nih.gov/34170389) | The study is a PK-PD investigation of pegaspargase in humans, but the provided evidence contains pharmacodynamic outcomes (depletion duration) rather than quantitative pharmacokinetic parameters (CL, V, etc.) which are likely in the full text or supplementary materials. |
| `Avramis_2002.pdf` | Avramis VI et al., A randomized comparison of native Esche…, Blood (2002) | popPK | 8 | [10.1182/blood.v99.6.1986](https://doi.org/10.1182/blood.v99.6.1986) | [11877270](https://pubmed.ncbi.nlm.nih.gov/11877270) | The abstract reports a specific half-life for pegaspargase, but the full text indicates the population pharmacodynamic/kinetic model details (CL, V, etc.) are in the full article or supplementary data not provided here, and the primary focus is clinical efficacy/PD. |

<sub>queue written 2026-10-06 22:38 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amer_2025 | irrelevant | 0 | 0 | The paper is a review on peptide delivery mechanisms and does not report pharmacokinetic parameters for pegaspargase. |
| popPK | Appel_2008 | irrelevant | 2 | 0 | The paper investigates pharmacodynamic effects (amino acid depletion, apoptosis) and clinical response to PEG-asparaginase, but it does not report specific quantitative pharmacokinetic parameters such as clearance (CL), volume of distribution (V), or half-life in the provided text. |
| PGx | Appel_2008 | not_relevant | 1 | 0 | The study reports differences in clinical response (PD) based on leukemic immunophenotype and karyotype, not germline host pharmacogenomic variants affecting pegaspargase PK/PD. |
| popPK | Avramis_2002 | relevant | 8 | 1 | The abstract reports a specific half-life for pegaspargase, but the full text indicates the population pharmacodynamic/kinetic model details (CL, V, etc.) are in the full article or supplementary data not provided here, and the primary focus is clinical efficacy/PD. |
| popPK | Avramis_2005 | irrelevant | 2 | 0 | The paper is a review discussing pharmacodynamic relationships (amino acid deamination) rather than reporting specific quantitative PK disposition parameters (CL, V, etc.) for pegaspargase. |
| popPK | Avramis_2007 | relevant | 3 | 0 | The paper reports population PK-PD modeling results for pegaspargase in humans, but the provided abstract text lacks specific numeric parameter values (CL, V, etc.), which are likely in the full text or figures. |
| popPK | Avramis_2007_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Erwinia asparaginase (erwinase), not pegaspargase, which is only mentioned as a background comparator. |
| popPK | Borghorst_2014 | irrelevant | 2 | 0 | Pegaspargase (Oncaspar) is a comparator drug to the subject MC0609, and no numeric PK parameters for pegaspargase are provided in the evidence. |
| PGx | Cecconello_2025 | not_relevant | 3 | 5 | The paper reports no statistically significant association between specific genetic variants and the tested PK/PD outcomes (toxicities), so it does not report a pharmacogenomic effect. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a study on human antibody polyreactivity and sequence features, not a pharmacokinetic study of pegaspargase. |
| popPK | Christensen_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methotrexate (MTX), using asparaginase/pegaspargase only as a co-administered agent causing hypoalbuminemia, not as the subject of PK analysis. |
| popPK | Dam_2025 | relevant | 9 | 4 | The paper reports a pharmacokinetic model for pegaspargase with quantitative values for bioavailability (0.844) and absorption rate constant (0.323 1/day), but specific clearance and volume parameters are not explicitly listed in the text, likely residing in supplementary material or figures. |
| popPK | Fernandez_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for native E. coli asparaginase, using pegaspargase only as a comparator for hypersensitivity reactions, and contains no quantitative PK data for pegaspargase. |
| popPK | Keating_1993 | irrelevant | 2 | 0 | The abstract mentions a one-compartment model and half-life but does not provide specific quantitative numeric values for clearance, volume, or half-life. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a review of natural polysaccharide hydrogels for colorectal cancer treatment and does not contain any pharmacokinetic data or parameters for pegaspargase. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for JZP458 (Erwinia asparaginase), not pegaspargase (Pegasys). |
| popPK | Maese_2023 | irrelevant | 0 | 0 | The study evaluates a different asparaginase (Erwinia) rather than pegaspargase, and contains no population PK parameters for the subject drug. |
| popPK | Maese_2025 | irrelevant | 0 | 0 | The study evaluates recombinant Erwinia asparaginase (JZP458), not pegaspargase, which is only mentioned as the prior therapy for which patients developed hypersensitivity. |
| popPK | Matherne_2025 | irrelevant | 2 | 1 | The study models the pharmacokinetics of calaspargase pegol (CAL-PEG), not pegaspargase, which is only mentioned as a comparator or prior allergen. |
| popPK | Meyer_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ruxolitinib, not pegaspargase, which is only mentioned as a background treatment option in prior studies. |
| popPK | Miljak_2026 | irrelevant | 0 | 0 | The paper focuses on the formulation and bioavailability of alpha-lipoic acid, not pegaspargase. |
| popPK | Panetta_2009 | irrelevant | 2 | 0 | The study compares native and PEG asparaginase (comparator drugs) and does not report quantitative PK parameters for pegaspargase (specifically the *O.* *sativa* formulation). |
| popPK | Panetta_2020 | irrelevant | 1 | 0 | The study examines Erwinia asparaginase, a different formulation from pegaspargase, and reports activity duration rather than specific PK parameters like clearance or volume. |
| popPK | Panetta_2021 | relevant | 9 | 0 | The study is a PK-PD investigation of pegaspargase in humans, but the provided evidence contains pharmacodynamic outcomes (depletion duration) rather than quantitative pharmacokinetic parameters (CL, V, etc.) which are likely in the full text or supplementary materials. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review on nanoparticle pharmacokinetic modeling and does not mention pegaspargase or provide specific quantitative PK parameters for it. |
| popPK | Sassen_2017 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for Erwinia asparaginase, not pegaspargase (PEG-asparaginase), which is mentioned only as a comparator. |
| popPK | Sassen_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of prednisolone, with pegaspargase only mentioned as a co-administered drug in the treatment protocol. |
| popPK | Sethuramalingam_2026 | relevant | 10 | 4 | The paper is a human population PK study of pegaspargase (P-Asp) reporting model structure, ka estimates, and t1/2 in the text, but the specific numeric values for Clearance (CL) and Volume (V) are in Table 3 which is not included in the evidence. |
| popPK | Siebel_2022 | relevant | 10 | 4 | The paper is a population PK study of pegaspargase in humans and reports specific numeric values for Q and CL covariates, but the primary population typical values for CL and V are in the referenced Table 3 which is not fully visible in the provided evidence snippet. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | The paper is a review of oral peptide delivery technologies and does not report pharmacokinetic parameters for pegaspargase. |
| popPK | Würthwein_2017 | relevant | 10 | 0 | The paper reports a population PK model for pegaspargase (Oncaspar) in humans with specific modeling details, but no quantitative parameter values (e.g., median CL, V) are provided in the extracted evidence text. |
| popPK | Würthwein_2025 | relevant | 10 | 2 | The paper is a population pharmacokinetic study of pegaspargase reporting model-based parameter changes (e.g., -60% clearance, -30% volume), but specific numeric parameter values (CL, V, Q, half-life) are contained in the Electronic Supplementary Material (Table S4, S7) which is not provided in the evidence. |
| popPK | Yao_2025 | irrelevant | 0 | 0 | The paper is a bibliometric analysis of population pharmacokinetic modeling research generally and does not report specific PK parameters for pegaspargase. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis comparing the efficacy and safety of chemotherapy regimens for peripheral T-cell lymphoma and does not report pharmacokinetic parameters for pegaspargase. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpegaspargase%5D&body=Drug%3A%20pegaspargase%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pegaspargase/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 22:38 UTC</sub>
