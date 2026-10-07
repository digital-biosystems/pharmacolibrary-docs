<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;etanercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etanercept_Ling2024_reference&quot;,&quot;label&quot;:&quot;Ling_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_etanercept/Etanercept_Ling2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# etanercept

- **generic name:** etanercept
- **ATC codes:** `L04AB01`
- **DrugBank:** [DB00005](https://go.drugbank.com/drugs/DB00005) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Etanercept is a TNF inhibitor used to treat inflammatory conditions such as rheumatoid and psoriatic arthritis, juvenile idiopathic arthritis, ankylosing spondylitis, and psoriasis. It is approved and widely used, with several products authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415343](https://www.wikidata.org/wiki/Q415343) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:00 | 1:23 | 1/1/0 | 2/0/3 | 0/0/0 | 96,560/9,137 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ling_2024_reference](drugs/drug_etanercept/Etanercept_Ling2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ling SF et al., Population Pharmacokinetic Analysis and…, Pharmaceutics (2024) | [10.3390/pharmaceutics16060702](https://doi.org/10.3390/pharmaceutics16060702) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhou_2004_reference](drugs/drug_etanercept/Etanercept_Zhou2004_reference.md) | — | 1-compartment (no model) | 0 | Zhou H et al., Unaltered etanercept pharmacokinetics w…, Journal of clinical pharmac… (2004) | [10.1177/0091270004268049](https://doi.org/10.1177/0091270004268049) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hsu_2014_DAS28](drugs/drug_etanercept/pd_Hsu_2014_DAS28.md) | disease activity score in 28 joints (DAS28) ← etanercept · direct Emax (saturable) effect | — | Hsu LF et al., Evaluation of etanercept dose reduction…, International journal of cl… (2014) | [10.5414/CP202131](https://doi.org/10.5414/CP202131) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lon_2011_paw_edema](drugs/drug_etanercept/pd_Lon_2011_paw_edema.md) | paw swelling ← etanercept · indirect response — drug inhibits the production of paw swelling | — | Lon HK et al., Pharmacokinetic-pharmacodynamic disease…, Pharmaceutical research (2011) | [10.1007/s11095-011-0396-7](https://doi.org/10.1007/s11095-011-0396-7) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_ESR](drugs/drug_etanercept/pd_Breedveld_2018_ESR.md) | erythrocyte sedimentation rate ← etanercept · direct sigmoid Emax (Hill) effect | model (no simulator) | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_IL_6](drugs/drug_etanercept/pd_Breedveld_2018_IL_6.md) | interleukin-6 ← etanercept · direct sigmoid Emax (Hill) effect | model (no simulator) | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_MMP_3](drugs/drug_etanercept/pd_Breedveld_2018_MMP_3.md) | matrix metalloproteinase-3 ← etanercept · direct sigmoid Emax (Hill) effect | model (no simulator) | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_number_of_painful_joints](drugs/drug_etanercept/pd_Breedveld_2018_number_of_painful_joints.md) | number of painful joints ← etanercept · direct sigmoid Emax (Hill) effect | model (no simulator) | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Breedveld_2018_number_of_swollen_joints](drugs/drug_etanercept/pd_Breedveld_2018_number_of_swollen_joints.md) | number of swollen joints ← etanercept · direct sigmoid Emax (Hill) effect | model (no simulator) | Breedveld FC et al., A Pilot Dose-Finding Study of Etanercep…, Clinical and translational… (2018) | [10.1111/cts.12502](https://doi.org/10.1111/cts.12502) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hsu_2014_ACR](drugs/drug_etanercept/pd_Hsu_2014_ACR.md) | ACR 20/50/70 response rate ← etanercept · categorical (graded) response model | — | Hsu LF et al., Evaluation of etanercept dose reduction…, International journal of cl… (2014) | [10.5414/CP202131](https://doi.org/10.5414/CP202131) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hutmacher_2007_PASI75](drugs/drug_etanercept/pd_Hutmacher_2007_PASI75.md) | PASI75 ← etanercept · categorical (graded) response model | — | Hutmacher MM et al., Modeling the exposure-response relation…, Journal of clinical pharmac… (2007) | [10.1177/0091270006295062](https://doi.org/10.1177/0091270006295062) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lee_2003_ACR20](drugs/drug_etanercept/pd_Lee_2003_ACR20.md) | ACR20 ← etanercept · categorical (graded) response model | — | Lee H et al., Population pharmacokinetic and pharmaco…, Clinical pharmacology and t… (2003) | [10.1016/s0009-9236(02)17635-1](https://doi.org/10.1016/s0009-9236(02)17635-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etanercept) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: C1QA (target), FCGR1A (target), FCGR2A (target), FCGR2B (target), FCGR2C (target), FCGR3A (target), FCGR3B (target), LTA (antibody), TNF (antibody), TNF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 17 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Korth-Bradley_2000.pdf` | Korth-Bradley JM et al., The pharmacokinetics of etanercept in h…, The Annals of pharmacothera… (2000) | popPK | 10 | [10.1345/aph.19126](https://doi.org/10.1345/aph.19126) | [10676822](https://pubmed.ncbi.nlm.nih.gov/10676822) | The study reports complete quantitative pharmacokinetic parameters (CL, V, half-life) for etanercept in healthy humans. |
| `Lee_2003.pdf` | Lee H et al., Population pharmacokinetic and pharmaco…, Clinical pharmacology and t… (2003) | popPK | 10 | [10.1016/s0009-9236(02)17635-1](https://doi.org/10.1016/s0009-9236(02)17635-1) | [12709725](https://pubmed.ncbi.nlm.nih.gov/12709725) | The paper explicitly reports population PK parameters for etanercept, including apparent clearance, interindividual variability, absorption half-life, and elimination half-life, all with numeric values in the abstract. |
| `Lon_2011.pdf` | Lon HK et al., Pharmacokinetic-pharmacodynamic disease…, Pharmaceutical research (2011) | popPK | 10 | [10.1007/s11095-011-0396-7](https://doi.org/10.1007/s11095-011-0396-7) | [21360252](https://pubmed.ncbi.nlm.nih.gov/21360252) | The study is a pharmacokinetic-pharmacodynamic model of etanercept in Lewis rats, but the evidence provided is only an abstract that describes the model structure without listing any specific numeric parameter values (e.g., clearance, volume, half-life). |
| `Zhou_2004.pdf` | Zhou H et al., Unaltered etanercept pharmacokinetics w…, Journal of clinical pharmac… (2004) | popPK | 10 | [10.1177/0091270004268049](https://doi.org/10.1177/0091270004268049) | [15496641](https://pubmed.ncbi.nlm.nih.gov/15496641) | The paper reports a population PK model for etanercept in humans with all quantitative parameters (CL, V, Q, ka, F) clearly listed in the abstract. |
| `Li_2017.pdf` | Li M et al., A novel model for the pharmacokinetic s…, Biochemical pharmacology (2017) | popPK | 6 | [10.1016/j.bcp.2017.08.011](https://doi.org/10.1016/j.bcp.2017.08.011) | [28822784](https://pubmed.ncbi.nlm.nih.gov/28822784) | The abstract describes a PK model for etanercept but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |

<sub>queue written 2026-10-06T23:59:07.105009+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abma_2020 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory effects of Lipoxin A4 on airway hyperreactivity in mice, and etanercept is only used as a TNF$\alpha$-inhibitor comparator, with no pharmacokinetic parameters reported. |
| popPK | Breedveld_2018 | relevant | 5 | 1 | The study reports pharmacokinetic parameters for etanercept (Cl/F, V/F, T1/2) in humans, but the specific numeric values are contained in Table 3, which is not included in the provided evidence. |
| popPK | Carballo_2022 | irrelevant | 0 | 0 | The study evaluates clinical effectiveness and persistence in rheumatoid arthritis patients and does not report pharmacokinetic parameters. |
| popPK | Ebina_2025 | irrelevant | 0 | 0 | The paper is a retrospective clinical outcomes study analyzing treatment retention and disease activity indices, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Hsu_2014 | irrelevant | 2 | 0 | Although the paper describes a PK model for etanercept, it explicitly states that all data were collected from previously published literature, and no specific numeric parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Hutmacher_2007 | relevant | 4 | 0 | The paper describes an exposure-response model using predicted PK metrics (AUC, trough) but does not provide the underlying quantitative population PK parameters (CL, V, ka, etc.) or the specific predicted values in the evidence. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (DAS28 scores) for rheumatoid arthritis treatments and does not report pharmacokinetic parameters (CL, V, etc.) for etanercept. |
| popPK | Li_2017 | irrelevant | 6 | 0 | The abstract describes a PK model for etanercept but no quantitative parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Lon_2011 | relevant | 10 | 0 | The study is a pharmacokinetic-pharmacodynamic model of etanercept in Lewis rats, but the evidence provided is only an abstract that describes the model structure without listing any specific numeric parameter values (e.g., clearance, volume, half-life). |
| popPK | Wong_2019 | irrelevant | 0 | 0 | The study focuses on translational PK-PD efficacy analysis in rats and does not report quantitative disposition parameters (CL, V, Q, etc.) for etanercept. |
| popPK | van_2022 | irrelevant | 0 | 0 | This is a clinical outcome study comparing patient-reported well-being scores, not a pharmacokinetic study, and contains no disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:59 UTC</sub>
