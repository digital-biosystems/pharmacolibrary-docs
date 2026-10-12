<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;lebrikizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lebrikizumab_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lebrikizumab

- **generic name:** lebrikizumab
- **ATC codes:** `D11AH10`
- **DrugBank:** [DB11914](https://go.drugbank.com/drugs/DB11914) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lebrikizumab is a monoclonal antibody used to treat atopic dermatitis. It is authorised in the European Union as a dermatological treatment for dermatitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3829321](https://www.wikidata.org/wiki/Q3829321) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:34 | 0:18 | 1/0/0 | 0/0/0 | 0/0/0 | 15,281/924 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: partial</span> | [Zhu_2017_reference](drugs/drug_lebrikizumab/Lebrikizumab_Zhu2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Zhu R et al., Model-based clinical pharmacology profi…, Pulmonary pharmacology & th… (2017) | [10.1016/j.pupt.2017.08.010](https://doi.org/10.1016/j.pupt.2017.08.010) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lebrikizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL13 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhu_2017.pdf` | Zhu R et al., Model-based clinical pharmacology profi…, Pulmonary pharmacology & th… (2017) | popPK | 10 | [10.1016/j.pupt.2017.08.010](https://doi.org/10.1016/j.pupt.2017.08.010) | [28843617](https://pubmed.ncbi.nlm.nih.gov/28843617) | The paper reports quantitative population PK parameters (CL, Vc, ka, half-life) for lebrikizumab in humans. |

<sub>queue written 2026-10-07T08:34:00.641087+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Szefler_2024 | irrelevant | 0 | 0 | The paper reports pharmacodynamic biomarker changes (IgE, periostin, CCL13, CCL17) rather than quantitative pharmacokinetic parameters (CL, V, ka) for lebrikizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:34 UTC</sub>
