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

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Aksenov_2018_sUA](drugs/drug_lesinurad/pd_Aksenov_2018_sUA.md) | serum uric acid concentration ← lesinurad · inhibition effect | — | Aksenov S et al., Individualized treatment strategies for…, Physiological reports (2018) | [10.14814/phy2.13614](https://doi.org/10.14814/phy2.13614) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ayyar_2019_UA](drugs/drug_lesinurad/pd_Ayyar_2019_UA.md) | uric acid ← lesinurad · indirect response — drug inhibits the production of uric acid | — | Ayyar VS et al., Indirect pharmacodynamic models for res…, Journal of pharmacokinetics… (2019) | [10.1007/s10928-019-09620-z](https://doi.org/10.1007/s10928-019-09620-z) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Aksenov_2018_XUA](drugs/drug_lesinurad/pd_Aksenov_2018_XUA.md) | urine uric acid excretion ← lesinurad · inhibition effect | — | Aksenov S et al., Individualized treatment strategies for…, Physiological reports (2018) | [10.14814/phy2.13614](https://doi.org/10.14814/phy2.13614) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lesinurad).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: SLC22A11 (inhibitor), SLC22A12 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:25 | 0:17 | 0/0/0 | 2/0/0 | 0/0/0 | 28,626/1,877 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hill-McManus_2018.pdf` | Hill-McManus D et al., Impact of non-adherence on the safety a…, British journal of clinical… (2018) | popPK | 6 | [10.1111/bcp.13427](https://doi.org/10.1111/bcp.13427) | [28888218](https://pubmed.ncbi.nlm.nih.gov/28888218) | The paper uses a two-compartment PK model for lesinurad in a simulation study, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07 03:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aksenov_2018 | irrelevant | 2 | 0 | The paper presents a semi-mechanistic model of uric acid disposition, using lesinurad's plasma concentrations as input from a PK model defined in Appendix 1 (which is not provided); no quantitative PK parameters (CL, V, etc.) for lesinurad itself are reported in the available text. |
| popPK | Ayyar_2019 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic (PD) modeling framework for circadian rhythms and uses lesinurad only as a qualitative example of uricosuric effect, reporting no pharmacokinetic parameters. |
| popPK | Hill-McManus_2018 | relevant | 6 | 0 | The paper uses a two-compartment PK model for lesinurad in a simulation study, but the specific numeric parameter values are not present in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blesinurad%5D&body=Drug%3A%20lesinurad%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lesinurad/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
