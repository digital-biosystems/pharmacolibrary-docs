<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;tamoxifen&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/&quot;},{&quot;label&quot;:&quot;Centanni_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tamoxifen_Xu2026_reference&quot;,&quot;label&quot;:&quot;Xu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_Xu2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tamoxifen — `Tamoxifen_Centanni2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tamoxifen, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Centanni M et al., Pharmacogenetic Testing or Therapeutic…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01382-3](https://doi.org/10.1007/s40262-024-01382-3)

<div class="pk-model-meta" hidden drug="tamoxifen" model-id="Tamoxifen_Centanni2024_reference" status="rejected" stale="false" population="adults" measured-compound="tamoxifen" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- column 'model characteristics' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'number of patients (number of samples)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'fixed patient characteristics' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dose' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'time of sampling (h)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Tacrolimus' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col1', 'Tab1:row1:col2', 'Tab1:row1:col3', 'Tab1:row1:col4', 'Tab1:row1:col5', 'Tab1:row1:col6', 'Tab1:row1:col7'])
- dropped unlinked row (NIL): 'Tamoxifen (and endoxifen)' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col2', 'Tab1:row2:col4', 'Tab1:row2:col7'])
- dropped unlinked row (NIL): 'Efavirenz (and 8-hydroxy-efavirenz)' — extend the ontology if this is a real PK parameter (source ['Tab1:row3:col2', 'Tab1:row3:col4', 'Tab1:row3:col5', 'Tab1:row3:col7'])
- dropped unlinked row (NIL): 'Risperidone (and paliperidone)' — extend the ontology if this is a real PK parameter (source ['Tab1:row4:col2', 'Tab1:row4:col4', 'Tab1:row4:col5', 'Tab1:row4:col7'])
- dropped unlinked row (NIL): '5-FU' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col2', 'Tab1:row5:col4', 'Tab1:row5:col5', 'Tab1:row5:col6', 'Tab1:row5:col7'])
- dropped unlinked row (NIL): 'Vincristine' — extend the ontology if this is a real PK parameter (source ['Tab1:row6:col2', 'Tab1:row6:col4', 'Tab1:row6:col6', 'Tab1:row6:col7'])
- table mostly unlinked (6/6 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tamoxifen
- status held at route_to_review — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab1:row1:col9 = '[18]'
- unparsed cell Tab1:row2:col1 = '1-comp (tam)1-comp (endo)First-order elimination'
- unparsed cell Tab1:row2:col3 = 'SSRI: noRifampicin: noAge: 64'
- unparsed cell Tab1:row2:col5 = 'COVCYP2D6_AS2.5: 1.533 (0.01) [40]COVCYP2D6_AS1-1.5: 0.789 (0.84) [26.6]COVCYP2D6_AS0.5: 0.490 (0.08) [10]COVCYP2D6_AS0: 0.278 (0.08) [3]'
- unparsed cell Tab1:row2:col6 = '20 mg q24h'
- unparsed cell Tab1:row2:col9 = '[20]'
- unparsed cell Tab1:row3:col1 = '2-comp (efavirenz)First-order elimination'
- unparsed cell Tab1:row3:col6 = '800 mg q24h'
- unparsed cell Tab1:row3:col9 = '[21]'
- unparsed cell Tab1:row4:col1 = '1-comp (risp)1-comp (pali)First-order elimination'
- unparsed cell Tab1:row4:col3 = 'CYP2D6 inhibitor: no'
- unparsed cell Tab1:row4:col6 = '4 mg q24h'
- unparsed cell Tab1:row4:col9 = '[22]'
- unparsed cell Tab1:row5:col1 = '2-compMichaelis-Menten elimination'
- unparsed cell Tab1:row5:col3 = 'BSA: 1.83 m2'
- unparsed cell Tab1:row5:col9 = '[23]'
- unparsed cell Tab1:row6:col1 = '2-compFirst-order elimination'
- unparsed cell Tab1:row6:col3 = 'BSA: 1.4 m2WT: 45 kg'
- unparsed cell Tab1:row6:col5 = 'COVCYP3A5_LE: 1 (0.9) [4]COVCYP3A5_HE: 1.87 (0.1) [4]'
- unparsed cell Tab1:row6:col9 = '[29]'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (2/4 fields) | 2 |
| `gpt-oss:120b` | not confirmed | 0.5 (2/4 fields) | 2 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | tamoxifen | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tamoxifen | unknown | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | tamoxifen | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tamoxifen | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_tamoxifen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Centanni_2024` / `Centanni_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-27 12:17 UTC</sub>
