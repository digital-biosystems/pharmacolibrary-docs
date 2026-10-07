<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;imiglucerase&quot;}]"></div>

# imiglucerase

- **generic name:** imiglucerase
- **ATC codes:** `A16AB02`
- **DrugBank:** [DB00053](https://go.drugbank.com/drugs/DB00053) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Imiglucerase is an enzyme replacement medicine used to treat Gaucher's disease, a lipid storage disorder that can affect organs such as the liver and spleen. It is authorised in the European Union and is used mainly in specialist care for this rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2620206](https://www.wikidata.org/wiki/Q2620206) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:43 | 0:30 | 0/1/0 | 0/0/0 | 0/0/0 | 30,566/1,489 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Berger_2019_reference](drugs/drug_imiglucerase/Imiglucerase_Berger2019_reference.md) | — | 1-compartment (no model) | 2 | Berger J et al., Intra-monocyte Pharmacokinetics of Imig…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0708-8](https://doi.org/10.1007/s40262-018-0708-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imiglucerase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Glucocerebroside (other/unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berger_2019.pdf` | Berger J et al., Intra-monocyte Pharmacokinetics of Imig…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-018-0708-8](https://doi.org/10.1007/s40262-018-0708-8) | [30128966](https://pubmed.ncbi.nlm.nih.gov/30128966) | The study reports a population-pharmacokinetic model for imiglucerase with specific half-lives and clearance correlations, although explicit CL and V values are not listed in the abstract. |
| `Grabowski_2009.pdf` | Grabowski GA et al., Dose-response relationships for enzyme…, Genetics in medicine : offi… (2009) | pd | 4 | [10.1097/GIM.0b013e31818e2c19](https://doi.org/10.1097/GIM.0b013e31818e2c19) | [19265748](https://www.ncbi.nlm.nih.gov/pubmed/19265748) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T17:43:18.385046+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abian_2011 | not_relevant | 0 | 0 | The paper investigates the stability and interaction of imiglucerase with miglustat, but does not report any gene variant effects on the pharmacokinetic or pharmacodynamic parameters of imiglucerase. |
| PGx | Basiri_2023 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic association (GBA1 genotype) with a clinical outcome (osteonecrosis risk), not with a pharmacokinetic (e.g., clearance, half-life) or pharmacodynamic (e.g., enzyme activity, biomarker clearance rate) parameter of imiglucerase. |
| PGx | Darling_2021 | not_relevant | 0 | 0 | The paper reports the efficacy of levodopa on parkinsonian features and the genetic basis of Gaucher disease, but it does not report a pharmacogenomic effect on the PK or PD parameters of imiglucerase. |
| PGx | Dasgupta_2013 | not_relevant | 0 | 0 | The paper reports transcriptomic gene expression changes in a mouse model treated with imiglucerase, not a pharmacogenomic effect of a human genetic variant on the drug's PK or PD. |
| PGx | Germain_2004 | not_relevant | 0 | 0 | The paper provides a general overview of Gaucher's disease and imiglucerase therapy but does not report specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Grabowski_2009 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Higashi_2024 | not_relevant | 1 | 0 | The paper reports clinical efficacy of ambroxol in Gaucher patients but does not report pharmacokinetic or pharmacodynamic parameters of imiglucerase being altered by genotype. |
| PGx | Ibrahim_2016 | not_relevant | 0 | 0 | The paper compares clinical outcomes (PD) of eliglustat and imiglucerase but does not report pharmacokinetic parameters or gene-variant specific effect sizes for imiglucerase. |
| PGx | Pleat_2016 | not_relevant | 0 | 0 | The paper reports clinical stability in a subpopulation of patients switching treatments; it does not report pharmacokinetic or pharmacodynamic parameters modified by specific gene variants or genotypes for imiglucerase. |
| PGx | Scott_2015 | not_relevant | 0 | 0 | The paper reviews eliglustat and mentions imiglucerase only for comparative noninferiority, without reporting pharmacogenomic effects on its PK/PD. |
| PGx | Starosta_2025 | not_relevant | 0 | 0 | The study focuses on developing a liver fibrosis score (GLFS) for Gaucher disease patients, not on how genetic variants affect the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Van_2016 | not_relevant | 0 | 0 | The paper is a general review of treatment options for Gaucher disease and does not report specific pharmacogenomic effects on PK/PD parameters for imiglucerase. |
| popPK | Vigan_2014 | irrelevant | 0 | 0 | The paper is a simulation/methodological study on statistical estimation for time-to-event data, not a pharmacokinetic study, and it reports no PK parameters (CL, V, etc.) for imiglucerase. |
| PGx | Vigan_2014_2 | not_relevant | 1 | 3 | The paper reports that a specific genotype (N370S/N370S) was tested as a covariate, but the results indicate that only age, sex, and splenectomy status were significant predictors, meaning no pharmacogenomic effect on the biomarkers (PD) was reported or quantified. |
| PGx | Yassin_2008 | not_relevant | 2 | 5 | The paper reports the efficacy of imiglucerase in a patient with a novel genotype but does not report pharmacokinetic (PK) parameters or specific pharmacodynamic (PD) effects mediated by the genotype itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:43 UTC</sub>
