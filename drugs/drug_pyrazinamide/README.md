<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;pyrazinamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pyrazinamide_Xu2024_reference&quot;,&quot;label&quot;:&quot;Xu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pyrazinamide/Pyrazinamide_Xu2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pyrazinamide

- **generic name:** pyrazinamide
- **ATC codes:** `J04AK01`, `J04AM05`, `J04AM11`
- **DrugBank:** [DB00339](https://go.drugbank.com/drugs/DB00339) · **PubChem:** [CID 1046](https://pubchem.ncbi.nlm.nih.gov/compound/1046)
- **molar mass:** 123.1127 g/mol (C5H5N3O) — DrugBank
- **groups:** approved, investigational

## About

Pyrazinamide is an antituberculous drug used to treat tuberculosis, often in combination with other tuberculosis medicines. It is widely used and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417571](https://www.wikidata.org/wiki/Q417571) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pyrazinamide | parent | 123.113 | C5H5N3O | DrugBank | [1046](https://pubchem.ncbi.nlm.nih.gov/compound/1046) | Calderin_2025, Chen_2024, Peloquin_1997, Xu_2024 |

## Start here

> **Xu_2024_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> adults with drug-susceptible pulmonary tuberculosis, n = &gt;&lt;/parameter&gt; }. [Run it in the simulator](drugs/drug_pyrazinamide/Pyrazinamide_Xu2024_reference.md?tab=Simulation) · [record](drugs/drug_pyrazinamide/Pyrazinamide_Xu2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Chen_2024 · CL/F</text><circle cx="304.3" cy="30.0" r="4" fill="#ef6c00"><title>Chen_2024 · CL/F: 0.45 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Xu_2024 · CL/F</text><circle cx="460.9" cy="46.0" r="4" fill="#ef6c00"><title>Xu_2024 · CL/F: 3.53 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub> | [Calderin_2025_reference](drugs/drug_pyrazinamide/Pyrazinamide_Calderin2025_reference.md) | — | 1-compartment (no model) | 1 | Calderin JM et al., Population pharmacokinetics of pyrazina…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00099-25](https://doi.org/10.1128/aac.00099-25) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Chen_2024_reference](drugs/drug_pyrazinamide/Pyrazinamide_Chen2024_reference.md) | — | 1-compartment (no model) | 1 | Chen S et al., Population Pharmacokinetic Modeling of…, Therapeutic drug monitoring (2024) | [10.1097/FTD.0000000000001255](https://doi.org/10.1097/FTD.0000000000001255) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q81 — no SI value to build from</sub> | [Xu_2024_reference](drugs/drug_pyrazinamide/Pyrazinamide_Xu2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Xu AY et al., Pyrazinamide Safety, Efficacy, and Dosi…, American journal of respira… (2024) | [10.1164/rccm.202401-0165OC](https://doi.org/10.1164/rccm.202401-0165OC) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Peloquin_1997_reference](drugs/drug_pyrazinamide/Pyrazinamide_Peloquin1997_reference.md) | — | general linear (no model) | 3 | Peloquin CA et al., Population pharmacokinetic modeling of…, Antimicrobial agents and ch… (1997) | [10.1128/AAC.41.12.2670](https://doi.org/10.1128/AAC.41.12.2670) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Keating_2020_human_taste_aversiveness_rating](drugs/drug_pyrazinamide/pd_Keating_2020_human_taste_aversiveness_rating.md) | human taste aversiveness rating ← pyrazinamide · direct Emax (saturable) effect | — | Keating AV et al., Multi-Methodological Quantitative Taste…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040369](https://doi.org/10.3390/pharmaceutics12040369) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [de_2026_CFU](drugs/drug_pyrazinamide/pd_de_2026_CFU.md) | sputum colony-forming unit (CFU) count ← pyrazinamide · disease-progression model | — | de Castro Suarez N et al., Predicting early bactericidal activity…, bioRxiv : the preprint serv… (2026) | [10.64898/2026.01.29.702705](https://doi.org/10.64898/2026.01.29.702705) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pyrazinamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `AOX1` substrate, `XDH` substrate | DrugBank actor |
| metabolism | small intestine | `XDH` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:54 | 15:18 | 3/1/0 | 2/0/0 | 0/0/0 | 430,728/68,418 | einfracz / qwen3.8-27b | 11 | 1/10 | 10/1 | 0 |

## Coverage

- **PubMed hits:** 93 matched, 20 returned
- **screened:** 13  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs review 3  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alsultan_2017.pdf` | Alsultan A et al., Population Pharmacokinetics of Pyrazina…, Antimicrobial agents and ch… (2017) | popPK | 10 | [10.1128/AAC.02625-16](https://doi.org/10.1128/AAC.02625-16) | [28289033](https://pubmed.ncbi.nlm.nih.gov/28289033) | The study is a population PK analysis of pyrazinamide in humans, but the specific estimated parameter values (CL/F, V/F, interindividual variability) are likely located in the full text tables or figures which are not included in the provided evidence snippet (only summary statistics like Cmax and AUC are present). |
| `Chen_2024.pdf` | Chen S et al., Population Pharmacokinetic Modeling of…, Therapeutic drug monitoring (2024) | popPK | 10 | [10.1097/FTD.0000000000001255](https://doi.org/10.1097/FTD.0000000000001255) | [39240829](https://pubmed.ncbi.nlm.nih.gov/39240829) | The abstract provides key quantitative parameters including covariate effects on clearance (0.45 L/h per 10 kg) and simulated exposure metrics (AUC and Cmax ranges). |
| `Chirehwa_2017.pdf` | Chirehwa MT et al., Pharmacokinetics of Pyrazinamide and Op…, Antimicrobial agents and ch… (2017) | popPK | 10 | [10.1128/AAC.00490-17](https://doi.org/10.1128/AAC.00490-17) | [28607022](https://pubmed.ncbi.nlm.nih.gov/28607022) | The paper is a population PK study for pyrazinamide, but the specific quantitative parameter estimates (CL, V, ka, etc.) are not explicitly listed in the provided abstract text, implying they are in the full text or tables not included in this evidence snippet. |
| `Peloquin_1997.pdf` | Peloquin CA et al., Population pharmacokinetic modeling of…, Antimicrobial agents and ch… (1997) | popPK | 10 | [10.1128/AAC.41.12.2670](https://doi.org/10.1128/AAC.41.12.2670) | [9420037](https://pubmed.ncbi.nlm.nih.gov/9420037) | The study reports population PK parameters for pyrazinamide in humans, specifically median Cmax and half-life, within the provided abstract text. |
| `Zhu_2005.pdf` | Zhu M et al., Population pharmacokinetics of pyrazina…, Journal of veterinary pharm… (2005) | popPK | 10 | [10.1111/j.1365-2885.2005.00670.x](https://doi.org/10.1111/j.1365-2885.2005.00670.x) | [16207301](https://pubmed.ncbi.nlm.nih.gov/16207301) | Study reports population PK for pyrazinamide in elephants, but the evidence provided contains only descriptive stats (Cmax, Tmax, AUC comparisons) rather than specific compartmental parameter values (CL, V, ka) likely found in the full text or supplementary tables. |
| `Gumbo_2010.pdf` | Gumbo T, New susceptibility breakpoints for firs…, Antimicrobial agents and ch… (2010) | popPK | 9 | [10.1128/AAC.01474-09](https://doi.org/10.1128/AAC.01474-09) | [20086150](https://pubmed.ncbi.nlm.nih.gov/20086150) | The paper uses population PK parameters for pyrazinamide to determine susceptibility breakpoints, but the specific numeric PK values (CL, V, etc.) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-13 11:45 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alsultan_2017 | relevant | 10 | 4 | The study is a population PK analysis of pyrazinamide in humans, but the specific estimated parameter values (CL/F, V/F, interindividual variability) are likely located in the full text tables or figures which are not included in the provided evidence snippet (only summary statistics like Cmax and AUC are present). |
| popPK | Chirehwa_2017 | relevant | 10 | 3 | The paper is a population PK study for pyrazinamide, but the specific quantitative parameter estimates (CL, V, ka, etc.) are not explicitly listed in the provided abstract text, implying they are in the full text or tables not included in this evidence snippet. |
| popPK | Deshpande_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of benzylpenicillin, and pyrazinamide is only used as a comparator drug in the HFS-TB model without specific PK parameter estimation. |
| popPK | Egelund_2011 | irrelevant | 3 | 0 | The paper is a review of population PK studies for anti-TB drugs, including pyrazinamide, but the provided evidence contains only the abstract and no specific numeric parameter values. |
| popPK | Gumbo_2010 | relevant | 9 | 4 | The paper uses population PK parameters for pyrazinamide to determine susceptibility breakpoints, but the specific numeric PK values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| popPK | Heysell_2023 | irrelevant | 1 | 1 | The study is a clinical pharmacokinetic-pharmacodynamic (PK-PD) analysis of treatment outcomes and does not report compartmental parameters like clearance, volume of distribution, or absorption rate. |
| popPK | Keating_2020 | irrelevant | 0 | 0 | The study assesses the taste and sensory properties of pyrazinamide using electronic tongues, human taste panels, and rat BATA models, providing no pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | McIlleron_2019 | irrelevant | 2 | 0 | This is a narrative review discussing pharmacokinetic variability and dosing without reporting specific quantitative parameter values (CL, V, ka) for pyrazinamide. |
| popPK | Mourik_2018 | irrelevant | 0 | 0 | The study is a treatment outcome assessment in mice modeling the relationship between treatment duration and cure probability (bacterial clearance), not a pharmacokinetic study measuring disposition parameters (CL, V, ka, etc.) for pyrazinamide. |
| popPK | Muliaditan_2021 | irrelevant | 1 | 0 | The study is a PK-PD modeling analysis of bacterial efficacy in mice, and no quantitative pharmacokinetic parameters (CL, V, etc.) for pyrazinamide are reported. |
| popPK | Pang_2021 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of pyrazinamide derivatives as prolyl-tRNA synthetase inhibitors (in silico and in vitro), not on the pharmacokinetic disposition of pyrazinamide. |
| popPK | Pareek_2022 | irrelevant | 0 | 0 | Pyrazinamide is used as an antiviral compound in an in vitro study against alphaviruses, not as a subject of pharmacokinetic analysis. |
| popPK | Svensson_2018 | irrelevant | 0 | 0 | The study is a population PK analysis of rifampicin, with pyrazinamide listed only as a co-administered drug, so no PK parameters for pyrazinamide are reported. |
| popPK | Zhu_2005 | relevant | 10 | 3 | Study reports population PK for pyrazinamide in elephants, but the evidence provided contains only descriptive stats (Cmax, Tmax, AUC comparisons) rather than specific compartmental parameter values (CL, V, ka) likely found in the full text or supplementary tables. |
| popPK | de_2026 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic (PD) interactions and efficacy modeling of drug combinations, not on the quantitative pharmacokinetic disposition parameters (CL, V, etc.) of pyrazinamide as the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrazinamide%5D&body=Drug%3A%20pyrazinamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pyrazinamide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-13 11:45 UTC</sub>
