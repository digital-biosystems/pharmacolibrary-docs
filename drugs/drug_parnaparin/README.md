<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;parnaparin&quot;}]"></div>

# parnaparin

- **generic name:** parnaparin
- **ATC codes:** `B01AB07`
- **DrugBank:** [DB09260](https://go.drugbank.com/drugs/DB09260)
- **groups:** approved

## About

**Description.** Parnaparin is an heparin of low molecular weight with antithrombotic effects.

**Indication.** Used in the prevention and treatment of venous thromboembolism (deep vein thrombosis and pulmonary embolism) and in the treatment of myocardial infarction.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 05:16 | 0:56 | 0/0/0 | 0/0/0 | 0/0/0 | 19,300/422 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/0 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Florian-Kujawski_2004.pdf` | Florian-Kujawski M et al., Differential regulation of thrombin act…, International angiology : a… (2004) | pd | 4 | not captured | [15767980](https://www.ncbi.nlm.nih.gov/pubmed/15767980) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-06T05:16:27.486580+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Florian-Kujawski_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring TAFI inhibition (IC50) and does not report pharmacokinetic disposition parameters for parnaparin. |
| popPK | Forestieri_2007 | irrelevant | 1 | 0 | The study reports pharmacodynamic endpoints (APTT, anti-factor Xa/IIa levels) rather than quantitative pharmacokinetic parameters (CL, V, ka) for parnaparin. |
| popPK | Frampton_1994 | irrelevant | 1 | 0 | The paper is a clinical review of pharmacology and efficacy that lacks original quantitative pharmacokinetic parameter values (CL, V, etc.) for parnaparin. |
| popPK | Hao_2019 | irrelevant | 0 | 0 | The paper is a general review of low molecular weight heparins and does not report specific quantitative pharmacokinetic parameters for parnaparin. |
| popPK | Imberti_2009 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (anti-Factor Xa activity) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for parnaparin. |
| popPK | Maddineni_2006 | irrelevant | 0 | 0 | The paper is a review discussing the chemical individuality of LMWHs and mentions parnaparin only as a commercial product example, without reporting any pharmacokinetic parameters. |
| PD | Maddineni_2006 | not_relevant | 0 | 0 | The paper is a review discussing the chemical and biological uniqueness of LMWHs and the need for PD testing in generic equivalence, but it does not report any specific PD data, exposure-response relationships, or numeric PD parameters for parnaparin. |
| popPK | Mousa_2002 | irrelevant | 0 | 0 | The paper is a review focused on tinzaparin, and parnaparin is only mentioned as a comparator without any quantitative pharmacokinetic parameters provided. |
| PD | Mousa_2002 | not_relevant | 0 | 0 | The text is a general review introduction discussing the history and classification of LMWHs, including a brief mention of parnaparin, but it contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Petrikov_2020 | irrelevant | 2 | 0 | The paper is a review analyzing pharmacokinetic features generally but does not provide specific quantitative PK parameter values for parnaparin in the evidence. |
| PD | Petrikov_2020 | not_relevant | 1 | 0 | The text is a review summarizing general pharmacokinetic and pharmacodynamic features of LMWHs without providing specific numeric PD parameters or exposure-response data for parnaparin. |
| popPK | Sugiyama_1994 | relevant | 8 | 4 | The study reports pharmacokinetic parameters (half-life) for parnaparin (LHG) in dogs using a one-compartment model, but the specific clearance and volume values are contained in Table 2 which is not fully provided in the evidence. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no study data, parameters, or mention of parnaparin. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for parnaparin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
