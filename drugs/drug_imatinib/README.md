<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;imatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imatinib_Khosravan2016_reference&quot;,&quot;label&quot;:&quot;Khosravan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Khosravan2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imatinib_Chien2022_reference&quot;,&quot;label&quot;:&quot;Chien_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Chien2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imatinib_Garrett2023_reference&quot;,&quot;label&quot;:&quot;Garrett_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Garrett2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# imatinib

- **generic name:** imatinib
- **ATC codes:** `L01EA01`, `L01XE01`
- **DrugBank:** [DB00619](https://go.drugbank.com/drugs/DB00619) · **PubChem:** [CID 5291](https://pubchem.ncbi.nlm.nih.gov/compound/5291)
- **molar mass:** 493.6027 g/mol (C29H31N7O) — DrugBank
- **groups:** approved, investigational

## About

Imatinib is a tyrosine-kinase inhibitor used to treat several cancers, including chronic myeloid leukemia, gastrointestinal stromal tumors, dermatofibrosarcoma protuberans, and other leukemias. It is widely used and appears on the WHO list of essential medicines, with several products authorised in the European Union for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q177094](https://www.wikidata.org/wiki/Q177094) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| imatinib | parent | 493.603 | C29H31N7O | DrugBank | [5291](https://pubchem.ncbi.nlm.nih.gov/compound/5291) | Chien_2022, Delbaldo_2006 |
| CGP 74588 | metabolite | 479.588 | C28H29N7O | PubChem | [9869737](https://pubchem.ncbi.nlm.nih.gov/compound/9869737) | Delbaldo_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:42 | 10:32 | 1/1/3 | 1/1/0 | 0/0/0 | 303,416/60,479 | openai / gpt-6-luna | 12 | 2/10 | 10/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span> | [Khosravan_2016_reference](drugs/drug_imatinib/Imatinib_Khosravan2016_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Khosravan R et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0404-5](https://doi.org/10.1007/s40262-016-0404-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.947). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Chien_2022_reference](drugs/drug_imatinib/Imatinib_Chien2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Chien YH et al., Population pharmacokinetic modelling of…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04454-y](https://doi.org/10.1007/s00280-022-04454-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Delbaldo_2006_reference](drugs/drug_imatinib/Imatinib_Delbaldo2006_reference.md) | — | parent + metabolite (no model) | 4 | Delbaldo C et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical cancer research :… (2006) | [10.1158/1078-0432.CCR-05-2596](https://doi.org/10.1158/1078-0432.CCR-05-2596) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Garrett_2023_reference](drugs/drug_imatinib/Imatinib_Garrett2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Baalbaki_2023_reference](drugs/drug_imatinib/Imatinib_Baalbaki2023_reference.md) | — | 1-compartment (no model) | 0 | Baalbaki N et al., Pharmacokinetics and pharmacodynamics o…, European journal of pharmac… (2023) | [10.1016/j.ejps.2023.106418](https://doi.org/10.1016/j.ejps.2023.106418) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huynh_2023_SARS_CoV_2_propagation_in_Calu_3_cells_pre_post](drugs/drug_imatinib/pd_Huynh_2023_SARS_CoV_2_propagation_in_Calu_3_cells_pre_post.md) | SARS-CoV-2 propagation in Calu-3 cells (pre-post) ← imatinib · inhibition effect | — | Huynh TTX et al., Amuvatinib Blocks SARS-CoV-2 Infection…, Microbiology spectrum (2023) | [10.1128/spectrum.05105-22](https://doi.org/10.1128/spectrum.05105-22) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huynh_2023_SARS_CoV_2_propagation_in_Calu_3_cells_pretreatment](drugs/drug_imatinib/pd_Huynh_2023_SARS_CoV_2_propagation_in_Calu_3_cells_pretreatme.md) | SARS-CoV-2 propagation in Calu-3 cells (pretreatment) ← imatinib · inhibition effect | — | Huynh TTX et al., Amuvatinib Blocks SARS-CoV-2 Infection…, Microbiology spectrum (2023) | [10.1128/spectrum.05105-22](https://doi.org/10.1128/spectrum.05105-22) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huynh_2023_anti_SARS_CoV_2_activity_in_Vero_E6_cells](drugs/drug_imatinib/pd_Huynh_2023_anti_SARS_CoV_2_activity_in_Vero_E6_cells.md) | anti-SARS-CoV-2 activity in Vero E6 cells ← imatinib · inhibition effect | — | Huynh TTX et al., Amuvatinib Blocks SARS-CoV-2 Infection…, Microbiology spectrum (2023) | [10.1128/spectrum.05105-22](https://doi.org/10.1128/spectrum.05105-22) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Said_2025_ICU_stay](drugs/drug_imatinib/pd_Said_2025_ICU_stay.md) | ICU stay ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Said_2025_P_F](drugs/drug_imatinib/pd_Said_2025_P_F.md) | P/F ratio ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Said_2025_WHO_score](drugs/drug_imatinib/pd_Said_2025_WHO_score.md) | WHO score ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Said_2025_mortality](drugs/drug_imatinib/pd_Said_2025_mortality.md) | mortality ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Said_2025_ventilator_free_days](drugs/drug_imatinib/pd_Said_2025_ventilator_free_days.md) | ventilator-free days ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 91 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Delbaldo_2006.pdf` | Delbaldo C et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical cancer research :… (2006) | popPK | 10 | [10.1158/1078-0432.CCR-05-2596](https://doi.org/10.1158/1078-0432.CCR-05-2596) | [17062683](https://pubmed.ncbi.nlm.nih.gov/17062683) | Human population-PK results report numeric imatinib clearance and metabolite clearance values. |
| `Said_2025.pdf` | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | popPK | 9 | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) | [41109533](https://pubmed.ncbi.nlm.nih.gov/41109533) | Human imatinib PK modeling is described, but numeric disposition parameter values are not present in the evidence. |
| `Corral_2022.pdf` | Corral Alaejos Á et al., External evaluation of population pharm…, British journal of clinical… (2022) | popPK | 8 | [10.1111/bcp.15122](https://doi.org/10.1111/bcp.15122) | [34705297](https://pubmed.ncbi.nlm.nih.gov/34705297) | This is an external evaluation of imatinib popPK models, but no numeric disposition parameter values are present in the evidence. |

<sub>queue written 2026-10-07T01:33:41.370493+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cardoso_2018 | irrelevant | 0 | 0 | This is a review and reports no quantitative imatinib disposition parameters. |
| popPK | Corral_2022 | relevant | 8 | 0 | This is an external evaluation of imatinib popPK models, but no numeric disposition parameter values are present in the evidence. |
| popPK | Cortes_2009 | irrelevant | 1 | 1 | This is a review, not an original population-PK study, and the reported numbers are exposure concentrations rather than disposition parameters. |
| popPK | Dilli_2024 | relevant | 9 | 2 | The paper evaluates imatinib population-PK models, but the parameter-value snippets are too corrupted to read reliably. |
| popPK | Garrett_2023 | irrelevant | 0 | 0 | The quantitative PK parameters are for bosutinib; imatinib is only a comparator. |
| popPK | Giles_2013 | irrelevant | 0 | 0 | The study models nilotinib; imatinib is mentioned only as prior resistance or intolerance, with no imatinib PK values. |
| popPK | Gotta_2013 | irrelevant | 2 | 1 | This is a review, and the evidence gives exposure summaries but no numeric imatinib disposition parameter estimates. |
| popPK | Hanley_2025 | irrelevant | 0 | 0 | The population-PK analyses are for ponatinib; imatinib is only a comparator and no imatinib disposition parameters are reported. |
| popPK | Hansson_2013 | irrelevant | 0 | 0 | The study models sunitinib in human patients; imatinib is only mentioned as prior therapy, and no imatinib parameters are reported. |
| popPK | Huynh_2023 | irrelevant | 0 | 0 | Imatinib is tested in cell-based antiviral assays, reporting efficacy values rather than pharmacokinetic parameters. |
| popPK | Khosravan_2016 | irrelevant | 0 | 0 | The quantitative PK model is for sunitinib and its metabolite, not imatinib. |
| popPK | Michor_2005 | irrelevant | 1 | 0 | This models CML cell kinetics during imatinib therapy, not imatinib disposition, and reports no pharmacokinetic parameter values. |
| popPK | Rasmussen_2026 | irrelevant | 3 | 5 | Human concentration-ratio and time-trend estimates are reported, but no quantitative disposition parameters such as CL, V, or ka are given. |
| popPK | Said_2025 | relevant | 9 | 1 | Human imatinib PK modeling is described, but numeric disposition parameter values are not present in the evidence. |
| popPK | Yang_2025 | relevant | 8 | 1 | This evaluates population-PK models for imatinib, but readable model parameter values are not provided here and appear to be in omitted tables or supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:34 UTC</sub>
