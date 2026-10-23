<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;prednimustine&quot;}]"></div>

# prednimustine

- **generic name:** prednimustine
- **ATC codes:** `L01AA08`
- **DrugBank:** [DB12832](https://go.drugbank.com/drugs/DB12832) · **PubChem:** [CID 34457](https://pubchem.ncbi.nlm.nih.gov/compound/34457)
- **molar mass:** 646.65 g/mol (C35H45Cl2NO6) — DrugBank
- **groups:** investigational

## About

Prednimustine is an alkylating antineoplastic agent, a nitrogen mustard analogue that has been investigated as a cancer treatment. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7239694](https://www.wikidata.org/wiki/Q7239694) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 16:19 | 0:29 | 0/0/0 | 0/0/0 | 0/0/0 | 25,485/821 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gaver_1983.pdf` | Gaver RC et al., Disposition of orally administered 14C-…, Cancer chemotherapy and pha… (1983) | popPK | 9 | [10.1007/BF00254192](https://doi.org/10.1007/BF00254192) | [6640823](https://pubmed.ncbi.nlm.nih.gov/6640823) | The study reports quantitative disposition parameters (half-lives, excretion percentages) for prednimustine in human patients, though specific CL/V values are not explicitly listed, only half-lives and absorption details. |

<sub>queue written 2026-10-07 16:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aapro_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy and toxicity study of a combination regimen, reporting no pharmacokinetic parameters for prednimustine. |
| PD | Aapro_1986 | not_relevant | 0 | 0 | The paper reports clinical response rates and toxicity for a fixed-dose combination regimen but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Barnadas_1997 | irrelevant | 0 | 0 | The paper is a Phase II clinical efficacy study reporting response rates and toxicity, with no pharmacokinetic parameters or quantitative disposition data for prednimustine. |
| PD | Barnadas_1997 | not_relevant | 0 | 0 | The paper is a Phase II clinical trial reporting efficacy and toxicity outcomes without any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Braess_1996 | irrelevant | 0 | 0 | The paper is a case report on cytarabine ocfosfate where prednimustine is only mentioned as a previously failed regimen, containing no PK data for prednimustine. |
| PD | Braess_1996 | not_relevant | 0 | 0 | The paper is a case report on cytarabine ocfosfate and only mentions prednimustine as a prior failed therapy without providing any pharmacodynamic or exposure-response data for it. |
| popPK | Catane_1977 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting tumor response and toxicity, with no quantitative pharmacokinetic parameters (CL, V, t1/2) for prednimustine. |
| PD | Catane_1977 | not_relevant | 0 | 0 | The text is a preliminary clinical study reporting only qualitative outcomes (no objective responses) and toxicity, with no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Hartley-Asp_1986 | irrelevant | 1 | 0 | The study is an in-vitro cytotoxicity and metabolism analysis in cell lines, not a pharmacokinetic study reporting disposition parameters like CL or V for prednimustine. |
| popPK | Hatschek_1993 | irrelevant | 0 | 0 | The paper is a clinical efficacy and toxicity study comparing dosing schedules, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Hatschek_1993 | not_relevant | 1 | 0 | The paper is a clinical trial comparing two dosing schedules and reports clinical outcomes (response rate, survival) and toxicity, but it does not provide pharmacokinetic data or a quantitative exposure-response/dose-response model with numeric PD parameters. |
| popPK | Heinz_1997 | irrelevant | 0 | 0 | The paper is a clinical outcome study for non-Hodgkin lymphoma patients and does not report any pharmacokinetic parameters for prednimustine. |
| PD | Heinz_1997 | not_relevant | 0 | 0 | The paper is a clinical outcome study reporting survival and response rates for lymphoma patients; it does not contain any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for prednimustine. |
| popPK | Håkansson_1978 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting remission rates and adverse events, with no pharmacokinetic parameters or quantitative disposition data for prednimustine. |
| PD | Håkansson_1978 | not_relevant | 1 | 0 | The text reports clinical response rates (complete/partial remissions) and adverse events but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| popPK | Newell_1983 | irrelevant | 1 | 0 | The study reports that no parent drug or metabolites were detected for prednimustine and provides no quantitative PK parameters (CL, V, etc.) for it. |
| PD | Newell_1983 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (absorption, bioavailability, compartmental models) and qualitative conclusions about bioavailability and metabolite toxicity, with no concentration-effect or dose-response data for prednimustine. |
| popPK | Travis_1994 | irrelevant | 0 | 0 | The paper is an epidemiological study on leukemia risk and contains no pharmacokinetic parameters for prednimustine. |
| PD | Travis_1994 | not_relevant | 3 | 2 | The paper reports a clinical dose-response relationship (relative risk of leukemia vs. cumulative dose) for prednimustine, but it is an epidemiological study, not a pharmacodynamic (exposure-response) analysis with numeric PD parameters like Emax or EC50. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprednimustine%5D&body=Drug%3A%20prednimustine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_prednimustine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
