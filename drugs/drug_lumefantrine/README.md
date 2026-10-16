<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Francis2020_reference&quot;,&quot;label&quot;:&quot;Francis_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Francis2020_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# Lumefantrine

- **generic name:** Lumefantrine
- **ATC codes:** `P01BF01`
- **DrugBank:** [DB06708](https://go.drugbank.com/drugs/DB06708) · **PubChem:** [CID 6437380](https://pubchem.ncbi.nlm.nih.gov/compound/6437380)
- **molar mass:** 528.94 g/mol (C30H32Cl3NO) — DrugBank
- **groups:** approved, investigational

## About

Lumefantrine is an antimalarial drug used to treat malaria, typically in combination with artemisinin derivatives. It is an approved medicine and is widely used in antimalarial combination therapy around the world.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904464](https://www.wikidata.org/wiki/Q904464) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lumefantrine | parent | 528.94 | C30H32Cl3NO | DrugBank | [6437380](https://pubchem.ncbi.nlm.nih.gov/compound/6437380) | Ding_2026, Francis_2020, Hoglund_2015, Kloprogge_2018 |
| artemether | metabolite | 298.379 | C16H26O5 | PubChem | [68911](https://pubchem.ncbi.nlm.nih.gov/compound/68911) | Ezzet_1998 |
| desbutyllumefantrine (desbutyl-lumefantrine) | metabolite | 472.834 | C26H24Cl3NO | PubChem | [9934522](https://pubchem.ncbi.nlm.nih.gov/compound/9934522) | Ding_2026, Hoglund_2015, Kloprogge_2018 |
| desethylamodiaquine | metabolite | — (mass units only) | — | — | — | — |
| dihydroartemisinin | metabolite | 284.352 | C15H24O5 | PubChem | [107770](https://pubchem.ncbi.nlm.nih.gov/compound/107770) | Ezzet_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:59 | 9:41 | 1/4/2 | 0/0/1 | 0/0/0 | 399,415/38,995 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Francis_2020_reference](drugs/drug_lumefantrine/Lumefantrine_Francis2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 (+1 cov.) | Francis J et al., An Individual Participant Data Populati…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.02394-19](https://doi.org/10.1128/AAC.02394-19) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.435). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: model_quarantined: CLelim[central] left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Ding_2026_nonem_estimates_rse](drugs/drug_lumefantrine/Lumefantrine_Ding2026_nonem_estimates_rse.md) | held back | 2-compartment general linear | 16 | Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026) | [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.435). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q74, Q88, Q22 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Ding_2026_nonmem_estimates_rse](drugs/drug_lumefantrine/Lumefantrine_Ding2026_nonmem_estimates_rse.md) | — | general linear (no model) | 22 | Ding J et al., Population pharmacokinetics of artemeth…, British journal of clinical… (2026) | [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ezzet_1998_reference](drugs/drug_lumefantrine/Lumefantrine_Ezzet1998_reference.md) | — | parent + metabolite (no model) | 4 | Ezzet F et al., Population pharmacokinetics and therape…, British journal of clinical… (1998) | [10.1046/j.1365-2125.1998.00830.x](https://doi.org/10.1046/j.1365-2125.1998.00830.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ezzet_2000_reference](drugs/drug_lumefantrine/Lumefantrine_Ezzet2000_reference.md) | — | 1-compartment (no model) | 0 | Ezzet F et al., Pharmacokinetics and pharmacodynamics o…, Antimicrobial agents and ch… (2000) | [10.1128/AAC.44.3.697-704.2000](https://doi.org/10.1128/AAC.44.3.697-704.2000) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hoglund_2015_reference](drugs/drug_lumefantrine/Lumefantrine_Hoglund2015_reference.md) | — | general linear (no model) | 2 | Hoglund RM et al., Artemether-lumefantrine co-administrati…, British journal of clinical… (2015) | [10.1111/bcp.12529](https://doi.org/10.1111/bcp.12529) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.136). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Kloprogge_2018_reference](drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kloprogge_2018_Day_42_study_outcome_African_children_15_25_kg](drugs/drug_lumefantrine/pd_Kloprogge_2018_Day_42_study_outcome_African_children_15_25_k.md) | Day 42 study outcome (African children 15-25 kg) ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kloprogge_2018_Day_42_study_outcome_African_children_15_kg](drugs/drug_lumefantrine/pd_Kloprogge_2018_Day_42_study_outcome_African_children_15_kg.md) | Day 42 study outcome (African children &lt;15 kg) ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kloprogge_2018_Day_42_study_outcome_Southeast_Asian_pregnant_women](drugs/drug_lumefantrine/pd_Kloprogge_2018_Day_42_study_outcome_Southeast_Asian_pregnant.md) | Day 42 study outcome (Southeast Asian pregnant women) ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kloprogge_2018_Day_42_study_outcome_absence_of_PCR_corrected_recrudescent_infection_during_follow_up](drugs/drug_lumefantrine/pd_Kloprogge_2018_Day_42_study_outcome_absence_of_PCR_corrected.md) | Day 42 study outcome (absence of PCR-corrected recrudescent infection during follow-up) ← lumefantrine · time-to-event model | — | Kloprogge F et al., Artemether-lumefantrine dosing for mala…, PLoS medicine (2018) | [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lumefantrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 74 matched, 20 returned
- **screened:** 6  ·  **relevant:** 5
- **records:** 7  ·  extracted 1  ·  needs_review 2  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Akinrinade_2026.pdf` | Akinrinade TO et al., Population pharmacokinetics of lumefant…, European journal of clinica… (2026) | popPK | 10 | [10.1007/s00228-026-04090-y](https://doi.org/10.1007/s00228-026-04090-y) | [42234159](https://pubmed.ncbi.nlm.nih.gov/42234159) | The abstract describes a population PK study with a two-compartment model, but specific numeric parameter estimates (CL, V, ka, etc.) are not provided in the text or tables, likely residing in results tables or figures not included. |
| `Ezzet_2000.pdf` | Ezzet F et al., Pharmacokinetics and pharmacodynamics o…, Antimicrobial agents and ch… (2000) | popPK | 10 | [10.1128/AAC.44.3.697-704.2000](https://doi.org/10.1128/AAC.44.3.697-704.2000) | [10681341](https://pubmed.ncbi.nlm.nih.gov/10681341) | The study is a population pharmacokinetic analysis of lumefantrine in humans and reports specific quantitative values for absorption half-life and PK concentration metrics in the text, although other core parameters like clearance and volume are not explicitly provided in the evidence. |
| `Borrmann_2010.pdf` | Borrmann S et al., The effect of food consumption on lumef…, Tropical medicine & interna… (2010) | popPK | 9 | [10.1111/j.1365-3156.2010.02477.x](https://doi.org/10.1111/j.1365-3156.2010.02477.x) | [20180933](https://pubmed.ncbi.nlm.nih.gov/20180933) | The study reports a two-compartment PK model and quantitative food effect estimates (e.g., 57% increase in bioavailability), but specific parameter values like CL, V, and ka are not present in the provided text. |
| `Sugiarto_2022.pdf` | Sugiarto SR et al., The pharmacokinetic properties of artem…, British journal of clinical… (2022) | popPK | 9 | [10.1111/bcp.15001](https://doi.org/10.1111/bcp.15001) | [34296469](https://pubmed.ncbi.nlm.nih.gov/34296469) | The study is a population PK study of lumefantrine in humans, but the evidence only provides summary statistics (AUC, half-life) rather than specific compartmental parameter estimates like CL, V, or Q. |

<sub>queue written 2026-10-14T23:50:43.565667+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinrinade_2026 | relevant | 10 | 0 | The abstract describes a population PK study with a two-compartment model, but specific numeric parameter estimates (CL, V, ka, etc.) are not provided in the text or tables, likely residing in results tables or figures not included. |
| popPK | Borrmann_2010 | relevant | 9 | 2 | The study reports a two-compartment PK model and quantitative food effect estimates (e.g., 57% increase in bioavailability), but specific parameter values like CL, V, and ka are not present in the provided text. |
| popPK | Cao_2020 | irrelevant | 2 | 0 | This is an in vitro antiviral study of artemisinins with lumefantrine as one of several tested compounds, and while it mentions a "pharmacokinetic prediction model," no specific numeric PK parameters (CL, V, etc.) for lumefantrine are provided in the evidence. |
| popPK | Ezzet_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of artemether and benflumetol, not lumefantrine. |
| popPK | Kawuma_2021 | irrelevant | 1 | 0 | The study investigates the population pharmacokinetics of dolutegravir, using lumefantrine only as a co-administered comparator in a drug-drug interaction context, without reporting PK parameters for lumefantrine itself. |
| popPK | Kyavar_2006 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic interaction assay involving artemisinin, chloroquine, and desbutyl-benflumetol, with no mention of lumefantrine or its pharmacokinetics. |
| popPK | Müller_2008 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of antimalarial synergism involving artemisinin and monodesbutyl-benflumetol, with no data on lumefantrine pharmacokinetics. |
| popPK | Noedl_2001 | irrelevant | 0 | 0 | The study reports in vitro activity (EC50) of desbutyl-benflumetol against Plasmodium falciparum, not pharmacokinetic parameters for lumefantrine. |
| popPK | Pirker-Krassnig_2004 | irrelevant | 0 | 0 | The study reports in-vitro pharmacodynamic parameters (EC50, EC90) for anti-parasitic activity, not pharmacokinetic disposition parameters. |
| popPK | Samal_2005 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of desbutyl-benflumetol and retinol against Plasmodium falciparum and does not involve lumefantrine pharmacokinetics. |
| popPK | Simeon_2024 | irrelevant | 2 | 0 | The paper is a simulation study using an external PK model (Chotsiri et al.) to optimize dosing, and it does not report the original quantitative disposition parameters (CL, V, etc.) for lumefantrine in the text. |
| popPK | Starzengruber_2007 | irrelevant | 0 | 0 | The study reports in-vitro schizontocidal activity (EC50/EC90) of lumefantrine, not pharmacokinetic disposition parameters such as clearance or volume. |
| popPK | Sugiarto_2022 | relevant | 9 | 3 | The study is a population PK study of lumefantrine in humans, but the evidence only provides summary statistics (AUC, half-life) rather than specific compartmental parameter estimates like CL, V, or Q. |
| popPK | Wernsdorfer_1998 | irrelevant | 0 | 0 | The paper focuses on in vitro antimalarial activity of benflumetol, not lumefantrine pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:50 UTC</sub>
