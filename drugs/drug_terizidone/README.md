<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;terizidone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Terizidone_Kengo2024_reference&quot;,&quot;label&quot;:&quot;Kengo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_terizidone/Terizidone_Kengo2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Terizidone_Mulubwa2019v2_reference&quot;,&quot;label&quot;:&quot;Mulubwa_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_terizidone/Terizidone_Mulubwa2019v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Terizidone_Mulubwa2019_reference&quot;,&quot;label&quot;:&quot;Mulubwa_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_terizidone/Terizidone_Mulubwa2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Terizidone_Upton2025_reference&quot;,&quot;label&quot;:&quot;Upton_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_terizidone/Terizidone_Upton2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# terizidone

- **generic name:** terizidone
- **ATC codes:** `J04AK03`
- **DrugBank:** [DB12954](https://go.drugbank.com/drugs/DB12954) · **PubChem:** [CID 65720](https://pubchem.ncbi.nlm.nih.gov/compound/65720)
- **molar mass:** 302.29 g/mol (C14H14N4O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Terizidone is an antimycobacterial medicine classified for the treatment of tuberculosis. It is not authorised in the European Union, and its current availability is unclear, with sources describing it variously as approved, investigational, or withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1318344](https://www.wikidata.org/wiki/Q1318344) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| terizidone | parent | 302.29 | C14H14N4O4 | DrugBank | [65720](https://pubchem.ncbi.nlm.nih.gov/compound/65720) | Chirehwa_2020, Mulubwa_2019, Upton_2025, van_2023 |
| cycloserine | metabolite | 102.093 | C3H6N2O2 | PubChem | [6234](https://pubchem.ncbi.nlm.nih.gov/compound/6234) | Upton_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:34 | 3:14 | 2/3/1 | 0/0/0 | 0/0/0 | 94,901/13,725 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Kengo_2024_reference](drugs/drug_terizidone/Terizidone_Kengo2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kengo A et al., Assessing potential drug-drug interacti…, Antimicrobial agents and ch… (2024) | [10.1128/aac.01583-23](https://doi.org/10.1128/aac.01583-23) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.7). Primary extraction retained.">cross-check: partial</span> | [Mulubwa_2019_2_reference](drugs/drug_terizidone/Terizidone_Mulubwa2019v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Mulubwa M et al., Amount of Cycloserine Emanating from Te…, Drugs in R&D (2019) | [10.1007/s40268-019-00281-4](https://doi.org/10.1007/s40268-019-00281-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [van_2023_reference](drugs/drug_terizidone/Terizidone_van2023_reference.md) | — | 1-compartment (no model) | 2 | van der Laan LE et al., Optimizing dosing of the cycloserine pr…, Antimicrobial agents and ch… (2023) | [10.1128/aac.00611-23](https://doi.org/10.1128/aac.00611-23) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Chirehwa_2020_reference](drugs/drug_terizidone/Terizidone_Chirehwa2020_reference.md) | — | 1-compartment (no model) | 2 | Chirehwa MT et al., Population Pharmacokinetics of Cycloser…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01381-20](https://doi.org/10.1128/AAC.01381-20) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Mulubwa_2019_reference](drugs/drug_terizidone/Terizidone_Mulubwa2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Mulubwa M et al., Steady-state population pharmacokinetic…, British journal of clinical… (2019) | [10.1111/bcp.13975](https://doi.org/10.1111/bcp.13975) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `engineer`</sub> | [Upton_2025_reference](drugs/drug_terizidone/Terizidone_Upton2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Upton CM et al., Cerebrospinal fluid penetration of cycl…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00931-25](https://doi.org/10.1128/aac.00931-25) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 6  ·  extracted 2  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mulubwa_2019.pdf` | Mulubwa M et al., Steady-state population pharmacokinetic…, British journal of clinical… (2019) | popPK | 10 | [10.1111/bcp.13975](https://doi.org/10.1111/bcp.13975) | [31046167](https://pubmed.ncbi.nlm.nih.gov/31046167) | The abstract explicitly reports quantitative population pharmacokinetic parameters including clearance, volume, and absorption rate for terizidone in humans. |
| `van_2023.pdf` | van der Laan LE et al., Optimizing dosing of the cycloserine pr…, Antimicrobial agents and ch… (2023) | popPK | 10 | [10.1128/aac.00611-23](https://doi.org/10.1128/aac.00611-23) | [37971239](https://pubmed.ncbi.nlm.nih.gov/37971239) | The study develops a population PK model for terizidone's active metabolite (cycloserine) in children, reporting quantitative parameters such as clearance (0.474 L/h) and absorption transit times in the abstract. |
| `Chirehwa_2020.pdf` | Chirehwa MT et al., Population Pharmacokinetics of Cycloser…, Antimicrobial agents and ch… (2020) | popPK | 7 | [10.1128/AAC.01381-20](https://doi.org/10.1128/AAC.01381-20) | [32816738](https://pubmed.ncbi.nlm.nih.gov/32816738) | The study provides population PK parameters (clearance, volume scaling) for cycloserine, which is the active metabolite of terizidone, effectively modeling terizidone's pharmacokinetics in humans. |

<sub>queue written 2026-10-07T12:31:14.502959+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Behrens_2026 | irrelevant | 2 | 0 | This study externally evaluates pre-existing population PK models and calculates AUC/IOV for terizidone (via its metabolite cycloserine) but does not report the structural PK parameter values (CL, V, etc.) required for extraction. |
| popPK | Gausi_2022 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of isoniazid, with terizidone serving only as a co-administered drug in the MDR-TB regimen. |
| popPK | Kengo_2024 | irrelevant | 5 | 0 | The paper models cycloserine (the active metabolite) for terizidone but explicitly states that all pharmacokinetic parameters were fixed to literature values and no new quantitative estimates for terizidone/cycloserine are reported in the evidence. |
| popPK | Mulubwa_2018 | irrelevant | 1 | 0 | The paper describes a validation study for an HPLC method and mentions the application in a PK study but does not report the specific quantitative PK parameters (CL, V, etc.) within the provided evidence. |
| popPK | Mulubwa_2019_2 | relevant | 8 | 2 | The study reports population PK parameters for terizidone (specifically clearance components CLtm/F and CLto/F), but the numeric values are stated to be in Table 3 which is not provided in the evidence, though some indirect numeric metrics for the metabolite cycloserine are present. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:31 UTC</sub>
