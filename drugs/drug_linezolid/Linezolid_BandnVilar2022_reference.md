<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01X&quot;,&quot;href&quot;:&quot;atc/J01X.md&quot;},{&quot;label&quot;:&quot;linezolid&quot;,&quot;href&quot;:&quot;drugs/drug_linezolid/&quot;},{&quot;label&quot;:&quot;Band\u00edn-Vilar_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# linezolid — `Linezolid_BandnVilar2022_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has linezolid, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Bandín-Vilar E et al., A Review of Population Pharmacokinetic…, Clinical pharmacokinetics (2022)
  ·  DOI: [10.1007/s40262-022-01125-2](https://doi.org/10.1007/s40262-022-01125-2)

<div class="pk-model-meta" hidden drug="linezolid" model-id="Linezolid_BandnVilar2022_reference" status="extracted" stale="false" population="adults and children with various infections" measured-compound="linezolid" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| median (range) value for CL | `Q22` · CL | 6.2 | L/h | 1.7222222222222224e-06 | L/h | not captured | boundary (0.8) | Bandín-Vilar_2022:other_prose | — | not captured |
| Vd | `Q61` · V | 0.782 | L/kg | 0.054740000000000004 | L | not captured | exact (1.0) | Bandín-Vilar_2022:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'pk parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'model variability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Matsumoto et al. [53]' — extend the ontology if this is a real PK parameter (source ['Tab4:row1:col2', 'Tab4:row1:col3'])
- dropped unlinked row (NIL): 'Sasaki et al. [67]' — extend the ontology if this is a real PK parameter (source ['Tab4:row2:col2', 'Tab4:row2:col3'])
- dropped unlinked row (NIL): 'Tsuji et al. [33]' — extend the ontology if this is a real PK parameter (source ['Tab4:row3:col2', 'Tab4:row3:col3'])
- dropped unlinked row (NIL): 'Crass et al. [19]' — extend the ontology if this is a real PK parameter (source ['Tab4:row4:col2', 'Tab4:row4:col3'])
- dropped unlinked row (NIL): 'Zhang et al. [70]' — extend the ontology if this is a real PK parameter (source ['Tab4:row5:col2', 'Tab4:row5:col3'])
- dropped unlinked row (NIL): 'Xie et al. [34]' — extend the ontology if this is a real PK parameter (source ['Tab4:row6:col2', 'Tab4:row6:col3'])
- dropped unlinked row (NIL): 'Soraluce et al. [71]' — extend the ontology if this is a real PK parameter (source ['Tab4:row7:col2', 'Tab4:row7:col3'])
- dropped unlinked row (NIL): 'Wang et al. [72]' — extend the ontology if this is a real PK parameter (source ['Tab4:row8:col2', 'Tab4:row8:col3'])
- dropped unlinked row (NIL): 'Alghamdi et al. [73]' — extend the ontology if this is a real PK parameter (source ['Tab4:row9:col2', 'Tab4:row9:col3'])
- dropped unlinked row (NIL): 'Töpper et al. [37]' — extend the ontology if this is a real PK parameter (source ['Tab4:row10:col2', 'Tab4:row10:col3'])
- dropped unlinked row (NIL): 'Swoboda et al. [66]' — extend the ontology if this is a real PK parameter (source ['Tab4:row11:col2', 'Tab4:row11:col3'])
- dropped unlinked row (NIL): 'Fiaccadori et al. [65]' — extend the ontology if this is a real PK parameter (source ['Tab4:row12:col2', 'Tab4:row12:col3'])
- dropped unlinked row (NIL): 'Wicha et al. [69]' — extend the ontology if this is a real PK parameter (source ['Tab4:row13:col2', 'Tab4:row13:col3'])
- dropped unlinked row (NIL): 'Abe et al. [64]' — extend the ontology if this is a real PK parameter (source ['Tab4:row14:col2', 'Tab4:row14:col3'])
- dropped unlinked row (NIL): 'Keel et al. [68]' — extend the ontology if this is a real PK parameter (source ['Tab4:row15:col2', 'Tab4:row15:col3'])
- dropped unlinked row (NIL): 'Whitehouse et al. [62]' — extend the ontology if this is a real PK parameter (source ['Tab4:row16:col2', 'Tab4:row16:col3'])
- dropped unlinked row (NIL): 'Plock et al. [63]' — extend the ontology if this is a real PK parameter (source ['Tab4:row17:col2', 'Tab4:row17:col3'])
- dropped unlinked row (NIL): 'Boak et al. [18]' — extend the ontology if this is a real PK parameter (source ['Tab4:row18:col2', 'Tab4:row18:col3'])
- dropped unlinked row (NIL): 'Imperial et al. [86]' — extend the ontology if this is a real PK parameter (source ['Tab4:row19:col2', 'Tab4:row19:col3'])
- dropped unlinked row (NIL): 'Fang et al. [85]' — extend the ontology if this is a real PK parameter (source ['Tab4:row20:col2', 'Tab4:row20:col3'])
- dropped unlinked row (NIL): 'Ide et al. [74]' — extend the ontology if this is a real PK parameter (source ['Tab4:row21:col2', 'Tab4:row21:col3'])
- dropped unlinked row (NIL): 'Tietjen et al. [76]' — extend the ontology if this is a real PK parameter (source ['Tab4:row22:col2', 'Tab4:row22:col3'])
- dropped unlinked row (NIL): 'Tsuji et al. [75]' — extend the ontology if this is a real PK parameter (source ['Tab4:row23:col2', 'Tab4:row23:col3'])
- dropped unlinked row (NIL): 'Abdelwahab et al. [58]' — extend the ontology if this is a real PK parameter (source ['Tab4:row24:col2', 'Tab4:row24:col3'])
- dropped unlinked row (NIL): 'Minichmayr et al. [77]' — extend the ontology if this is a real PK parameter (source ['Tab4:row25:col2', 'Tab4:row25:col3'])
- dropped unlinked row (NIL): 'Taubert et al. [78]' — extend the ontology if this is a real PK parameter (source ['Tab4:row26:col2', 'Tab4:row26:col3'])
- dropped unlinked row (NIL): 'Ehmann et al. [79]' — extend the ontology if this is a real PK parameter (source ['Tab4:row27:col2', 'Tab4:row27:col3'])
- dropped unlinked row (NIL): 'Blackman et al. [80]' — extend the ontology if this is a real PK parameter (source ['Tab4:row28:col2', 'Tab4:row28:col3'])
- dropped unlinked row (NIL): 'Yang et al. [84]' — extend the ontology if this is a real PK parameter (source ['Tab4:row29:col2', 'Tab4:row29:col3'])
- dropped unlinked row (NIL): 'Thibault et al. [82]' — extend the ontology if this is a real PK parameter (source ['Tab4:row30:col2', 'Tab4:row30:col3'])
- dropped unlinked row (NIL): 'Li et al. [81]' — extend the ontology if this is a real PK parameter (source ['Tab4:row31:col2', 'Tab4:row31:col3'])
- dropped unlinked row (NIL): 'Garcia-Prats et al. [83]' — extend the ontology if this is a real PK parameter (source ['Tab4:row32:col2', 'Tab4:row32:col3'])
- table mostly unlinked (32/32 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('median (range) value for CL'=6.2) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd'=0.782) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=linezolid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | not captured | 6.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f bioavailability]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[median (range) value for cl]` | 6.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 0.782 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | not captured | 0.782 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | linezolid | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | linezolid | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.2 | not captured | not captured | ['Bandín-Vilar_2022:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.2 L/h | not captured | not captured | ['Bandín-Vilar_2022:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 54.7 L | not captured | not captured | ['Bandín-Vilar_2022:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_linezolid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bandín-Vilar_2022` / `Bandín-Vilar_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-13 12:25 UTC</sub>
