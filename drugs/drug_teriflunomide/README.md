<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;teriflunomide&quot;}]"></div>

# teriflunomide

- **generic name:** teriflunomide
- **ATC codes:** `L04AK02`
- **DrugBank:** [DB08880](https://go.drugbank.com/drugs/DB08880) · **PubChem:** [CID 54684141](https://pubchem.ncbi.nlm.nih.gov/compound/54684141)
- **molar mass:** 270.2073 g/mol (C12H9F3N2O2) — DrugBank
- **groups:** approved, investigational

## About

Teriflunomide is an immunosuppressant used to treat relapsing-remitting multiple sclerosis. It is authorised in the European Union and is an approved, widely used oral treatment for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3077133](https://www.wikidata.org/wiki/Q3077133) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| teriflunomide | parent | 270.207 | C12H9F3N2O2 | DrugBank | [54684141](https://pubchem.ncbi.nlm.nih.gov/compound/54684141) | Hopkins_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:06 | 5:00 | 0/1/0 | 0/0/0 | 0/0/0 | 273,505/22,064 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hopkins_2015_reference](drugs/drug_teriflunomide/Teriflunomide_Hopkins2015_reference.md) | — | 1-compartment (no model) | 0 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=teriflunomide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2C8` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DHODH (inhibitor), HMGCR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yao_2019.pdf` | Yao X et al., A population pharmacokinetic study to a…, European journal of pharmac… (2019) | popPK | 10 | [10.1016/j.ejps.2019.05.020](https://doi.org/10.1016/j.ejps.2019.05.020) | [31154006](https://pubmed.ncbi.nlm.nih.gov/31154006) | The paper describes a relevant population PK model for teriflunomide, but the extracted evidence contains only qualitative descriptions of the model and covariates, with no numeric parameter values (CL, V, etc.) provided in the text. |

<sub>queue written 2026-10-14T23:01:49.049414+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study analyzes brain atrophy outcomes in multiple sclerosis patients and classifies teriflunomide as a low-efficacy disease-modifying therapy, but does not report any pharmacokinetic parameters for the drug. |
| popPK | Hopkins_2016 | irrelevant | 1 | 0 | The study reports a time-to-event model for leflunomide cessation and uses teriflunomide exposure as a covariate, but it does not report primary pharmacokinetic parameters (CL, V, ka) for teriflunomide itself. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | The paper is a narrative review focusing on the antiviral efficacy and safety of leflunomide/teriflunomide in COVID-19, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kruger_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of ponesimod, with teriflunomide mentioned only as a comparator in a clinical efficacy trial. |
| popPK | Lang_2023 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50/CC50) against SARS-CoV-2, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | This is an immunology study assessing vaccine antibody responses in MS patients, not a pharmacokinetic study, and contains no PK parameters for teriflunomide. |
| popPK | Valenzuela_2022 | irrelevant | 0 | 0 | The study is an exposure-response analysis for ponesimod where teriflunomide serves only as an active comparator, and no PK parameter values are reported for teriflunomide. |
| popPK | Wiese_2021 | irrelevant | 1 | 0 | The study reports plasma drug concentrations (pharmacodynamics/pharmacogenomics) rather than quantitative pharmacokinetic parameters like clearance, volume of distribution, or rate constants. |
| popPK | Xiong_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of novel DHODH inhibitors S312 and S416, while Teriflunomide is only used as a pharmacological comparator in antiviral assays without any PK parameter reporting. |
| popPK | Yao_2019 | relevant | 10 | 0 | The paper describes a relevant population PK model for teriflunomide, but the extracted evidence contains only qualitative descriptions of the model and covariates, with no numeric parameter values (CL, V, etc.) provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:01 UTC</sub>
