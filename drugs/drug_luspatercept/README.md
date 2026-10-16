<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;luspatercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Luspatercept_Chen2020_reference&quot;,&quot;label&quot;:&quot;Chen_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Luspatercept_Chen2021_reference&quot;,&quot;label&quot;:&quot;Chen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# luspatercept

- **generic name:** luspatercept
- **ATC codes:** `B03XA06`
- **DrugBank:** [DB12281](https://go.drugbank.com/drugs/DB12281) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Luspatercept is an antianemic medicine used to treat anemia in people with myelodysplastic syndromes or beta-thalassemia. It is authorised in the European Union and is also being studied for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q30314143](https://www.wikidata.org/wiki/Q30314143) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:35 | 2:15 | 2/0/0 | 1/0/0 | 0/0/0 | 104,294/6,636 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.529). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Chen_2020_reference](drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+5 cov.) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Chen_2021_reference](drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+3 cov.) | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Chen_2021_Hb](drugs/drug_luspatercept/pd_Chen_2021_Hb.md) | average of Hb change from baseline ← luspatercept · direct linear effect | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2021_RBC_units_transfused](drugs/drug_luspatercept/pd_Chen_2021_RBC_units_transfused.md) | change from baseline in RBC units transfused during weeks 1‐15 ← luspatercept · inhibition effect | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_33_RBCT_reduction](drugs/drug_luspatercept/pd_Chen_2021_33_RBCT_reduction.md) | achieving an erythroid response (≥33% reduction in RBC transfusion burden for ≥24 weeks) ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_33_RBCT_reduction_2](drugs/drug_luspatercept/pd_Chen_2021_33_RBCT_reduction_2.md) | achieving an erythroid response (≥33% reduction in RBC transfusion burden in any 24 weeks) ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_50_RBCT_reduction](drugs/drug_luspatercept/pd_Chen_2021_50_RBCT_reduction.md) | achieving an erythroid response (≥50% reduction in RBC transfusion burden in any 12 weeks) ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_Bone_pain_grade_1](drugs/drug_luspatercept/pd_Chen_2021_Bone_pain_grade_1.md) | bone pain ≥ grade 1 ← luspatercept · time-to-event model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Chen_2021_Hb_2](drugs/drug_luspatercept/pd_Chen_2021_Hb_2.md) | probability of achieving a ≥1 g/dL increase in trough Hb ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_TEAE_grade_3](drugs/drug_luspatercept/pd_Chen_2021_TEAE_grade_3.md) | TEAEs ≥ grade 3 ← luspatercept · time-to-event model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bruzzese_2023.pdf` | Bruzzese A et al., Myelodysplastic syndromes with ring sid…, Hematological oncology (2023) | pgx | 5 | [10.1002/hon.3125](https://doi.org/10.1002/hon.3125) | [36794650](https://www.ncbi.nlm.nih.gov/pubmed/36794650) | metadata signals extractable PGX data (ABCB7) |

<sub>queue written 2026-10-14T20:33:32.474526+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bose_2019 | not_relevant | 0 | 0 | The paper discusses treatment options and mechanisms for myelofibrosis (focusing on JAK inhibitors and partners) and does not contain any pharmacogenomic data or PK/PD analysis specific to luspatercept. |
| PGx | Bruzzese_2023 | not_relevant | 0 | 0 | The paper is a general review of the pathophysiology of MDS and the mechanism of action of luspatercept; it does not report any pharmacogenomic study, data, or effect size regarding gene variants and luspatercept PK/PD parameters. |
| PGx | Diamantidis_2023 | not_relevant | 0 | 0 | The paper is a case report of an alpha-thalassemia patient, and it mentions a clinical trial of luspatercept, but it does not report any pharmacogenomic data on how a gene variant affects the PK or PD of the drug. |
| PGx | Mansour_2025 | not_relevant | 0 | 0 | The paper is a narrative review of iron metabolism and therapeutic mechanisms, mentioning luspatercept generally but providing no specific pharmacogenomic data or quantitative PK/PD effects linked to gene variants. |
| popPK | Musallam_2026 | irrelevant | 0 | 0 | The study reports patient-reported outcomes (PROs) and quality of life measures, not pharmacokinetic parameters. |
| PGx | Panzieri_2026 | not_relevant | 0 | 0 | The paper is a case series on clinical management of luspatercept and does not report a pharmacogenomic effect on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:33 UTC</sub>
