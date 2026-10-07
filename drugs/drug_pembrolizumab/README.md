<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;pembrolizumab&quot;}]"></div>

# pembrolizumab

- **generic name:** pembrolizumab
- **ATC codes:** `L01FF02`
- **DrugBank:** [DB09037](https://go.drugbank.com/drugs/DB09037) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pembrolizumab is a monoclonal antibody that blocks PD-1 and is used to treat several cancers, including melanoma, lung, bladder, kidney, head and neck, and endometrial cancers. It is approved and widely used, including an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q13896859](https://www.wikidata.org/wiki/Q13896859) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:31 | 13:49 | 0/3/5 | 2/0/1 | 0/0/0 | 372,130/24,303 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 2/10 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Freshwater_2017_dose_regimen](drugs/drug_pembrolizumab/Pembrolizumab_Freshwater2017_dose_regimen.md) | — | 1-compartment (no model) | 2 | Freshwater T et al., Evaluation of dosing strategy for pembr…, Journal for immunotherapy o… (2017) | [10.1186/s40425-017-0242-5](https://doi.org/10.1186/s40425-017-0242-5) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Freshwater_2017_mean_cv](drugs/drug_pembrolizumab/Pembrolizumab_Freshwater2017_mean_cv.md) | — | 1-compartment (no model) | 2 | Freshwater T et al., Evaluation of dosing strategy for pembr…, Journal for immunotherapy o… (2017) | [10.1186/s40425-017-0242-5](https://doi.org/10.1186/s40425-017-0242-5) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Freshwater_2017_median](drugs/drug_pembrolizumab/Pembrolizumab_Freshwater2017_median.md) | — | 1-compartment (no model) | 5 | Freshwater T et al., Evaluation of dosing strategy for pembr…, Journal for immunotherapy o… (2017) | [10.1186/s40425-017-0242-5](https://doi.org/10.1186/s40425-017-0242-5) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [de_2025_negative_predictive_value](drugs/drug_pembrolizumab/Pembrolizumab_de2025_negative_predictive_value.md) | — | 1-compartment (no model) | 2 | de Vries F et al., Early pembrolizumab clearance as progno…, International journal of ca… (2025) | [10.1002/ijc.70052](https://doi.org/10.1002/ijc.70052) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [de_2025_positive_predictive_value](drugs/drug_pembrolizumab/Pembrolizumab_de2025_positive_predictive_value.md) | — | 1-compartment (no model) | 2 | de Vries F et al., Early pembrolizumab clearance as progno…, International journal of ca… (2025) | [10.1002/ijc.70052](https://doi.org/10.1002/ijc.70052) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Leven_2019_reference](drugs/drug_pembrolizumab/Pembrolizumab_Leven2019_reference.md) | — | 2-compartment (no model) | 3 | Leven C et al., Immune Checkpoint Inhibitors in Melanom…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00789-7](https://doi.org/10.1007/s40262-019-00789-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Lindauer_2017_reference](drugs/drug_pembrolizumab/Pembrolizumab_Lindauer2017_reference.md) | — | 2-compartment (no model) | 4 | Lindauer A et al., Translational Pharmacokinetic/Pharmacod…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12130](https://doi.org/10.1002/psp4.12130) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Shang_2022_reference](drugs/drug_pembrolizumab/Pembrolizumab_Shang2022_reference.md) | — | 2-compartment (no model) | 2 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [De_2019_eGFP](drugs/drug_pembrolizumab/pd_De_2019_eGFP.md) | normalized reporter gene expression ← pembrolizumab · direct sigmoid Emax (Hill) effect | — | De Sousa Linhares A et al., Therapeutic PD-L1 antibodies are more e…, Scientific reports (2019) | [10.1038/s41598-019-47910-1](https://doi.org/10.1038/s41598-019-47910-1) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Lindauer_2017_TV](drugs/drug_pembrolizumab/pd_Lindauer_2017_TV.md) | Tumor volume ← pembrolizumab · disease-progression model | — | Lindauer A et al., Translational Pharmacokinetic/Pharmacod…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12130](https://doi.org/10.1002/psp4.12130) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chatterjee_2017_SLD](drugs/drug_pembrolizumab/pd_Chatterjee_2017_SLD.md) | tumor size ← pembrolizumab · disease-progression model | — | Chatterjee MS et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12140](https://doi.org/10.1002/psp4.12140) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chatterjee_2017_SLD_2](drugs/drug_pembrolizumab/pd_Chatterjee_2017_SLD_2.md) | tumor size ← pembrolizumab · disease-progression model | — | Chatterjee MS et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12140](https://doi.org/10.1002/psp4.12140) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pembrolizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD274 (antibody), CD274 (inhibitor), PDCD1 (antibody), PDCD1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 8  ·  extracted 0  ·  needs_review 5  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lala_2020.pdf` | Lala M et al., A six-weekly dosing schedule for pembro…, European journal of cancer… (2020) | popPK | 8 | [10.1016/j.ejca.2020.02.016](https://doi.org/10.1016/j.ejca.2020.02.016) | [32305010](https://pubmed.ncbi.nlm.nih.gov/32305010) | The paper uses an established population PK model for pembrolizumab to simulate exposure, but the specific numeric parameter values (CL, V, etc.) are not provided in the text, only derived exposure metrics like Cavg and Cmin. |

<sub>queue written 2026-10-07T18:20:02.932244+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chatterjee_2017 | irrelevant | 2 | 0 | The paper focuses on tumor size pharmacodynamic modeling and exposure-response, using AUC as a covariate but not reporting quantitative PK disposition parameters (CL, V, etc.) for pembrolizumab. |
| popPK | De_2019 | irrelevant | 0 | 0 | The study is an in-vitro functional assay measuring EC50 values for PD-1/PD-L1 blockade, not a pharmacokinetic study reporting disposition parameters like clearance or volume for pembrolizumab. |
| popPK | Desnoyer_2020 | irrelevant | 2 | 0 | This is a review article summarizing PK/PD relationships without providing original quantitative parameter values for pembrolizumab. |
| popPK | Kim_2019 | irrelevant | 2 | 0 | This is a review article summarizing PK/PD considerations for melanoma treatments, including pembrolizumab, but it does not report original quantitative disposition parameters or specific numeric values in the provided evidence. |
| popPK | Lala_2020 | relevant | 8 | 2 | The paper uses an established population PK model for pembrolizumab to simulate exposure, but the specific numeric parameter values (CL, V, etc.) are not provided in the text, only derived exposure metrics like Cavg and Cmin. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the novel antibody CS1003, using pembrolizumab only as a reference comparator without providing its specific quantitative PK values. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for toripalimab, not pembrolizumab. |
| popPK | Lindauer_2017 | relevant | 8 | 2 | The paper describes a compartmental PK model for pembrolizumab (via surrogate antibodies in mice and human PK parameters), but the specific numeric parameter values are located in Supplementary Tables (S1, S2) and a companion article, not in the provided text. |
| popPK | Op_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of enfortumab vedotin, with pembrolizumab mentioned only as a co-administered drug for cost calculations. |
| popPK | Peer_2022 | irrelevant | 2 | 0 | The paper is a simulation study using existing models rather than reporting original quantitative PK parameter estimates (CL, V, etc.) for pembrolizumab. |
| popPK | Turner_2018 | irrelevant | 2 | 0 | The study reports hazard ratios for survival associated with baseline clearance (CL0) but does not provide quantitative PK parameter values (e.g., mean CL, V, t1/2) or a population PK model for pembrolizumab. |
| popPK | Turner_2023 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of efficacy outcomes (ORR and OS) for pembrolizumab, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Vázquez-Quiroga_2026 | irrelevant | 2 | 0 | This is a study protocol for an observational exposure-response study that does not report original quantitative PK parameters (CL, V, etc.) for pembrolizumab, only mentioning a half-life from a label. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper is a review of camrelizumab, a different drug, and does not report quantitative pharmacokinetic parameters for pembrolizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:20 UTC</sub>
