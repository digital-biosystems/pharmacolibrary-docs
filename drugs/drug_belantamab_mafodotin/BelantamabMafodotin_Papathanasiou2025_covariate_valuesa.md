<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;belantamab mafodotin&quot;,&quot;href&quot;:&quot;drugs/drug_belantamab_mafodotin/&quot;},{&quot;label&quot;:&quot;Papathanasiou_2025 \u00b7 covariate_valuesa&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belantamab mafodotin — `BelantamabMafodotin_Papathanasiou2025_covariate_valuesa`

> ## <span class="pk-badge pk-badge--neutral">not modelled</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No model has been built from this record yet.**

No model template covers this structure. None of the extracted parameters is belantamab mafodotin's own; they describe belantamab_mafodotin ADC and cys-mcMMAF.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `belantamab_mafodotin`, measured `belantamab_mafodotin ADC and cys-mcMMAF`.

## Citation
Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1)

<div class="pk-model-meta" hidden drug="belantamab mafodotin" model-id="BelantamabMafodotin_Papathanasiou2025_covariate_valuesa" status="not_modelled" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="belantamab_mafodotin ADC and cys-mcMMAF" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| steady-state volume of distribution | `Q61` · V | 10.8 | L | 0.0108 | L | not captured | boundary (0.8) | Papathanasiou_2025:other_prose | — | not captured |
| initial systemic CL | `Q900` · initial systemic CL | 0.926 | L/day | 1.0717592592592594e-08 | not captured | not captured | not captured (not captured) | Papathanasiou_2025:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| initial systemic CL | Q22 | not captured | boundary |
| IMAXi | Q323 | not captured | boundary |

## Departures & gaps

**Interpretation flags:**
- column 'covariate valuesa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Baseline sBCMA' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row1:col2'])
- dropped unlinked row (NIL): 'Baseline IgG' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row3:col2'])
- dropped unlinked row (NIL): 'Baseline albumin' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row5:col2'])
- dropped unlinked row (NIL): '47 g/L' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row6:col2'])
- dropped unlinked row (NIL): '107 kg' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row8:col2'])
- dropped unlinked row (NIL): 'African American' — extend the ontology if this is a real PK parameter (source ['Papathanasiou_2025_table_4:row10:col2'])
- table mostly unlinked (6/6 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('initial systemic CL'=0.926) from results prose — parameter table was unreadable
- salvaged Q61 ('steady-state volume of distribution'=10.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belantamab_mafodotin ADC and cys-mcMMAF
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- bound model equation to Q22 (CL): CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- model equation 'Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)' not bound — neither LHS nor base term 'θQ' linked to an ontology parameter
- bound model equation to Q323 (Imax): IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- model equation 'TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)' not bound — neither LHS nor base term 'θTI50' linked to an ontology parameter
- Q22 (CL) is equation-defined: value moved to equation-variable 'initial systemic CL'; equation kept verbatim
- Q323 (Imax) is equation-defined: value moved to equation-variable 'IMAXi'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'covariate valuesa' subgroup of Papathanasiou_2025 (paper reports 5 populations: adc final model, adc, % changeb, covariate valuesa, cys-mcmmaf final model, cys-mcmmaf, % changeb)
- row roles (LLM): model_class=compartmental; 75/75 row label(s) assigned, 54 linked by role; re-tagged belantamab_mafodotin ADC→cys-mcMMAF ×63
- molar mass: no plausible PubChem entry for 'belantamab_mafodotin ADC' ('belantamab mafodotin ADC') — left in mass units
- molar mass: no plausible PubChem entry for 'belantamab_mafodotin ADC and cys-mcMMAF' ('belantamab mafodotin ADC and cysteine maleimidocaproyl monomethyl auristatin F') — left in mass units
- molar mass: none found for 'belantamab_mafodotin ADC' — its concentrations stay mass-only
- molar mass: none found for 'belantamab_mafodotin ADC and cys-mcMMAF' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row3:col3 = '0.899 to 0.952'
- unparsed cell Tab2:row4:col3 = '4.15 to 4.28'
- unparsed cell Tab2:row5:col3 = '0.660 to 0.761'
- unparsed cell Tab2:row6:col3 = '6.29 to 6.96'
- unparsed cell Tab2:row7:col1 = '− 0.403'
- unparsed cell Tab2:row7:col3 = '− 0.458 to − 0.347'
- unparsed cell Tab2:row8:col3 = '63.5 to 69.2'
- unparsed cell Tab2:row9:col3 = '2.47 to 3.27'
- unparsed cell Tab2:row11:col3 = '0.845 to 1.01'
- unparsed cell Tab2:row12:col3 = '0.449 to 0.635'
- unparsed cell Tab2:row13:col1 = '− 0.698'
- unparsed cell Tab2:row13:col3 = '− 0.839 to − 0.557'
- unparsed cell Tab2:row14:col1 = '− 0.302'
- unparsed cell Tab2:row14:col3 = '− 0.407 to − 0.19'
- unparsed cell Tab2:row15:col3 = '0.0988 to 0.127'
- unparsed cell Tab2:row16:col3 = '0.153 to 0.187'
- unparsed cell Tab2:row17:col1 = '− 0.459'
- unparsed cell Tab2:row17:col3 = '− 0.571 to − 0.348'
- unparsed cell Tab2:row19:col3 = '0.0289 to 0.0513'
- unparsed cell Tab2:row20:col3 = '0.867 to 0.958'
- unparsed cell Tab2:row21:col3 = '0.801 to 0.921'
- unparsed cell Tab2:row22:col3 = '1.23 to 1.66'
- unparsed cell Tab2:row23:col3 = '0.117 to 0.266'
- unparsed cell Tab2:row24:col3 = '0.0920 to 0.227'
- unparsed cell Tab2:row25:col3 = '0.285 to 0.849'
- unparsed cell Tab2:row27:col3 = '24.0 to 28.0'
- unparsed cell Tab2:row27:col4 = '14.9%'
- unparsed cell Tab2:row28:col3 = '0.0272 to 0.0383'
- unparsed cell Tab2:row29:col3 = '18.5 to 21.3'
- unparsed cell Tab2:row29:col4 = '15.7%'
- unparsed cell Tab2:row30:col3 = 'NA to 31.0'
- unparsed cell Tab2:row30:col4 = '69.1%'
- unparsed cell Tab2:row31:col3 = '25.1 to 35.4'
- unparsed cell Tab2:row31:col4 = '50.1%'
- unparsed cell Tab2:row32:col3 = '22.5 to 34.5'
- unparsed cell Tab2:row32:col4 = '40.6%'
- unparsed cell Tab2:row33:col3 = '58.4 to 79.6'
- unparsed cell Tab2:row33:col4 = '53.7%'
- unparsed cell Tab2:row35:col3 = '0.0553 to 0.0714'
- unparsed cell Tab2:row35:col4 = '12.6%'
- unparsed cell Papathanasiou_2025_table_3:row2:col3 = '607 to 677'
- unparsed cell Papathanasiou_2025_table_3:row3:col3 = '6.91 to 17.7'
- unparsed cell Papathanasiou_2025_table_3:row4:col3 = '98.9 to 273'
- unparsed cell Papathanasiou_2025_table_3:row5:col3 = '5.34 to 6.6'
- unparsed cell Papathanasiou_2025_table_3:row6:col3 = '0.0351 to 0.0411'
- unparsed cell Papathanasiou_2025_table_3:row8:col1 = '− 0.0448'
- unparsed cell Papathanasiou_2025_table_3:row8:col3 = '− 0.0746 to − 0.0151'
- unparsed cell Papathanasiou_2025_table_3:row9:col3 = '0.528 to 0.875'
- unparsed cell Papathanasiou_2025_table_3:row10:col1 = '− 0.533'
- unparsed cell Papathanasiou_2025_table_3:row10:col3 = '− 0.835 to − 0.232'
- unparsed cell Papathanasiou_2025_table_3:row11:col3 = '0.148 to 0.22'
- unparsed cell Papathanasiou_2025_table_3:row12:col3 = '0.0732 to 0.14'
- unparsed cell Papathanasiou_2025_table_3:row13:col3 = '0.912 to 1.57'
- unparsed cell Papathanasiou_2025_table_3:row14:col3 = '0.724 to 0.908'
- unparsed cell Papathanasiou_2025_table_3:row15:col3 = '0.606 to 0.886'
- unparsed cell Papathanasiou_2025_table_3:row16:col1 = '− 0.853'
- unparsed cell Papathanasiou_2025_table_3:row16:col3 = '− 1.25 to − 0.455'
- unparsed cell Papathanasiou_2025_table_3:row18:col3 = '22.4 to 35.5'
- unparsed cell Papathanasiou_2025_table_3:row19:col3 = '0.0597 to 0.103'
- unparsed cell Papathanasiou_2025_table_3:row20:col3 = '59.5 to 70.7'
- unparsed cell Papathanasiou_2025_table_3:row21:col3 = '0.288 to 0.456'
- unparsed cell Papathanasiou_2025_table_3:row22:col3 = '119 to 155'
- unparsed cell Papathanasiou_2025_table_3:row23:col3 = '53.0 to 60.3'
- unparsed cell Papathanasiou_2025_table_3:row24:col3 = '42.7 to 47.3'
- unparsed cell Papathanasiou_2025_table_3:row26:col3 = '25.6 to 26.7'
- companion parameter table 3 transcribed (67 record(s), model stage 'final')
- unparsed cell Papathanasiou_2025_table_4:row1:col6 = '− 13.1'
- unparsed cell Papathanasiou_2025_table_4:row1:col7 = '− 14.6'
- unparsed cell Papathanasiou_2025_table_4:row2:col1 = '− 8.99'
- unparsed cell Papathanasiou_2025_table_4:row2:col2 = '− 18.7'
- unparsed cell Papathanasiou_2025_table_4:row2:col3 = '− 34.0'
- unparsed cell Papathanasiou_2025_table_4:row3:col1 = 'ADC ADC VpADC ImaxADC TI50cys-mcMMAF cys-mcMMAF Vc'
- unparsed cell Papathanasiou_2025_table_4:row3:col6 = '− 21.5'
- unparsed cell Papathanasiou_2025_table_4:row3:col7 = '− 15.6'
- unparsed cell Papathanasiou_2025_table_4:row4:col1 = '− 0.117'
- unparsed cell Papathanasiou_2025_table_4:row4:col2 = '− 16.0'
- unparsed cell Papathanasiou_2025_table_4:row4:col3 = '− 31.9'
- unparsed cell Papathanasiou_2025_table_4:row5:col3 = '− 10.2'
- unparsed cell Papathanasiou_2025_table_4:row5:col4 = '− 15.6'
- unparsed cell Papathanasiou_2025_table_4:row5:col5 = '− 32.9'
- unparsed cell Papathanasiou_2025_table_4:row6:col4 = '− 3.56'
- unparsed cell Papathanasiou_2025_table_4:row6:col5 = '− 4.75'
- unparsed cell Papathanasiou_2025_table_4:row7:col2 = '51.2 kg'
- unparsed cell Papathanasiou_2025_table_4:row7:col3 = '− 2.84'
- unparsed cell Papathanasiou_2025_table_4:row7:col4 = '− 12.9'
- unparsed cell Papathanasiou_2025_table_4:row7:col5 = '− 18.6'
- unparsed cell Papathanasiou_2025_table_4:row7:col7 = '− 6.53'
- unparsed cell Papathanasiou_2025_table_4:row8:col4 = '− 6.12'
- unparsed cell Papathanasiou_2025_table_4:row9:col6 = '− 2.45'
- unparsed cell Papathanasiou_2025_table_4:row9:col7 = '− 3.52'
- unparsed cell Papathanasiou_2025_table_4:row10:col4 = '− 5.33'
- unparsed cell Papathanasiou_2025_table_4:row10:col5 = '− 5.78'
- companion parameter table 4 transcribed (29 record(s))
- LLM selected parameter table(s) 2, 3, 4
- captured model equation CLi = θCL*exp(CL,Time)*(ALBBL/40)^θCL_ALBBL * (SBCMABL/50)^θCL_SBCMABL * (IGGBL/15)^θCL_IGGBL
- captured model equation Qi = θQ * (WTBL/75)^θCL_WTBL * exp(ηQ)
- captured model equation IMAXi = θIMAX * (θIMAX_COMBO) [if not monotherapy] * (IGGBL/15)^θIMAX_IGGBL * (SBCMABL/50)^θIMAX_SBCMABL + (ηIMAX)
- captured model equation TI50i = θTI50 * (IGGBL/15)^θΤΙ50_IGGBL * exp(ηTI50)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.8 L | not captured | not captured | ['Papathanasiou_2025:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T3_shared_parameters | not captured | pass | 2 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 43.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.498 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.976 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 22.9 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 13.0 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 16.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 19.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 13.2 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 17.0 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_belantamab_mafodotin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Papathanasiou_2025` / `Papathanasiou_2025::covariate_valuesa`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:53 UTC</sub>
