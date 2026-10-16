<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/&quot;},{&quot;label&quot;:&quot;Loisios-Konstantinidis_2020_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Aarons1991_reference&quot;,&quot;label&quot;:&quot;Aarons_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Aarons1991_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flurbiprofen — `Flurbiprofen_LoisiosKonstantinidis2020v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Km, CLint and CL/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (MW, CLint and CL/F), so that value has no SI equivalent. Extracted — flurbiprofen: MW 244 g/mol, fu 0.01, Km 5.37, Vss 0.074 L/kg, Kp 0.7, CLint 7.88 μL/min/mg proein, CLR 0.066 L/h, CL/F 74 %.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Loisios-Konstantinidis I et al., Physiologically Based Pharmacokinetic/P…, Pharmaceutics (2020)
  ·  DOI: [10.3390/pharmaceutics12111049](https://doi.org/10.3390/pharmaceutics12111049)

<div class="pk-model-meta" hidden drug="flurbiprofen" model-id="Flurbiprofen_LoisiosKonstantinidis2020v2_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="flurbiprofen" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 15 covariate effects.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MW (g/mol) | `Q374` · MW | 244.3 | g/mol | not captured | [g] / [[m] · [ol]] | not captured | exact (1.0) | pharmaceutics-12-01049-t003:row3:col1 | — | not captured |
| Fraction unbound in plasma | `Q46` · fu | 0.01 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-12-01049-t003:row7:col1 | — | not captured |
| logKm:w neutral | `Q1` · Km | 5.37 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-12-01049-t003:row16:col1 | — | not captured |
| Vss (L/kg) | `Q65` · Vss | 0.074 | L/kg | 0.00518 | [l] / [kg] | not captured | exact (1.0) | pharmaceutics-12-01049-t003:row21:col1 | — | not captured |
| Kp scalar | `Q410` · Kp | 0.7 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-12-01049-t003:row22:col1 | — | not captured |
| cyp2c9_isef | `Q900` · cyp2c9_isef | 0.3 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row36:col1 | — | not captured |
| Additional HLM liver CLint (μL/min/mg proein) | `Q3` · CLint | 7.88 | μL/min/mg proein | not captured | [µl] / [[min] · [mg] · [proein]] | not captured | llm_confirmed (0.6) | pharmaceutics-12-01049-t003:row41:col1, pharmaceutics-12-01049-t003:row41:col2 | — | not captured |
| Clrenal (L/h) | `Q26` · CLR | 0.066 | L/h | 1.8333333333333335e-08 | [l] / [h] | not captured | llm (0.6) | pharmaceutics-12-01049-t003:row42:col1 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 15.79 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row26:col1, pharmaceutics-12-01049-t003:row26:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 8.756 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row27:col1, pharmaceutics-12-01049-t003:row27:col2 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 11.53 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row28:col1, pharmaceutics-12-01049-t003:row28:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 8.756 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row29:col1, pharmaceutics-12-01049-t003:row29:col2 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 9.55 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row30:col1, pharmaceutics-12-01049-t003:row30:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 8.756 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row31:col1, pharmaceutics-12-01049-t003:row31:col2 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 10.04 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row32:col1, pharmaceutics-12-01049-t003:row32:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 10.39 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row33:col1, pharmaceutics-12-01049-t003:row33:col2 | — | not captured |
| theta_q66_cyp2c9 | `Q900` · theta_q66_cyp2c9 | 8.901 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row34:col1, pharmaceutics-12-01049-t003:row34:col2 | — | not captured |
| theta_km_cyp2c9 | `Q900` · theta_km_cyp2c9 | 23.25 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row35:col1, pharmaceutics-12-01049-t003:row35:col2 | — | not captured |
| theta_q66_ugt2b7 | `Q900` · theta_q66_ugt2b7 | 119.7 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row37:col1 | — | not captured |
| theta_km_ugt2b7 | `Q900` · theta_km_ugt2b7 | 50.21 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row38:col1 | — | not captured |
| theta_q66_ugt1a9 | `Q900` · theta_q66_ugt1a9 | 3.286 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row39:col1 | — | not captured |
| theta_km_ugt1a9 | `Q900` · theta_km_ugt1a9 | 182.2 | not captured | not captured | not captured | not captured | not captured (not captured) | pharmaceutics-12-01049-t003:row40:col1 | — | not captured |
| predictions of CL/F | `Q27` · CL/F | 74 | % | not captured | % | not captured | boundary (0.8) | Loisios-Konstantinidis_2020_2:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'reference/comments' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'logPo:w' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row4:col1'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row5:col1'])
- dropped unlinked row (NIL): 'Blood/plasma ratio' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row6:col1'])
- dropped unlinked row (NIL): 'Papp, Caco-2 (×10−6 cm/s)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row10:col1'])
- dropped unlinked row (NIL): 'Papp, Caco-2, ref (×10−6 cm/s)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row11:col1', 'pharmaceutics-12-01049-t003:row12:col1'])
- dropped unlinked row (NIL): 'Peff, human (×10−4 cm/s)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row13:col1'])
- dropped unlinked row (NIL): 'S0 (mg/mL)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row15:col1'])
- dropped duplicate Q1 ('logKm:w ion', value '2.46') — already have one for this compound
- dropped unlinked row (NIL): 'Fox' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row24:col1'])
- covariate level 'CYP2C9-ISEF' → Q900:cyp2c9_isef = 0.3 (linear_fractional on the model)
- unit_dimension_unknown: 'μL/min/mg proein' (CLint)
- dropped unlinked row (NIL): 'keo (h−1) (%CV)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-12-01049-t003:row45:col1', 'pharmaceutics-12-01049-t003:row47:col1'])
- dropped PD-category row 'IC50 (mg/L)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-12-01049-t003:row46:col1', 'pharmaceutics-12-01049-t003:row48:col1'])
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- salvaged Q27 ('predictions of CL/F'=74) from results prose — parameter table was unreadable
- implicit units: 'logKm:w neutral' — the LLM proposed 'L', whose dimension does not fit Q1; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=flurbiprofen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pharmaceutics-12-01049-t003:row4:col2 = '[54,55]'
- unparsed cell pharmaceutics-12-01049-t003:row5:col2 = 'Updated from in vitro solubility data (see Table 4 and Section 3.2)'
- unparsed cell pharmaceutics-12-01049-t003:row6:col2 = '[56]'
- unparsed cell pharmaceutics-12-01049-t003:row7:col2 = '[5,56,57,58,59]'
- unparsed cell pharmaceutics-12-01049-t003:row10:col2 = 'Measured value [60]'
- unparsed cell pharmaceutics-12-01049-t003:row11:col2 = 'Negative calibrator (Atenolol) value [60]'
- unparsed cell pharmaceutics-12-01049-t003:row12:col2 = 'Positive calibrator (Verapamil) value [60]'
- unparsed cell pharmaceutics-12-01049-t003:row15:col2 = 'In vitro data (see Table 4 and Section 3.1)'
- unparsed cell pharmaceutics-12-01049-t003:row16:col2 = 'Estimated from in vitro data (see Table 5 and Section 2.6 and Section 3.2)'
- unparsed cell pharmaceutics-12-01049-t003:row17:col2 = 'Estimated from in vitro data (see Table 5 and Section 2.6 and Section 3.2)'
- unparsed cell pharmaceutics-12-01049-t003:row21:col2 = 'Predicted by Method 2'
- unparsed cell pharmaceutics-12-01049-t003:row24:col2 = '[4]'
- unparsed cell pharmaceutics-12-01049-t003:row37:col2 = 'Recombinant UGT [62]'
- unparsed cell pharmaceutics-12-01049-t003:row38:col2 = 'Recombinant UGT [62]'
- unparsed cell pharmaceutics-12-01049-t003:row39:col2 = 'Recombinant UGT [62]'
- unparsed cell pharmaceutics-12-01049-t003:row40:col2 = 'Recombinant UGT [62]'
- unparsed cell pharmaceutics-12-01049-t003:row42:col2 = '[4]'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-12-01049-t003:row42:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] | not captured | not captured | not captured | ['pharmaceutics-12-01049-t003:row3:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-12-01049-t003:row21:col1'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-12-01049-t003:row16:col1'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | % | not captured | not captured | ['Loisios-Konstantinidis_2020_2:results_prose'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | μL/min/mg proein | not captured | not captured | ['pharmaceutics-12-01049-t003:row41:col1', 'pharmaceutics-12-01049-t003:row41:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q65 | pass | volume within physiological range | 5.18 L | not captured | not captured | ['pharmaceutics-12-01049-t003:row21:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_flurbiprofen/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Loisios-Konstantinidis_2020_2` / `Loisios-Konstantinidis_2020_2::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:37 UTC</sub>
