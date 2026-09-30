<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;imiglucerase&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imiglucerase_Berger2019_reference&quot;,&quot;label&quot;:&quot;Berger_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_imiglucerase/Imiglucerase_Berger2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# imiglucerase

- **generic name:** imiglucerase
- **ATC codes:** `A16AB02`
- **DrugBank:** [DB00053](https://go.drugbank.com/drugs/DB00053) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Human Beta-glucocerebrosidase or Beta-D-glucosyl-N-acylsphingosine glucohydrolase E.C. 3.2.1.45. 497 residue protein with N-linked carbohydrates, MW=59.3 kD. Alglucerase is prepared by modification of the oligosaccharide chains of human Beta-glucocerebrosidase. The modification alters the sugar residues at the non-reducing ends of the oligosaccharide chains of the glycoprotein so that they are predominantly terminated with mannose residues.

**Indication.** For the treatment of Gaucher's disease (deficiency in glucocerebrosidase)

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:32 | 1:35 | 0/1/0 | 0/0/0 | 0/0/0 | 16,667/4,411 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Berger_2019_reference](drugs/drug_imiglucerase/Imiglucerase_Berger2019_reference.md) | — | 1-compartment (no model) | 2 | Berger J et al., Intra-monocyte Pharmacokinetics of Imig…, Clinical pharmacokinetics (2019) | [10.1007/s40262-018-0708-8](https://doi.org/10.1007/s40262-018-0708-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imiglucerase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Glucocerebroside (other/unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berger_2019.pdf` | Berger J et al., Intra-monocyte Pharmacokinetics of Imig…, Clinical pharmacokinetics (2019) | popPK | 9 | [10.1007/s40262-018-0708-8](https://doi.org/10.1007/s40262-018-0708-8) | [30128966](https://pubmed.ncbi.nlm.nih.gov/30128966) | The paper reports a population-pharmacokinetic model for imiglucerase with specific half-life values (0.36 and 9.7 days) and mentions clearance, but does not provide explicit numeric values for clearance (CL) or volume (V) in the text. |
| `Grabowski_2009.pdf` | Grabowski GA et al., Dose-response relationships for enzyme…, Genetics in medicine : offi… (2009) | pd | 4 | [10.1097/GIM.0b013e31818e2c19](https://doi.org/10.1097/GIM.0b013e31818e2c19) | [19265748](https://www.ncbi.nlm.nih.gov/pubmed/19265748) | metadata signals extractable PD data (Emax) |
| `Ibrahim_2016.pdf` | Ibrahim J et al., Clinical response to eliglustat in trea…, Molecular genetics and meta… (2016) | pgx | 5 | [10.1016/j.ymgmr.2016.06.003](https://doi.org/10.1016/j.ymgmr.2016.06.003) | [27408819](https://www.ncbi.nlm.nih.gov/pubmed/27408819) | metadata signals extractable PGX data (CYP2D6) |
| `Pleat_2016.pdf` | Pleat R et al., Stability is maintained in adults with…, Molecular genetics and meta… (2016) | pgx | 5 | [10.1016/j.ymgmr.2016.08.009](https://doi.org/10.1016/j.ymgmr.2016.08.009) | [27722092](https://www.ncbi.nlm.nih.gov/pubmed/27722092) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-30T02:31:08.513791+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abian_2011 | not_relevant | 0 | 0 | The paper investigates the biophysical stability and interaction of imiglucerase with miglustat, but does not report pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Basiri_2023 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic association with a clinical outcome (avascular osteonecrosis) rather than a pharmacokinetic or pharmacodynamic parameter of imiglucerase. |
| PGx | Darling_2021 | not_relevant | 0 | 0 | The paper describes a clinical case of Gaucher disease and its neurological phenotype, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Dasgupta_2013 | not_relevant | 0 | 0 | The paper reports transcriptomic changes in a mouse model treated with imiglucerase, not a pharmacogenomic effect of a gene variant on the drug's PK or PD parameters. |
| PGx | Germain_2004 | not_relevant | 0 | 0 | The paper is a general review of Gaucher's disease and its treatments, discussing genotype-phenotype correlations for the disease itself, but it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imiglucerase. |
| popPK | Grabowski_2009 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Higashi_2024 | not_relevant | 0 | 0 | The paper reports clinical efficacy of ambroxol in Gaucher disease and does not analyze how GBA1 genotypes affect the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Ibrahim_2016 | not_relevant | 0 | 0 | The paper compares clinical outcomes of eliglustat and imiglucerase but does not report pharmacogenomic effects on the PK or PD parameters of imiglucerase. |
| PGx | Pleat_2016 | not_relevant | 0 | 0 | The paper reports clinical stability outcomes in a sub-analysis of a trial and does not report pharmacogenomic effects on PK or PD parameters of imiglucerase. |
| PGx | Scott_2015 | not_relevant | 0 | 0 | The paper reviews eliglustat and mentions imiglucerase only as a comparator, without reporting pharmacogenomic effects on imiglucerase's PK or PD parameters. |
| PGx | Starosta_2025 | not_relevant | 0 | 0 | The paper focuses on developing a clinical score for liver fibrosis in Gaucher disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of imiglucerase. |
| PGx | Van_2016 | not_relevant | 0 | 0 | The paper is a general review of Gaucher disease treatments and does not report specific pharmacogenomic effects on the PK or PD parameters of imiglucerase. |
| popPK | Vigan_2014 | irrelevant | 0 | 0 | The paper is a simulation study on statistical methods for time-to-event data (bone events) and does not report pharmacokinetic parameters for imiglucerase. |
| PGx | Vigan_2014_2 | not_relevant | 0 | 0 | The study tests genotype as a covariate but explicitly states it had no significant impact on the biomarker parameters. |
| PGx | Yassin_2008 | not_relevant | 2 | 5 | The paper reports clinical efficacy and a qualitative observation that a high dose may be required for a specific genotype, but it does not report quantitative pharmacokinetic or pharmacodynamic parameter changes attributable to the genotype. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 11:31 UTC</sub>
