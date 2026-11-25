<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;clopidogrel&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/&quot;},{&quot;label&quot;:&quot;Simon_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clopidogrel_Jung2024_reference&quot;,&quot;label&quot;:&quot;Jung_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Jung2024_reference.md&quot;,&quot;status&quot;:&quot;Curated (human-checked)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Ma2014_reference&quot;,&quot;label&quot;:&quot;Ma_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Ma2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Yousef2013_reference&quot;,&quot;label&quot;:&quot;Yousef_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Yousef2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Jung_2024_PRU&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Jung_2024_PRU.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Simon_2015_IPA&quot;,&quot;label&quot;:&quot;Simon_2015 \u00b7 IPA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Simon_2015_IPA.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Jung_2024_CYP2C19_Q45&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 CYP2C19&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pgx_Jung_2024_CYP2C19_Q45.md&quot;,&quot;status&quot;:&quot;Simulated \u00b7 quantitative&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clopidogrel — `Clopidogrel_Simon2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="clopidogrel" model-id="Clopidogrel_Simon2015_reference" status="needs_review" stale="false" population="stable coronary artery disease patients" measured-compound="clopi-H4" parameterization="apparent" topology="1C"></div>

## Citation
Simon N, Finzi J, Cayla G, Montalescot G, Collet JP, Hulot JS. Omeprazole, pantoprazole, and CYP2C19 effects on clopidogrel pharmacokinetic-pharmacodynamic relationships in stable coronary artery disease patients. European journal of clinical pharmacology 71(9):1059–1066 (2015).
  ·  DOI: [10.1007/s00228-015-1882-3](https://doi.org/10.1007/s00228-015-1882-3)

## Population and dosing

**Population:** stable coronary artery disease patients · condition stable coronary artery disease · age group adult.

**Dosing:** 300, 900 mg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed clopidogrel, measured clopi-H4.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| KA (1/h) | kabs | 1.03 | 1/h |
| V/F (L) | V/F | 1010 | L |
| PPI* | equation variable | 1.67 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. A reported unit could not be converted (equation variable), so that value has no SI equivalent. None of the extracted parameters is clopidogrel's own; they describe clopi-H4. Extracted — clopi-H4: kabs 1.03 1/h, V/F 1.01e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has none, the second reading 1.04; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| KA (1/h) | `Q49` · kabs | 1.03 | 1/h | 0.0002861 | 1/s | 1/h | exact (1) | Simon_2015_table_3:row1:col1, Simon_2015_table_3:row1:col3 |
| V/F (L) | `Q76` · V/F | 1010 | L | 1.01 | m3 | l | exact (1) | Simon_2015_table_3:row2:col1, Simon_2015_table_3:row2:col3 |
| PPI* | `Q900` · equation variable | 1.67 | L/h |  |  | l/h | llm (0.6) | Simon_2015_table_3:row6:col1, Simon_2015_table_3:row6:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'σ additive (µg/L)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ proportional (%)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): '2C19 wt/*2' — extend the ontology if this is a real PK parameter (source ['Simon_2015_table_3:row4:col1', 'Simon_2015_table_3:row4:col3'])
- dropped unlinked row (NIL): '2C19 *2/*2' — extend the ontology if this is a real PK parameter (source ['Simon_2015_table_3:row5:col1', 'Simon_2015_table_3:row5:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clopi-H4
- template fit: none — only the metabolite is modelled — no parent compartment
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V/F (L)' is the general volume)
- row roles: 3 per-group rows of clopi-H4 covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 8/8 row label(s) assigned, 4 linked by role
- molar mass: no plausible PubChem entry for 'clopi-H4' ('clopidogrel active thiol metabolite') — left in mass units
- molar mass: none found for 'clopi-H4' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'clopi-H4', not clopidogrel — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 3
- table Simon_2015_table_3: unbound_uncertainty
- table Simon_2015_table_3: unknown_column_role
- table Simon_2015_table_3: ambiguous_numeric_format

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[2c19 wt/*2]` |  | 1.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 1.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.03 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ppi*]` | 1.67 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f].rse_percent` |  | 21.7 | mismatch |
| `gpt-oss-120b` | `parameters[v/f].value` | 1010 | 1040 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Simon_2015_table_3:row1:col1', 'Simon_2015_table_3:row1:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Simon_2015_table_3:row2:col1', 'Simon_2015_table_3:row2:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.01e+03 L | ['Simon_2015_table_3:row2:col1', 'Simon_2015_table_3:row2:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_clopidogrel/Clopidogrel_Simon2015_reference/Clopidogrel_Simon2015_reference_modelica.zip" download>Clopidogrel_Simon2015_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_clopidogrel/Clopidogrel_Simon2015_reference/Clopidogrel_Simon2015_reference_fmi.zip" download>Clopidogrel_Simon2015_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Simon N, Finzi J, Cayla G, Montalescot G, Collet JP, Hulot JS. Omeprazole, pantoprazole, and CYP2C19 effects on clopidogrel pharmacokinetic-pharmacodynamic relationships in stable coronary artery disease patients. European journal of clinical pharmacology 71(9):1059–1066 (2015). [doi:10.1007/s00228-015-1882-3](https://doi.org/10.1007/s00228-015-1882-3)

**This record:** Pharmacolibrary, model `Clopidogrel_Simon2015_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_clopidogrel/Clopidogrel_Simon2015_reference>

```bibtex
@misc{pharmacolibrary_ClopidogrelSimon2015reference,
  title  = {{Pharmacolibrary model Clopidogrel_Simon2015_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_clopidogrel/Clopidogrel_Simon2015_reference},
  note   = {Parameters from doi:10.1007/s00228-015-1882-3},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclopidogrel%5D%20Clopidogrel_Simon2015_reference&body=Drug%3A%20clopidogrel%0ARecord%3A%20Clopidogrel_Simon2015_reference%0APaper%3A%20Simon_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clopidogrel/Clopidogrel_Simon2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:52 UTC</sub>
