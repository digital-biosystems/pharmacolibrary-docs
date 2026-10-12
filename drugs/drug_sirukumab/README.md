<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sirukumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sirukumab_Zhuang2013_reference&quot;,&quot;label&quot;:&quot;Zhuang_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirukumab/Sirukumab_Zhuang2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sirukumab_Xu2011_reference&quot;,&quot;label&quot;:&quot;Xu_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sirukumab/Sirukumab_Xu2011_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-07 00:36 | 1:40 | 1/0/1 | 0/0/0 | 0/0/0 | 75,908/7,231 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span> | [Zhuang_2013_reference](drugs/drug_sirukumab/Sirukumab_Zhuang2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Zhuang Y et al., Pharmacokinetics and safety of sirukuma…, International journal of cl… (2013) | [10.5414/CP201785](https://doi.org/10.5414/CP201785) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Xu_2011_reference](drugs/drug_sirukumab/Sirukumab_Xu2011_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Xu Z et al., Pharmacokinetics, pharmacodynamics and…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03964.x](https://doi.org/10.1111/j.1365-2125.2011.03964.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
