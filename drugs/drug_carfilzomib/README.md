<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;carfilzomib&quot;}]"></div>

# carfilzomib

- **generic name:** carfilzomib
- **ATC codes:** `L01XG02`, `L01XX45`
- **DrugBank:** [DB08889](https://go.drugbank.com/drugs/DB08889) · **PubChem:** [CID 11556711](https://pubchem.ncbi.nlm.nih.gov/compound/11556711)
- **molar mass:** 719.9099 g/mol (C40H57N5O7) — DrugBank
- **groups:** approved, investigational

## About

Carfilzomib is a proteasome inhibitor used to treat multiple myeloma. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15366934](https://www.wikidata.org/wiki/Q15366934) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| carfilzomib | parent | 719.91 | C40H57N5O7 | DrugBank | [11556711](https://pubchem.ncbi.nlm.nih.gov/compound/11556711) | Lin_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:25 | 8:14 | 0/0/1 | 4/0/1 | 0/0/0 | 305,543/41,204 | openai / gpt-6-luna | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Lin_2023_reference](drugs/drug_carfilzomib/Carfilzomib_Lin2023_reference.md) | — | 1-compartment (no model) | 1 | Lin LH et al., Population Pharmacokinetics and Pharmac…, Targeted oncology (2023) | [10.1007/s11523-023-00992-4](https://doi.org/10.1007/s11523-023-00992-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Han_2019_antiproliferative_effect_on_MCL_cell](drugs/drug_carfilzomib/pd_Han_2019_antiproliferative_effect_on_MCL_cell.md) | antiproliferative effect on MCL cell ← carfilzomib · inhibition effect | — | Han C et al., Drug Repurposing Screen Identifies Nove…, Combinatorial chemistry & h… (2019) | [10.2174/1386207322666190916120128](https://doi.org/10.2174/1386207322666190916120128) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> | [Lin_2023_Proteasome_activity](drugs/drug_carfilzomib/pd_Lin_2023_Proteasome_activity.md) | Proteasome activity ← carfilzomib · indirect response — drug stimulates the loss of Proteasome activity | — | Lin LH et al., Population Pharmacokinetics and Pharmac…, Targeted oncology (2023) | [10.1007/s11523-023-00992-4](https://doi.org/10.1007/s11523-023-00992-4) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Ou_2017_ORR](drugs/drug_carfilzomib/pd_Ou_2017_ORR.md) | overall response rate ← carfilzomib · stimulation effect | — | Ou Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2017) | [10.1002/jcph.850](https://doi.org/10.1002/jcph.850) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Yago_2023_proteasome_inhibition](drugs/drug_carfilzomib/pd_Yago_2023_proteasome_inhibition.md) | proteasome inhibition ← carfilzomib · target-mediated drug disposition | — | Yago MR et al., Mechanistic Pharmacokinetic/Pharmacodyn…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01242-6](https://doi.org/10.1007/s40262-023-01242-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dao_2020_Cell_growth_inhibition](drugs/drug_carfilzomib/pd_Dao_2020_Cell_growth_inhibition.md) | Cell growth inhibition ← carfilzomib · direct sigmoid Emax (Hill) effect | — | Dao Trong P et al., Large-Scale Drug Screening in Patient-D…, Cells (2020) | [10.3390/cells9061389](https://doi.org/10.3390/cells9061389) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=carfilzomib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: PSMB1 (inhibitor), PSMB10 (inhibitor), PSMB2 (inhibitor), PSMB5 (inhibitor), PSMB8 (inhibitor), PSMB9 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lin_2023.pdf` | Lin LH et al., Population Pharmacokinetics and Pharmac…, Targeted oncology (2023) | popPK | 10 | [10.1007/s11523-023-00992-4](https://doi.org/10.1007/s11523-023-00992-4) | [37632592](https://pubmed.ncbi.nlm.nih.gov/37632592) | Human population PK model reports carfilzomib clearance of 133 L/h in the provided evidence. |
| `Ou_2017.pdf` | Ou Y et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.850](https://doi.org/10.1002/jcph.850) | [27925676](https://pubmed.ncbi.nlm.nih.gov/27925676) | The paper models carfilzomib pharmacokinetics in patients, but no numeric disposition parameter values are present in the provided evidence. |

<sub>queue written 2026-10-07T22:17:53.041982+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Badawi_2024 | irrelevant | 0 | 0 | The PK model is for venetoclax, not carfilzomib; its parameter estimates are referred to in Table S1, which is not provided. |
| popPK | Brillac_2025 | irrelevant | 0 | 0 | The PopPK model and numeric parameters are for isatuximab; carfilzomib is only mentioned as a combination-treatment option. |
| popPK | Corrigan_2025 | irrelevant | 0 | 0 | This is an in-vitro proteasome-inhibitor study, not a carfilzomib pharmacokinetic study. |
| popPK | Dao_2020 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity screen, not a pharmacokinetic study. |
| popPK | Han_2019 | irrelevant | 0 | 0 | This is an in-vitro anticancer screen and reports no carfilzomib pharmacokinetic parameters. |
| popPK | Kikuchi_2024 | irrelevant | 0 | 0 | This is an in-vitro cancer study with carfilzomib as a combination treatment, not a PK study. |
| popPK | Ou_2017 | relevant | 10 | 0 | The paper models carfilzomib pharmacokinetics in patients, but no numeric disposition parameter values are present in the provided evidence. |
| popPK | Robbertse_2024 | irrelevant | 0 | 0 | Carfilzomib is only an in-vitro comparator, and no pharmacokinetic parameters are reported. |
| popPK | Siegel_2021 | irrelevant | 0 | 0 | This HRQoL study reports no quantitative carfilzomib pharmacokinetic parameters. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | The study models daratumumab PK; carfilzomib is only a co-administered treatment, with no carfilzomib PK values reported. |
| popPK | Yago_2023 | relevant | 10 | 2 | The human population-PK model is relevant, but carfilzomib parameter values appear to be in supplementary material not provided here. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:18 UTC</sub>
