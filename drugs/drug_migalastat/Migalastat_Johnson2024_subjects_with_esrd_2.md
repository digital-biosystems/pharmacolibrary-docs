<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;migalastat&quot;,&quot;href&quot;:&quot;drugs/drug_migalastat/&quot;},{&quot;label&quot;:&quot;Johnson_2024 \u00b7 subjects_with_esrd_2&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# migalastat — `Migalastat_Johnson2024_subjects_with_esrd_2`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Johnson FK et al., Pharmacokinetic evaluation of single-do…, PloS one (2024)
  ·  DOI: [10.1371/journal.pone.0314030](https://doi.org/10.1371/journal.pone.0314030)

<div class="pk-model-meta" hidden drug="migalastat" model-id="Migalastat_Johnson2024_subjects_with_esrd_2" status="rejected" stale="false" population="adults with ESRD on dialysis and healthy controls" measured-compound="migalastat" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| median CLD | `Q30` · Q | 8.81 | L/h | 2.4472222222222225e-06 | L/h | not captured | boundary (0.8) | Johnson_2024:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'PK parameter' — extend the ontology if this is a real PK parameter (source ['pone.0314030.t003:row0:col1', 'pone.0314030.t003:row0:col2', 'pone.0314030.t003:row0:col3', 'pone.0314030.t003:row0:col4'])
- dropped value-less row: 'Median Range N'
- salvaged Q30 ('median CLD'=8.81) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=migalastat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'subjects with esrd(n = 6)' subgroup of Johnson_2024 (paper reports 2 populations: subjects with esrd (n = 6), subjects with esrd(n = 6))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pone.0314030.t003:row4:col3 = '32.817.9‒45.43'
- unparsed cell pone.0314030.t003:row4:col4 = '17.115.7‒26.33'
- unparsed cell Johnson_2024_table_2:row11:col1 = '7306848688‒974482'
- unparsed cell Johnson_2024_table_2:row11:col3 = '4754429118‒847273'
- unparsed cell Johnson_2024_table_2:row11:col4 = '7440040661‒876263'
- unparsed cell Johnson_2024_table_2:row11:col5 = '92376919‒166286'
- unparsed cell Johnson_2024_table_2:row13:col1 = '17.315.4‒19.22'
- unparsed cell Johnson_2024_table_2:row13:col3 = '20.914.7‒29.23'
- unparsed cell Johnson_2024_table_2:row13:col4 = '19.618.7‒25.13'
- unparsed cell Johnson_2024_table_2:row13:col5 = '3.52.0‒5.96'
- unparsed cell Johnson_2024_table_2:row15:col1 = '2.311.54‒3.082'
- unparsed cell Johnson_2024_table_2:row15:col3 = '3.151.77‒5.153'
- unparsed cell Johnson_2024_table_2:row15:col4 = '2.021.71‒3.693'
- unparsed cell Johnson_2024_table_2:row15:col5 = '16.39.02‒21.76'
- unparsed cell Johnson_2024_table_2:row17:col1 = '59.734.1‒85.32'
- unparsed cell Johnson_2024_table_2:row17:col3 = '74.666.9‒155.43'
- unparsed cell Johnson_2024_table_2:row17:col4 = '56.946.2‒133.63'
- unparsed cell Johnson_2024_table_2:row17:col5 = '73.554.9‒97.16'
- companion parameter table 2 transcribed (4 record(s))
- unparsed cell Johnson_2024_table_4:row1:col2 = '123 mg QOD'
- unparsed cell Johnson_2024_table_4:row2:col2 = '82 mg QW'
- unparsed cell Johnson_2024_table_4:row3:col2 = '123 mg QOW'
- unparsed cell Johnson_2024_table_4:row4:col2 = '82 mg QW'
- unparsed cell Johnson_2024_table_4:row5:col2 = '82 mg QOW'
- unparsed cell Johnson_2024_table_4:row6:col2 = '123 mg QOW'
- unparsed cell Johnson_2024_table_4:row7:col2 = '123 mg QW'
- unparsed cell Johnson_2024_table_4:row8:col2 = '123 mg QW'
- companion parameter table 4 transcribed (16 record(s))
- unparsed cell Johnson_2024_table_S4:row1:col2 = '1. Intercept on Ka'
- unparsed cell Johnson_2024_table_S4:row1:col3 = '0.256 (9%)'
- unparsed cell Johnson_2024_table_S4:row1:col4 = '60.4% (11%) [30%]'
- unparsed cell Johnson_2024_table_S4:row4:col1 = '𝑇𝑇𝐴𝐴𝑇𝑇𝐴𝐴1 =𝜃𝜃 3'
- unparsed cell Johnson_2024_table_S4:row4:col2 = '4. Bioavailability'
- unparsed cell Johnson_2024_table_S4:row5:col3 = '20.9 (17%)'
- unparsed cell Johnson_2024_table_S4:row5:col4 = '28.8% (7%) [4%]'
- companion parameter table S4 transcribed (4 record(s))
- LLM selected parameter table(s) 2, 3, 4, S4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (3/6 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[median cld]` | 8.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v /f (l) 2]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_migalastat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Johnson_2024` / `Johnson_2024::subjects_with_esrd_2`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:51 UTC</sub>
