<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;topiramate&quot;,&quot;href&quot;:&quot;drugs/drug_topiramate/&quot;},{&quot;label&quot;:&quot;Majid_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topiramate_Lee2024_reference&quot;,&quot;label&quot;:&quot;Lee_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_topiramate/Topiramate_Lee2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Lim_2016_SDMT&quot;,&quot;label&quot;:&quot;Lim_2016 \u00b7 SDMT&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_topiramate/pd_Lim_2016_SDMT.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# topiramate — `Topiramate_Majid2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; cLb has no unit.

<div class="pk-model-meta" hidden drug="topiramate" model-id="Topiramate_Majid2016_reference" status="needs_review" stale="false" population="patients with refractory partial-onset seizures" measured-compound="topiramate" parameterization="mechanistic" topology="1C"></div>

## Citation
Majid O, Laurenza A, Ferry J, Hussein Z. Impact of perampanel on pharmacokinetics of concomitant antiepileptics in patients with partial-onset seizures: pooled analysis of clinical trials. British journal of clinical pharmacology 82(2):422–430 (2016).
  ·  DOI: [10.1111/bcp.12951](https://doi.org/10.1111/bcp.12951)

## Population and dosing

**Population:** patients with refractory partial-onset seizures · age group adult · n = 226.

**Dosing:** 2, 12 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed perampanel, measured topiramate.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CBZ | CL | 3.65 | l h −1 | 15.7 |
| CLB (males) | CLb | 3.38 | males | 16.1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cLb has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CLb), so that value has no SI equivalent. Extracted — topiramate: CL 3.65 l h −1, CLb 3.38 males.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has topiramate, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CBZ | `Q22` · CL | 3.65 | l h −1 | 1.014e-06 | m3/s | l/h | 15.7 | llm (0.6) | bcp12951-tbl-0002:row3:col3, bcp12951-tbl-0002:row3:col4, bcp12951-tbl-0002:row3:col5, bcp12951-tbl-0002:row3:col6, bcp12951-tbl-0002:row3:col7 |
| CLB (males) | `Q23` · CLb | 3.38 | males |  |  | m·ales | 16.1 | exact (1) | bcp12951-tbl-0002:row4:col3, bcp12951-tbl-0002:row4:col4, bcp12951-tbl-0002:row4:col5, bcp12951-tbl-0002:row4:col6, bcp12951-tbl-0002:row4:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'males' (CLb)
- unit_dimension_unknown: 'females' (CLb)
- dropped duplicate Q23 ('CLB (females)', value '1.54') — already have one for this compound
- dropped value-less row: 'CLN'
- dropped duplicate Q22 ('LTG', value '1.29') — already have one for this compound
- dropped value-less row: 'LEV'
- dropped unlinked row (NIL): 'OXC (males, no PHT)' — extend the ontology if this is a real PK parameter (source ['bcp12951-tbl-0002:row9:col3', 'bcp12951-tbl-0002:row9:col4', 'bcp12951-tbl-0002:row9:col5', 'bcp12951-tbl-0002:row9:col6', 'bcp12951-tbl-0002:row9:col7'])
- dropped unlinked row (NIL): 'OXC (females, no PHT)' — extend the ontology if this is a real PK parameter (source ['bcp12951-tbl-0002:row10:col3', 'bcp12951-tbl-0002:row10:col4', 'bcp12951-tbl-0002:row10:col5'])
- dropped unlinked row (NIL): 'OXC (males, with PHT)' — extend the ontology if this is a real PK parameter (source ['bcp12951-tbl-0002:row11:col3', 'bcp12951-tbl-0002:row11:col4', 'bcp12951-tbl-0002:row11:col5'])
- dropped unlinked row (NIL): 'OXC (females, with PHT)' — extend the ontology if this is a real PK parameter (source ['bcp12951-tbl-0002:row12:col3', 'bcp12951-tbl-0002:row12:col4', 'bcp12951-tbl-0002:row12:col5'])
- dropped value-less row: 'PHB'
- dropped value-less row: 'PHT'
- dropped value-less row: 'TPM'
- dropped duplicate Q22 ('VPA', value '0.63') — already have one for this compound
- dropped value-less row: 'ZNS'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=topiramate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[cbz]` | 3.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clb].rse_percent` | 16.1 |  | mismatch |
| `gpt-oss-120b` | `parameters[clb].value` | 3.38 | 16.1 | mismatch |
| `gpt-oss-120b` | `parameters[cln]` |  | 16.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vpa]` |  | 17.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | topiramate | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcp12951-tbl-0002:row3:col3', 'bcp12951-tbl-0002:row3:col4', 'bcp12951-tbl-0002:row3:col5', 'bcp12951-tbl-0002:row3:col6', 'bcp12951-tbl-0002:row3:col7'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] | males | ['bcp12951-tbl-0002:row4:col3', 'bcp12951-tbl-0002:row4:col4', 'bcp12951-tbl-0002:row4:col5', 'bcp12951-tbl-0002:row4:col6', 'bcp12951-tbl-0002:row4:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.65 | ['bcp12951-tbl-0002:row3:col3', 'bcp12951-tbl-0002:row3:col4', 'bcp12951-tbl-0002:row3:col5', 'bcp12951-tbl-0002:row3:col6', 'bcp12951-tbl-0002:row3:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.65 L/h | ['bcp12951-tbl-0002:row3:col3', 'bcp12951-tbl-0002:row3:col4', 'bcp12951-tbl-0002:row3:col5', 'bcp12951-tbl-0002:row3:col6', 'bcp12951-tbl-0002:row3:col7'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btopiramate%5D%20Topiramate_Majid2016_reference&body=Drug%3A%20topiramate%0ARecord%3A%20Topiramate_Majid2016_reference%0APaper%3A%20Majid_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_topiramate/Topiramate_Majid2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-26 10:41 UTC</sub>
