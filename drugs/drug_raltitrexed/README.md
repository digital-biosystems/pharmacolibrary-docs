<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;raltitrexed&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Raltitrexed_Blair2004_basic_model&quot;,&quot;label&quot;:&quot;Blair_2004_basic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_basic_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Raltitrexed_Blair2004_full&quot;,&quot;label&quot;:&quot;Blair_2004_full&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_raltitrexed/Raltitrexed_Blair2004_full.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# raltitrexed

- **generic name:** raltitrexed
- **ATC codes:** `L01BA03`
- **DrugBank:** [DB00293](https://go.drugbank.com/drugs/DB00293) · **PubChem:** [CID 104758](https://pubchem.ncbi.nlm.nih.gov/compound/104758)
- **molar mass:** 458.488 g/mol (C21H22N4O6S) — DrugBank
- **groups:** approved, investigational

## About

Raltitrexed is an anticancer antimetabolite (a folic acid analogue) used to treat advanced colorectal cancer. It was withdrawn in some countries because of serious toxicity, but remains available and used in a limited number of countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15304877](https://www.wikidata.org/wiki/Q15304877) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| raltitrexed | parent | 458.488 | C21H22N4O6S | DrugBank | [104758](https://pubchem.ncbi.nlm.nih.gov/compound/104758) | Blair_2004, Clarke_2000, Horton_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:51 | 1:51 | 0/1/7 | 0/0/0 | 0/0/0 | 88,792/9,335 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Blair_2004_basic_model](drugs/drug_raltitrexed/Raltitrexed_Blair2004_basic_model.md) | ▶ model + simulator | 1-compartment, IV | 6 | Blair EY et al., Population pharmacokinetics of raltitre…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Blair_2004_full](drugs/drug_raltitrexed/Raltitrexed_Blair2004_full.md) | ▶ model + simulator | 1-compartment, IV | 6 | Blair EY et al., Population pharmacokinetics of raltitre…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Blair_2004_model_development](drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_development.md) | — | 1-compartment (no model) | 2 | Blair EY et al., Population pharmacokinetics of raltitre…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Blair_2004_model_validation](drugs/drug_raltitrexed/Raltitrexed_Blair2004_model_validation.md) | — | 1-compartment (no model) | 2 | Blair EY et al., Population pharmacokinetics of raltitre…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.857). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Blair_2004_total_cohort](drugs/drug_raltitrexed/Raltitrexed_Blair2004_total_cohort.md) | — | 1-compartment (no model) | 2 | Blair EY et al., Population pharmacokinetics of raltitre…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2003.02050.x](https://doi.org/10.1111/j.1365-2125.2003.02050.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.20).">human + animal</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Clarke_2000_reference](drugs/drug_raltitrexed/Raltitrexed_Clarke2000_reference.md) | — | 1-compartment (no model) | 2 | Clarke SJ et al., Clinical and preclinical pharmacokineti…, Clinical pharmacokinetics (2000) | [10.2165/00003088-200039060-00004](https://doi.org/10.2165/00003088-200039060-00004) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Horton_2005_reference](drugs/drug_raltitrexed/Raltitrexed_Horton2005_reference.md) | — | 1-compartment (no model) | 3 | Horton TM et al., Phase I trial and pharmacokinetic study…, Clinical cancer research :… (2005) | [10.1158/1078-0432.CCR-04-1676](https://doi.org/10.1158/1078-0432.CCR-04-1676) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Widemann_1999_reference](drugs/drug_raltitrexed/Raltitrexed_Widemann1999_reference.md) | — | 1-compartment (no model) | 0 | Widemann BC et al., The plasma pharmacokinetics and cerebro…, Cancer chemotherapy and pha… (1999) | [10.1007/s002800051116](https://doi.org/10.1007/s002800051116) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=raltitrexed).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FPGS (target), TYMS (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 8  ·  extracted 0  ·  needs_review 7  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Horton_2005.pdf` | Horton TM et al., Phase I trial and pharmacokinetic study…, Clinical cancer research :… (2005) | popPK | 10 | [10.1158/1078-0432.CCR-04-1676](https://doi.org/10.1158/1078-0432.CCR-04-1676) | [15756014](https://pubmed.ncbi.nlm.nih.gov/15756014) | The study reports specific quantitative PK parameters (clearance, volume, half-lives) for raltitrexed in children. |
| `Royer_2021.pdf` | Royer B et al., Exposure-response analysis of Raltitrex…, British journal of clinical… (2021) | popPK | 10 | [10.1111/bcp.14519](https://doi.org/10.1111/bcp.14519) | [32789966](https://pubmed.ncbi.nlm.nih.gov/32789966) | The paper describes a population PK study with a three-compartment model and identifies covariates for clearance and volume, but the specific numeric parameter values are not provided in the evidence text. |
| `Widemann_1999.pdf` | Widemann BC et al., The plasma pharmacokinetics and cerebro…, Cancer chemotherapy and pha… (1999) | popPK | 10 | [10.1007/s002800051116](https://doi.org/10.1007/s002800051116) | [10550563](https://pubmed.ncbi.nlm.nih.gov/10550563) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life characteristics) for raltitrexed in a nonhuman primate model, with specific numeric ranges provided in the abstract. |
| `Zhu_2019.pdf` | Zhu L et al., Hepatic Artery and Peripheral Vein Phar…, Current drug metabolism (2019) | popPK | 10 | [10.2174/1389200220666190618100847](https://doi.org/10.2174/1389200220666190618100847) | [31237202](https://pubmed.ncbi.nlm.nih.gov/31237202) | The paper reports a compartmental pharmacokinetic model for raltitrexed in swine with specific numeric values for clearance and volumes of distribution provided in the abstract. |
| `Clarke_2000.pdf` | Clarke SJ et al., Clinical and preclinical pharmacokineti…, Clinical pharmacokinetics (2000) | popPK | 7 | [10.2165/00003088-200039060-00004](https://doi.org/10.2165/00003088-200039060-00004) | [11192475](https://pubmed.ncbi.nlm.nih.gov/11192475) | The abstract provides specific quantitative PK parameters for raltitrexed in humans, including clearance (2.4 L/h) and terminal half-life (260 hours), derived from a 3-compartment model. |

<sub>queue written 2026-10-14T21:49:40.271958+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ferrero_2002 | relevant | 4 | 0 | The study is a Phase I PK trial for raltitrexed in humans, but the provided text only reports a qualitative conclusion (no interaction) and lacks specific numeric PK parameters like clearance or volume. |
| popPK | Royer_2021 | relevant | 10 | 0 | The paper describes a population PK study with a three-compartment model and identifies covariates for clearance and volume, but the specific numeric parameter values are not provided in the evidence text. |
| popPK | White_2003 | irrelevant | 0 | 0 | The paper describes an in vitro pharmacodynamic (cell growth inhibition) response surface study, not a pharmacokinetic study, and contains no PK parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:49 UTC</sub>
