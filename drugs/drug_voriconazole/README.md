<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;voriconazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Voriconazole_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_voriconazole/Voriconazole_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# voriconazole

- **generic name:** voriconazole
- **ATC codes:** `J02AC03`
- **DrugBank:** [DB00582](https://go.drugbank.com/drugs/DB00582) · **PubChem:** [CID 71616](https://pubchem.ncbi.nlm.nih.gov/compound/71616)
- **molar mass:** 349.3105 g/mol (C16H14F3N5O) — DrugBank
- **groups:** approved, investigational

## About

Voriconazole is an antifungal medicine used to treat serious fungal infections such as aspergillosis, candidiasis, and other systemic mycoses. It is authorised in the European Union and is included on the WHO list of essential medicines, so it is widely used for systemic fungal infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412236](https://www.wikidata.org/wiki/Q412236) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| voriconazole | parent | 349.31 | C16H14F3N5O | DrugBank | [71616](https://pubchem.ncbi.nlm.nih.gov/compound/71616) | Tilen_2022, Wang_2024, Yang_2021, van_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:08 | 5:56 | 1/1/2 | 0/0/2 | 0/0/0 | 217,393/28,780 | einfracz / qwen3.8-27b | 22 | 5/6 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span> | [Wang_2024_reference](drugs/drug_voriconazole/Voriconazole_Wang2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wang J et al., Population Pharmacokinetics of Voricona…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2357](https://doi.org/10.1002/jcph.2357) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.586). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q37 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Tilen_2022_reference](drugs/drug_voriconazole/Voriconazole_Tilen2022_reference.md) | — | 1-compartment (no model) | 3 (+7 cov.) | Tilen R et al., Pharmacogenetic Analysis of Voriconazol…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061289](https://doi.org/10.3390/pharmaceutics14061289) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yang_2021_reference](drugs/drug_voriconazole/Voriconazole_Yang2021_reference.md) | — | 1-compartment (no model) | 1 | Yang P et al., Predicting the Outcome of Voriconazole…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.711187](https://doi.org/10.3389/fphar.2021.711187) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.214). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [van_2023_reference](drugs/drug_voriconazole/Voriconazole_van2023_reference.md) | — | 1-compartment (no model) | 5 | van den Born DA et al., Voriconazole exposure is influenced by…, International journal of an… (2023) | [10.1016/j.ijantimicag.2023.106750](https://doi.org/10.1016/j.ijantimicag.2023.106750) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Liu_2014_global_response](drugs/drug_voriconazole/pd_Liu_2014_global_response.md) | 6-week global response ← voriconazole · categorical (graded) response model | — | Liu P et al., Population pharmacokinetic-pharmacodyna…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02809-13](https://doi.org/10.1128/AAC.02809-13) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Liu_2014_hepatic_AEs](drugs/drug_voriconazole/pd_Liu_2014_hepatic_AEs.md) | hepatic adverse events ← voriconazole · categorical (graded) response model | — | Liu P et al., Population pharmacokinetic-pharmacodyna…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02809-13](https://doi.org/10.1128/AAC.02809-13) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Liu_2014_mortality](drugs/drug_voriconazole/pd_Liu_2014_mortality.md) | 6-week all-causality mortality ← voriconazole · categorical (graded) response model | — | Liu P et al., Population pharmacokinetic-pharmacodyna…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02809-13](https://doi.org/10.1128/AAC.02809-13) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Liu_2014_psychiatric_AEs](drugs/drug_voriconazole/pd_Liu_2014_psychiatric_AEs.md) | psychiatric adverse events ← voriconazole · categorical (graded) response model | — | Liu P et al., Population pharmacokinetic-pharmacodyna…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02809-13](https://doi.org/10.1128/AAC.02809-13) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Liu_2014_visual_AEs](drugs/drug_voriconazole/pd_Liu_2014_visual_AEs.md) | visual adverse events ← voriconazole · categorical (graded) response model | — | Liu P et al., Population pharmacokinetic-pharmacodyna…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02809-13](https://doi.org/10.1128/AAC.02809-13) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Yang_2021_probability_of_predicted_clinical_effectiveness_for_prevention_and_treatment_of_aspergillus_fumigatus_infection](drugs/drug_voriconazole/pd_Yang_2021_probability_of_predicted_clinical_effectiveness_fo.md) | probability of predicted clinical effectiveness for prevention and treatment of aspergillus fumigatus infection ← voriconazole · categorical (graded) response model | — | Yang P et al., Predicting the Outcome of Voriconazole…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.711187](https://doi.org/10.3389/fphar.2021.711187) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Yang_2021_probability_of_predicted_clinical_effectiveness_for_prevention_and_treatment_of_candida_infection](drugs/drug_voriconazole/pd_Yang_2021_probability_of_predicted_clinical_effectiveness_fo.md) | probability of predicted clinical effectiveness for prevention and treatment of candida infection ← voriconazole · categorical (graded) response model | — | Yang P et al., Predicting the Outcome of Voriconazole…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.711187](https://doi.org/10.3389/fphar.2021.711187) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 195 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Theuretzbacher_2006_2.pdf` | Theuretzbacher U et al., Pharmacokinetic/pharmacodynamic profile…, Clinical pharmacokinetics (2006) | popPK | 10 | [10.2165/00003088-200645070-00002](https://doi.org/10.2165/00003088-200645070-00002) | [16802848](https://pubmed.ncbi.nlm.nih.gov/16802848) | The text explicitly reports quantitative pharmacokinetic parameters for voriconazole, including volume of distribution (2-4.6 L/kg) and elimination half-life (~6 hours), as well as bioavailability and clearance mechanisms. |
| `Wang_2024.pdf` | Wang J et al., Population Pharmacokinetics of Voricona…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2357](https://doi.org/10.1002/jcph.2357) | [37766506](https://pubmed.ncbi.nlm.nih.gov/37766506) | The abstract explicitly reports the typical numeric values for clearance (3.22 L/h) and volume of distribution (194 L) for voriconazole in a population PK study. |
| `van_2023.pdf` | van den Born DA et al., Voriconazole exposure is influenced by…, International journal of an… (2023) | popPK | 10 | [10.1016/j.ijantimicag.2023.106750](https://doi.org/10.1016/j.ijantimicag.2023.106750) | [36758777](https://pubmed.ncbi.nlm.nih.gov/36758777) | The paper reports a population pharmacokinetic model for voriconazole with explicit numeric values for volume, Vmax, Michaelis-Menten constant, and bioavailability in the abstract. |

<sub>queue written 2026-10-07T13:03:20.941911+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for isavuconazole, not voriconazole. |
| popPK | Dolton_2012 | irrelevant | 0 | 0 | The paper is a review of posaconazole pharmacokinetics and pharmacodynamics, not voriconazole. |
| popPK | Dolton_2014_3 | irrelevant | 3 | 0 | This is a narrative review summarizing exposure-response relationships without presenting original quantitative population pharmacokinetic parameter estimates. |
| popPK | Hirai_2024 | relevant | 9 | 0 | The paper describes a compartmental pharmacokinetic model for voriconazole, but the evidence provided only lists symbol definitions and model structures without any numeric parameter values. |
| popPK | Hope_2012 | relevant | 10 | 4 | The paper describes a population pharmacokinetic model for voriconazole in humans, but the primary table of parameter estimates (Table 1) is not included in the provided text, leaving only sparse numeric values like Km in the discussion. |
| popPK | Liu_2014 | irrelevant | 2 | 0 | The study focuses on exposure-response relationships for efficacy and safety using observed exposure metrics (AUC, Cmin) rather than reporting original quantitative disposition parameters (CL, V, Q, ka) or a detailed compartmental PK model structure. |
| popPK | Maertens_2023 | irrelevant | 3 | 0 | The study reports only plasma trough concentrations (Ctrough) for exposure-response analysis and lacks quantitative disposition parameters such as clearance, volume of distribution, or compartmental model parameters for voriconazole. |
| popPK | Sato_2019 | irrelevant | 1 | 0 | The paper focuses on TDM of vancomycin and teicoplanin; voriconazole is only briefly mentioned in the abstract without reporting any quantitative PK parameters or models. |
| popPK | Shi_2019 | irrelevant | 4 | 3 | This is a review article summarizing population pharmacokinetic models from 16 other studies, reporting only aggregated ranges and medians rather than original quantitative parameter values for a specific cohort. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study is a population pharmacokinetic (PopPK) analysis of venetoclax, where voriconazole is merely a concomitant inhibitor (probe drug context is reversed), and no PK parameters for voriconazole itself are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:06 UTC</sub>
