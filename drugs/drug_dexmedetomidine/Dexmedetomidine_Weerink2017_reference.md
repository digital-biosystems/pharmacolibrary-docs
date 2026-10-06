<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;dexmedetomidine&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/&quot;},{&quot;label&quot;:&quot;Weerink_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dexmedetomidine_Ber2020_reference&quot;,&quot;label&quot;:&quot;Ber_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/Dexmedetomidine_Ber2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dexmedetomidine_Huang2025_reference&quot;,&quot;label&quot;:&quot;Huang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/Dexmedetomidine_Huang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dexmedetomidine_James2022_reference&quot;,&quot;label&quot;:&quot;James_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/Dexmedetomidine_James2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dexmedetomidine_Levionnois2022_reference&quot;,&quot;label&quot;:&quot;Levionnois_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dexmedetomidine/Dexmedetomidine_Levionnois2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dexmedetomidine — `Dexmedetomidine_Weerink2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Weerink MAS et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2017)
  ·  DOI: [10.1007/s40262-017-0507-7](https://doi.org/10.1007/s40262-017-0507-7)

## Model component
<dbs-pgx drug="dexmedetomidine" model-id="Dexmedetomidine_Weerink2017_reference" status="rejected" stale="false" population="adult and pediatric ICU/surgical patients and healthy volunteers (review of published PopPK models)" measured-compound="dexmedetomidine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Lin (2011) [39] | Q22 | not captured | llm |
| Cortínez (2015) [40] | Q61 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'clearance' routed out of structural estimates ('Nevertheless, a high inter-individual variability is observed for clearance and distribution volumes.')
- table section iiv: 'distribution volumes' routed out of structural estimates ('Nevertheless, a high inter-individual variability is observed for clearance and distribution volumes.')
- column 'drug administration' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'blood pk samples' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'remarks' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'patient characteristics' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Dyck (1993) [21, 108]' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col6'])
- dropped unlinked row (NIL): 'Talke (1997) [38]' — extend the ontology if this is a real PK parameter (source ['Tab1:row3:col3', 'Tab1:row3:col6'])
- dropped unlinked row (NIL): 'Dutta (2000) [26]' — extend the ontology if this is a real PK parameter (source ['Tab1:row4:col3', 'Tab1:row4:col6', 'Tab1:row4:col9'])
- dropped unlinked row (NIL): 'Venn (2002) [22]' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col3', 'Tab1:row5:col6'])
- unit_dimension_unknown: 'venous' (CL)
- dropped unlinked row (NIL): 'Iirola (2012) [32]' — extend the ontology if this is a real PK parameter (source ['Tab1:row7:col3', 'Tab1:row7:col6'])
- dropped unlinked row (NIL): 'Lee (2012) [29]' — extend the ontology if this is a real PK parameter (source ['Tab1:row8:col3', 'Tab1:row8:col6'])
- dropped duplicate Q22 ('Välitalo (2013) [24]', value '48') — already have one for this compound
- unit_dimension_unknown: 'venous' (V1)
- dropped unlinked row (NIL): 'Hannivoort (2015) [42]' — extend the ontology if this is a real PK parameter (source ['Tab1:row11:col3', 'Tab1:row11:col5', 'Tab1:row11:col6'])
- dropped unlinked row (NIL): 'Kuang (2016) [41]' — extend the ontology if this is a real PK parameter (source ['Tab1:row12:col3', 'Tab1:row12:col5', 'Tab1:row12:col6'])
- dropped duplicate Q22 ('Potts (2009) [43]', value '8') — already have one for this compound
- dropped unlinked row (NIL): 'Su (2010) [45]' — extend the ontology if this is a real PK parameter (source ['Weerink_2017_table_2:row2:col3', 'Weerink_2017_table_2:row2:col4', 'Weerink_2017_table_2:row2:col6'])
- dropped unlinked row (NIL): 'Liu (2016) [47]' — extend the ontology if this is a real PK parameter (source ['Weerink_2017_table_2:row3:col3', 'Weerink_2017_table_2:row3:col4', 'Weerink_2017_table_2:row3:col6'])
- dropped unlinked row (NIL): 'Su (2016) [45]' — extend the ontology if this is a real PK parameter (source ['Weerink_2017_table_2:row4:col6'])
- dropped unlinked row (NIL): 'Wiczling (2016) [44]' — extend the ontology if this is a real PK parameter (source ['Weerink_2017_table_2:row5:col3', 'Weerink_2017_table_2:row5:col4', 'Weerink_2017_table_2:row5:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dexmedetomidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Cortínez (2015) [40]' is the general volume)
- status held at route_to_review — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Tab1:row2:col2 = '10 + 6'
- unparsed cell Tab1:row2:col3 = '14 a samples after different target plasma concentrations'
- unparsed cell Tab1:row2:col4 = '120 min'
- unparsed cell Tab1:row2:col5 = '31.5 years (27–40)82 kg (71–98)'
- unparsed cell Tab1:row2:col8 = '3-compartment model with HGT as a covariate on CL'
- unparsed cell Tab1:row3:col4 = '180 min'
- unparsed cell Tab1:row3:col5 = '36 years (23–44)69 kg (62–79)166 cm (157–178)'
- unparsed cell Tab1:row3:col8 = '2-compartment model with no significant influence of tested covariates'
- unparsed cell Tab1:row4:col4 = '240 min'
- unparsed cell Tab1:row4:col5 = '24 years (20–27)78 kg (68–89)177 cm (170–185)'
- unparsed cell Tab1:row4:col8 = '2-compartment model with CO as covariate on CL'
- unparsed cell Tab1:row5:col4 = '720 min'
- unparsed cell Tab1:row5:col5 = '68 years (35–80)'
- unparsed cell Tab1:row5:col8 = '2-compartment model with no tested covariates reported'
- unparsed cell Tab1:row6:col4 = '720 min'
- unparsed cell Tab1:row6:col5 = '46 years (22–69)60 kg (46–78)165 cm (155–178)13 were male, 9 were female'
- unparsed cell Tab1:row6:col8 = '3-compartment model with HGT as a covariate on CL'
- unparsed cell Tab1:row7:col4 = '0 min'
- unparsed cell Tab1:row7:col5 = '60 years (22–85)85 kg (53–120)174 cm (160–181) ALB: 13.5 (6.6–30.3)'
- unparsed cell Tab1:row7:col8 = '2-compartment model with age as a covariate on CL and ALB on V 2'
- unparsed cell Tab1:row8:col4 = '720 min'
- unparsed cell Tab1:row8:col5 = '27 years (median)71 kg (median)174 cm (median)'
- unparsed cell Tab1:row8:col8 = '2-compartment model with ALB as a covariate on clearance and age on V 1'
- unparsed cell Tab1:row9:col1 = 'Critically ill patients (3 phase III trials)'
- unparsed cell Tab1:row9:col8 = '1-compartment model with weight as a covariate on clearance and ALB on V 1'
- unparsed cell Tab1:row10:col4 = '360 min'
- unparsed cell Tab1:row10:col8 = '2-compartment model with FFM as a covariate on clearance, Q 2, V 1 and V 2. With FAT as a covariate on clearance and intra-operative state as a covariate on V 1 and V 2'
- unparsed cell Tab1:row10:col9 = 'DMED was administered at the same time as propofol and remifentanil. According to the authors, TBW-based dosing is responsible for an overshoot in the obese. This is because of a lack of an effect of TBW on V 1 and V 2 and an inhibition of DMED CL as a function of fat mass. However, the authors found that during surgery the DMED V1 is significantly lower (20.8%) which, according to the authors, is likely the result of the concomitant use of other anesthetics'
- unparsed cell Tab1:row11:col2 = '18 × 2 sessions'
- unparsed cell Tab1:row11:col4 = '300 min'
- unparsed cell Tab1:row11:col8 = '3-compartment model with weight as a covariate on clearance, Q 2, Q 3, V 1, V 2, and V 3'
- unparsed cell Tab1:row11:col9 = 'The authors found no systematic difference in V 1 between a volunteer’s first or second session. Nevertheless, the magnitude of the IOV far exceeds the magnitude of the IIV for DMED V 1'
- unparsed cell Tab1:row12:col4 = '600 min'
- unparsed cell Tab1:row12:col8 = '3-compartment model with ALT as a covariate on clearance, age on V 1 and weight on V 2'
- unparsed cell Weerink_2017_table_2:row1:col2 = '95a'
- unparsed cell Weerink_2017_table_2:row1:col3 = 'a (1 trial) and v (3 trials) samples during and after DMED infusion'
- unparsed cell Weerink_2017_table_2:row1:col5 = '3.83 years (0.01–14.4)16.0 kg (3.1–58.9)'
- unparsed cell Weerink_2017_table_2:row1:col8 = '2-compartment model with age, WGT (allometry) and post-cardiac surgery state as covariates on CL and WGT (allometry) as a covariate on Q 2, V 1, and V 2'
- unparsed cell Weerink_2017_table_2:row1:col9 = 'IIV is almost twofold higher than the effect of maturation (30.9% vs. approximately 20%). Clearance in post-operative cardiac pediatric patients was approximately 27% reduced compared with other pediatric patients'
- unparsed cell Weerink_2017_table_2:row2:col5 = '7.8 months (2.6–20.4)7.0 kg (5.1–11.9)20 were male, 16 were female'
- unparsed cell Weerink_2017_table_2:row2:col8 = '2-compartment model with age and ventricular physiology as covariates on CL'
- unparsed cell Weerink_2017_table_2:row2:col9 = 'A full covariate model was reported. Nevertheless, only the covariate for ventricular physiology on CL had acceptable precision (i.e., RSE &lt;50%). BSV is higher than the effect of maturation'
- unparsed cell Weerink_2017_table_2:row3:col5 = '3.0 years (1–9)14.5 kg (10–27)20 were male, 19 were female'
- unparsed cell Weerink_2017_table_2:row3:col8 = '2-compartment model with WGT (allometry) as a covariate on CL, Q 2, V 1, and V 2'
- unparsed cell Weerink_2017_table_2:row4:col2 = '23 + 36'
- unparsed cell Weerink_2017_table_2:row4:col4 = '18 hb'
- unparsed cell Weerink_2017_table_2:row4:col5 = '4.3 months (0.03–20.4)5.9 kg (2.3–11.9)32 were male, 27 were female'
- unparsed cell Weerink_2017_table_2:row4:col8 = '2-compartment model with age, WGT (allometry), total bypass time, and ventricular physiology as covariates on CL and WGT (allometry) as a covariate on Q 2, V 1, and V 2'
- unparsed cell Weerink_2017_table_2:row4:col9 = 'WGT-corrected CL increases with age until approximately 1 month. A linearly scaled version of the model performs slightly better, probably owing to the limited WGT range of the included subjects'
- unparsed cell Weerink_2017_table_2:row5:col5 = '5.8 years (0.12–15.7)18.5 kg (4.7–60)23 were male, 15 were female'
- unparsed cell Weerink_2017_table_2:row5:col8 = '2-compartment model with age, WGT (allometry), and fractional increase in the 2nd session as covariates on CL and with WGT (allometry) and fractional increase in the 2nd session as covariates on Q 2, V 1, and V 2'
- companion parameter table 2 transcribed (15 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dexmedetomidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Weerink_2017` / `Weerink_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:16 UTC</sub>
