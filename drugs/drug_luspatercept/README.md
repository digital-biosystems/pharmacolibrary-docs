<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;luspatercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Luspatercept_Chen2020_reference&quot;,&quot;label&quot;:&quot;Chen_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Luspatercept_Chen2021_reference&quot;,&quot;label&quot;:&quot;Chen_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# luspatercept

- **generic name:** luspatercept
- **ATC codes:** `B03XA06`
- **DrugBank:** [DB12281](https://go.drugbank.com/drugs/DB12281)
- **groups:** approved, investigational

## About

**Description.** Luspatercept is a recombinant fusion protein comprised of a modified extracellular domain of activin receptor type IIB fused to the FC domain of human IgG1.[A187829,L42455] It was first approved for use in the United States in November 2019 under the brand name Reblozyl® for the treatment of anemia in patients with beta thalassemia who require regular blood transfusions.[L42455] Luspatercept is novel in that it ameliorates anemia via action on late-stage erythropoiesis, in contrast to typical erythropoiesis-stimulating agents (ESAs), such as [darbepoetin alfa] and [epoetin alfa], which act only on early-stage erythropoiesis.[A187835] Luspatercept's novel mechanism of action, then, is uniquely suited for the treatment of conditions in which late-stage erythropoiesis is defective, such as beta thalassemia and other myelodysplastic diseases.[A187835,A187838]

**Indication.** Luspatercept is indicated for the treatment of:

- Anemia in adults with beta thalassemia who require regular red blood cell transfusions.[L42455]
- Anemia without previous erythropoiesis stimulating agent use (ESA-naïve) in adult patients with very low- to intermediate-risk myelodysplastic syndromes (MDS) who may require regular red blood cell (RBC) transfusions.[L47986]
- Anemia failing an erythropoiesis stimulating agent and requiring two or more RBC units over eight weeks in adult patients with very low- to intermediate-risk myelodysplastic syndromes with ring sideroblasts (MDS-RS) or with myelodysplastic/myeloproliferative neoplasm with ring sideroblasts and thrombocytosis (MDS/MPN-RS-T).[L47986]
- for the treatment of transfusion-dependent anaemia due to very low, low and intermediate-risk myelodysplastic syndromes (MDS).[L52760]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 01:05 | 2:44 | 2/0/0 | 0/0/1 | 0/0/0 | 111,005/3,406 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span> | [Chen_2020_reference](drugs/drug_luspatercept/Luspatercept_Chen2020_reference.md) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Chen_2021_reference](drugs/drug_luspatercept/Luspatercept_Chen2021_reference.md) | Chen N et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1696](https://doi.org/10.1002/jcph.1696) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Chen_2020](drugs/drug_luspatercept/pd_Chen_2020_Erythroid_response.md) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Chen_2020](drugs/drug_luspatercept/pd_Chen_2020_RBC_transfusion_independence.md) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Chen_2020](drugs/drug_luspatercept/pd_Chen_2020_Treatment_emergent_adverse_events.md) | Chen N et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12521](https://doi.org/10.1002/psp4.12521) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bruzzese_2023.pdf` | Bruzzese A et al., Myelodysplastic syndromes with ring sid…, Hematological oncology (2023) | pgx | 5 | [10.1002/hon.3125](https://doi.org/10.1002/hon.3125) | [36794650](https://www.ncbi.nlm.nih.gov/pubmed/36794650) | metadata signals extractable PGX data (ABCB7) |

<sub>queue written 2026-09-19T01:03:23.175399+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bose_2019 | not_relevant | 0 | 0 | The paper is a review of myelofibrosis treatments and does not mention luspatercept or any pharmacogenomic effects. |
| PGx | Bruzzese_2023 | not_relevant | 0 | 0 | The text describes the mechanism of action of luspatercept and the biology of MDS-RS but does not report any pharmacogenomic study linking specific gene variants to changes in luspatercept's PK or PD parameters. |
| PGx | Diamantidis_2023 | not_relevant | 0 | 0 | The paper is a case report on a hemoglobinopathy and mentions a clinical trial for luspatercept but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Mansour_2025 | not_relevant | 0 | 0 | The paper is a narrative review of iron metabolism mechanisms and does not report specific pharmacogenomic effects on luspatercept PK/PD parameters. |
| popPK | Musallam_2026 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (PROs) and quality of life measures, not pharmacokinetic parameters. |
| PGx | Panzieri_2026 | not_relevant | 0 | 0 | The paper discusses clinical management and efficacy in beta-thalassemia but does not report pharmacogenomic effects on luspatercept PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 01:03 UTC</sub>
