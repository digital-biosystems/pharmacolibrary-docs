<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;N-Butyl-Benzenesulfonamide&quot;,&quot;href&quot;:&quot;drugs/toxin_n_butyl_benzenesulfonamide/&quot;},{&quot;label&quot;:&quot;Waidyanatha_2020_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NButylBenzenesulfonamide_Waidyanatha2020v2_reference&quot;,&quot;label&quot;:&quot;Waidyanatha_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# N-Butyl-Benzenesulfonamide — `NButylBenzenesulfonamide_Waidyanatha2020v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The model mispredicts n-butyl-benzenesulfonamide PK with inflated terminal half-life (1.57h vs paper 0.0809-0.895h), delayed tmax (2.12h vs 0.355h), and underestimated Cmax.

<div class="pk-model-meta" hidden drug="N-Butyl-Benzenesulfonamide" model-id="NButylBenzenesulfonamide_Waidyanatha2020v2_reference" status="needs_review" stale="false" population="HSD rats and B6C3F1 mice" measured-compound="N-Butyl-Benzenesulfonamide" parameterization="apparent" topology="1C"></div>

## Citation
Waidyanatha S, Gibbs S, South N, Smith JP, Mutlu E, Burback B et al. Toxicokinetics of the plasticizer, N-butylbenzenesulfonamide, in plasma and brain following oral exposure in rodents: Route, species, and sex comparison. Toxicology reports 7:711–722 (2020).
  ·  DOI: [10.1016/j.toxrep.2020.05.005](https://doi.org/10.1016/j.toxrep.2020.05.005)

## Population and dosing

**Population:** HSD rats and B6C3F1 mice · condition experimental exposure · age group adult.

**Dosing:** 1400, 4200, 14000 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference/NButylBenzenesulfonamide_Waidyanatha2020v2_reference.svg" alt="NButylBenzenesulfonamide_Waidyanatha2020v2_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K10 half-Life (h) | t1/2z | 1.42 | h |
| V1_F (mL/kg) | V/F | 53300 | mL/kg |
| Alpha half-life | t1/2α | 0.119 | h |
| Beta half-life | t1/2β | 0.895 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model mispredicts n-butyl-benzenesulfonamide PK with inflated terminal half-life (1.57h vs paper 0.0809-0.895h), delayed tmax (2.12h vs 0.355h), and underestimated Cmax.**

Terminal half-life simulations yield 1.57 h, significantly longer than the paper's reported 0.0809 h to 0.895 h. Time to peak concentration is simulated at 2.12 h, diverging from paper values such as 0.355 h. Peak concentration simulations of 0.00014 kg/m3 are far lower than paper values like 0.000316. These discrepancies stem from unreported absorption rate constants and lag times that were substituted with library defaults. Extracted — n butyl benzenesulfonamide: t1/2z 1.42 h, V/F 5.33e+04 mL/kg, t1/2α 0.119 h, t1/2β 0.895 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K10 half-Life (h) | `Q57` · t1/2z | 1.42 | h | 5112 | s | h | toxin_unit_relink (0.85) | Waidyanatha_2020_2:other_prose |
| V1_F (mL/kg) | `Q76` · V/F | 53300 | mL/kg | 3.731 | m3 | L | exact (1) | Waidyanatha_2020_2:other_prose |
| Alpha half-life | `Q59` · t1/2α | 0.119 | h | 428.4 | s | h | half_life_rule (0.95) | Waidyanatha_2020_2:other_prose |
| Beta half-life | `Q60` · t1/2β | 0.895 | h | 3222 | s | h | half_life_rule (0.95) | Waidyanatha_2020_2:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tbl0020:footnote']); the table cell was unparseable — needs review
- salvaged Q57 ('K10 half-Life (h)'=1.42) from results prose — parameter table was unreadable
- salvaged Q290 ('V1_F (mL/kg)'=53300) from results prose — parameter table was unreadable
- salvaged Q59 ('Alpha half-life'=0.119) from results prose — parameter table was unreadable
- salvaged Q60 ('Beta half-life'=0.895) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=N-Butyl-Benzenesulfonamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'V1_F (mL/kg)' is the general volume)
- status held at "Needs review" — not promoted
- derived CL/F=1821.22 L/h from ln2/t½z × V/F = CL/F (Q57 × Q76); not separately reported

**Extraction notes:**
- table tbl0020: no_numeric_grid
- final table tbl0020: no supported point estimates; targeted recovery unresolved
- table Waidyanatha_2020_2_table_2: no_numeric_grid
- companion parameter table 2 transcribed (0 record(s))
- table Waidyanatha_2020_2_table_3: no_numeric_grid
- companion parameter table 3 transcribed (0 record(s))
- table Waidyanatha_2020_2_table_5: no_numeric_grid
- companion parameter table 5 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 3.73e+03 L | ['Waidyanatha_2020_2:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | pass | C_central (measured=N-Butyl-Benzenesulfonamide) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | skipped |  |  |  | no second reading of this record |
| T1_cmax | reference | fail | 0.000316 | 0.0001397 | 0.442 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0012 | 0.0001397 | 0.1164 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00344 | 0.0001397 | 0.0406 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 15.8 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 20 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 17.2 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.00154 | 0.0001397 | 0.0907 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00389 | 0.0001397 | 0.0359 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0152 | 0.0001397 | 0.0092 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 77 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 64.8 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 76 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1680 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 4560 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 13400 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 84 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 76 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 67 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 4780 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 11700 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 25800 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 239 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 195 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 129 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.000756 | 0.0001397 | 0.1847 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00553 | 0.0001397 | 0.0253 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0155 | 0.0001397 | 0.009 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 37.8 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 92.1 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 77.5 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.00104 | 0.0001397 | 0.1343 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00296 | 0.0001397 | 0.0472 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0137 | 0.0001397 | 0.0102 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 52 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 49.3 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 68.5 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1260 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8280 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 23400 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 63 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 138 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 117 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 733 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 2830 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 18700 | 0.0001397 |  | unresolved concentration unit (exp 'ng/g', sim 'kg/m3') |
| T1_cmax | reference | skipped | 36.7 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 47.2 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 93.5 | 0.0001397 |  | unresolved concentration unit (exp '(ng/g)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | fail | 1.75e-05 | 0.0001397 | 7.981 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 2.43e-05 | 0.0001397 | 5.747 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 4.79e-05 | 0.0001397 | 2.916 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 0.035 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(ppm)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.024 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(ppm)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.024 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(ppm)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.416 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.338 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.33 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | fail | 2.67e-05 | 0.0001397 | 5.231 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 4.46e-05 | 0.0001397 | 3.131 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | pass | 0.000186 | 0.0001397 | 0.7509 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 0.0534 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(ppm)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.0446 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(ppm)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.093 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(ppm)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.326 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.265 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.572 | 0.0001397 |  | unresolved concentration unit (exp '(ng/mL)/(mg/kg)', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped | 5.3 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.1 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.7 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.7 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.8 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.5 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 3.9 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.7 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.5 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 1.4 | 0.0001397 |  | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_cmax | reference | skipped |  | 0.0001397 |  | non-numeric value |
| T1_t_half_alpha | reference | skipped | 0.119 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.156 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.262 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.121 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.177 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_alpha | reference | skipped | 0.354 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | fail | 0.895 | 1.571 | 1.755 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.789 | 1.571 | 1.991 | h→SI vs simulated h |
| T1_t_half_beta | reference | pass | 1.97 | 1.571 | 0.7973 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 4.13 | 1.571 | 0.3803 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 0.737 | 1.571 | 2.131 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1 | 1.571 | 1.571 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0809 | 1.571 | 19.41 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0696 | 1.571 | 22.57 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0361 | 1.571 | 43.51 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.42 | 1.571 | 1.106 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.72 | 1.571 | 0.5775 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.7 | 1.571 | 0.5817 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.158 | 1.571 | 9.941 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0824 | 1.571 | 19.06 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0353 | 1.571 | 44.49 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.24 | 1.571 | 1.267 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.93 | 1.571 | 0.8138 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.55 | 1.571 | 0.4424 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.96 | 1.571 | 1.636 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.42 | 1.571 | 1.106 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.64 | 1.571 | 0.595 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.55 | 1.571 | 1.013 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.47 | 1.571 | 0.6359 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 6.11 | 1.571 | 0.2571 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0631 | 1.571 | 24.89 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0358 | 1.571 | 43.87 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0431 | 1.571 | 36.44 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.201 | 1.571 | 7.814 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.22 | 1.571 | 7.139 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.317 | 1.571 | 4.955 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0477 | 1.571 | 32.93 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0362 | 1.571 | 43.39 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.0347 | 1.571 | 45.26 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.199 | 1.571 | 7.893 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.221 | 1.571 | 7.107 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.432 | 1.571 | 3.636 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.315 | 1.571 | 4.986 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.417 | 1.571 | 3.767 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.524 | 1.571 | 2.998 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.278 | 1.571 | 5.65 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.329 | 1.571 | 4.774 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.545 | 1.571 | 2.882 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.61 | 1.571 | 0.9756 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.48 | 1.571 | 0.4513 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.81 | 1.571 | 0.559 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.06 | 1.571 | 1.482 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.09 | 1.571 | 0.7515 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.28 | 1.571 | 0.6889 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.355 | 2.116 | 5.961 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.378 | 2.116 | 5.598 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.228 | 2.116 | 9.282 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.539 | 2.116 | 3.926 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.392 | 2.116 | 5.399 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.237 | 2.116 | 8.929 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.204 | 2.116 | 10.37 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.202 | 2.116 | 10.48 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.116 | 2.116 | 18.24 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.198 | 2.116 | 10.69 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.196 | 2.116 | 10.8 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.113 | 2.116 | 18.73 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.131 | 2.116 | 16.15 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.103 | 2.116 | 20.55 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.136 | 2.116 | 15.56 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.107 | 2.116 | 19.78 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.107 | 2.116 | 19.78 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.133 | 2.116 | 15.91 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.118 | 2.116 | 17.93 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.12 | 2.116 | 17.64 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.198 | 2.116 | 10.69 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.199 | 2.116 | 10.63 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.198 | 2.116 | 10.69 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.362 | 2.116 | 5.846 | h→SI vs simulated h |
| T1_tmax | reference | skipped |  | 2.116 |  | non-numeric value |
| T1_tmax | reference | skipped |  | 2.116 |  | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference/NButylBenzenesulfonamide_Waidyanatha2020v2_reference_modelica.zip" download>NButylBenzenesulfonamide_Waidyanatha2020v2_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference/NButylBenzenesulfonamide_Waidyanatha2020v2_reference_fmi.zip" download>NButylBenzenesulfonamide_Waidyanatha2020v2_reference_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.2133 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 0 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0014 | kg |
| input | model | `Cl` | 0.0005059 | m3/s |
| input | model | `VdPerKg` | 0.0533 | m3/kg |
| input | model | `ka` | 0.0001389 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Waidyanatha S, Gibbs S, South N, Smith JP, Mutlu E, Burback B et al. Toxicokinetics of the plasticizer, N-butylbenzenesulfonamide, in plasma and brain following oral exposure in rodents: Route, species, and sex comparison. Toxicology reports 7:711–722 (2020). [doi:10.1016/j.toxrep.2020.05.005](https://doi.org/10.1016/j.toxrep.2020.05.005)

**This record:** Pharmacolibrary, model `NButylBenzenesulfonamide_Waidyanatha2020v2_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference>

```bibtex
@misc{pharmacolibrary_NButylBenzenesulfonamideWaidyanatha2020v2reference,
  title  = {{Pharmacolibrary model NButylBenzenesulfonamide_Waidyanatha2020v2_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference},
  note   = {Parameters from doi:10.1016/j.toxrep.2020.05.005},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1400 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 1400, 4200, 14000 mg.

<dbs-fmusim paramsurl="drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference/NButylBenzenesulfonamide_Waidyanatha2020v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference/NButylBenzenesulfonamide_Waidyanatha2020v2_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `NButylBenzenesulfonamide_Waidyanatha2020v2_reference_params.json` · controls `NButylBenzenesulfonamide_Waidyanatha2020v2_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bn_butyl_benzenesulfonamide%5D%20NButylBenzenesulfonamide_Waidyanatha2020v2_reference&body=Drug%3A%20n_butyl_benzenesulfonamide%0ARecord%3A%20NButylBenzenesulfonamide_Waidyanatha2020v2_reference%0APaper%3A%20Waidyanatha_2020_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_n_butyl_benzenesulfonamide/NButylBenzenesulfonamide_Waidyanatha2020v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 12:37 UTC</sub>
