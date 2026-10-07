<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# durvalumab

- **generic name:** durvalumab
- **ATC codes:** `L01FF03`, `L01XC28`
- **DrugBank:** [DB11714](https://go.drugbank.com/drugs/DB11714) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Durvalumab is a monoclonal antibody that blocks the PD-L1 protein and is used to treat non-small-cell lung cancer. It is approved and authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19904005](https://www.wikidata.org/wiki/Q19904005) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:30 | 13:32 | 2/3/0 | 2/0/2 | 0/0/0 | 317,940/65,350 | openai / gpt-6-luna | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abegesah_2025_reference](drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+4 cov.) | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhao_2026_reference](drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+6 cov.) | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Baverel_2018_reference](drugs/drug_durvalumab/Durvalumab_Baverel2018_reference.md) | — | 2-compartment (no model) | 3 | Baverel PG et al., Population Pharmacokinetics of Durvalum…, Clinical pharmacology and t… (2018) | [10.1002/cpt.982](https://doi.org/10.1002/cpt.982) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Ogasawara_2020_reference](drugs/drug_durvalumab/Durvalumab_Ogasawara2020_reference.md) | — | 2-compartment (no model) | 5 (+4 cov.) | Ogasawara K et al., Population Pharmacokinetics of an Anti-…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00804-x](https://doi.org/10.1007/s40262-019-00804-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Proctor_2026_reference](drugs/drug_durvalumab/Durvalumab_Proctor2026_reference.md) | — | 1-compartment (no model) | 2 | Proctor JR et al., Albumin Levels Are Predictive of Cachex…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70185](https://doi.org/10.1002/psp4.70185) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_eGFP](drugs/drug_durvalumab/pd_De_2019_eGFP.md) | normalized stimulation (reporter gene expression) ← durvalumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_gMFI](drugs/drug_durvalumab/pd_De_2019_gMFI.md) | binding ← durvalumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lim_2023_AE](drugs/drug_durvalumab/pd_Lim_2023_AE.md) | adverse events ← durvalumab · model not identified | — | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lim_2023_PFS](drugs/drug_durvalumab/pd_Lim_2023_PFS.md) | progression-free survival ← durvalumab · model not identified | — | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Abegesah_2025_AESIs](drugs/drug_durvalumab/pd_Abegesah_2025_AESIs.md) | Grade 3/4 drug-related AEs of special interest ← durvalumab · categorical (graded) response model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Abegesah_2025_AE_leading_to_treatment_discontinuation](drugs/drug_durvalumab/pd_Abegesah_2025_AE_leading_to_treatment_discontinuation.md) | AEs leading to treatment discontinuation ← durvalumab · categorical (graded) response model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Abegesah_2025_OS](drugs/drug_durvalumab/pd_Abegesah_2025_OS.md) | overall survival ← durvalumab · time-to-event model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Abegesah_2025_PFS](drugs/drug_durvalumab/pd_Abegesah_2025_PFS.md) | progression-free survival ← durvalumab · time-to-event model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Abegesah_2025_TRAEs](drugs/drug_durvalumab/pd_Abegesah_2025_TRAEs.md) | Grade 3/4 treatment-related adverse events ← durvalumab · categorical (graded) response model | — | Abegesah A et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-024-04743-8](https://doi.org/10.1007/s00280-024-04743-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lim_2023_OS](drugs/drug_durvalumab/pd_Lim_2023_OS.md) | overall survival ← durvalumab · time-to-event model | — | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhao_2026_AESIs](drugs/drug_durvalumab/pd_Zhao_2026_AESIs.md) | grade ≥3 treatment‐related adverse events of special interest ← durvalumab · categorical (graded) response model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhao_2026_AEs](drugs/drug_durvalumab/pd_Zhao_2026_AEs.md) | grade ≥3 treatment‐related adverse events ← durvalumab · categorical (graded) response model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhao_2026_AEs_2](drugs/drug_durvalumab/pd_Zhao_2026_AEs_2.md) | AEs leading to durvalumab treatment discontinuation ← durvalumab · categorical (graded) response model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhao_2026_EFS](drugs/drug_durvalumab/pd_Zhao_2026_EFS.md) | event‐free survival ← durvalumab · time-to-event model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zhao_2026_pCR](drugs/drug_durvalumab/pd_Zhao_2026_pCR.md) | pathological complete response ← durvalumab · categorical (graded) response model | — | Zhao X et al., Population pharmacokinetics and exposur…, British journal of clinical… (2026) | [10.1002/bcp.70287](https://doi.org/10.1002/bcp.70287) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=durvalumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD274 (antibody), CD274 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 18 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lim_2023.pdf` | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) | [37300457](https://pubmed.ncbi.nlm.nih.gov/37300457) | Human durvalumab PopPK is analyzed, but no numeric disposition parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T12:17:56.823121+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2019 | irrelevant | 0 | 0 | This in-vitro functional assay reports EC50 values, not durvalumab disposition parameters; half-life values are only referenced in an unprovided table. |
| popPK | He_2023 | irrelevant | 0 | 0 | This reports tremelimumab pharmacokinetics, not durvalumab parameters. |
| popPK | Hec-Gałązka_2024 | irrelevant | 0 | 0 | This is an in-vitro inhibitor study where durvalumab is only a comparator, with no durvalumab disposition parameters. |
| popPK | Hwang_2023 | irrelevant | 0 | 0 | The model reports tremelimumab parameters, not durvalumab parameters. |
| popPK | Lim_2023 | relevant | 10 | 0 | Human durvalumab PopPK is analyzed, but no numeric disposition parameter values are provided in the evidence. |
| popPK | Song_2023 | irrelevant | 0 | 0 | The study reports tremelimumab pharmacokinetics, not durvalumab disposition parameters; some tremelimumab model details are only in supplementary material. |
| popPK | Song_2023_2 | irrelevant | 0 | 0 | The model reports tremelimumab response parameters, not durvalumab disposition values. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | The model and numeric PK values are for danvatirsen, not durvalumab. |
| popPK | de_2025 | relevant | 8 | 3 | Human durvalumab PK simulations report a numeric Km, but the model’s other parameter values are not provided and its code is in supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:18 UTC</sub>
