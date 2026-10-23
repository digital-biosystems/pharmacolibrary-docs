<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03C&quot;,&quot;href&quot;:&quot;atc/R03C.md&quot;},{&quot;label&quot;:&quot;bambuterol&quot;}]"></div>

# bambuterol

- **generic name:** bambuterol
- **ATC codes:** `R03CC12`
- **DrugBank:** [DB01408](https://go.drugbank.com/drugs/DB01408) · **PubChem:** [CID 54766](https://pubchem.ncbi.nlm.nih.gov/compound/54766)
- **molar mass:** 367.44 g/mol (C18H29N3O5) — DrugBank
- **groups:** investigational

## About

Bambuterol is a bronchodilator, a beta-2 agonist, that has been investigated for treating asthma and chronic obstructive pulmonary disease. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3633651](https://www.wikidata.org/wiki/Q3633651) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 14:39 | 2:29 | 0/0/0 | 0/0/0 | 0/0/0 | 38,831/602 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tunek_1991.pdf` | Tunek A et al., Interactions of bambuterol with human s…, Biochemical pharmacology (1991) | pd | 4 | [10.1016/0006-2952(91)90530-i](https://doi.org/10.1016/0006-2952(91)90530-i) | [1994894](https://www.ncbi.nlm.nih.gov/pubmed/1994894) | metadata signals extractable PD data (IC50) |
| `Bang_1998.pdf` | Bang U et al., Pharmacokinetics of bambuterol in subje…, British journal of clinical… (1998) | pgx | 8 | [10.1046/j.1365-2125.1998.00697.x](https://doi.org/10.1046/j.1365-2125.1998.00697.x) | [9643621](https://www.ncbi.nlm.nih.gov/pubmed/9643621) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T14:39:19.804129+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bosak_2012 | not_relevant | 0 | 0 | The paper investigates the cholinesterase inhibition properties of metaproterenol, isoproterenol, and their derivatives, but does not report pharmacogenomic effects on the PK or PD parameters of bambuterol. |
| popPK | Holstein-Rathlou_1986 | irrelevant | 2 | 0 | The study reports plasma concentrations of the active metabolite terbutaline and dose-response relationships, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for bambuterol or a compartmental model. |
| popPK | Hrvat_2020 | irrelevant | 0 | 0 | The paper is a review on chemical warfare nerve agents and their antidotes, mentioning bambuterol only as an example of a prodrug metabolized by BChE, without providing any pharmacokinetic parameters for it. |
| popPK | Ostergaard_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mivacurium, with bambuterol serving only as a co-administered agent to inhibit plasma cholinesterase, not as the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
