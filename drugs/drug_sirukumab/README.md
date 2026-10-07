<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sirukumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sirukumab_Xu2011_reference&quot;,&quot;label&quot;:&quot;Xu_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirukumab/Sirukumab_Xu2011_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sirukumab_Zhuang2013_reference&quot;,&quot;label&quot;:&quot;Zhuang_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirukumab/Sirukumab_Zhuang2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sirukumab

- **generic name:** sirukumab
- **ATC codes:** `L04AC15`
- **DrugBank:** [DB11803](https://go.drugbank.com/drugs/DB11803) · **PubChem:** not captured
- **groups:** investigational

## About

Sirukumab, a monoclonal antibody interleukin inhibitor, was investigated for treating rheumatoid arthritis. It was never approved; its marketing application in the European Union was withdrawn, so it remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7530673](https://www.wikidata.org/wiki/Q7530673) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:36 | 1:40 | 2/0/0 | 0/0/0 | 0/0/0 | 75,908/7,231 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Xu_2011_reference](drugs/drug_sirukumab/Sirukumab_Xu2011_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Xu Z et al., Pharmacokinetics, pharmacodynamics and…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03964.x](https://doi.org/10.1111/j.1365-2125.2011.03964.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhuang_2013_reference](drugs/drug_sirukumab/Sirukumab_Zhuang2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zhuang Y et al., Pharmacokinetics and safety of sirukuma…, International journal of cl… (2013) | [10.5414/CP201785](https://doi.org/10.5414/CP201785) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2018.pdf` | Xu Y et al., Confirmatory Population Pharmacokinetic…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1101](https://doi.org/10.1002/jcph.1101) | [29578578](https://pubmed.ncbi.nlm.nih.gov/29578578) | The abstract explicitly reports quantitative population PK parameters including CL/F (0.641 L/day), V (16.1 L), and half-life (17.4 days) for sirukumab in humans. |
| `Zhuang_2013.pdf` | Zhuang Y et al., Pharmacokinetics and safety of sirukuma…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201785](https://doi.org/10.5414/CP201785) | [23357841](https://pubmed.ncbi.nlm.nih.gov/23357841) | The abstract explicitly reports quantitative population pharmacokinetic parameter means for CL/F, V/F, and Ka for sirukumab in healthy human subjects. |
| `Xu_2018_2.pdf` | Xu Y et al., Exposure-Response Modeling Analyses for…, Journal of clinical pharmac… (2018) | popPK | 7 | [10.1002/jcph.1272](https://doi.org/10.1002/jcph.1272) | [29901815](https://pubmed.ncbi.nlm.nih.gov/29901815) | The paper describes exposure-response modeling based on pharmacokinetic parameters for sirukumab, but the specific numeric PK values are not provided in the text. |

<sub>queue written 2026-10-07T00:34:48.084847+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hu_2018 | irrelevant | 1 | 0 | The paper focuses on exposure-response modeling of efficacy endpoints (ACR, DAS28) rather than reporting quantitative pharmacokinetic parameters (CL, V, ka) for sirukumab. |
| popPK | Kovalenko_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic model of neutrophil counts for sarilumab and tocilizumab, and sirukumab is not the subject of PK parameter estimation. |
| popPK | Xu_2018_2 | relevant | 7 | 2 | The paper describes exposure-response modeling based on pharmacokinetic parameters for sirukumab, but the specific numeric PK values are not provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:35 UTC</sub>
