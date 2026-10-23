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
| leflunomide | metabolite | 270.21 | C12H9F3N2O2 | PubChem | [3899](https://pubchem.ncbi.nlm.nih.gov/compound/3899) | Hopkins_2015 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Hopkins_2015_reference](drugs/drug_teriflunomide/Teriflunomide_Hopkins2015_reference.md) | — | parent + metabolite (no model) | 0 | Hopkins AM et al., Semiphysiologically Based Pharmacokinet…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.46](https://doi.org/10.1002/psp4.46) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Lang_2023_viral_inhibition](drugs/drug_teriflunomide/pd_Lang_2023_viral_inhibition.md) | viral inhibition ← teriflunomide · inhibition effect | — | Lang P et al., Biochemistry and biophysics… (2023) | [10.1016/j.bbrep.2022.101395](https://doi.org/10.1016/j.bbrep.2022.101395) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=teriflunomide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2C8` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCG2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DHODH (inhibitor), HMGCR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:38 | 3:16 | 0/1/0 | 1/0/0 | 0/0/0 | 315,549/23,245 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 1 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yao_2019.pdf` | Yao X et al., A population pharmacokinetic study to a…, European journal of pharmac… (2019) | popPK | 10 | [10.1016/j.ejps.2019.05.020](https://doi.org/10.1016/j.ejps.2019.05.020) | [31154006](https://pubmed.ncbi.nlm.nih.gov/31154006) | The paper reports a population pharmacokinetic model for teriflunomide with covariates, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |

<sub>queue written 2026-10-07 00:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study analyzes brain atrophy outcomes using MRI data and lists teriflunomide only as a low-efficacy comparator drug; it does not report any pharmacokinetic parameters. |
| popPK | Hopkins_2016 | irrelevant | 0 | 0 | The study focuses on a time-to-event model for drug cessation and pharmacogenetics, not on the pharmacokinetic disposition parameters (CL, V, ka) of teriflunomide. |
| popPK | Kaur_2021 | irrelevant | 0 | 0 | This is a narrative review of the efficacy and safety of DHODH inhibitors in COVID-19; it reports in vitro EC50 values and clinical outcomes but contains no quantitative pharmacokinetic parameters (CL, V, t1/2) for teriflunomide. |
| popPK | Kruger_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ponesimod, not teriflunomide, which is mentioned only as a comparator. |
| popPK | Lang_2023 | irrelevant | 0 | 0 | The study is an in vitro antiviral efficacy evaluation (EC50/CC50) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for teriflunomide. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | The study investigates the impact of teriflunomide therapy on vaccine immunogenicity (antibody titers), not the pharmacokinetic disposition parameters (CL, V, etc.) of teriflunomide. |
| popPK | Valenzuela_2022 | irrelevant | 0 | 0 | The study is an exposure-response analysis for ponesimod, with teriflunomide serving only as a comparator, and no teriflunomide PK parameters are reported. |
| popPK | Wiese_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/predictive analysis focusing on disease response outcomes (DAS28) rather than quantifying pharmacokinetic disposition parameters such as clearance or volume of distribution. |
| popPK | Xiong_2020 | irrelevant | 0 | 0 | The paper focuses on antiviral activity and PK of new DHODH inhibitors (S312/S416) in mice and in vitro; teriflunomide is used only as a comparative agent in antiviral assays without reporting its PK parameters. |
| popPK | Yao_2019 | relevant | 10 | 0 | The paper reports a population pharmacokinetic model for teriflunomide with covariates, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract or evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bteriflunomide%5D&body=Drug%3A%20teriflunomide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_teriflunomide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 00:36 UTC</sub>
