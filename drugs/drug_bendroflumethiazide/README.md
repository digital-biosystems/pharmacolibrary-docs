<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;bendroflumethiazide&quot;}]"></div>

# bendroflumethiazide

- **generic name:** bendroflumethiazide
- **ATC codes:** `C03AA01`, `C03AB01`, `C03EA13`
- **DrugBank:** [DB00436](https://go.drugbank.com/drugs/DB00436) · **PubChem:** [CID 2315](https://pubchem.ncbi.nlm.nih.gov/compound/2315)
- **molar mass:** 421.415 g/mol (C15H14F3N3O4S2) — DrugBank
- **groups:** approved, investigational

## About

Bendroflumethiazide is a thiazide diuretic used to treat high blood pressure, heart failure, and fluid build-up such as in nephrotic syndrome. It is an approved prescription medicine, given by mouth, and has been widely used, especially in the United Kingdom.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1169164](https://www.wikidata.org/wiki/Q1169164) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bendroflumethiazide | parent | 421.415 | C15H14F3N3O4S2 | DrugBank | [2315](https://pubchem.ncbi.nlm.nih.gov/compound/2315) | Borgström_1981, Schäfer-Korting_1985, Vergin_1986 |
| canrenone | metabolite | 340.463 | C22H28O3 | PubChem | [13789](https://pubchem.ncbi.nlm.nih.gov/compound/13789) | Vergin_1986 |
| spironolactone | metabolite | 416.576 | C24H32O4S | PubChem | [5833](https://pubchem.ncbi.nlm.nih.gov/compound/5833) | Vergin_1986 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 16.16 | L/h | 269.4 ml/min | healthy volunteers | &gt;=10 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vergin_1986_reference](drugs/drug_bendroflumethiazide/Bendroflumethiazide_Vergin1986_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Vergin_1986_reference](drugs/drug_bendroflumethiazide/Bendroflumethiazide_Vergin1986_reference.md) | — | parent + metabolite (no model) | 2 | Vergin H et al., [Pharmacokinetic studies and bioavailab…, Arzneimittel-Forschung (1986) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Borgström_1981_reference](drugs/drug_bendroflumethiazide/Bendroflumethiazide_Borgstrm1981_reference.md) | — | 1-compartment (no model) | 2 | Borgström L et al., Pharmacokinetics of bendroflumethiazide…, Journal of pharmacokinetics… (1981) | [10.1007/BF01060887](https://doi.org/10.1007/BF01060887) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Schäfer-Korting_1985_reference](drugs/drug_bendroflumethiazide/Bendroflumethiazide_SchferKorting1985_reference.md) | — | 1-compartment (no model) | 2 | Schäfer-Korting M, Skin blister fluid--an access to the pe…, Arzneimittel-Forschung (1985) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:15 | 15:15 | 0/2/1 | 0/0/0 | 0/0/0 | 307,447/25,721 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 59 matched, 34 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borgström_1981.pdf` | Borgström L et al., Pharmacokinetics of bendroflumethiazide…, Journal of pharmacokinetics… (1981) | popPK | 10 | [10.1007/BF01060887](https://doi.org/10.1007/BF01060887) | [7310642](https://pubmed.ncbi.nlm.nih.gov/7310642) | The study reports quantitative PK parameters (half-life, renal clearance) for bendroflumethiazide in humans, with values explicitly stated in the abstract. |
| `Vergin_1986.pdf` | Vergin H et al., [Pharmacokinetic studies and bioavailab…, Arzneimittel-Forschung (1986) | popPK | 10 | not captured | [3707669](https://pubmed.ncbi.nlm.nih.gov/3707669) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for bendroflumethiazide in humans. |
| `Schäfer-Korting_1985.pdf` | Schäfer-Korting M, Skin blister fluid--an access to the pe…, Arzneimittel-Forschung (1985) | popPK | 9 | not captured | [4096738](https://pubmed.ncbi.nlm.nih.gov/4096738) | The study reports quantitative PK parameters (half-lives, compartmental model) for bendroflumethiazide in rats, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-06T15:03:39.491008+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bulpitt_1994 | not_relevant | 0 | 0 | The text is a protocol/rationale for a clinical trial describing design and dosing, but it does not report any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for bendroflumethiazide. |
| PD | Busby_2018 | not_relevant | 1 | 0 | The paper is a pharmacoepidemiological study reporting odds ratios for breast cancer risk based on prescription data, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacology and does not report any pharmacokinetic parameters for bendroflumethiazide. |
| PD | Hallin_1983 | not_relevant | 1 | 0 | The paper reports mean blood pressure reductions for fixed doses but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Hegbrant_1989 | not_relevant | 1 | 0 | The paper reports clinical efficacy (blood pressure reduction and normotension rates) for fixed doses but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper is a survey on natural health product use and coding feasibility in New Zealand, containing no pharmacokinetic data for bendroflumethiazide. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a computational study on drug-drug interaction prediction using machine learning and does not report pharmacokinetic parameters for bendroflumethiazide. |
| PGx | Lysaa_1996 | not_relevant | 0 | 0 | The paper reports drug-drug interaction (inhibition of TPMT by bendroflumethiazide) but does not report a pharmacogenomic effect (gene variant) on the PK/PD of bendroflumethiazide. |
| popPK | Schäfer-Korting_1985 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-lives, compartmental model) for bendroflumethiazide in rats, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| PD | Thorstensen_2022 | not_relevant | 0 | 0 | The paper is a method development study for quantifying drug concentrations in serum and reports PK variability (Cmax/Cmin) but contains no pharmacodynamic or exposure-response analysis. |
| popPK | Walch_2026 | irrelevant | 0 | 0 | The paper is a methodological review on chronotherapy trial design that uses generic mathematical simulations; bendroflumethiazide is only listed as an example of a drug for adherence monitoring, and no specific PK parameters for it are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 15:03 UTC</sub>
