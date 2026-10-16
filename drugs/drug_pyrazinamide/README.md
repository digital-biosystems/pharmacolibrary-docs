<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;pyrazinamide&quot;}]"></div>

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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:54 | 15:18 | 1/1/2 | 2/0/0 | 0/0/0 | 430,728/68,418 | einfracz / qwen3.8-27b | 11 | 1/10 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span> | [Xu_2024_reference](drugs/drug_pyrazinamide/Pyrazinamide_Xu2024_reference.md) | — | 1-compartment (no model) | 3 | Xu AY et al., Pyrazinamide Safety, Efficacy, and Dosi…, American journal of respira… (2024) | [10.1164/rccm.202401-0165OC](https://doi.org/10.1164/rccm.202401-0165OC) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Calderin_2025_reference](drugs/drug_pyrazinamide/Pyrazinamide_Calderin2025_reference.md) | — | 1-compartment (no model) | 1 | Calderin JM et al., Population pharmacokinetics of pyrazina…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00099-25](https://doi.org/10.1128/aac.00099-25) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Chen_2024_reference](drugs/drug_pyrazinamide/Pyrazinamide_Chen2024_reference.md) | — | 1-compartment (no model) | 1 | Chen S et al., Population Pharmacokinetic Modeling of…, Therapeutic drug monitoring (2024) | [10.1097/FTD.0000000000001255](https://doi.org/10.1097/FTD.0000000000001255) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Peloquin_1997_reference](drugs/drug_pyrazinamide/Pyrazinamide_Peloquin1997_reference.md) | — | general linear (no model) | 3 | Peloquin CA et al., Population pharmacokinetic modeling of…, Antimicrobial agents and ch… (1997) | [10.1128/AAC.41.12.2670](https://doi.org/10.1128/AAC.41.12.2670) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Keating_2020_human_taste_aversiveness_rating](drugs/drug_pyrazinamide/pd_Keating_2020_human_taste_aversiveness_rating.md) | human taste aversiveness rating ← pyrazinamide · direct Emax (saturable) effect | — | Keating AV et al., Multi-Methodological Quantitative Taste…, Pharmaceutics (2020) | [10.3390/pharmaceutics12040369](https://doi.org/10.3390/pharmaceutics12040369) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [de_2026_CFU](drugs/drug_pyrazinamide/pd_de_2026_CFU.md) | sputum colony-forming unit (CFU) count ← pyrazinamide · disease-progression model | — | de Castro Suarez N et al., Predicting early bactericidal activity…, bioRxiv : the preprint serv… (2026) | [10.64898/2026.01.29.702705](https://doi.org/10.64898/2026.01.29.702705) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 93 matched, 20 returned
- **screened:** 13  ·  **relevant:** 5
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
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

<sub>queue written 2026-10-13T11:45:27.039288+00:00</sub>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-13 11:45 UTC</sub>
