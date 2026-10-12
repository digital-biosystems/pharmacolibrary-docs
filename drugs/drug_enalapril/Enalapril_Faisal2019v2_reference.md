<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Faisal_2019_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Faisal2019v2_reference&quot;,&quot;label&quot;:&quot;Faisal_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Faisal2019v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enalapril — `Enalapril_Faisal2019v2_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

### Reviewer guidance

**Enalapril model rejected because bioavailability and lag time were left at library placeholders instead of using paper estimates.**

The record lists a parent-metabolite structure with enalaprilat, but the model builder defaulted the bioavailability (F) and lag time (Tlag) parameters. These defaults are not supported by the paper's data, which only provides values for volume, clearance, and absorption rate. Consequently, the simulated profile relies on unsupported assumptions rather than extracted estimates. Extracted — enalapril: V 1 L, CL 0.75 L/h, kabs 5 1/h.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Faisal M et al., Simultaneous Semi-Mechanistic Populatio…, Frontiers in pediatrics (2019)
  ·  DOI: [10.3389/fped.2019.00281](https://doi.org/10.3389/fped.2019.00281)

<div class="pk-model-meta" hidden drug="enalapril" model-id="Enalapril_Faisal2019v2_reference" status="rejected" stale="false" population="healthy adults" measured-compound="enalapril" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| volume of distribution | `Q61` · V | 1 | L | 0.001 | L | not captured | exact (1.0) | Faisal_2019_2:other_prose | — | not captured |
| clearance | `Q22` · CL | 0.75 | L/h | 2.0833333333333333e-07 | L/h | not captured | exact (1.0) | Faisal_2019_2:other_prose | — | not captured |
| KA (1/h) | `Q49` · kabs | 5.0 | 1/h | 0.001388888888888889 | 1/h | not captured | review_gapfill (0.7) | Faisal_2019:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- table section iiv: 'IIV_KA' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_VC' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_F1' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_MTT1' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_KREN' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_KM' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_VM' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_KME' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_ MTT2' routed out of structural estimates ('INTERINDIVIDUAL VARIABILITY (IIV)')
- table section iiv: 'IIV_KA' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV_VC' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV_F1' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV_MTT1' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV_KREN' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV_KM' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV_VM' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV_KME' routed out of structural estimates ('Interindividual variability (IIV)')
- table section iiv: 'IIV_ MTT2' routed out of structural estimates ('Interindividual variability (IIV)')
- dropped value-less row: 'KA (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'VC (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'F1'
- dropped value-less row: 'MTT1 (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'KREN (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'KM (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'VM (L)' (captured trailing unit 'L' for child rows)
- dropped value-less row: 'KQ1 (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'KQ2 (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'KME (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'MTT2 (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'MTT1 (hr)' (captured trailing unit 'hr' for child rows)
- salvaged Q61 ('volume of distribution'=1) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance'=0.75) from results prose — parameter table was unreadable
- implicit units: 'volume of distribution' → L (from the popPK convention: 'The paper does not explicitly state the unit for the volume of distribution in the provided text or table captions. In p')
- implicit units: 'clearance' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for clearance in the provided text or table captions. In population pharmac')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=enalapril
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [0] (site presystemic: 'The bioavailability parameter (F1) accounted for the percent of drug absorbed while subtracting it from the drug elimina')
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 60 linked by role; re-tagged parent→enalaprilat ×60
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Faisal_2019's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell T1:row3:col1 = '6.010 (15.0%)'
- unparsed cell T1:row4:col1 = '51.10 (4.00%)'
- unparsed cell T1:row5:col1 = '0.606 (3.00%)'
- unparsed cell T1:row6:col1 = '0.558 (9.00%)'
- unparsed cell T1:row7:col1 = '0.305 (4.00%)'
- unparsed cell T1:row8:col1 = '0.688 (4.00%)'
- unparsed cell T1:row9:col1 = '46.10 (4.00%)'
- unparsed cell T1:row10:col1 = '0.060 (4.00%)'
- unparsed cell T1:row11:col1 = '0.054 (10.0%)'
- unparsed cell T1:row12:col1 = '0.184 (4.00%)'
- unparsed cell T1:row13:col1 = '0.910 (8.00%)'
- unparsed cell T1:row16:col1 = '0.688 (31.0%)'
- unparsed cell T1:row17:col1 = '0.058 (24.0%)'
- unparsed cell T1:row18:col1 = '0.041 (22.0%)'
- unparsed cell T1:row19:col1 = '0.151 (22.0%)'
- unparsed cell T1:row20:col1 = '0.058 (24.0%)'
- unparsed cell T1:row21:col1 = '0.078 (22.0%)'
- unparsed cell T1:row22:col1 = '0.069 (23.0%)'
- unparsed cell T1:row23:col1 = '0.063 (23.0%)'
- unparsed cell T1:row24:col1 = '0.296 (22.0%)'
- unparsed cell T1:row27:col1 = '0.010 (8.00%)'
- unparsed cell T1:row28:col1 = '0.188 (15.0%)'
- unparsed cell T1:row30:col1 = '0.018 (9.00%)'
- unparsed cell T1:row31:col1 = '0.220 (13.0%)'
- unparsed cell T1:row33:col1 = '0.019 (9.00%)'
- unparsed cell T1:row35:col1 = '0.005 (11.0%)'
- unparsed cell Faisal_2019_2_table_S1:row2:col1 = '7.780 (37.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row3:col1 = '51.60 (6.00 %)'
- unparsed cell Faisal_2019_2_table_S1:row4:col1 = '0.630 (5.00 %)'
- unparsed cell Faisal_2019_2_table_S1:row5:col1 = '0.570 (10.00 %)'
- unparsed cell Faisal_2019_2_table_S1:row6:col1 = '0.312 (5.00 %)'
- unparsed cell Faisal_2019_2_table_S1:row7:col1 = '0.683 (7.00 %)'
- unparsed cell Faisal_2019_2_table_S1:row8:col1 = '44.70 (5.00 %)'
- unparsed cell Faisal_2019_2_table_S1:row9:col1 = '0.060 (6.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row10:col1 = '0.057 (15.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row11:col1 = '0.192 (6.00 %)'
- unparsed cell Faisal_2019_2_table_S1:row12:col1 = '0.942 (13.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row14:col1 = '1.310 (53.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row15:col1 = '0.069 (34.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row16:col1 = '0.057 (31.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row17:col1 = '0.203 (31.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row18:col1 = '0.056 (33.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row19:col1 = '0.088 (32.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row20:col1 = '0.048 (35.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row21:col1 = '0.053 (33.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row22:col1 = '0.330 (32.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row25:col1 = '0.010 (12.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row26:col1 = '0.189 (21.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row28:col1 = '0.021 (14.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row29:col1 = '0.220 (22.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row31:col1 = '0.011 (14.0 %)'
- unparsed cell Faisal_2019_2_table_S1:row33:col1 = '0.005 (16.0 %)'
- companion parameter table S1 transcribed (52 record(s))
- unparsed cell Faisal_2019_2_table_S2:row2:col1 = '7.71 (26.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row3:col1 = '50.70 (5.00 %)'
- unparsed cell Faisal_2019_2_table_S2:row4:col1 = '0.589 (4.00 %)'
- unparsed cell Faisal_2019_2_table_S2:row5:col1 = '0.484 (7.00 %)'
- unparsed cell Faisal_2019_2_table_S2:row6:col1 = '0.298 (5.00 %)'
- unparsed cell Faisal_2019_2_table_S2:row7:col1 = '0.693 (6.00 %)'
- unparsed cell Faisal_2019_2_table_S2:row8:col1 = '47.60 (7.00 %)'
- unparsed cell Faisal_2019_2_table_S2:row9:col1 = '0.060 (5.00 %)'
- unparsed cell Faisal_2019_2_table_S2:row10:col1 = '0.051 (14.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row11:col1 = '0.175 (6.00 %)'
- unparsed cell Faisal_2019_2_table_S2:row12:col1 = '0.873 (11.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row14:col1 = '0.779 (50.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row15:col1 = '0.047 (34.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row16:col1 = '0.025 (31.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row17:col1 = '0.269 (30.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row18:col1 = '0.056 (31.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row19:col1 = '0.067 (31.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row20:col1 = '0.087 (32.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row21:col1 = '0.071(31.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row22:col1 = '0.094 (31.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row25:col1 = '0.010 (12.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row26:col1 = '0.186 (23.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row28:col1 = '0.016 (13.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row29:col1 = '0.220 (17.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row31:col1 = '0.026 (13.0 %)'
- unparsed cell Faisal_2019_2_table_S2:row33:col1 = '0.005 (15.0 %)'
- companion parameter table S2 transcribed (52 record(s))
- LLM selected parameter table(s) S1, S2
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Faisal_2019_2:other_prose'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Faisal_2019:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Faisal_2019_2:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.75 L/h | not captured | not captured | ['Faisal_2019_2:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1 L | not captured | not captured | ['Faisal_2019_2:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | fail | Metabolite_C (measured=enalapril) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Faisal_2019_2` / `Faisal_2019_2::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Faisal2019v2_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Faisal2019v2_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Faisal2019v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 10 mg, single dose, first-order absorption (ka 5 /h, F 0.9). Dose in the paper: 10 mg.

<dbs-fmusim paramsurl="drugs/drug_enalapril/Enalapril_Faisal2019v2_reference/Enalapril_Faisal2019v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_enalapril/Enalapril_Faisal2019v2_reference/Enalapril_Faisal2019v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Enalapril_Faisal2019v2_reference_params.json` · controls `Enalapril_Faisal2019v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:42 UTC</sub>
