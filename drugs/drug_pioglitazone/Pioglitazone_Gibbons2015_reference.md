<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;pioglitazone&quot;,&quot;href&quot;:&quot;drugs/drug_pioglitazone/&quot;},{&quot;label&quot;:&quot;Gibbons_2015 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pioglitazone — `Pioglitazone_Gibbons2015_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the carboxylic acid metabolite of enzalutamide is unreachable from the dose — it shares a single formation clearance with N-desmethyl enzalutamide, leaving no computable metabolic path — and the reported units (μg/mL, μg·h/mL) could not be converted to SI.**

The model claims pioglitazone as the drug while the measured compound and all parameters (AUC∞ 30.0 ng·h/mL, Cmax 9.45 ng/mL, Ctrough 12.0 μg/mL, AUCτ 322 μg·h/mL, CL/F 0.52 L/h) belong to enzalutamide, and the second reader instead read the parent as 'enalutamide' with pioglitazone metabolite links. Both enzalutamide metabolites are formed in the central compartment with zero compartments and share the same formation clearance, so the carboxylic acid metabolite is unreachable from the dose. The units μg/mL and μg·h/mL for Ctrough and AUCτ could not be converted to SI, so those parameters reached the record without SI values. Extracted — pioglitazone: AUC∞ 30 ng·h/mL, Cmax 9.45 ng/mL, Ctrough 12 μg/mL, AUCt 322 μg·h/mL, CL/F 0.52 L/h.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Gibbons JA et al., Pharmacokinetic Drug Interaction Studie…, Clinical pharmacokinetics (2015)
  ·  DOI: [10.1007/s40262-015-0283-1](https://doi.org/10.1007/s40262-015-0283-1)

<div class="pk-model-meta" hidden drug="pioglitazone" model-id="Pioglitazone_Gibbons2015_reference" status="rejected" stale="false" population="healthy male subjects" measured-compound="enzalutamide" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC∞ (ng·h/mL) | `Q17` · AUC∞ | 30.0 | ng·h/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Tab6:row3:col1, Tab6:row3:col2, Tab6:row6:col1, Tab6:row6:col2, Tab6:row9:col1, Tab6:row9:col2, Tab6:row12:col1, Tab6:row12:col2, Tab6:row15:col1, Tab6:row15:col2, Gibbons_2015_table_5:row2:col1, Gibbons_2015_table_5:row2:col2, Gibbons_2015_table_5:row5:col1, Gibbons_2015_table_5:row5:col2, Gibbons_2015_table_5:row8:col1, Gibbons_2015_table_5:row8:col2, Gibbons_2015_table_5:row11:col1, Gibbons_2015_table_5:row11:col2 | — | not captured |
| C max (ng/mL) | `Q32` · Cmax | 9.45 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | Tab6:row4:col1, Tab6:row4:col2, Tab6:row7:col1, Tab6:row7:col2, Tab6:row10:col1, Tab6:row10:col2, Tab6:row13:col1, Tab6:row13:col2, Tab6:row16:col1, Tab6:row16:col2, Gibbons_2015_table_5:row3:col1, Gibbons_2015_table_5:row3:col2, Gibbons_2015_table_5:row6:col1, Gibbons_2015_table_5:row6:col2, Gibbons_2015_table_5:row9:col1, Gibbons_2015_table_5:row9:col2, Gibbons_2015_table_5:row12:col1, Gibbons_2015_table_5:row12:col2 | — | not captured |
| C trough (μg/mL)a | `Q37` · Ctrough | 12.0 | μg/mL | not captured | μg/mL | not captured | llm_confirmed (0.6) | Gibbons_2015_table_4:row0:col1, Gibbons_2015_table_4:row0:col2, Gibbons_2015_table_4:row0:col3, Gibbons_2015_table_4:row0:col4 | — | not captured |
| AUCτ (μg·h/mL)a | `Q19` · AUCt | 322 | μg·h/mL | not captured | μg·h/mL | not captured | llm_confirmed (0.6) | Gibbons_2015_table_4:row3:col1, Gibbons_2015_table_4:row3:col2, Gibbons_2015_table_4:row3:col3, Gibbons_2015_table_4:row3:col4 | — | not captured |
| CL/F (L/h)a | `Q27` · CL/F | 0.52 | L/h | 1.4444444444444445e-07 | L/h | not captured | llm_confirmed (0.6) | Gibbons_2015_table_4:row4:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CYP substrate metabolite and exposure parameter'
- dropped duplicate Q32 ('C max (μg/mL)a', value '16.6') — already have one for this compound
- implicit units: 'C trough (μg/mL)a' → μg/mL (from the paper text: "The parameter label in the input list explicitly includes the unit: 'C trough (μg/mL)a'.")
- implicit units: 'AUCτ (μg·h/mL)a' → μg·h/mL (from the paper text: "The parameter label in the input list explicitly includes the unit: 'AUCτ (μg·h/mL)a'.")
- implicit units: 'CL/F (L/h)a' → L/h (from the paper text: "The parameter label in the input list explicitly includes the unit: 'CL/F (L/h)a'.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enzalutamide
- topology: 3 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 1 linked by role; re-tagged N-desmethyl enzalutamide→parent ×6, carboxylic acid metabolite→parent ×3
- molar mass: no plausible PubChem entry for 'carboxylic acid metabolite' ('carboxylic acid metabolite') — left in mass units
- molar mass: none found for 'carboxylic acid metabolite' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'enzalutamide', not pioglitazone — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab6:row3:col3 = '0.63 (0.52–0.77)'
- unparsed cell Tab6:row4:col3 = '0.60 (0.52–0.70)'
- unparsed cell Tab6:row6:col3 = '0.47 (0.35–0.63)'
- unparsed cell Tab6:row7:col3 = '0.83 (0.71–0.99)'
- unparsed cell Tab6:row9:col3 = '0.55 (0.51–0.58)'
- unparsed cell Tab6:row10:col3 = '0.99 (0.93–1.05)'
- unparsed cell Tab6:row12:col3 = '0.46 (0.39–0.53)'
- unparsed cell Tab6:row13:col3 = '0.64 (0.50–0.83)'
- unparsed cell Tab6:row15:col3 = '0.24 (0.20–0.28)'
- unparsed cell Tab6:row16:col3 = '0.29 (0.24–0.35)'
- transposed table Gibbons_2015_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 4 transcribed (13 record(s))
- unparsed cell Gibbons_2015_table_5:row2:col3 = '1.20 (0.98–1.47)'
- unparsed cell Gibbons_2015_table_5:row3:col3 = '0.82 (0.67–1.01)'
- unparsed cell Gibbons_2015_table_5:row5:col3 = '0.44 (0.41–0.48)'
- unparsed cell Gibbons_2015_table_5:row6:col3 = '0.93 (0.86–0.99)'
- unparsed cell Gibbons_2015_table_5:row8:col3 = '0.30 (0.24–0.36)'
- unparsed cell Gibbons_2015_table_5:row9:col3 = '0.38 (0.26–0.54)'
- unparsed cell Gibbons_2015_table_5:row11:col3 = '0.14 (0.12–0.17)'
- unparsed cell Gibbons_2015_table_5:row12:col3 = '0.23 (0.20–0.27)'
- companion parameter table 5 transcribed (16 record(s))
- LLM selected parameter table(s) 4, 5, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab6:row3:col1', 'Tab6:row3:col2', 'Tab6:row6:col1', 'Tab6:row6:col2', 'Tab6:row9:col1', 'Tab6:row9:col2', 'Tab6:row12:col1', 'Tab6:row12:col2', 'Tab6:row15:col1', 'Tab6:row15:col2', 'Gibbons_2015_table_5:row2:col1', 'Gibbons_2015_table_5:row2:col2', 'Gibbons_2015_table_5:row5:col1', 'Gibbons_2015_table_5:row5:col2', 'Gibbons_2015_table_5:row8:col1', 'Gibbons_2015_table_5:row8:col2', 'Gibbons_2015_table_5:row11:col1', 'Gibbons_2015_table_5:row11:col2'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Gibbons_2015_table_4:row3:col1', 'Gibbons_2015_table_4:row3:col2', 'Gibbons_2015_table_4:row3:col3', 'Gibbons_2015_table_4:row3:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Gibbons_2015_table_4:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab6:row4:col1', 'Tab6:row4:col2', 'Tab6:row7:col1', 'Tab6:row7:col2', 'Tab6:row10:col1', 'Tab6:row10:col2', 'Tab6:row13:col1', 'Tab6:row13:col2', 'Tab6:row16:col1', 'Tab6:row16:col2', 'Gibbons_2015_table_5:row3:col1', 'Gibbons_2015_table_5:row3:col2', 'Gibbons_2015_table_5:row6:col1', 'Gibbons_2015_table_5:row6:col2', 'Gibbons_2015_table_5:row9:col1', 'Gibbons_2015_table_5:row9:col2', 'Gibbons_2015_table_5:row12:col1', 'Gibbons_2015_table_5:row12:col2'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Gibbons_2015_table_4:row0:col1', 'Gibbons_2015_table_4:row0:col2', 'Gibbons_2015_table_4:row0:col3', 'Gibbons_2015_table_4:row0:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.52 L/h | not captured | not captured | ['Gibbons_2015_table_4:row4:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_pioglitazone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gibbons_2015` / `Gibbons_2015::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 11:52 UTC</sub>
