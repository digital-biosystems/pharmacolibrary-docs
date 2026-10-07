<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ipilimumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipilimumab_Hu2024_reference&quot;,&quot;label&quot;:&quot;Hu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Leven2019_reference&quot;,&quot;label&quot;:&quot;Leven_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Leven2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ipilimumab

- **generic name:** ipilimumab
- **ATC codes:** `L01FX04`
- **DrugBank:** [DB06186](https://go.drugbank.com/drugs/DB06186) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ipilimumab is a monoclonal antibody used to treat several cancers, including melanoma, renal cell carcinoma, non-small-cell lung cancer, mesothelioma, and colorectal cancer. It is approved and authorised in the European Union, where it is used in the treatment of these cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2459042](https://www.wikidata.org/wiki/Q2459042) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:02 | 13:27 | 4/0/2 | 1/0/4 | 0/0/0 | 366,336/64,071 | openai / gpt-6-luna | 11 | 1/10 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2024_reference](drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 (+3 cov.) | Hu Z et al., Nivolumab and ipilimumab population pha…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13098](https://doi.org/10.1002/psp4.13098) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leven_2019_reference](drugs/drug_ipilimumab/Ipilimumab_Leven2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shang_2022_reference](drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |
| <span class="pk-badge pk-badge--green">extracted</span> | [van_2019_reference](drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | van Bussel MTJ et al., Intracranial antitumor responses of niv…, BMC cancer (2019) | [10.1186/s12885-019-5741-y](https://doi.org/10.1186/s12885-019-5741-y) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 24.4893)</sub><br><sub>route_to: `human_review`</sub> | [Feng_2014_reference](drugs/drug_ipilimumab/Ipilimumab_Feng2014_reference.md) | — | 2-compartment (no model) | 5 | Feng Y et al., Model-based clinical pharmacology profi…, British journal of clinical… (2014) | [10.1111/bcp.12323](https://doi.org/10.1111/bcp.12323) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61, Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Sanghavi_2020_reference](drugs/drug_ipilimumab/Ipilimumab_Sanghavi2020_reference.md) | — | 3-compartment (no model) | 8 | Sanghavi K et al., Population Pharmacokinetics of Ipilimum…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12477](https://doi.org/10.1002/psp4.12477) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Leven_2019_ORR](drugs/drug_ipilimumab/pd_Leven_2019_ORR.md) | response ← ipilimumab · model not identified | — | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leven_2019_irAE](drugs/drug_ipilimumab/pd_Leven_2019_irAE.md) | irAE of grade 2 or higher ← ipilimumab · model not identified | — | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Leven_2019_irAE_2](drugs/drug_ipilimumab/pd_Leven_2019_irAE_2.md) | irAE of grade 3 or higher ← ipilimumab · model not identified | — | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Blanchet_2026_PFS](drugs/drug_ipilimumab/pd_Blanchet_2026_PFS.md) | PFS ← ipilimumab · time-to-event model | — | Blanchet B et al., Exposure-response relationship of nivol…, British journal of cancer (2026) | [10.1038/s41416-026-03340-1](https://doi.org/10.1038/s41416-026-03340-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Blanchet_2026_TRAEs](drugs/drug_ipilimumab/pd_Blanchet_2026_TRAEs.md) | grade ≥ 3 TRAEs occurrence ← ipilimumab · categorical (graded) response model | — | Blanchet B et al., Exposure-response relationship of nivol…, British journal of cancer (2026) | [10.1038/s41416-026-03340-1](https://doi.org/10.1038/s41416-026-03340-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Blanchet_2026_risk_of_death](drugs/drug_ipilimumab/pd_Blanchet_2026_risk_of_death.md) | risk of death ← ipilimumab · categorical (graded) response model | — | Blanchet B et al., Exposure-response relationship of nivol…, British journal of cancer (2026) | [10.1038/s41416-026-03340-1](https://doi.org/10.1038/s41416-026-03340-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Du_2024_gr2_IMAEs](drugs/drug_ipilimumab/pd_Du_2024_gr2_IMAEs.md) | time to first occurrence of gr2+ IMAEs ← ipilimumab · time-to-event model | — | Du S et al., Pediatric model-based dose optimization…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13070](https://doi.org/10.1002/psp4.13070) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Feng_2013_CR_or_PR](drugs/drug_ipilimumab/pd_Feng_2013_CR_or_PR.md) | complete or partial tumor response ← ipilimumab · categorical (graded) response model | — | Feng Y et al., Exposure-response relationships of the…, Clinical cancer research :… (2013) | [10.1158/1078-0432.CCR-12-3243](https://doi.org/10.1158/1078-0432.CCR-12-3243) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Feng_2013_OS](drugs/drug_ipilimumab/pd_Feng_2013_OS.md) | overall survival ← ipilimumab · time-to-event model | — | Feng Y et al., Exposure-response relationships of the…, Clinical cancer research :… (2013) | [10.1158/1078-0432.CCR-12-3243](https://doi.org/10.1158/1078-0432.CCR-12-3243) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Feng_2013_irAE](drugs/drug_ipilimumab/pd_Feng_2013_irAE.md) | grade 3 or more irAE ← ipilimumab · categorical (graded) response model | — | Feng Y et al., Exposure-response relationships of the…, Clinical cancer research :… (2013) | [10.1158/1078-0432.CCR-12-3243](https://doi.org/10.1158/1078-0432.CCR-12-3243) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Leven_2019_OS](drugs/drug_ipilimumab/pd_Leven_2019_OS.md) | overall survival ← ipilimumab · time-to-event model | — | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Leven_2019_irAE_3](drugs/drug_ipilimumab/pd_Leven_2019_irAE_3.md) | first irAE occurring at any time ← ipilimumab · time-to-event model | — | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sangro_2023_OS](drugs/drug_ipilimumab/pd_Sangro_2023_OS.md) | Overall survival ← ipilimumab · time-to-event model | — | Sangro B et al., Exposure-response analysis for nivoluma…, Clinical and translational… (2023) | [10.1111/cts.13544](https://doi.org/10.1111/cts.13544) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sangro_2023_OTR](drugs/drug_ipilimumab/pd_Sangro_2023_OTR.md) | BICR-assessed objective tumor response ← ipilimumab · categorical (graded) response model | — | Sangro B et al., Exposure-response analysis for nivoluma…, Clinical and translational… (2023) | [10.1111/cts.13544](https://doi.org/10.1111/cts.13544) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ipilimumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CTLA4 (antibody), CTLA4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 6  ·  extracted 4  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bajaj_2019.pdf` | Bajaj G et al., Evaluation of covariate effects on phar…, British journal of clinical… (2019) | popPK | 8 | [10.1111/bcp.13996](https://doi.org/10.1111/bcp.13996) | [31140642](https://pubmed.ncbi.nlm.nih.gov/31140642) | A reduced population-PK model for ipilimumab is reported, but no numeric disposition parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T12:50:12.569519+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bajaj_2019 | relevant | 8 | 1 | A reduced population-PK model for ipilimumab is reported, but no numeric disposition parameter values are provided in the evidence. |
| popPK | Blanchet_2026 | irrelevant | 2 | 1 | The study reports an ipilimumab trough concentration and exposure–response associations, but no quantitative disposition parameters. |
| popPK | Du_2024 | irrelevant | 1 | 0 | This is an exposure–response safety analysis, and ipilimumab PK disposition values are not reported (the cited PopPK model is unpublished). |
| popPK | Feng_2013 | irrelevant | 1 | 0 | Exposure-response models are reported, but no quantitative disposition parameters for ipilimumab are provided. |
| popPK | Ivetić_2025 | irrelevant | 0 | 0 | This human meta-analysis reports efficacy and safety outcomes, not quantitative ipilimumab pharmacokinetic parameters. |
| popPK | Kim_2019 | irrelevant | 1 | 0 | This review summarizes PK evidence but provides no numeric ipilimumab disposition parameters. |
| popPK | Leven_2019 | irrelevant | 3 | 9 | This is a review summarizing human ipilimumab popPK estimates rather than reporting an original PK study, though numeric values are present. |
| popPK | Sangro_2023 | irrelevant | 2 | 0 | The human exposure–response analysis uses ipilimumab PK models but reports no numeric disposition parameters for ipilimumab. |
| popPK | Shang_2022 | irrelevant | 0 | 0 | This review reports PK models for other anti-PD-1 drugs; ipilimumab appears only as a covariate, with no ipilimumab parameter values. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | This human cohort evaluates immune-mediated hepatitis, not ipilimumab pharmacokinetic disposition parameters. |
| popPK | Zhang_2019 | irrelevant | 1 | 0 | This models nivolumab PK with ipilimumab as a coadministered covariate; no ipilimumab parameter values are reported. |
| popPK | Zhao_2025 | irrelevant | 1 | 0 | The population-PK analysis reports nivolumab parameters, not ipilimumab values. |
| popPK | van_2019 | irrelevant | 2 | 9 | This is a review, but readable numeric ipilimumab clearance and volume values are included in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:50 UTC</sub>
