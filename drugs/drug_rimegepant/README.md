<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;rimegepant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rimegepant_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rimegepant/Rimegepant_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# rimegepant

- **generic name:** rimegepant
- **ATC codes:** `N02CD06`
- **DrugBank:** [DB12457](https://go.drugbank.com/drugs/DB12457) · **PubChem:** [CID 51049968](https://pubchem.ncbi.nlm.nih.gov/compound/51049968)
- **molar mass:** 534.568 g/mol (C28H28F2N6O3) — DrugBank
- **groups:** approved, investigational

## About

Rimegepant is a calcitonin gene-related peptide receptor antagonist used to treat acute migraine attacks in adults. It is an approved medicine and is authorised in the European Union for migraine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27272184](https://www.wikidata.org/wiki/Q27272184) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rimegepant | parent | 534.568 | C28H28F2N6O3 | DrugBank | [51049968](https://pubchem.ncbi.nlm.nih.gov/compound/51049968) | Comisar_2025, Comisar_2025_2, Lim_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:44 | 5:37 | 1/1/3 | 1/0/0 | 0/0/0 | 376,872/16,528 | einfracz / qwen3.8-27b | 11 | 2/7 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.588), gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Comisar_2025_reference](drugs/drug_rimegepant/Rimegepant_Comisar2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+7 cov.) | Comisar CM et al., Exposure Matching Using Population Phar…, Clinical and translational… (2025) | [10.1111/cts.70360](https://doi.org/10.1111/cts.70360) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Lim_2026_group_1_25_mg_15_kg_to_30_kg](drugs/drug_rimegepant/Rimegepant_Lim2026_group_1_25_mg_15_kg_to_30_kg.md) | — | 1-compartment (no model) | 0 | Lim CN et al., A phase 1, multicenter, open-label stud…, Headache (2026) | [10.1111/head.15074](https://doi.org/10.1111/head.15074) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Lim_2026_group_2_50_mg_30_kg_to_50_kg](drugs/drug_rimegepant/Rimegepant_Lim2026_group_2_50_mg_30_kg_to_50_kg.md) | — | 1-compartment (no model) | 0 | Lim CN et al., A phase 1, multicenter, open-label stud…, Headache (2026) | [10.1111/head.15074](https://doi.org/10.1111/head.15074) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Lim_2026_group_3_75_mg_50_kg](drugs/drug_rimegepant/Rimegepant_Lim2026_group_3_75_mg_50_kg.md) | — | 1-compartment (no model) | 0 | Lim CN et al., A phase 1, multicenter, open-label stud…, Headache (2026) | [10.1111/head.15074](https://doi.org/10.1111/head.15074) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.789), gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Comisar_2025_2_reference](drugs/drug_rimegepant/Rimegepant_Comisar2025v2_reference.md) | — | 2-compartment (no model) | 7 (+4 cov.) | Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Boucherie_2024_CGRP_induced_relaxation_2](drugs/drug_rimegepant/pd_Boucherie_2024_CGRP_induced_relaxation_2.md) | relaxations induced by calcitonin gene-related peptide (CGRP) in human isolated middle meningeal arteries ← rimegepant · direct Emax (saturable) effect | — | Boucherie DM et al., Comparison of gepant effects at therape…, The journal of headache and… (2024) | [10.1186/s10194-024-01846-8](https://doi.org/10.1186/s10194-024-01846-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rimegepant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 39 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mehta_2024.pdf` | Mehta P et al., Concomitant use of calcitonin gene-rela…, Journal of oncology pharmac… (2024) | pgx | 7 | [10.1177/10781552241265884](https://doi.org/10.1177/10781552241265884) | [39052976](https://www.ncbi.nlm.nih.gov/pubmed/39052976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T15:39:10.996851+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Baker_2022 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (plasma/milk concentrations, RID) but contains no pharmacodynamic or exposure-response analysis. |
| PGx | Bhardwaj_2025 | not_relevant | 1 | 0 | The paper reports drug-drug interactions (CYP3A4 inhibition/induction) rather than pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Comisar_2025_2 | not_relevant | 0 | 0 | The study reports on demographic and physiological covariates (hepatic impairment, ethnicity, body weight, drug-drug interactions) but does not investigate or report on pharmacogenomic factors such as gene variants or genotypes. |
| popPK | Comisar_2025_3 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for zavegepant, not rimegepant. |
| PD | DeFalco_2021 | not_relevant | 1 | 0 | The paper is a clinical review summarizing efficacy and safety outcomes from RCTs but does not report or derive numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships. |
| PD | Dermitzakis_2024 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (pain freedom, VAS reduction) for a fixed dose but does not provide drug concentration data or fit a pharmacodynamic model to derive parameters like Emax or EC50. |
| PD | Dong_2023 | not_relevant | 1 | 0 | The paper is a meta-analysis of adverse drug reaction incidence and correlates (demographics, dosage), not a pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Giner-Soriano_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of migraine preventive drugs (propranolol, amitriptyline, flunarizine, topiramate) and does not report pharmacokinetic parameters for rimegepant. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | This is a narrative review comparing clinical efficacy and safety of gepants and triptans, with no report of pharmacogenomic effects on PK or PD. |
| popPK | Martinelli_2026 | irrelevant | 0 | 0 | The study is a biomarker trial for erenumab in migraine and does not report pharmacokinetic parameters for rimegepant. |
| PGx | Mehta_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction case series without measuring PK parameters or analyzing genetic variants. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review focusing on drug-drug and drug-food interactions, not pharmacogenomic variants affecting rimegepant. |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is only a title ("Drugs for Migraine") and contains no data, analysis, or numeric parameters. |
| PD | unknown_2020_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is a title for a paper on atogepant, not rimegepant, and contains no data or PD parameters. |
| PD | unknown_2021_2 | not_relevant | 0 | 0 | The paper discusses dihydroergotamine (Trudhesa), not rimegepant, and does not report PD parameters for the target drug. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title or fragment ("Drugs for migraine") and contains no data, analysis, or numeric parameters for rimegepant. |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The provided text is a title for zavegepant, not rimegepant, and contains no data or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:39 UTC</sub>
