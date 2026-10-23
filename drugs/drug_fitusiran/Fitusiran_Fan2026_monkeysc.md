<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fitusiran&quot;,&quot;href&quot;:&quot;drugs/drug_fitusiran/&quot;},{&quot;label&quot;:&quot;Fan_2026 \u00b7 monkeysc&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fitusiran — `Fitusiran_Fan2026_monkeysc`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-05 19:26 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The fitusiran record was rejected because it lacks a distribution volume and clearance — it is an exposure/outcome paper, not a compartmental population PK model — and a structural parameter failed a dimensional check.

<div class="pk-model-meta" hidden drug="fitusiran" model-id="Fitusiran_Fan2026_monkeysc" status="rejected" stale="true" population="multiple species (mouse, rat, monkey, human)" measured-compound="fitusiran" parameterization="mechanistic" topology="1C"></div>

## Citation
Fan X, Xiao Y, Cao K, Zhang R, Yan X. A computational model-powered platform to inform the development of GalNAc-conjugated siRNA therapeutics. Molecular therapy. Nucleic acids 37(2):102936 (2026).
  ·  DOI: [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936)

## Population and dosing

**Population:** multiple species (mouse, rat, monkey, human) · condition healthy.

**Dosing:** 210, 420, 840 mg, sc, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka (1/h) | kabs | 0.38 | 1/h |
| Fu (1/h) | fu | 0.39 |  |
| RTOT0 (nM) | Rtot | 33.1 | nM |
| Vm (nmol/h) | Vmax | 5.81 | nmol/h |
| Km (∗105 nM) | Km | 27.44 |  |
| koff (1/h) | koff | 0.021 | 1/h |
| kint (1/h) | kint | 2.01 | 1/h |
| KDEGE (∗10−6 h−1) | kel | 0.0083 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The fitusiran record was rejected because it lacks a distribution volume and clearance — it is an exposure/outcome paper, not a compartmental population PK model — and a structural parameter failed a dimensional check.**

No volume of distribution and no clearance or elimination rate are reported for fitusiran, so the record cannot form a compartmental population PK model; the paper is an exposure/outcome study. A dimension mismatch was also flagged on a structural parameter, and one reported unit could not be converted to SI, so that parameter entered the model without an SI value. The second reader additionally extracted parameters absent from this record: fesc 0.019, kdegd 0.0012, kpliver 1.02, and psliver 56.73. Extracted — fitusiran: kabs 0.38 units, fu 0.39 units, Rtot 33.1 nM, Vmax 5.81 nmol/h, Km 27.4 units, koff 0.021 units, kint 2.01 nM−1·h−1, KD 0.14 nM.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has fitusiran, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka (1/h) | `Q49` · kabs | 0.38 | 1/h | 0.0001056 | 1/s | 1/h | exact (1) | tbl1:row3:col4 |
| Fu (1/h) | `Q46` · fu | 0.39 |  |  |  |  | exact (1) | tbl1:row4:col4 |
| RTOT0 (nM) | `Q333` · Rtot | 33.1 | nM |  |  | nM | llm (0.6) | tbl1:row9:col4 |
| Vm (nmol/h) | `Q66` · Vmax | 5.81 | nmol/h |  |  | nM/h | special_case (0.95) | tbl1:row10:col4 |
| Km (∗105 nM) | `Q1` · Km | 27.44 |  |  |  |  | exact (1) | tbl1:row11:col4 |
| koff (1/h) | `Q330` · koff | 0.021 | 1/h | 5.833e-06 | 1/s | 1/h | exact (1) | tbl1:row12:col4 |
| kint (1/h) | `Q334` · kint | 2.01 | 1/h | 0.0005583 | 1/s | 1/h | exact (1) | tbl1:row15:col4 |
| KDEGE (∗10−6 h−1) | `Q47` · kel | 0.0083 | 1/h | 2.306e-06 | 1/s | 1/h | llm (0.6) | tbl1:row22:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'PSLiver (L/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row5:col4'])
- dropped unlinked row (NIL): 'KPLiver' — extend the ontology if this is a real PK parameter (source ['tbl1:row6:col4'])
- dropped unlinked row (NIL): 'KPRem' — extend the ontology if this is a real PK parameter (source ['tbl1:row7:col4'])
- dropped unlinked row (NIL): 'KDEGD (1/h)' — extend the ontology if this is a real PK parameter (source ['tbl1:row8:col4'])
- unit_dimension_mismatch: 'RTOT0 (nM)' → Q333 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Vm (nmol/h)' → Q66 (unit '[substance] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'fesc' — extend the ontology if this is a real PK parameter (source ['tbl1:row14:col4'])
- unit_dimension_unknown: 'nM−1·h−1' (kint)
- dropped PD-category row 'Ksyn (nM/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row19:col4'])
- dropped unlinked row (NIL): 'Kass (∗10−6 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row20:col4'])
- dropped unlinked row (NIL): 'Kdis (∗10−3 h−1)' — extend the ontology if this is a real PK parameter (source ['tbl1:row21:col4'])
- dropped PD-category row 'kdeg, m (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row26:col4'])
- dropped PD-category row 'kdeg, p (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row27:col4'])
- dropped unlinked row (NIL): 'Smax' — extend the ontology if this is a real PK parameter (source ['tbl1:row28:col4'])
- dropped PD-category row 'SC50 (nM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tbl1:row29:col4'])
- dropped unlinked row (NIL): 'γ1' — extend the ontology if this is a real PK parameter (source ['tbl1:row30:col4'])
- dropped unlinked row (NIL): 'γ2' — extend the ontology if this is a real PK parameter (source ['tbl1:row31:col4'])
- implicit units: 'ka (1/h)' → 1/h (from the paper text: "The text states: 'FU and ka represent the apparent clearance in plasma and the first-order absorption rate of GalNAc-SiR")
- implicit units: 'Km (∗105 nM)' — the LLM proposed 'nM', whose dimension does not fit Q1; left unset
- implicit units: 'koff (1/h)' → 1/h (from the paper text: "The text states: 'kon and koff are the association and dissociation rate constants for GalNAc binding to ASGPR'. Dissoci")
- implicit units: 'kint (1/h)' → 1/h (from the paper text: "The text states: 'kint and kcle represent the cellular internalization rate of bound ASGPR and the cleavage rate of GalN")
- implicit units: 'KDEGE (∗10−6 h−1)' → 1/h (from the paper text: "The text explicitly states: 'The estimated endosomal siRNA degradation rate constant (KDEGE) was 0.0083 h−1'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fitusiran
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'monkeysc' subgroup of Fan_2026 (paper reports 4 populations: humansa, micea, monkeysc, ratsb)
- molar mass: none found for 'fitusiran' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S3 transcribed (42 record(s))
- LLM selected parameter table(s) 1, S3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.5 (8/16 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['fitusiran', 'target mrna', 'interconversion'], ['target mrna', 'target protein', 'interconversion']] | mismatch |
| `gpt-oss:120b` | `parameters[fesc]` |  | 0.019 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kdegd]` |  | 0.0012 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kdege]` | 0.0083 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kpliver]` |  | 1.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[psliver]` |  | 56.73 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | fitusiran | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | fitusiran | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q330 | pass | 1 / [time] |  | ['tbl1:row12:col4'] |
| C5_dimension_Q333 | fail | [length] | nM | ['tbl1:row9:col4'] |
| C5_dimension_Q334 | pass | 1 / [time] |  | ['tbl1:row15:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tbl1:row22:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tbl1:row3:col4'] |
| C5_dimension_Q66 | fail | [substance] / [time] | nmol/h | ['tbl1:row10:col4'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 |  | ['tbl1:row11:col4'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfitusiran%5D%20Fitusiran_Fan2026_monkeysc&body=Drug%3A%20fitusiran%0ARecord%3A%20Fitusiran_Fan2026_monkeysc%0APaper%3A%20Fan_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fitusiran/Fitusiran_Fan2026_monkeysc%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-05 19:26 UTC</sub>
