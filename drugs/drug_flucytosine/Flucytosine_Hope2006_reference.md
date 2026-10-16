<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;flucytosine&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/&quot;},{&quot;label&quot;:&quot;Hope_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flucytosine_Kim2020_reference&quot;,&quot;label&quot;:&quot;Kim_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Kim2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucytosine_Stott2023_mean&quot;,&quot;label&quot;:&quot;Stott_2023_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Stott2023_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flucytosine_Stott2023_median&quot;,&quot;label&quot;:&quot;Stott_2023_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flucytosine/Flucytosine_Stott2023_median.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flucytosine — `Flucytosine_Hope2006_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The flucytosine absorption rate constant (Ka) was not reported in Hope_2006, so a default value was substituted for it, along with defaults for bioavailability (F) and lag time (Tlag), making the record unacceptable.**

The record for flucytosine in neutropenic CD1 mice with disseminated candidiasis reports V (0.022 liter) and CL (0.021 liter/h), but the absorption rate constant Ka was invented by defaulting rather than taken from the source. Bioavailability (F) and lag time (Tlag) were likewise left at defaults because no source values were extracted. Additionally, the reported unit for Ka ('h Ϫ1') could not be converted to SI units, so the parameter entered the model without a usable SI value. The failed check returned 'invented_absorption: not acceptable', and the record was held back for review of these deviations. Extracted — flucytosine: V 0.022 liter, CL 0.021 liter/h, kabs 19.6 h Ϫ1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has flucytosine, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:38:01.123400+00:00) predates the upstream re-run (2026-10-07 13:09:59.578666+00:00). Current validate status: `rejected`.

## Citation
Hope WW et al., Derivation of an in vivo drug exposure…, Antimicrobial agents and ch… (2006)
  ·  DOI: [10.1128/AAC.00369-06](https://doi.org/10.1128/AAC.00369-06)

<div class="pk-model-meta" hidden drug="flucytosine" model-id="Flucytosine_Hope2006_reference" status="rejected" stale="true" population="immunosuppressed mice" measured-compound="flucytosine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| volume of the central compartment | `Q61` · V | 0.022 | liter | 2.2e-05 | L | not captured | boundary (0.8) | Hope_2006:other_prose | — | not captured |
| clearance | `Q22` · CL | 0.021 | liter/h | 5.833333333333334e-09 | L/h | not captured | exact (1.0) | Hope_2006:other_prose | — | not captured |
| Ka | `Q49` · kabs | 19.58 | h Ϫ1 | 0.005438888888888888 | 1/h | not captured | exact (1.0) | Hope_2006:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Isolate' — extend the ontology if this is a real PK parameter (source ['tab_1:row0:col1'])
- salvaged Q61 ('volume of the central compartment'=0.022) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance'=0.021) from results prose — parameter table was unreadable
- salvaged Q49 ('Ka'=19.58) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=flucytosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- unit re-normalised: CL 'liter/h' now converts (value unchanged)
- unit re-normalised: kabs 'h Ϫ1' now converts (value unchanged)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row0:col2 = 'Growth constant K g (h Ϫ1 )'
- unparsed cell tab_1:row2:col1 = '0.06 0.125 0.5 4.0'
- unparsed cell tab_1:row2:col2 = '0.174 0.308 0.279 0.267'
- unparsed cell tab_1:row2:col3 = '1.64 ϫ 10 Ϫ4 6.97 ϫ 10 Ϫ5 1.33 ϫ 10 Ϫ9 3.35 ϫ 10 Ϫ2'
- unparsed cell tab_1:row2:col4 = '9.99 ϫ 10 8 1.33 ϫ 10 7 9.99 ϫ 10 8 9.99 ϫ 10 8'
- unparsed cell tab_1:row2:col5 = '9.60 ϫ 10 3 5.12 ϫ 10 5 5.77 2.79 ϫ 10 4'
- unparsed cell tab_1:row2:col6 = '2.71 ϫ 10 2 1.03 ϫ 10 2 16.3 45.79'
- unparsed cell tab_1:row2:col7 = '0.4 0.09 5.74 ϫ 10 Ϫ7 81.42'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |
| `gpt-oss:120b` | confirmed | 1.0 (7/7 fields) | none |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` | 0.021 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 0.021 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 19.58 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 19.58 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the central compartment]` | 0.022 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the central compartment]` | not captured | 0.022 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | flucytosine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | flucytosine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.021 | not captured | not captured | ['Hope_2006:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.021 L/h | not captured | not captured | ['Hope_2006:other_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.022 L | not captured | not captured | ['Hope_2006:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=flucytosine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_flucytosine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hope_2006` / `Hope_2006::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_flucytosine/models/modelica/Flucytosine_Hope2006_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_flucytosine/models/modelica/Flucytosine_Hope2006_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_flucytosine/models/modelica/Flucytosine_Hope2006_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:09 UTC</sub>
