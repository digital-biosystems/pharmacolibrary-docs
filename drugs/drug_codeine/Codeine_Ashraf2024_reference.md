<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/&quot;},{&quot;label&quot;:&quot;Ashraf_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# codeine — `Codeine_Ashraf2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.136), gpt-oss:120b (not confirmed, agreement 0.421). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The codeine model record was held back because two of its nine parameters, the absorption rate constant kabs (6.49 1/h) and the central volume V1 (231.2 L), were not carried into the model, leaving only 7 of 9 parameters covered.**

The coverage check expected 9 parameters emitted or defaulted but obtained 7, with kabs and V1 neither emitted nor defaulted, so the codeine absorption and distribution description would be incomplete. A second reader also disagreed on several entries: it read the codeine clearance as 59.6 L/h where the record had null, read a codeine fraction of 0.4556 where the record had null, and proposed an additional metabolism link from codeine-6-glucuronide to morphine-3-glucuronide that the record does not contain; the record's values 6.49, 59.6 and 231.2 were read as null by that reader. The disagreement on dose compound and primary analyte (codeine vs unknown) remains unresolved. Extracted — codeine: kabs 6.49 1/h, CL 59.6 L/h, V1 231 L; morphine: CL 178 L/h, V 9.45 L, fm 0.108; codeine-6-glucuronide: CL 4.28 L/h, V 5.36 L; morphine-3-glucuronide: CL 4.67 L/h, V 4.17 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has codeine, the second reading unknown; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:25:54.228740+00:00) predates the upstream re-run (2026-10-07 04:56:23.257737+00:00). Current validate status: `needs_review`.

## Citation
Ashraf MW et al., Population Pharmacokinetic Quantificati…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9)

<div class="pk-model-meta" hidden drug="codeine" model-id="Codeine_Ashraf2024_reference" status="needs_review" stale="true" population="ambulatory surgical patients" measured-compound="codeine" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka,cod | `Q95` · t1/2ka | 6.49 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4, Tab2:row2:col5 | — | not captured |
| CLcod | `Q22` · CL | 59.6 | L/h | 1.6555555555555556e-05 | L/h | not captured | llm (0.6) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 | — | not captured |
| Vc,cod | `Q63` · V1 | 231.2 | L | 0.2312 | L | not captured | llm_confirmed (0.6) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5 | — | not captured |
| Fcod | `Q900` · equation variable | 0.4556 | not captured | not captured | not captured | not captured | llm (0.6) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4, Tab2:row5:col5 | — | not captured |
| CLmor | `Q22` · CL | 178.2 | L/h | 4.95e-05 | L/h | not captured | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col5 | — | not captured |
| Vc,mor | `Q61` · V | 9.447 | L | 0.009446999999999999 | L | not captured | exact (1.0) | Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5 | — | not captured |
| fmor | `Q45` · fm | 0.108 | not captured | not captured | not captured | not captured | exact (1.0) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col4, Tab2:row8:col5 | — | not captured |
| CLC6G | `Q22` · CL | 4.28 | L/h | 1.188888888888889e-06 | L/h | not captured | exact (1.0) | Tab2:row10:col1, Tab2:row10:col2, Tab2:row10:col3, Tab2:row10:col4, Tab2:row10:col5 | — | not captured |
| Vc,C6G | `Q61` · V | 5.36 | L | 0.00536 | L | not captured | exact (1.0) | Tab2:row11:col2, Tab2:row11:col4, Tab2:row11:col5 | — | not captured |
| CLM3G | `Q22` · CL | 4.67 | L/h | 1.297222222222222e-06 | L/h | not captured | exact (1.0) | Tab2:row12:col1, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col4, Tab2:row12:col5 | — | not captured |
| Vc,M3G | `Q61` · V | 4.17 | L | 0.00417 | L | not captured | exact (1.0) | Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col4, Tab2:row13:col5 | — | not captured |
| ηVc,cod | `Q61` · V | 0.158 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col4, Tab2:row15:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'descriptiona' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'GENeff' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2', 'Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5'])
- dropped unlinked row (NIL): 'ηka,cod' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col2', 'Tab2:row14:col3', 'Tab2:row14:col4', 'Tab2:row14:col5'])
- dropped unlinked row (NIL): 'ηFcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col2', 'Tab2:row16:col3', 'Tab2:row16:col4', 'Tab2:row16:col5'])
- relinked 'ηCLmor' Q370 → Q22 for morphine: a metabolite's own clearance is its elimination, not its formation
- dropped duplicate Q22 ('ηCLmor', value '0.046') — already have one for this compound
- dropped unlinked row (NIL): 'ηRmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col2', 'Tab2:row18:col3', 'Tab2:row18:col4', 'Tab2:row18:col5'])
- dropped unlinked row (NIL): 'εcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col4', 'Tab2:row19:col5'])
- dropped unlinked row (NIL): 'εmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col4', 'Tab2:row20:col5'])
- dropped unlinked row (NIL): 'εC6G' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2', 'Tab2:row21:col3', 'Tab2:row21:col4', 'Tab2:row21:col5'])
- dropped unlinked row (NIL): 'εM3G' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2', 'Tab2:row22:col3', 'Tab2:row22:col4', 'Tab2:row22:col5'])
- implicit units: 'ka,cod' — the LLM proposed '1/h', whose dimension does not fit Q95; left unset
- implicit units: 'CLcod' → L/h (from the popPK convention: 'Parameter CL is total clearance. The standard unit for clearance in population PK models, especially when concentrations')
- implicit units: 'Vc,cod' → L (from the popPK convention: 'Parameter Vc is the volume of distribution of the central compartment. The standard unit is Liters (L). The value 231.2 ')
- implicit units: 'CLmor' → L/h (from the popPK convention: 'Parameter CL is total clearance for morphine. Standard unit is L/h. The value 178.2 L/h is consistent with the high clea')
- implicit units: 'Vc,mor' → L (from the popPK convention: 'Parameter Vc is the volume of distribution of the central compartment for morphine. Standard unit is Liters (L). The val')
- implicit units: 'CLC6G' → L/h (from the popPK convention: 'Parameter CL is total clearance for codeine-6-glucuronide. Standard unit is L/h.')
- implicit units: 'Vc,C6G' → L (from the popPK convention: 'Parameter Vc is the volume of distribution of the central compartment for codeine-6-glucuronide. Standard unit is Liters')
- implicit units: 'CLM3G' → L/h (from the popPK convention: 'Parameter CL is total clearance for morphine-3-glucuronide. Standard unit is L/h.')
- implicit units: 'Vc,M3G' → L (from the popPK convention: 'Parameter Vc is the volume of distribution of the central compartment for morphine-3-glucuronide. Standard unit is Liter')
- metabolite volume: 'Vc,mor' Q63→Q61 for morphine — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'Vc,C6G' Q63→Q61 for codeine-6-glucuronide — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'Vc,M3G' Q63→Q61 for morphine-3-glucuronide — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=codeine
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 41 linked by role; re-tagged codeine→parent ×36, codeine→morphine ×24, codeine→codeine-6-glucuronide ×12, codeine→morphine-3-glucuronide ×13
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = 'Codeine absorption rate constant (h-1)'
- unparsed cell Tab2:row11:col1 = 'C6G central volume (L)'
- unparsed cell Tab2:row11:col3 = '(2.88–7 .86)'
- unparsed cell Tab2:row13:col1 = 'M3G central volume (L)'
- unparsed cell Tab2:row21:col1 = 'RV for C6G observations'
- unparsed cell Tab2:row22:col1 = 'RV for M3G observations'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.136 (3/22 fields) | 19 |
| `gpt-oss:120b` | not confirmed | 0.421 (8/19 fields) | 11 |

<details><summary>30 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clc6g].value` | 4.28 | 5.91 | mismatch |
| `gpt-oss-120b` | `parameters[clcod]` | 59.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clcod]` | not captured | 80.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm3g].value` | 4.67 | 6.90 | mismatch |
| `gpt-oss-120b` | `parameters[clmor].value` | 178.2 | 256.9 | mismatch |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fcod]` | 0.4556 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fcod]` | not captured | 0.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka,cod]` | 6.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka,cod]` | not captured | 6.53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,c6g].value` | 5.36 | 3.82 | mismatch |
| `gpt-oss-120b` | `parameters[vc,cod]` | 231.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,cod]` | not captured | 320.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,m3g].value` | 4.17 | 5.91 | mismatch |
| `gpt-oss-120b` | `parameters[vc,mor].value` | 9.447 | 13.3 | mismatch |
| `gpt-oss-120b` | `parameters[ηfcod]` | not captured | 0.019 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ηvc,cod]` | 0.158 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | codeine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | codeine | unknown | mismatch |
| `gpt-oss:120b` | `model.links` | [['codeine', 'morphine', 'metabolism'], ['codeine', 'codeine-6-glucuronide', 'metabolism'], ['morphine', 'morphine-3-glucuronide', 'metabolism']] | [['codeine', 'morphine', 'metabolism'], ['codeine', 'codeine-6-glucuronide', 'metabolism'], ['morphine', 'morphine-3-glucuronide', 'metabolism'], ['codeine-6-glucuronide', 'morphine-3-glucuronide', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[clcod]` | 59.6 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clcod]` | not captured | 59.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[fcod]` | not captured | 0.4556 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka,cod]` | 6.49 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka,cod]` | not captured | 6.49 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc,cod]` | 231.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc,cod]` | not captured | 231.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ηrmor]` | not captured | 0.306 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | codeine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | codeine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4', 'Tab2:row10:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row12:col1', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col4', 'Tab2:row12:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col2', 'Tab2:row11:col4', 'Tab2:row11:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4', 'Tab2:row13:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col4', 'Tab2:row15:col5'] |
| C5_unit_missing_Q95 | fail | [time] | not captured | not captured | not captured | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 59.6 | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 59.6 L/h | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 178 L/h | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.28 L/h | not captured | not captured | ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3', 'Tab2:row10:col4', 'Tab2:row10:col5'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.67 L/h | not captured | not captured | ['Tab2:row12:col1', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col4', 'Tab2:row12:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 9.45 L | not captured | not captured | ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.36 L | not captured | not captured | ['Tab2:row11:col2', 'Tab2:row11:col4', 'Tab2:row11:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.17 L | not captured | not captured | ['Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4', 'Tab2:row13:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 231 L | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=codeine) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 9 scholar param(s) emitted or defaulted | 7 covered | not captured | neither emitted nor in defaulted[]: ['kabs', 'V1'] |
| T3_shared_parameters | not captured | pass | 4 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_codeine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ashraf_2024` / `Ashraf_2024::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_codeine/models/modelica/Codeine_Ashraf2024_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_codeine/models/modelica/Codeine_Ashraf2024_reference.deviation.json`
- sim: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_codeine/models/modelica/Codeine_Ashraf2024_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:56 UTC</sub>
