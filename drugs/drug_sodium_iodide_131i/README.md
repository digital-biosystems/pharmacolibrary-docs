<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09F&quot;,&quot;href&quot;:&quot;atc/V09F.md&quot;},{&quot;label&quot;:&quot;sodium iodide (131I)&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumIodide131i_Ly2023_reference&quot;,&quot;label&quot;:&quot;Ly_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_iodide_131i/SodiumIodide131i_Ly2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sodium iodide (131I)

- **generic name:** sodium iodide (131I)
- **ATC codes:** `V09FX03`, `V10XA01`
- **DrugBank:** [DB09293](https://go.drugbank.com/drugs/DB09293) · **PubChem:** [CID 167195](https://pubchem.ncbi.nlm.nih.gov/compound/167195)
- **molar mass:** 130.9067 g/mol (I) — DrugBank
- **groups:** approved, investigational

## About

Iodide I-131 is a radioactive form of iodine used both diagnostically and therapeutically for thyroid conditions. It is an approved radiopharmaceutical, used in nuclear medicine for thyroid imaging and treatment, and also has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27259563](https://www.wikidata.org/wiki/Q27259563) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sodium_iodide_131i | metabolite | 130.907 | I | DrugBank | [167195](https://pubchem.ncbi.nlm.nih.gov/compound/167195) | Hardiansyah_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:55 | 3:50 | 1/1/0 | 0/0/1 | 0/0/0 | 166,254/16,637 | openai / gpt-6-luna | 9 | 1/8 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Ly_2023_reference](drugs/drug_sodium_iodide_131i/SodiumIodide131i_Ly2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ly NS et al., Population Pharmacokinetics and Exposur…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01210-0](https://doi.org/10.1007/s40262-023-01210-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Hardiansyah_2025_reference](drugs/drug_sodium_iodide_131i/SodiumIodide131i_Hardiansyah2025_reference.md) | — | 1-compartment (no model) | 3 | Hardiansyah D et al., Non-linear mixed-effects modelling and…, EJNMMI physics (2025) | [10.1186/s40658-025-00735-6](https://doi.org/10.1186/s40658-025-00735-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Topić_2021_hyper_eu_and_hypothyroidism](drugs/drug_sodium_iodide_131i/pd_Topi_2021_hyper_eu_and_hypothyroidism.md) | hyper-, eu- and hypothyroidism ← 131I · categorical (graded) response model | — | Topić Vučenović V et al., Population exposure-response model of, European journal of pharmac… (2021) | [10.1016/j.ejps.2021.105942](https://doi.org/10.1016/j.ejps.2021.105942) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_iodide_131i).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Louis_2024.pdf` | Louis M et al., Radiation Protection Considerations for…, Health physics (2024) | popPK | 8 | [10.1097/HP.0000000000001743](https://doi.org/10.1097/HP.0000000000001743) | [37792406](https://pubmed.ncbi.nlm.nih.gov/37792406) | The study develops a biokinetic model for 131I in human ESRD patients, but no numeric disposition parameters are provided in the evidence. |

<sub>queue written 2026-10-07T19:52:59.900089+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dong_2002 | irrelevant | 0 | 0 | This is an in-vitro secretin-receptor study, not a sodium_iodide_131i pharmacokinetic study. |
| popPK | Fusella_2026 | relevant | 7 | 1 | The human radioiodine compartmental model includes disposition parameters, but their numeric estimates are only referenced in an appendix table not provided. |
| popPK | Gupta_2016 | irrelevant | 0 | 0 | The paper reports lenvatinib pharmacokinetics, not sodium_iodide_131i. |
| popPK | Hayato_2018 | irrelevant | 0 | 0 | The study models lenvatinib in human patients and reports no pharmacokinetic parameters for sodium_iodide_131i. |
| popPK | Hays_1985 | irrelevant | 0 | 0 | The compartmental model concerns radioiodinated T4 and T3, not sodium_iodide_131i, and gives no numeric PK parameter values. |
| popPK | Latia_2026 | irrelevant | 0 | 0 | This human thyroid cancer imaging case series reports radioiodine treatment activity, not sodium_iodide_131i pharmacokinetic parameters. |
| popPK | Louis_2024 | relevant | 8 | 1 | The study develops a biokinetic model for 131I in human ESRD patients, but no numeric disposition parameters are provided in the evidence. |
| popPK | Ly_2023 | irrelevant | 0 | 0 | The reported population-PK parameters are for cabozantinib, not sodium_iodide_131i. |
| popPK | Majid_2024 | irrelevant | 0 | 0 | The quantitative population-PK parameters are for lenvatinib, not sodium_iodide_131i. |
| popPK | Menzel_2024 | irrelevant | 0 | 0 | This study reports clinical outcomes after radioiodine treatment in cats, not pharmacokinetic disposition parameters. |
| popPK | Reinfelder_2011 | irrelevant | 1 | 0 | The study measures thyroidal radioiodide uptake, not quantitative pharmacokinetic disposition parameters for sodium_iodide_131i. |
| popPK | Shinohara_2018 | irrelevant | 0 | 0 | This is absorbed-dose modeling of ¹³¹I-MIBG, not sodium iodide ¹³¹I pharmacokinetics. |
| popPK | Tamai_2017 | irrelevant | 0 | 0 | The population-PK model and numeric parameters are for lenvatinib, not sodium iodide-131I. |
| popPK | Topić_2021 | irrelevant | 1 | 0 | This is a human exposure-response model and reports no quantitative pharmacokinetic disposition parameters for sodium_iodide_131i. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:53 UTC</sub>
