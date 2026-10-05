<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;luspatercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Luspatercept_Chen2020_reference&quot;,&quot;label&quot;:&quot;Chen_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Luspatercept_Chen2021_reference&quot;,&quot;label&quot;:&quot;Chen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-05 21:28 | 9:05 | 2/0/0 | 1/0/1 | 0/0/0 | 161,473/27,312 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.529). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Chen_2020_reference](drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+5 cov.) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Chen_2021_reference](drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+3 cov.) | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2021_Hb](drugs/drug_luspatercept/pd_Chen_2021_Hb.md) | change from baseline in Hb ← luspatercept · direct linear effect | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2020_RBC_TI](drugs/drug_luspatercept/pd_Chen_2020_RBC_TI.md) | RBC transfusion independence (RBC-TI) ≥ 8 weeks in weeks 1–15 ← luspatercept · direct linear effect | model (no simulator) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2020_RBC_TI_2](drugs/drug_luspatercept/pd_Chen_2020_RBC_TI_2.md) | RBC transfusion independence (RBC-TI) ≥ 8 weeks in weeks 1–24 ← luspatercept · direct linear effect | model (no simulator) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2020_RBC_TI_3](drugs/drug_luspatercept/pd_Chen_2020_RBC_TI_3.md) | RBC transfusion independence (RBC-TI) ≥ 12 weeks in weeks 1–24 ← luspatercept · direct linear effect | model (no simulator) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2020_TEAEs_grade_3](drugs/drug_luspatercept/pd_Chen_2020_TEAEs_grade_3.md) | TEAEs ≥ grade 3 ← luspatercept · time-to-event model | — | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2020_mHI_E](drugs/drug_luspatercept/pd_Chen_2020_mHI_E.md) | modified hematologic improvement–erythroid (mHI-E) in weeks 1–24 ← luspatercept · direct linear effect | model (no simulator) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_Bone_Pain](drugs/drug_luspatercept/pd_Chen_2021_Bone_Pain.md) | ≥ Grade 1 bone pain ← luspatercept · time-to-event model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_Hb_2](drugs/drug_luspatercept/pd_Chen_2021_Hb_2.md) | probability of achieving ≥1 g/dL increase in trough Hb ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_RBCT](drugs/drug_luspatercept/pd_Chen_2021_RBCT.md) | ≥33% Reduction in weeks 13‐24 ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_RBCT_2](drugs/drug_luspatercept/pd_Chen_2021_RBCT_2.md) | ≥33% Reduction in weeks 37‐48 ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_RBCT_3](drugs/drug_luspatercept/pd_Chen_2021_RBCT_3.md) | ≥33% Reduction in any 12 weeks ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_RBCT_4](drugs/drug_luspatercept/pd_Chen_2021_RBCT_4.md) | ≥33% Reduction in any 24 weeks ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_RBCT_5](drugs/drug_luspatercept/pd_Chen_2021_RBCT_5.md) | ≥50% Reduction in any 12 weeks ← luspatercept · categorical (graded) response model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_TEAE](drugs/drug_luspatercept/pd_Chen_2021_TEAE.md) | ≥ Grade 3 TEAEs ← luspatercept · time-to-event model | — | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bruzzese_2023.pdf` | Bruzzese A et al., Myelodysplastic syndromes with ring sid…, Hematological oncology (2023) | pgx | 5 | [10.1002/hon.3125](https://doi.org/10.1002/hon.3125) | [36794650](https://www.ncbi.nlm.nih.gov/pubmed/36794650) | metadata signals extractable PGX data (ABCB7) |

<sub>queue written 2026-10-05T21:19:23.575386+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bose_2019 | not_relevant | 0 | 0 | The paper is a review of myelofibrosis treatments and does not mention luspatercept or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Bruzzese_2023 | not_relevant | 0 | 0 | The text describes the mechanism of action of luspatercept and the biology of MDS-RS but does not report any pharmacogenomic study linking specific gene variants to changes in luspatercept's PK or PD parameters. |
| PGx | Diamantidis_2023 | not_relevant | 0 | 0 | The paper is a case report on a hemoglobinopathy and mentions a clinical trial for luspatercept but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Mansour_2025 | not_relevant | 0 | 0 | The paper is a narrative review of iron metabolism mechanisms and does not report specific pharmacogenomic effects on luspatercept PK/PD parameters. |
| popPK | Musallam_2026 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (PROs) and quality of life measures, not pharmacokinetic parameters. |
| PGx | Panzieri_2026 | not_relevant | 0 | 0 | The paper discusses clinical management and efficacy of luspatercept in beta-thalassemia but does not report pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 21:19 UTC</sub>
