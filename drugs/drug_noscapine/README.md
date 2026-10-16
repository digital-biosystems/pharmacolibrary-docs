<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;noscapine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Noscapine_Chen2024_final_model&quot;,&quot;label&quot;:&quot;Chen_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/Noscapine_Chen2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000&quot;,&quot;label&quot;:&quot;Chen_2024_sir_with_m_m_ratio_of_5000_1000&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# noscapine

- **generic name:** noscapine
- **ATC codes:** `R05DA07`
- **DrugBank:** [DB06174](https://go.drugbank.com/drugs/DB06174) · **PubChem:** not captured
- **molar mass:** 413.4205 g/mol (C22H23NO7) — DrugBank
- **groups:** approved

## About

Noscapine is an opium alkaloid used as a cough suppressant (antitussive). It is an approved medicine, classified among cough suppressants in respiratory preparations, and is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415619](https://www.wikidata.org/wiki/Q415619) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| noscapine | parent | 413.421 | C22H23NO7 | DrugBank | — | Chen_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:32 | 1:09 | 0/0/2 | 0/0/0 | 0/0/0 | 89,363/7,805 | einfracz / qwen3.8-27b | 2 | 0/2 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Chen_2024_final_model](drugs/drug_noscapine/Noscapine_Chen2024_final_model.md) | ▶ model + simulator | 1-compartment, oral | 8 (+1 cov.) | Chen Z et al., A Semi-Mechanistic Population Pharmacok…, Drugs in R&D (2024) | [10.1007/s40268-024-00466-6](https://doi.org/10.1007/s40268-024-00466-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Chen_2024_sir_with_m_m_ratio_of_5000_1000](drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.md) | ▶ model + simulator | 1-compartment, oral | 8 (+1 cov.) | Chen Z et al., A Semi-Mechanistic Population Pharmacok…, Drugs in R&D (2024) | [10.1007/s40268-024-00466-6](https://doi.org/10.1007/s40268-024-00466-6) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=noscapine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SIGMAR1 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aneja_2007.pdf` | Aneja R et al., Preclinical pharmacokinetics and bioava…, Cancer chemotherapy and pha… (2007) | popPK | 10 | [10.1007/s00280-007-0430-y](https://doi.org/10.1007/s00280-007-0430-y) | [17285314](https://pubmed.ncbi.nlm.nih.gov/17285314) | The paper reports quantitative non-compartmental PK parameters (CL, Vd, AUC, Cmax) for noscapine in mice, with all numeric values explicitly present in the text. |

<sub>queue written 2026-10-07T22:31:51.536391+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2005 | irrelevant | 0 | 0 | The study is a medicinal chemistry/antitumor activity paper synthesizing noscapine analogues, not a pharmacokinetic study reporting disposition parameters for noscapine. |
| popPK | Debono_2014 | irrelevant | 0 | 0 | The paper is a synthesis and in-vitro biological evaluation of noscapine derivatives, reporting cytotoxicity (EC50) rather than pharmacokinetic parameters. |
| popPK | Devine_2018 | irrelevant | 0 | 0 | The study is a medicinal chemistry and cytotoxicity investigation of noscapine analogs, not a pharmacokinetic study. |
| popPK | Yong_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and antiproliferative activity of noscapine analogues, not the pharmacokinetic disposition of noscapine itself. |
| popPK | dOelsnitz_2022 | irrelevant | 0 | 0 | The paper is a structural biology and metabolic engineering study focused on evolving biosensors for alkaloids, not a pharmacokinetic study of noscapine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:31 UTC</sub>
