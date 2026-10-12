<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ibuprofen&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/&quot;},{&quot;label&quot;:&quot;Gregoire_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibuprofen_DeGraves1993v2_reference&quot;,&quot;label&quot;:&quot;DeGraves_1993_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_DeGraves1993v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Knihinicki1990_reference&quot;,&quot;label&quot;:&quot;Knihinicki_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Knihinicki1990_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Todd1986_reference&quot;,&quot;label&quot;:&quot;Todd_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Todd1986_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibuprofen_Trocniz2000_reference&quot;,&quot;label&quot;:&quot;Troc\u00f3niz_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/Ibuprofen_Trocniz2000_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ibuprofen/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibuprofen — `Ibuprofen_Gregoire2004_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (not confirmed, agreement 0.25), gpt-5.6-luna (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed 0/3</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (model/paper ratio 0.282).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. None of the extracted parameters is ibuprofen's own; they describe R-ibuprofen and S-ibuprofen. Extracted — R-ibuprofen and S-ibuprofen: CL 5 mL/h, V 62 mL/kg, kabs 1.1 h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ibuprofen racemate, the second reading ibuprofen; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:38:19.155176+00:00) predates the upstream re-run (2026-10-08 11:43:17.564609+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `ibuprofen racemate`, measured `R-ibuprofen, S-ibuprofen`.

## Citation
Gregoire N et al., Population pharmacokinetics of ibuprofe…, Journal of clinical pharmac… (2004)
  ·  DOI: [10.1177/0091270004268320](https://doi.org/10.1177/0091270004268320)

<div class="pk-model-meta" hidden drug="ibuprofen" model-id="Ibuprofen_Gregoire2004_reference" status="needs_review" stale="true" population="very premature neonates" measured-compound="R-ibuprofen, S-ibuprofen" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL S | `Q22` · CL | 5.0 | mL/h | 1.3888888888888888e-09 | L/h | not captured | boundary (0.8) | Gregoire_2004:other_prose | — | not captured |
| Vd | `Q61` · V | 62 | mL/kg | 0.00434 | L | not captured | exact (1.0) | Gregoire_2004:other_prose | — | not captured |
| first-order absorption rate constant (k a) | `Q49` · kabs | 1.1 | h -1 | 0.0003055555555555556 | 1/h | not captured | review_gapfill (0.7) | Hong_2008:review | — | not captured |
| lag time | `Q83` · tlag | 34.0 | min | 2040.0 | h | not captured | review_gapfill (0.7) | Nagayasu_2019:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('CL S'=5.0) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd'=62) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=R-ibuprofen, S-ibuprofen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'R-ibuprofen, S-ibuprofen' ('R-ibuprofen, S-ibuprofen') — left in mass units
- molar mass: none found for 'R-ibuprofen, S-ibuprofen' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Hong_2008's review values (primary lacked it)
- gap-filled Q83 (tlag) from Nagayasu_2019's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- text-pointer recovery found no readable extracted parameter table

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 3 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.25 (2/8 fields) | 6 |
| `gpt-5.6-luna` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-5.6-luna` | `parameters[cl s]` | not captured | 5.0 | only_one_extracted |
| `gpt-5.6-luna` | `parameters[cl s]` | 5.0 | not captured | only_one_extracted |
| `gpt-5.6-luna` | `parameters[first-order absorption rate constant]` | 1.1 | not captured | only_one_extracted |
| `gpt-5.6-luna` | `parameters[vd]` | not captured | 62 | only_one_extracted |
| `gpt-5.6-luna` | `parameters[vd]` | 62 | not captured | only_one_extracted |
| `gpt-5.6-luna` | `screen.primary_analyte` | R-ibuprofen, S-ibuprofen | R-ibuprofen and S-ibuprofen | mismatch |
| `gpt-oss-120b` | `parameters[cl s]` | not captured | 5.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl s]` | 5.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[first-order absorption rate constant]` | 1.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 34.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | not captured | 62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 62 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ibuprofen racemate | ibuprofen | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | R-ibuprofen, S-ibuprofen | R-ibuprofen and S-ibuprofen | mismatch |
| `gpt-oss:120b` | `parameters[cl s]` | 5.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl s]` | not captured | 5.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | 62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | not captured | 62 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | ibuprofen racemate | ibuprofen | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | R-ibuprofen and S-ibuprofen | ibuprofen | mismatch |

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
| C1_half_life_beta | fail | 30.5 | 8.595 | 0.2818 | 0.25 | reported t½β |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.0 | not captured | not captured | ['Gregoire_2004:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.005 L/h | not captured | not captured | ['Gregoire_2004:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.34 L | not captured | not captured | ['Gregoire_2004:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ibuprofen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gregoire_2004` / `Gregoire_2004::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 11:43 UTC</sub>
