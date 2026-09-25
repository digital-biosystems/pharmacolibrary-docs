<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;eliglustat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eliglustat_Wolthuis2025_reference&quot;,&quot;label&quot;:&quot;Wolthuis_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_eliglustat/Eliglustat_Wolthuis2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# eliglustat

- **generic name:** eliglustat
- **ATC codes:** `A16AX10`
- **DrugBank:** [DB09039](https://go.drugbank.com/drugs/DB09039)
- **groups:** approved, investigational

## About

**Description.** Eliglustat is a glucosylceramide synthase inhibitor used for the long-term treatment of type 1 Gaucher disease.[A3752,L41404] Gaucher disease is a rare genetic disorder characterized by the deficiency of acid β-glucosidase, an enzyme that converts glucosylceramide into glucose and ceramide. In patients with Gaucher disease, the accumulation of glucosylceramide leads to the formation of Gaucher cells that infiltrate the liver, spleen, bone marrow and other organs. This leads to complications such as anemia and thrombocytopenia.[L41404,A246384] By inhibiting glucosylceramide synthase, eliglustat reduces the accumulation of glucosylceramide.[L41404]

Eliglustat is mainly metabolized by CYP2D6.[L41404] Patients selected for eliglustat treatment undergo an FDA-cleared genotyping test to establish if they are CYP2D6 extensive metabolizers (EMs), intermediate metabolizers (IMs), or poor metabolizers (PMs). The results of this test dictate eliglustat dosing recommendations for each type of patient. There are no dosing recommendations for CYP2D6 ultra-rapid or indeterminate metabolizers.[L41404,A7634] Eliglustat was approved by the FDA in August 2014 as an oral substrate reduction therapy for the first-line treatment of type 1 Gaucher disease.[L41404,A7634] Enzyme replacement continues to be the standard of care for the treatment of type 1 Gaucher disease ([imiglucerase], [velaglucerase alfa], [taliglucerase alfa]); however, oral substrate reduction therapies with favourable safety profiles, such as eliglustat, represent a treatment alternative.[A246389,A7634]

**Indication.** Eliglustat is a glucosylceramide synthase inhibitor indicated for the long-term treatment of type 1 Gaucher disease in adult patients who are CYP2D6 extensive metabolizers (EMs), intermediate metabolizers (IMs), or poor metabolizers (PMs) as detected by an FDA-cleared test.[L41404] CYP2D6 ultra-rapid metabolizers may not achieve adequate eliglustat concentrations to achieve a therapeutic effect. A specific dosage cannot be recommended for CYP2D6 indeterminate metabolizers.[L41404]

In the EU, Eliglustat is approved for the same indication in the pediatric population with body weight greater than 15 kg, and the patient needing to be stable on enzyme replacement therapy (ERT). [L41414]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 19 | 1/0 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wolthuis_2025_reference](drugs/drug_eliglustat/Eliglustat_Wolthuis2025_reference.md) | Wolthuis DFGJ et al., Model-informed repurposing of eliglusta…, Pediatric nephrology (Berli… (2025) | [10.1007/s00467-025-06688-3](https://doi.org/10.1007/s00467-025-06688-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eliglustat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Eliglustat is mainly excreted in urine (42%) and feces (51%) as metabolites after oral adm…”</sub> | prose |
| excretion | kidney | <sub>“…Eliglustat is mainly excreted in urine (42%) and feces (51%) as metabolites after oral adm…”</sub> | prose |

<sub>Actors without a tissue in the table: UGCG (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fowler_2017 | irrelevant | not captured | not captured | The paper is a review that discusses a PBPK model for eliglustat as a case study but does not report extractable quantitative pharmacokinetic parameters. |
| popPK | Marshall_2010 | irrelevant | not captured | not captured | The paper reports only pharmacodynamic efficacy and disease biomarkers in a mouse model, with no quantitative pharmacokinetic parameters or modeling for eliglustat. |
| popPK | Reddy_2025 | irrelevant | not captured | not captured | Eliglustat is used only as a probe substrate in PBPK simulations to evaluate rifampin DDI predictions, with no original quantitative PK parameters reported. |
| popPK | Vykoukal_2025 | irrelevant | not captured | not captured | The paper investigates the mechanistic anti-tumor effects of eliglustat in cell lines and mouse models but contains no quantitative pharmacokinetic data or population-PK modeling. |
| popPK | Wang_2019_2 | relevant | not captured | not captured | The paper reports quantitative noncompartmental pharmacokinetic parameters (clearance, AUC, Cmax) for eliglustat in rats but does not contain population or compartmental model estimates. |
| popPK | Zhan_2025 | irrelevant | not captured | not captured | Eliglustat is used solely as an internal standard for givinostat quantification, with no pharmacokinetic parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 11:52 UTC</sub>
