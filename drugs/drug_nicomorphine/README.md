<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;nicomorphine&quot;}]"></div>

# nicomorphine

- **generic name:** nicomorphine
- **ATC codes:** `N02AA04`
- **DrugBank:** [DB13454](https://go.drugbank.com/drugs/DB13454) · **PubChem:** none
- **molar mass:** 495.535 g/mol (C29H25N3O5) — DrugBank
- **groups:** experimental

## About

Nicomorphine is an opioid painkiller (analgesic) derived from natural opium alkaloids. It is not an approved medicine and is known only as an experimental substance.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7030497](https://www.wikidata.org/wiki/Q7030497) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:37 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 17,897/1,286 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Koopman-Kimenai_1995_2.pdf` | Koopman-Kimenai PM et al., Pharmacokinetics of epidurally administ…, Biopharmaceutics & drug dis… (1995) | popPK | 9 | [10.1002/bdd.2510160608](https://doi.org/10.1002/bdd.2510160608) | [7579032](https://pubmed.ncbi.nlm.nih.gov/7579032) | The study reports quantitative pharmacokinetic parameters (apparent elimination half-lives) for nicomorphine and its metabolites following epidural administration in humans, with values explicitly provided in the abstract. |
| `Koopman-Kimenai_1991.pdf` | Koopman-Kimenai PM et al., Pharmacokinetics of intramuscular nicom…, European journal of clinica… (1991) | popPK | 8 | [10.1007/BF00314971](https://doi.org/10.1007/BF00314971) | [1804655](https://pubmed.ncbi.nlm.nih.gov/1804655) | The study reports the pharmacokinetics of nicomorphine in humans, but the evidence provided contains only relative AUC percentages and qualitative descriptions, lacking specific numeric values for CL, V, or ka. |
| `Koopman-Kimenai_1993.pdf` | Koopman-Kimenai PM et al., Pharmacokinetics of intravenously admin…, European journal of anaesth… (1993) | popPK | 8 |  | [8462537](https://pubmed.ncbi.nlm.nih.gov/8462537) | The study reports pharmacokinetic data for nicomorphine in humans, including half-lives, but the specific numeric values for clearance (CL) and volume (V) mentioned in the title are not present in the provided text. |

<sub>queue written 2026-10-07 05:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Koopman-Kimenai_1987 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Koopman-Kimenai_1991 | relevant | 8 | 2 | The study reports the pharmacokinetics of nicomorphine in humans, but the evidence provided contains only relative AUC percentages and qualitative descriptions, lacking specific numeric values for CL, V, or ka. |
| popPK | Koopman-Kimenai_1991_2 | irrelevant | 3 | 2 | The paper describes nicomorphine pharmacokinetics but only provides relative AUC percentages and qualitative descriptions, lacking specific quantitative parameters like clearance (CL), volume (V), or absolute half-life values required for PK modeling. |
| popPK | Koopman-Kimenai_1993 | relevant | 8 | 2 | The study reports pharmacokinetic data for nicomorphine in humans, including half-lives, but the specific numeric values for clearance (CL) and volume (V) mentioned in the title are not present in the provided text. |
| popPK | Koopman-Kimenai_1994 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for morphine (the metabolite of nicomorphine) after nicomorphine administration, but explicitly states that nicomorphine itself could not be detected in serum, so there are no quantitative disposition parameters for the subject drug nicomorphine. |
| popPK | Koopman-Kimenai_1995 | relevant | 4 | 8 | The study reports quantitative PK parameters (half-lives) for nicomorphine and its metabolites, but lacks explicit Volume of Distribution (V) or Clearance (CL) values required for a full compartmental description. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for postoperative nausea and vomiting and does not involve nicomorphine or report its pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnicomorphine%5D&body=Drug%3A%20nicomorphine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nicomorphine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
