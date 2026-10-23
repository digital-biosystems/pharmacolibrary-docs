<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;acadesine&quot;}]"></div>

# acadesine

- **generic name:** acadesine
- **ATC codes:** `C01EB13`
- **DrugBank:** [DB04944](https://go.drugbank.com/drugs/DB04944) · **PubChem:** [CID 17513](https://pubchem.ncbi.nlm.nih.gov/compound/17513)
- **molar mass:** 258.2313 g/mol (C9H14N4O5) — DrugBank
- **groups:** investigational

## About

Acadesine is an investigational heart medication studied for cardiac conditions. It has not been approved and remains under investigation, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4671562](https://www.wikidata.org/wiki/Q4671562) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=acadesine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PRKAA1 (modulator), PRKAB1 (modulator), PRKAG1 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 11:29 | 0:21 | 0/0/0 | 0/0/0 | 0/0/0 | 51,518/1,044 | einfracz / qwen3.8-27b | 3 | 2/1 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dixon_1993.pdf` | Dixon R et al., Acadesine (AICA-riboside): disposition…, Journal of clinical pharmac… (1993) | popPK | 9 | [10.1002/j.1552-4604.1993.tb01929.x](https://doi.org/10.1002/j.1552-4604.1993.tb01929.x) | [8227467](https://pubmed.ncbi.nlm.nih.gov/8227467) | The abstract reports specific quantitative pharmacokinetic parameters for acadesine, including total plasma clearance (2.2 L/h/kg) and half-life, in human subjects. |

<sub>queue written 2026-10-08 11:28 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Antonioli_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic efficacy of a novel compound (FA-5) compared to acadesine in a colitis model, without reporting any quantitative pharmacokinetic parameters for acadesine. |
| PD | Antonioli_2021 | not_relevant | 1 | 0 | The paper describes qualitative efficacy comparisons between FA-5 and acadesine in a colitis model but does not report any numeric concentration-effect or dose-response parameters for acadesine. |
| popPK | Bullough_1993 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro/isolated organ study focused on cardioprotection and radical scavenging, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bullough_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell adhesion and reports IC50 values for biological activity, not pharmacokinetic disposition parameters. |
| popPK | Campàs_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis and AMPK activation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cheng_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AICA riboside, not acadesine. |
| popPK | Cheng_2013_2 | irrelevant | 0 | 0 | The study investigates AICA riboside, not acadesine. |
| popPK | Cronstein_1991 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of methotrexate's effect on adenosine release, where acadesine is only used as a probe to verify the mechanism, not as the subject of pharmacokinetic analysis. |
| PGx | Deiman_2026 | not_relevant | 0 | 0 | The paper investigates the association between the phospholamban R14del genotype and disease progression/metabolite levels (including acadesine as a biomarker), but it does not report the pharmacokinetic or pharmacodynamic effects of a drug on patients based on genotype. |
| popPK | Dixon_1989 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of AICA-riboside, not acadesine. |
| popPK | Dixon_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for AICA-riboside, not acadesine. |
| popPK | Galiñanes_1992 | irrelevant | 1 | 0 | The study focuses on cardioprotective effects and tissue metabolite content in rat hearts, not on the pharmacokinetic parameters (clearance, volume, half-life) of acadesine. |
| PGx | Gong_1993 | not_relevant | 0 | 0 | The study investigates the effect of a chemical compound (AICA riboside) on drug metabolism, not the effect of a genetic variant or genotype (pharmacogenomics). |
| PGx | Park_2024 | not_relevant | 0 | 0 | The paper reports a treatment for AICA ribosiduria (a metabolic disorder) using diet, not a pharmacogenomic effect on the PK/PD of a specific drug named 'acadesine'. |
| popPK | Wu_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell proliferation and does not report any pharmacokinetic parameters for acadesine. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is a metabolomic and genomic study of purine metabolism in AKI/CKD and does not report pharmacokinetic parameters for acadesine. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper focuses on metabolomic signatures and genetic associations in kidney disease, not on the pharmacodynamics of acadesine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacadesine%5D&body=Drug%3A%20acadesine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_acadesine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
