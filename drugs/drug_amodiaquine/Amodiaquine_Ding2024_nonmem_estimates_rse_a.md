<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;amodiaquine&quot;,&quot;href&quot;:&quot;drugs/drug_amodiaquine/&quot;},{&quot;label&quot;:&quot;Ding_2024 \u00b7 nonmem_estimates_rse_a&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amodiaquine — `Amodiaquine_Ding2024_nonmem_estimates_rse_a`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves. · molar_mass_missing:desethylamodiaquine: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.37). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> **Caveats:**

> - `covariates_not_exercised` — the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.
> - `molar_mass_missing:desethylamodiaquine` — a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule

### Reviewer guidance

**The amodiaquine→desethylamodiaquine parent–metabolite model was not published because the metabolite was never given its own V, CL and formation clearance (all 0), its molar mass is missing, the peripheral volume V2 (13200 L) was not carried through, and the built structure (one-compartment enteral) does not match the reported two-compartment metabolite topology.**

The record reports desethylamodiaquine apparent parameters (CL/FDEAQ 38.3 L/h, VC/FDEAQ 861 L, Q/FDEAQ 81.7 L/h, Vp/FDEAQ 13200 L), but in the built model the metabolite's V, CL and formation clearance were all 0, so its compartment would only hold placeholder values. The molar mass of desethylamodiaquine is missing, so formation was treated as 1 mg metabolite per mg parent converted instead of a molecule-for-molecule conversion, alongside the apparent-parameter assumption F=1, Fm=1. The built structure is a one-compartment enteral model, not the reported parent–metabolite structure with a two-compartment metabolite, and V2 (13200 L) was neither carried through nor defaulted (3 of 4 parameters covered). The gestational-age covariate effect (1.28 on FAQ) was defined but only the reference individual was simulated, one reported unit could not be converted to SI so the parameter arrived without an SI value, and Tlag was left at a default. Extracted — amodiaquine: Fab 100, kabs 0.589 1/h, MTT 0.236 h, n_transit 2, CLm/F 6.78e+03 L/h, Vm/F 2.72e+05 L; desethylamodiaquine: CLm/F 38.3 L/h, V1 861 L, Q 81.7 L/h, V2 1.32e+04 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amodiaquine, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `amodiaquine`, measured `desethylamodiaquine`.

## Citation
Ding J et al., Population pharmacokinetics of amodiaqu…, CPT: pharmacometrics & syst… (2024)
  ·  DOI: [10.1002/psp4.13211](https://doi.org/10.1002/psp4.13211)

<div class="pk-model-meta" hidden drug="amodiaquine" model-id="Amodiaquine_Ding2024_nonmem_estimates_rse_a" status="not_simulated" stale="false" population="pregnant women with uncomplicated Plasmodium falciparum malaria" measured-compound="desethylamodiaquine" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted, plus 1 covariate effect.

**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| FAQ (%) | `Q40` · Fab | 100 | not captured | not captured | not captured | not captured | llm (0.6) | psp413211-tbl-0002:row2:col1 | — | not captured |
| Ka (1/h) | `Q49` · kabs | 0.589 | 1/h | 0.0001636111111111111 | 1/h | not captured | exact (1.0) | psp413211-tbl-0002:row3:col1 | — | not captured |
| MTT (h) | `Q81` · MTT | 0.236 | h | not captured | [h] | not captured | exact (1.0) | psp413211-tbl-0002:row4:col1 | — | not captured |
| Number of transit compartment | `Q311` · n_transit | 2 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | psp413211-tbl-0002:row5:col1 | — | not captured |
| CL/FAQ (L/h) | `Q351` · CLm/F | 6780 | L/h | 0.0018833333333333334 | [l] / [h] | 4.9 | llm (0.6) | psp413211-tbl-0002:row6:col1 | — | not captured |
| VC/FAQ (L) | `Q367` · Vm/F | 272000 | L | 272.0 | [l] | 8.9 | llm (0.6) | psp413211-tbl-0002:row7:col1 | — | not captured |
| CL/FDEAQ (L/h) | `Q351` · CLm/F | 38.3 | L/h | 1.0638888888888888e-05 | [l] / [h] | 9.6 | exact (1.0) | psp413211-tbl-0002:row10:col1 | — | not captured |
| VC/FDEAQ (L) | `Q63` · V1 | 861 | L | 0.861 | [l] | 15.7 | exact (1.0) | psp413211-tbl-0002:row11:col1 | — | not captured |
| Q/FDEAQ (L/h) | `Q30` · Q | 81.7 | L/h | 2.2694444444444446e-05 | [l] / [h] | 7.0 | exact (1.0) | psp413211-tbl-0002:row12:col1 | — | not captured |
| Vp/FDEAQ (L) | `Q64` · V2 | 13200 | L | 13.200000000000001 | [l] | 13.4 | exact (1.0) | psp413211-tbl-0002:row13:col1 | — | not captured |
| gestational_age_on_faq | `Q900` · gestational_age_on_faq | 1.28 | not captured | not captured | not captured | 25.0 | not captured (not captured) | psp413211-tbl-0002:row16:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- covariate level 'Gestational age on FAQ (%)' → Q900:gestational_age_on_faq = 1.28 (linear_fractional on Q27)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['psp413211-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'No unit stated in text or footnotes; Ka is a first-order absorption rate constant, conventionally in 1/h, consistent wit')
- metabolite desethylamodiaquine: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite desethylamodiaquine: Q76→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite desethylamodiaquine: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desethylamodiaquine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [2]
- population split: 'nonmem estimates (%rse a )' subgroup of Ding_2024 (paper reports 2 populations: nonmem estimates (%rse a ), nonmem population estimates (%rse a ))
- row roles (LLM): model_class=compartmental; 23/23 row label(s) assigned, 19 linked by role; re-tagged parent→desethylamodiaquine ×8, parent→piperaquine ×14, desethylamodiaquine→piperaquine ×1
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp413211-tbl-0002:row2:col4 = '30.4 (24.9–35.4)'
- unparsed cell psp413211-tbl-0002:row6:col2 = '6770 (6130–7440)'
- unparsed cell psp413211-tbl-0002:row7:col2 = '270,000 (228,000–322,000)'
- unparsed cell psp413211-tbl-0002:row8:col2 = '0.262 (0.200–0.338)'
- unparsed cell psp413211-tbl-0002:row10:col2 = '38.0 (30.4–43.6)'
- unparsed cell psp413211-tbl-0002:row10:col4 = '19.2 (6.2–36.2)'
- unparsed cell psp413211-tbl-0002:row11:col2 = '897 (656–1240)'
- unparsed cell psp413211-tbl-0002:row11:col4 = '191 (103–318)'
- unparsed cell psp413211-tbl-0002:row12:col2 = '82.2 (72.1–94.5)'
- unparsed cell psp413211-tbl-0002:row13:col2 = '13,400 (11,200–17,100)'
- unparsed cell psp413211-tbl-0002:row14:col2 = '0.122 (0.096–0.148)'
- unparsed cell psp413211-tbl-0002:row16:col2 = '1.29 (0.65–1.92)'
- unparsed cell Ding_2024_table_3:row0:col4 = '33.6 (27.2–40.2)'
- unparsed cell Ding_2024_table_3:row3:col2 = '69.3 (62.5–76.1)'
- unparsed cell Ding_2024_table_3:row4:col2 = '4010 (1600‐7600)'
- unparsed cell Ding_2024_table_3:row4:col4 = '125 (37–308)'
- unparsed cell Ding_2024_table_3:row5:col2 = '243 (63–472)'
- unparsed cell Ding_2024_table_3:row6:col2 = '3860 (1240–5730)'
- unparsed cell Ding_2024_table_3:row7:col2 = '100 (76–127)'
- unparsed cell Ding_2024_table_3:row8:col2 = '22,800 (19,900–26,700)'
- unparsed cell Ding_2024_table_3:row9:col2 = '0.215 (0.177–0.256)'
- unparsed cell Ding_2024_table_3:row11:col2 = '−12.1 (−16.2 to −7.3)'
- companion parameter table 3 transcribed (17 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.37 (10/27 fields) | 17 |

<details><summary>17 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/faq]` | 6780 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/faq]` | not captured | 6780 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/fdeaq].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[faq]` | 100 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[faq]` | not captured | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[gestational_age_on_faq]` | 1.28 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[gestational_age_on_faq]` | not captured | 1.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.589 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.589 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 0.236 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | not captured | 0.236 | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartment]` | 2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartment]` | not captured | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/faq]` | 272000 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/faq]` | not captured | 272000 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amodiaquine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | desethylamodiaquine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413211-tbl-0002:row12:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413211-tbl-0002:row6:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp413211-tbl-0002:row10:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413211-tbl-0002:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp413211-tbl-0002:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413211-tbl-0002:row11:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp413211-tbl-0002:row13:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 861 L | not captured | not captured | ['psp413211-tbl-0002:row11:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.32e+04 L | not captured | not captured | ['psp413211-tbl-0002:row13:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[desethylamodiaquine] | not captured | fail | own V, CL and formation clearance &gt; 0 | {'V': 0, 'CL': 0, 'formation': 0} | not captured | desethylamodiaquine: V, CL, formation not set — the metabolite's compartment would be the template default |
| T3_metabolite_output[desethylamodiaquine] | not captured | skipped | not captured | not captured | not captured | the simulation recorded no per-molecule outputs |
| T3_molar_mass[desethylamodiaquine] | not captured | fail | not captured | {'MW': 0, 'MW_m1': 0} | not captured | a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['V2'] |
| T3_shared_parameters | not captured | pass | 4 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | skipped | 19.6 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 23.4 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 15.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 17.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amodiaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ding_2024` / `Ding_2024::nonmem_estimates_rse_a`)
- model: `../../../knowledgebase/drugs/drug_amodiaquine/models/modelica/Amodiaquine_Ding2024_nonmem_estimates_rse_a.mo`
- deviation: `../../../knowledgebase/drugs/drug_amodiaquine/models/modelica/Amodiaquine_Ding2024_nonmem_estimates_rse_a.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amodiaquine/Amodiaquine_Ding2024_nonmem_estimates_rse_a/Amodiaquine_Ding2024_nonmem_estimates_rse_a_modelica.zip" download>Amodiaquine_Ding2024_nonmem_estimates_rse_a_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:41 UTC</sub>
