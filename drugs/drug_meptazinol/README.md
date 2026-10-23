<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;meptazinol&quot;}]"></div>

# meptazinol

- **generic name:** meptazinol
- **ATC codes:** `N02AX05`
- **DrugBank:** [DB13478](https://go.drugbank.com/drugs/DB13478) · **PubChem:** not captured
- **molar mass:** 233.355 g/mol (C15H23NO) — DrugBank
- **groups:** experimental

## About

Meptazinol is an opioid compound with pain-relieving (analgesic) and narcotic properties. It is not an approved medicine; it is currently regarded as an experimental drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410618](https://www.wikidata.org/wiki/Q410618) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| meptazinol | parent | 233.355 | C15H23NO | DrugBank | — | Gepts_1987 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 92.82 | L/h | 1547 ml min-1 | anaesthetised patients | 12 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gepts_1987_reference](drugs/drug_meptazinol/Meptazinol_Gepts1987_reference.md) |
| V | V | 38.99 ‡ | L | 0.557 l kg-1 | anaesthetised patients | 12 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Gepts_1987_reference](drugs/drug_meptazinol/Meptazinol_Gepts1987_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Gepts_1987_reference](drugs/drug_meptazinol/Meptazinol_Gepts1987_reference.md) | — | 1-compartment (no model) | 5 | Gepts E et al., Pharmacokinetics of intravenously admin…, European journal of anaesth… (1987) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=meptazinol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:12 | 0:59 | 1/0/0 | 0/0/0 | 0/0/0 | 41,771/2,103 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gepts_1987.pdf` | Gepts E et al., Pharmacokinetics of intravenously admin…, European journal of anaesth… (1987) | popPK | 10 | not captured | [3582376](https://pubmed.ncbi.nlm.nih.gov/3582376) | The abstract provides explicit numeric values for a three-compartment model, including half-lives, clearance, and volume of distribution. |
| `Rosseel_1975.pdf` | Rosseel MT et al., Meptazinol (Wy 22811), a new analgesic:…, Current medical research an… (1975) | popPK | 5 | [10.1185/03007997509113668](https://doi.org/10.1185/03007997509113668) | [1149487](https://pubmed.ncbi.nlm.nih.gov/1149487) | The paper describes a pharmacokinetic study but the evidence provided contains only qualitative descriptions (e.g., "two compartment open system model") without any specific numeric parameter values like clearance or volume. |
| `Meyer_2019.pdf` | Meyer MJ et al., Opioids as Substrates and Inhibitors of…, Journal of medicinal chemis… (2019) | pd | 5 | [10.1021/acs.jmedchem.9b01301](https://doi.org/10.1021/acs.jmedchem.9b01301) | [31597043](https://www.ncbi.nlm.nih.gov/pubmed/31597043) | metadata signals extractable PD data (IC50) |
| `Spiegel_1984.pdf` | Spiegel K et al., Meptazinol: a novel Mu-1 selective opio…, The Journal of pharmacology… (1984) | pd | 4 | not captured | [6141283](https://www.ncbi.nlm.nih.gov/pubmed/6141283) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T05:12:00.608388+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gabka_1982 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-response analysis using pain thresholds, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for meptazinol. |
| PGx | Meyer_2019 | not_relevant | 0 | 0 | The paper identifies meptazinol as an OCT1 substrate in vitro but does not report pharmacokinetic or pharmacodynamic effects in humans based on genotype. |
| popPK | Rosseel_1975 | irrelevant | 5 | 0 | The paper describes a pharmacokinetic study but the evidence provided contains only qualitative descriptions (e.g., "two compartment open system model") without any specific numeric parameter values like clearance or volume. |
| popPK | Wali_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cholinergic effects on rat diaphragm and ileum, reporting EC50 and potency data rather than population pharmacokinetic parameters (CL, V, ka). |
| popPK | Xie_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on meptazinol carbamate derivatives for Alzheimer's disease, reporting in-vitro enzyme kinetics and toxicity, but contains no pharmacokinetic disposition parameters (CL, V, etc.) for meptazinol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 05:12 UTC</sub>
