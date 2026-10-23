<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03B&quot;,&quot;href&quot;:&quot;atc/G03B.md&quot;},{&quot;label&quot;:&quot;methyltestosterone&quot;}]"></div>

# methyltestosterone

- **generic name:** methyltestosterone
- **ATC codes:** `G03BA02`, `G03EA01`, `G03EK01`
- **DrugBank:** [DB06710](https://go.drugbank.com/drugs/DB06710) · **PubChem:** [CID 6010](https://pubchem.ncbi.nlm.nih.gov/compound/6010)
- **molar mass:** 302.451 g/mol (C20H30O2) — DrugBank
- **groups:** approved, investigational

## About

Methyltestosterone is an androgen steroid used for conditions such as hypogonadism, erectile dysfunction, and breast cancer. It is an approved drug, though its use today is limited, and it has also been studied for other investigational purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421768](https://www.wikidata.org/wiki/Q421768) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:28 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 19,596/872 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vick_2001.pdf` | Vick AM et al., Methyltestosterone pharmacokinetics and…, Aquatic toxicology (Amsterd… (2001) | popPK | 10 | [10.1016/s0166-445x(00)00146-6](https://doi.org/10.1016/s0166-445x(00)00146-6) | [11239680](https://pubmed.ncbi.nlm.nih.gov/11239680) | The paper explicitly reports quantitative pharmacokinetic parameters (CL, V, t1/2, ka) for methyltestosterone with numeric values included in the text. |

<sub>queue written 2026-10-07T08:28:45.815609+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Attardi_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aromatase metabolism, not a pharmacokinetic study, and methyltestosterone is only mentioned as a comparator (17alpha-methyltestosterone). |
| popPK | Duft_2007 | irrelevant | 0 | 0 | The paper is an ecotoxicological study assessing endocrine effects (imposex, fertility) in snails using methyltestosterone as a test chemical, and does not report pharmacokinetic parameters. |
| popPK | Foster_1977 | irrelevant | 0 | 0 | The paper is an in-vitro cell biology study on steroid hormone effects on prostaglandin responsiveness, not a pharmacokinetic study of methyltestosterone. |
| popPK | Ma_2003 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on androgen receptor activity of UV filters, not a pharmacokinetic study, and no disposition parameters are reported. |
| PGx | Malt_1983 | not_relevant | 0 | 0 | The paper focuses on sex-steroid milieu in HCC patients and does not report pharmacogenomic effects on the PK or PD of methyltestosterone. |
| PGx | Rendic_1999 | not_relevant | 0 | 0 | The paper describes in vitro metabolism of methyltestosterone by recombinant CYP enzymes and does not report pharmacogenomic effects on in vivo PK/PD parameters. |
| PGx | Wang_2002 | not_relevant | 0 | 0 | The paper studies the metabolism of flutamide in rat liver microsomes, whereas methyltestosterone is used only as an internal standard for HPLC analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
