<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;chlormadinone&quot;}]"></div>

# chlormadinone

- **generic name:** chlormadinone
- **ATC codes:** `G03AA15`, `G03AB07`, `G03DB06`, `G03FB03`
- **DrugBank:** [DB13528](https://go.drugbank.com/drugs/DB13528) · **PubChem:** not captured
- **molar mass:** 362.89 g/mol (C21H27ClO3) — DrugBank
- **groups:** investigational

## About

Chlormadinone is a progestogen steroid that has been used in hormonal contraceptives and other progestogen–estrogen combination preparations. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q905012](https://www.wikidata.org/wiki/Q905012) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">dog</span> | [Chow_1979_ouabain_receptor_binding](drugs/drug_chlormadinone/pd_Chow_1979_ouabain_receptor_binding.md) | ouabain receptor binding ← chlormadinone acetate · inhibition effect | — | Chow E et al., Ouabain receptor binding of hydroxyprog…, British journal of pharmaco… (1979) | [10.1111/j.1476-5381.1979.tb08686.x](https://doi.org/10.1111/j.1476-5381.1979.tb08686.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.95).">in vitro</span> | [Rafuse_1985_Na_K_ATPase](drugs/drug_chlormadinone/pd_Rafuse_1985_Na_K_ATPase.md) | Na+,K+-ATPase ← chlormadinone acetate · inhibition effect | — | Rafuse PE et al., Effects of mammalian brain extracts and…, Brain research (1985) | [10.1016/0006-8993(85)91186-2](https://doi.org/10.1016/0006-8993(85)91186-2) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:17 | 2:45 | 0/0/0 | 0/2/0 | 0/0/0 | 67,947/1,409 | einfracz / qwen3.8-27b | 6 | 2/1 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 71 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fukabori_1992.pdf` | Fukabori Y et al., Inhibition of 3 alpha-hydroxysteroid ox…, The Prostate (1992) | pd | 4 | [10.1002/pros.2990210402](https://doi.org/10.1002/pros.2990210402) | [1281319](https://www.ncbi.nlm.nih.gov/pubmed/1281319) | metadata signals extractable PD data (IC50) |
| `Rafuse_1985.pdf` | Rafuse PE et al., Effects of mammalian brain extracts and…, Brain research (1985) | pd | 4 | [10.1016/0006-8993(85)91186-2](https://doi.org/10.1016/0006-8993(85)91186-2) | [2412648](https://www.ncbi.nlm.nih.gov/pubmed/2412648) | metadata signals extractable PD data (IC50) |
| `Wang_2015.pdf` | Wang LL et al., [Study of gonadal hormone drugs in bloc…, Yao xue xue bao = Acta phar… (2015) | pd | 4 | not captured | [27169275](https://www.ncbi.nlm.nih.gov/pubmed/27169275) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T08:16:24.273212+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is an EFSA risk assessment regarding delayed post-mortem inspection and does not contain pharmacokinetic data for chlormadinone. |
| PGx | Huang_2011 | not_relevant | 0 | 0 | The study investigates in vitro enzyme inhibition by chlormadinone but does not report any pharmacogenomic effects or genetic variant analysis. |
| popPK | Kubli-Garfias_2013 | irrelevant | 0 | 0 | The study investigates progesterone receptor binding mechanisms and behavioral effects in rats, containing no pharmacokinetic parameters for chlormadinone. |
| popPK | McGarry_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of digoxin's effect on calcium channels, using chlormadinone acetate only as a negative control/comparator without reporting any pharmacokinetic parameters. |
| popPK | Weill_2026 | irrelevant | 0 | 0 | The paper is a clinical review regarding the association between progestogen use and meningioma risk, containing no pharmacokinetic modeling or quantitative disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
