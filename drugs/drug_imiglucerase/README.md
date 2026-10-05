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
| 2026-10-05 11:15 | 2:10 | 0/1/0 | 0/0/0 | 0/0/0 | 27,373/4,871 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

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

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berger_2019.pdf` | Berger J et al., Intra-monocyte Pharmacokinetics of Imig…, Clinical pharmacokinetics (2019) | popPK | 10 | [10.1007/s40262-018-0708-8](https://doi.org/10.1007/s40262-018-0708-8) | [30128966](https://pubmed.ncbi.nlm.nih.gov/30128966) | The paper reports a population-pharmacokinetic model for imiglucerase in humans with specific half-life values (0.36 days, 9.7 days) and qualitative clearance correlations, but specific numeric values for CL and V are not explicitly listed in the provided text. |
| `Grabowski_2009.pdf` | Grabowski GA et al., Dose-response relationships for enzyme…, Genetics in medicine : offi… (2009) | pd | 4 | [10.1097/GIM.0b013e31818e2c19](https://doi.org/10.1097/GIM.0b013e31818e2c19) | [19265748](https://www.ncbi.nlm.nih.gov/pubmed/19265748) | metadata signals extractable PD data (Emax) |
| `Ibrahim_2016.pdf` | Ibrahim J et al., Clinical response to eliglustat in trea…, Molecular genetics and meta… (2016) | pgx | 5 | [10.1016/j.ymgmr.2016.06.003](https://doi.org/10.1016/j.ymgmr.2016.06.003) | [27408819](https://www.ncbi.nlm.nih.gov/pubmed/27408819) | metadata signals extractable PGX data (CYP2D6) |
| `Pleat_2016.pdf` | Pleat R et al., Stability is maintained in adults with…, Molecular genetics and meta… (2016) | pgx | 5 | [10.1016/j.ymgmr.2016.08.009](https://doi.org/10.1016/j.ymgmr.2016.08.009) | [27722092](https://www.ncbi.nlm.nih.gov/pubmed/27722092) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-05T11:12:56.691914+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abian_2011 | not_relevant | 0 | 0 | The paper investigates the biophysical stability and interaction of imiglucerase with miglustat, but does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Basiri_2023 | not_relevant | 0 | 0 | The paper reports clinical outcomes (AVN risk) and biomarker levels (GlcSph) associated with GBA1 genotype and drug type, but does not report pharmacokinetic or pharmacodynamic parameters of imiglucerase itself. |
| PGx | Darling_2021 | not_relevant | 0 | 0 | The paper describes a clinical case of Gaucher disease and its neurological phenotype, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Dasgupta_2013 | not_relevant | 0 | 0 | The paper reports transcriptomic changes in a mouse model, not pharmacogenomic effects on PK/PD parameters in humans. |
| PGx | Germain_2004 | not_relevant | 0 | 0 | The paper is a general review of Gaucher's disease and its treatments, discussing genotype-phenotype correlations for the disease itself, but it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imiglucerase. |
| popPK | Grabowski_2009 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Higashi_2024 | not_relevant | 0 | 0 | The paper reports clinical efficacy of ambroxol in Gaucher disease and does not analyze how GBA1 genotypes affect the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Ibrahim_2016 | not_relevant | 0 | 0 | The paper compares clinical outcomes of eliglustat and imiglucerase but does not report pharmacogenomic effects on the PK or PD parameters of imiglucerase. |
| PGx | Pleat_2016 | not_relevant | 0 | 0 | The paper reports clinical stability outcomes in a sub-analysis of a trial and does not report pharmacogenomic effects on PK or PD parameters of imiglucerase. |
| PGx | Scott_2015 | not_relevant | 0 | 0 | The paper reviews eliglustat and mentions imiglucerase only as a comparator, without reporting pharmacogenomic effects on imiglucerase's PK or PD parameters. |
| PGx | Starosta_2025 | not_relevant | 0 | 0 | The paper focuses on developing a clinical score for liver fibrosis in Gaucher disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Van_2016 | not_relevant | 0 | 0 | The paper is a general review of Gaucher disease treatments and does not report specific pharmacogenomic effects on the PK or PD parameters of imiglucerase. |
| popPK | Vigan_2014 | irrelevant | 0 | 0 | The study focuses on statistical methods for time-to-event data (bone events) rather than pharmacokinetic disposition parameters (CL, V, etc.) for imiglucerase. |
| PGx | Vigan_2014_2 | not_relevant | 2 | 5 | The paper models biomarker response to imiglucerase and tests genotype (N370S/N370S) as a covariate, but the abstract and results indicate that genotype was not a significant covariate (only age, sex, and splenectomy were significant), so it does not report a pharmacogenomic effect. |
| PGx | Yassin_2008 | not_relevant | 2 | 5 | The paper reports clinical efficacy and a qualitative observation that a high dose may be required for a specific genotype, but it does not report quantitative pharmacokinetic or pharmacodynamic parameter changes attributable to the genotype. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 11:13 UTC</sub>
