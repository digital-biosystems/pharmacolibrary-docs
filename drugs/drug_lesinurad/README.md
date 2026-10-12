<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;lesinurad&quot;}]"></div>

# lesinurad

- **generic name:** lesinurad
- **ATC codes:** `M04AB05`
- **DrugBank:** [DB11560](https://go.drugbank.com/drugs/DB11560) · **PubChem:** [CID 53465279](https://pubchem.ncbi.nlm.nih.gov/compound/53465279)
- **molar mass:** 404.28 g/mol (C17H14BrN3O2S) — DrugBank
- **groups:** approved, withdrawn

## About

Lesinurad was a uricosuric drug used to treat gout and high uric acid levels in the blood. It has been withdrawn from the market, including in the European Union, and is no longer available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21820633](https://www.wikidata.org/wiki/Q21820633) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:25 | 0:17 | 0/0/0 | 2/0/0 | 0/0/0 | 28,626/1,877 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Aksenov_2018_sUA](drugs/drug_lesinurad/pd_Aksenov_2018_sUA.md) | serum uric acid concentration ← lesinurad · inhibition effect | — | Aksenov S et al., Individualized treatment strategies for…, Physiological reports (2018) | [10.14814/phy2.13614](https://doi.org/10.14814/phy2.13614) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ayyar_2019_UA](drugs/drug_lesinurad/pd_Ayyar_2019_UA.md) | uric acid ← lesinurad · indirect response — drug inhibits the production of uric acid | — | Ayyar VS et al., Indirect pharmacodynamic models for res…, Journal of pharmacokinetics… (2019) | [10.1007/s10928-019-09620-z](https://doi.org/10.1007/s10928-019-09620-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Aksenov_2018_XUA](drugs/drug_lesinurad/pd_Aksenov_2018_XUA.md) | urine uric acid excretion ← lesinurad · inhibition effect | — | Aksenov S et al., Individualized treatment strategies for…, Physiological reports (2018) | [10.14814/phy2.13614](https://doi.org/10.14814/phy2.13614) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hill-McManus_2018.pdf` | Hill-McManus D et al., Impact of non-adherence on the safety a…, British journal of clinical… (2018) | popPK | 6 | [10.1111/bcp.13427](https://doi.org/10.1111/bcp.13427) | [28888218](https://pubmed.ncbi.nlm.nih.gov/28888218) | The paper uses a two-compartment PK model for lesinurad in a simulation study, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T03:25:33.729407+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aksenov_2018 | irrelevant | 2 | 0 | The paper presents a semi-mechanistic model of uric acid disposition, using lesinurad's plasma concentrations as input from a PK model defined in Appendix 1 (which is not provided); no quantitative PK parameters (CL, V, etc.) for lesinurad itself are reported in the available text. |
| popPK | Ayyar_2019 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic (PD) modeling framework for circadian rhythms and uses lesinurad only as a qualitative example of uricosuric effect, reporting no pharmacokinetic parameters. |
| popPK | Hill-McManus_2018 | relevant | 6 | 0 | The paper uses a two-compartment PK model for lesinurad in a simulation study, but the specific numeric parameter values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
