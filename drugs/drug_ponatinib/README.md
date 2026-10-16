<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ponatinib&quot;}]"></div>

# ponatinib

- **generic name:** ponatinib
- **ATC codes:** `L01EA05`
- **DrugBank:** [DB08901](https://go.drugbank.com/drugs/DB08901) · **PubChem:** [CID 24826799](https://pubchem.ncbi.nlm.nih.gov/compound/24826799)
- **molar mass:** 532.5595 g/mol (C29H27F3N6O) — DrugBank
- **groups:** approved, investigational

## About

Ponatinib is a tyrosine-kinase inhibitor used to treat certain leukemias, including myeloid and lymphoid forms. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q198728](https://www.wikidata.org/wiki/Q198728) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ponatinib | parent | 532.559 | C29H27F3N6O | DrugBank | [24826799](https://pubchem.ncbi.nlm.nih.gov/compound/24826799) | Hanley_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:45 | 2:17 | 0/1/0 | 0/0/1 | 0/0/0 | 145,438/8,748 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Hanley_2022_reference](drugs/drug_ponatinib/Ponatinib_Hanley2022_reference.md) | — | 1-compartment (no model) | 1 (+2 cov.) | Hanley MJ et al., Population Pharmacokinetics of Ponatini…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1990](https://doi.org/10.1002/jcph.1990) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_ALT_increase](drugs/drug_ponatinib/pd_Hanley_2025_ALT_increase.md) | Alanine aminotransferase increase ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Hanley_2025_AOE](drugs/drug_ponatinib/pd_Hanley_2025_AOE.md) | Arterial occlusive events ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_Dose_reduction_interruption_induction](drugs/drug_ponatinib/pd_Hanley_2025_Dose_reduction_interruption_induction.md) | Time to first AE-related ponatinib dose reduction or interruption from Day 1 of Cycle 1 to the end of induction ← ponatinib · time-to-event model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_Dose_reduction_interruption_post_induction](drugs/drug_ponatinib/pd_Hanley_2025_Dose_reduction_interruption_post_induction.md) | Time to first AE-related ponatinib dose reduction or interruption after Day 1 of Cycle 4 ← ponatinib · time-to-event model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_Hypertension](drugs/drug_ponatinib/pd_Hanley_2025_Hypertension.md) | Hypertension ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_Lipase_increase](drugs/drug_ponatinib/pd_Hanley_2025_Lipase_increase.md) | Lipase increase ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_MRD_negative_CR_at_EOI](drugs/drug_ponatinib/pd_Hanley_2025_MRD_negative_CR_at_EOI.md) | MRD-negative complete remission at end of induction ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanley_2025_Thrombocytopenia](drugs/drug_ponatinib/pd_Hanley_2025_Thrombocytopenia.md) | Thrombocytopenia ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Hanley_2025_VTE](drugs/drug_ponatinib/pd_Hanley_2025_VTE.md) | Venous thromboembolic events ← ponatinib · categorical (graded) response model | — | Hanley MJ et al., Population Pharmacokinetic and Exposure…, Clinical and translational… (2025) | [10.1111/cts.70175](https://doi.org/10.1111/cts.70175) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ponatinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), BCR (inhibitor), FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGFR4 (inhibitor), FLT3 (inhibitor), KDR (inhibitor), KIT (inhibitor), LCK (inhibitor), LYN (inhibitor), PDGFRA (inhibitor), RET (inhibitor), SRC (inhibitor), TEK (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hanley_2025 | relevant | 8 | 2 | This is a population PK study for ponatinib, but it relies on a previously developed model (Ref 12) and does not report the specific numeric PK parameter estimates (CL, V, etc.) in the provided text, only referencing them or showing plots. |
| popPK | Husiev_2025 | irrelevant | 0 | 0 | This is a synthetic chemistry and photochemistry study on a ruthenium-based photocage; it does not report pharmacokinetic disposition parameters (CL, V, etc.) for ponatinib. |
| popPK | Jade_2023 | irrelevant | 0 | 0 | This is a computational virtual screening study for SARS-CoV-2 inhibitors where ponatinib is only one of several candidate drugs tested for binding affinity, not a PK study. |
| popPK | Kangussu-Marcolino_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study of repurposing drugs against Entamoeba histolytica and reports EC50 values, not pharmacokinetic disposition parameters for ponatinib in a host species. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study testing ponatinib's anti-amoebic activity and reports no pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:44 UTC</sub>
