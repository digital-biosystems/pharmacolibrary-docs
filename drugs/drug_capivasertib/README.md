<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;capivasertib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capivasertib_Fernandez2025_reference&quot;,&quot;label&quot;:&quot;Fernandez_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# capivasertib

- **generic name:** capivasertib
- **ATC codes:** `L01EX27`
- **DrugBank:** [DB12218](https://go.drugbank.com/drugs/DB12218) · **PubChem:** [CID 25227436](https://pubchem.ncbi.nlm.nih.gov/compound/25227436)
- **molar mass:** 428.915 g/mol (C21H25ClN6O2) — DrugBank
- **groups:** approved, investigational

## About

Capivasertib is a protein kinase inhibitor used to treat breast cancer. It is authorised in the European Union for breast cancer and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074756](https://www.wikidata.org/wiki/Q27074756) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| capivasertib | parent | 428.915 | C21H25ClN6O2 | DrugBank | [25227436](https://pubchem.ncbi.nlm.nih.gov/compound/25227436) | Fernandez-Teruel_2024, Fernandez_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:26 | 7:00 | 0/0/2 | 0/0/1 | 0/0/0 | 111,375/39,412 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.786). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C1_half_life_alpha failed (ratio 1.8838)</sub><br><sub>blocking: C1_half_life_beta failed (ratio 0.6367)</sub><br><sub>route_to: `human_review`</sub> | [Fernandez-Teruel_2024_reference](drugs/drug_capivasertib/Capivasertib_FernandezTeruel2024_reference.md) | — | 2-compartment (no model) | 10 | Fernandez-Teruel C et al., Population Pharmacokinetics of Capivase…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01407-x](https://doi.org/10.1007/s40262-024-01407-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.88). The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Fernandez_2025_reference](drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 10 (+1 cov.) | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_AE_grade_1](drugs/drug_capivasertib/pd_Fernandez_2025_AE_grade_1.md) | AE grade ≥ 1 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_AE_grade_3](drugs/drug_capivasertib/pd_Fernandez_2025_AE_grade_3.md) | AE grade ≥ 3 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_AE_leading_to_dose_discontinuation](drugs/drug_capivasertib/pd_Fernandez_2025_AE_leading_to_dose_discontinuation.md) | AE leading to dose discontinuation ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_AE_leading_to_dose_modification](drugs/drug_capivasertib/pd_Fernandez_2025_AE_leading_to_dose_modification.md) | AE leading to dose modification (interruption and/or reduction) ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Fernandez_2025_Diarrhea_AE_grade_2](drugs/drug_capivasertib/pd_Fernandez_2025_Diarrhea_AE_grade_2.md) | Diarrhea AE grade ≥ 2 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_Hyperglycemia_AE_any_grade](drugs/drug_capivasertib/pd_Fernandez_2025_Hyperglycemia_AE_any_grade.md) | Hyperglycemia AE any grade ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_Hyperglycemia_AE_grade_3](drugs/drug_capivasertib/pd_Fernandez_2025_Hyperglycemia_AE_grade_3.md) | Hyperglycemia AE grade ≥ 3 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_Increased_blood_glucose_13_9_mmol_L](drugs/drug_capivasertib/pd_Fernandez_2025_Increased_blood_glucose_13_9_mmol_L.md) | Increased blood glucose &gt; 13.9 mmol/L ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Fernandez_2025_ORR](drugs/drug_capivasertib/pd_Fernandez_2025_ORR.md) | Objective response rate ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Fernandez_2025_PFS](drugs/drug_capivasertib/pd_Fernandez_2025_PFS.md) | Progression-free survival ← capivasertib · time-to-event model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_Rash_AE_grade_2](drugs/drug_capivasertib/pd_Fernandez_2025_Rash_AE_grade_2.md) | Rash AE grade ≥ 2 ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fernandez_2025_SAE](drugs/drug_capivasertib/pd_Fernandez_2025_SAE.md) | SAE ← capivasertib · categorical (graded) response model | — | Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025) | [10.1111/cts.70286](https://doi.org/10.1111/cts.70286) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=capivasertib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AKT1 (inhibitor), AKT2 (inhibitor), AKT3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Voronova_2022 | irrelevant | 1 | 0 | This is a human concentration–QT analysis, not a capivasertib disposition or population-PK model, and reports no quantitative disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:20 UTC</sub>
