<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;guselkumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Guselkumab_Chen2022_reference&quot;,&quot;label&quot;:&quot;Chen_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_Chen2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Guselkumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Guselkumab_Yao2018_reference&quot;,&quot;label&quot;:&quot;Yao_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_guselkumab/Guselkumab_Yao2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# guselkumab

- **generic name:** guselkumab
- **ATC codes:** `L04AC16`
- **DrugBank:** [DB11834](https://go.drugbank.com/drugs/DB11834) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Guselkumab is a monoclonal antibody that acts as an interleukin inhibitor, belonging to the immunosuppressant class of medicines. It is an approved medicine and has also been investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708315](https://www.wikidata.org/wiki/Q15708315) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:49 | 2:39 | 3/1/0 | 4/0/2 | 0/0/0 | 171,862/11,374 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2022_reference](drugs/drug_guselkumab/Guselkumab_Chen2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_guselkumab/Guselkumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yao_2018_reference](drugs/drug_guselkumab/Guselkumab_Yao2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Yao Z et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1063](https://doi.org/10.1002/jcph.1063) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tran_2022_reference](drugs/drug_guselkumab/Guselkumab_Tran2022_reference.md) | — | 1-compartment (no model) | 0 | Tran L et al., Population pharmacokinetics analysis of…, British journal of clinical… (2022) | [10.1111/bcp.15364](https://doi.org/10.1111/bcp.15364) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gauntlett_2026_IL_23_EC_50_fold_shifts](drugs/drug_guselkumab/pd_Gauntlett_2026_IL_23_EC_50_fold_shifts.md) | IL-23 EC 50 fold shifts ← Guselkumab · target-mediated drug disposition | — | Gauntlett R et al., Biparatopic targeting of IL-23 enables…, mAbs (2026) | [10.1080/19420862.2026.2689777](https://doi.org/10.1080/19420862.2026.2689777) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2014_PASI](drugs/drug_guselkumab/pd_Hu_2014_PASI.md) | Psoriasis Area and Severity Index ← guselkumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index | — | Hu C et al., Information contributed by meta-analysi…, Journal of pharmacokinetics… (2014) | [10.1007/s10928-014-9360-6](https://doi.org/10.1007/s10928-014-9360-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hu_2017_PASI_75_90_100_and_PGA_scores](drugs/drug_guselkumab/pd_Hu_2017_PASI_75_90_100_and_PGA_scores.md) | PASI 75, 90, 100 and PGA scores ← guselkumab · indirect response — drug inhibits the production of PASI 75, 90, 100 and PGA scores | — | Hu C et al., Improvement in latent variable indirect…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9531-3](https://doi.org/10.1007/s10928-017-9531-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Iwaki_2022_PPPASI](drugs/drug_guselkumab/pd_Iwaki_2022_PPPASI.md) | Palmoplantar Pustulosis Area and Severity Index (PPPASI) score ← guselkumab · disease-progression model | — | Iwaki Y et al., Pharmacokinetic/Pharmacodynamic Analysi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1953](https://doi.org/10.1002/jcph.1953) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_ACR20_ACR50_ACR70](drugs/drug_guselkumab/pd_Chen_2022_ACR20_ACR50_ACR70.md) | American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria ← guselkumab · direct Emax (saturable) effect | model (no simulator) | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_ACR20_ACR50_ACR70_2](drugs/drug_guselkumab/pd_Chen_2022_ACR20_ACR50_ACR70_2.md) | American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria ← guselkumab · direct Emax (saturable) effect | model (no simulator) | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_ACR20_ACR50_ACR70_3](drugs/drug_guselkumab/pd_Chen_2022_ACR20_ACR50_ACR70_3.md) | American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria ← guselkumab · direct Emax (saturable) effect | model (no simulator) | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_ACR20_ACR50_ACR70_4](drugs/drug_guselkumab/pd_Chen_2022_ACR20_ACR50_ACR70_4.md) | American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria ← guselkumab · indirect response — drug inhibits the production of American College of Rheumatology [ACR] 20%, 50%, and 70% improvement criteria | model (no simulator) | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_IGA0_1_IGA0](drugs/drug_guselkumab/pd_Chen_2022_IGA0_1_IGA0.md) | Investigator’s Global Assessment [IGA] of psoriasis ← guselkumab · direct Emax (saturable) effect | model (no simulator) | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2022_IGA0_1_IGA0_2](drugs/drug_guselkumab/pd_Chen_2022_IGA0_1_IGA0_2.md) | Investigator’s Global Assessment [IGA] of psoriasis ← guselkumab · direct Emax (saturable) effect | model (no simulator) | Chen Y et al., Population pharmacokinetics and exposur…, Clinical and translational… (2022) | [10.1111/cts.13197](https://doi.org/10.1111/cts.13197) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vaskeikina_2026_mRSS](drugs/drug_guselkumab/pd_Vaskeikina_2026_mRSS.md) | modified Rodnan skin score ← Guselkumab · direct Emax (saturable) effect | model (no simulator) | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=guselkumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IL23A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tran_2022.pdf` | Tran L et al., Population pharmacokinetics analysis of…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15364](https://doi.org/10.1111/bcp.15364) | [35470450](https://pubmed.ncbi.nlm.nih.gov/35470450) | The paper reports a population PK model for guselkumab in humans with specific numeric values for clearance, volume, half-life, and absorption rate present in the text. |
| `Yao_2018.pdf` | Yao Z et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1063](https://doi.org/10.1002/jcph.1063) | [29341192](https://pubmed.ncbi.nlm.nih.gov/29341192) | The paper is a population pharmacokinetic study of guselkumab in humans that explicitly reports numeric values for clearance, volume of distribution, and absorption rate in the text. |
| `Hu_2018.pdf` | Hu C et al., A comprehensive evaluation of exposure-…, Journal of pharmacokinetics… (2018) | popPK | 9 | [10.1007/s10928-018-9581-1](https://doi.org/10.1007/s10928-018-9581-1) | [29549540](https://pubmed.ncbi.nlm.nih.gov/29549540) | The study reports a population PK model and exposure-response analysis for guselkumab in humans, but the specific numeric parameter values are not listed in the provided evidence. |
| `Shao_2024.pdf` | Shao J et al., Combination Therapy With Guselkumab and…, Clinical pharmacology and t… (2024) | popPK | 8 | [10.1002/cpt.3235](https://doi.org/10.1002/cpt.3235) | [38488354](https://pubmed.ncbi.nlm.nih.gov/38488354) | The study describes a population PK model for guselkumab but the specific quantitative parameter values (clearance, volume, etc.) are not provided in the extracted evidence. |
| `Hu_2014.pdf` | Hu C et al., Information contributed by meta-analysi…, Journal of pharmacokinetics… (2014) | popPK | 7 | [10.1007/s10928-014-9360-6](https://doi.org/10.1007/s10928-014-9360-6) | [24852042](https://pubmed.ncbi.nlm.nih.gov/24852042) | The paper describes a population pharmacokinetic model and exposure-response analysis for guselkumab, but the specific numeric parameter values (CL, V, etc.) are not provided in the evidence text. |

<sub>queue written 2026-10-06T23:47:54.863648+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coates_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of guselkumab in psoriatic arthritis reporting disease activity scores, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Gauntlett_2026 | irrelevant | 0 | 0 | The paper focuses on in vitro biophysical characterization (SPR, mass photometry) and functional potency modeling of biparatopic antibodies, with no in vivo pharmacokinetic parameters (CL, V, t1/2) reported for guselkumab or any other drug. |
| popPK | Hu_2014 | relevant | 7 | 2 | The paper describes a population pharmacokinetic model and exposure-response analysis for guselkumab, but the specific numeric parameter values (CL, V, etc.) are not provided in the evidence text. |
| popPK | Hu_2017 | irrelevant | 3 | 0 | The study focuses on exposure-response (pharmacodynamic) modeling of clinical endpoints (PASI, PGA) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for guselkumab. |
| popPK | Hu_2018 | relevant | 9 | 3 | The study reports a population PK model and exposure-response analysis for guselkumab in humans, but the specific numeric parameter values are not listed in the provided evidence. |
| popPK | Hu_2023 | irrelevant | 1 | 0 | The paper describes a pharmacodynamic/exposure-response modeling study for combination therapy rather than reporting specific quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for guselkumab. |
| popPK | Iwaki_2022 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling of disease response (PPPASI score) and does not report specific quantitative disposition parameters (CL, V, half-life) for guselkumab in the provided text. |
| popPK | Lebwohl_2019 | irrelevant | 2 | 1 | The study reports dose-exposure-response efficacy relationships and target trough concentrations but does not provide quantitative pharmacokinetic disposition parameters (CL, V, half-life) or a compartmental model. |
| popPK | Ramanathan_2025 | irrelevant | 2 | 0 | The paper uses guselkumab's previously published data only as a test case for a theoretical diffusion model and does not provide original numeric PK parameters for the drug. |
| popPK | Rodríguez-Fernández_2022 | relevant | 6 | 3 | This is a review that summarizes PK parameters for multiple mAbs including guselkumab, but the specific quantitative PK values (CL, V, etc.) for guselkumab appear to be in Tables 3 and 4 which are referenced but not fully provided in the extracted evidence. |
| popPK | Shao_2024 | relevant | 8 | 0 | The study describes a population PK model for guselkumab but the specific quantitative parameter values (clearance, volume, etc.) are not provided in the extracted evidence. |
| popPK | Soenen_2024 | irrelevant | 1 | 0 | The study measures guselkumab trough concentrations for exposure-response and therapeutic drug monitoring analysis but does not report any compartmental pharmacokinetic parameters (clearance, volume, half-life) or population-PK model estimates. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (mRSS, FVC) for systemic sclerosis, not a pharmacokinetic study, and contains no PK parameters for guselkumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:47 UTC</sub>
