<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;isotretinoin&quot;}]"></div>

# isotretinoin

- **generic name:** isotretinoin
- **ATC codes:** `D10AD04`, `D10BA01`
- **DrugBank:** [DB00982](https://go.drugbank.com/drugs/DB00982) · **PubChem:** [CID 5282379](https://pubchem.ncbi.nlm.nih.gov/compound/5282379)
- **molar mass:** 300.4351 g/mol (C20H28O2) — DrugBank
- **groups:** approved, investigational

## About

Isotretinoin is a retinoid used to treat acne, and has also been used for conditions such as rosacea, leukemia, and neuroblastoma. It is an approved medicine, widely used for severe acne, but carries a boxed warning because it is a known teratogen.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q287029](https://www.wikidata.org/wiki/Q287029) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| isotretinoin | parent | 300.435 | C20H28O2 | DrugBank | [5282379](https://pubchem.ncbi.nlm.nih.gov/compound/5282379) | Nulman_1998, Veal_2007 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 2 | L/h | 2 l h À1 | children with high-risk neuroblastoma | 28 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Veal_2007_reference](drugs/drug_isotretinoin/Isotretinoin_Veal2007_reference.md) |
| V | V/F | 2 | L | 2 l | children with high-risk neuroblastoma | 28 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Veal_2007_reference](drugs/drug_isotretinoin/Isotretinoin_Veal2007_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub> | [Veal_2007_reference](drugs/drug_isotretinoin/Isotretinoin_Veal2007_reference.md) | — | 1-compartment (no model) | 4 | Veal GJ et al., Pharmacokinetics and metabolism of 13-c…, British journal of cancer (2007) | [10.1038/sj.bjc.6603554](https://doi.org/10.1038/sj.bjc.6603554) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Nulman_1998_reference](drugs/drug_isotretinoin/Isotretinoin_Nulman1998_reference.md) | — | 1-compartment (no model) | 1 | Nulman I et al., Steady-state pharmacokinetics of isotre…, Journal of clinical pharmac… (1998) | [10.1002/j.1552-4604.1998.tb04388.x](https://doi.org/10.1002/j.1552-4604.1998.tb04388.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:23 | 0:50 | 0/1/1 | 0/0/0 | 0/0/0 | 30,471/3,080 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Veal_2013.pdf` | Veal GJ et al., Adaptive dosing approaches to the indiv…, Clinical cancer research :… (2013) | popPK | 10 | [10.1158/1078-0432.CCR-12-2225](https://doi.org/10.1158/1078-0432.CCR-12-2225) | [23087409](https://pubmed.ncbi.nlm.nih.gov/23087409) | The paper reports a population pharmacokinetic model for isotretinoin in humans, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract evidence, only Cmax observations. |
| `Nulman_1998.pdf` | Nulman I et al., Steady-state pharmacokinetics of isotre…, Journal of clinical pharmac… (1998) | popPK | 9 | [10.1002/j.1552-4604.1998.tb04388.x](https://doi.org/10.1002/j.1552-4604.1998.tb04388.x) | [9807973](https://pubmed.ncbi.nlm.nih.gov/9807973) | Reports steady-state PK parameters (half-life) for isotretinoin in a two-compartment model, but detailed compartmental values (CL, V) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T07:22:30.968677+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kisaalita_1996 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of isotretinoin in murine neuroblastoma cells and does not report pharmacokinetic disposition parameters. |
| popPK | Veal_2013 | relevant | 10 | 3 | The paper reports a population pharmacokinetic model for isotretinoin in humans, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract evidence, only Cmax observations. |
| popPK | Yadav_2022 | irrelevant | 1 | 0 | The study focuses on in vitro transcriptional regulation of enzymes/transporters and a clinical biomarker for DDI, lacking quantitative PK disposition parameters (CL, V, etc.) for isotretinoin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 07:22 UTC</sub>
