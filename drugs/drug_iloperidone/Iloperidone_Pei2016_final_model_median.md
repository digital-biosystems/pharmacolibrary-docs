<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;iloperidone&quot;,&quot;href&quot;:&quot;drugs/drug_iloperidone/&quot;},{&quot;label&quot;:&quot;Pei_2016 \u00b7 final_model_median&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# iloperidone — `Iloperidone_Pei2016_final_model_median`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**No value for iloperidone's elimination clearance; the covariate scenarios were not simulated (+2 more).**

The model was built, but iloperidone's elimination clearance had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — iloperidone: kel 0.068 h -1, V1 668 L; M 1: kel 0.161 h -1, kfm 0.00459 h -1; M 2: kel 0.108 h -1, kfm 0.00664 h -1.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Pei Q et al., Influences of CYP2D6, Acta pharmacologica Sinica (2016)
  ·  DOI: [10.1038/aps.2016.96](https://doi.org/10.1038/aps.2016.96)

<div class="pk-model-meta" hidden drug="iloperidone" model-id="Iloperidone_Pei2016_final_model_median" status="model_quarantined" stale="false" population="Chinese schizophrenia patients" measured-compound="iloperidone" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameters:** 6 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K 20 (h -1 ) | `Q47` · kel | 0.068 | h -1 | 1.888888888888889e-05 | [1] / [h] | 13.3 | exact (1.0) | Pei_2016_table_3:row1:col4 | — | not captured |
| K 30 (h -1 ) | `Q47` · kel | 0.161 | h -1 | 4.472222222222222e-05 | [1] / [h] | 30.6 | exact (1.0) | Pei_2016_table_3:row2:col4 | — | not captured |
| K 40 (h -1 ) | `Q47` · kel | 0.108 | h -1 | 3e-05 | [1] / [h] | 29.6 | exact (1.0) | Pei_2016_table_3:row3:col4 | — | not captured |
| V 2 (L) | `Q63` · V1 | 668 | L | 0.668 | [l] | 13.4 | exact (1.0) | Pei_2016_table_3:row4:col4 | — | not captured |
| K 23 (h -1 ) | `Q305` · kfm | 0.00459 | h -1 | 1.275e-06 | [1] / [h] | 27.7 | exact (1.0) | Pei_2016_table_3:row7:col4 | — | not captured |
| K 24 (h -1 ) | `Q305` · kfm | 0.00664 | h -1 | 1.8444444444444445e-06 | [1] / [h] | 31.1 | exact (1.0) | Pei_2016_table_3:row8:col4 | — | not captured |
| cyp2d6_10_c_t_on_k_24 | `Q900` · cyp2d6_10_c_t_on_k_24 | 0.699 | not captured | not captured | not captured | 18.9 | not captured (not captured) | Pei_2016_table_3:row9:col4 | — | not captured |
| cyp2d6_10_t_t_on_k_24 | `Q900` · cyp2d6_10_t_t_on_k_24 | 0.488 | not captured | not captured | not captured | 24.2 | not captured (not captured) | Pei_2016_table_3:row10:col4 | — | not captured |
| cyp2d6_10_t_t_on_k_23 | `Q900` · cyp2d6_10_t_t_on_k_23 | 1.33 | not captured | not captured | not captured | 12.4 | not captured (not captured) | Pei_2016_table_3:row11:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'K 20 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'V 2 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'K 23 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'K 24 (%)' routed out of structural estimates ('Inter-individual variability')
- table section iov: 'K 20' routed out of structural estimates ('Inter-occasion variability')
- table section residual_error: 'CV 1 (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'CV 2 (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'CV 3 (%)' routed out of structural estimates ('Residual variability')
- covariate level 'CYP2D6*10 C/T on K 24' → Q900:cyp2d6_10_c_t_on_k_24 = 0.699 (linear_fractional on the model)
- covariate level 'CYP2D6*10 T/T on K 24' → Q900:cyp2d6_10_t_t_on_k_24 = 0.488 (linear_fractional on the model)
- covariate level 'CYP2D6*10 T/T on K 23' → Q900:cyp2d6_10_t_t_on_k_23 = 1.33 (linear_fractional on the model)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=iloperidone
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- pharmacogenetic covariate 'cyp2d6_10_c_t_on_k_24' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'cyp2d6_10_t_t_on_k_24' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'cyp2d6_10_t_t_on_k_23' (cyp2d6) — PGx domain
- population split: 'final model / median' subgroup of Pei_2016 (paper reports 2 populations: estimate, final model / median)
- row roles: 2 per-group rows of M 2 covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 15 linked by role; re-tagged parent→M 1 ×11, parent→M 2 ×13
- molar mass: none of 1 PubChem candidate(s) is 'M 2' (LLM) — left in mass units
- molar mass: none found for 'M 2' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Pei_2016_table_3:row7:col4'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Pei_2016_table_3:row8:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Pei_2016_table_3:row1:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Pei_2016_table_3:row2:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Pei_2016_table_3:row3:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Pei_2016_table_3:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 668 L | not captured | not captured | ['Pei_2016_table_3:row4:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 1 covered | not captured | neither emitted nor in defaulted[]: ['kel', 'kel', 'kel'] |
| T3_rate_constant_conversion | not captured | pass | K23 (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | pass | general_linear → PK_General_Linear* | PK_General_Linear | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_iloperidone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Pei_2016` / `Pei_2016::final_model_median`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_iloperidone/models/modelica/_needs_review/Iloperidone_Pei2016_final_model_median.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_iloperidone/models/modelica/_needs_review/Iloperidone_Pei2016_final_model_median.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 20:43 UTC</sub>
