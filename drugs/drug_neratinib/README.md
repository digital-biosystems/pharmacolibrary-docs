<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;neratinib&quot;}]"></div>

# neratinib

- **generic name:** neratinib
- **ATC codes:** `L01EH02`
- **DrugBank:** [DB11828](https://go.drugbank.com/drugs/DB11828) · **PubChem:** [CID 9915743](https://pubchem.ncbi.nlm.nih.gov/compound/9915743)
- **molar mass:** 557.05 g/mol (C30H29ClN6O3) — DrugBank
- **groups:** approved, investigational

## About

Neratinib is a HER2-blocking kinase inhibitor used to treat breast cancer. It is an approved medicine, with one product authorised in the European Union for breast cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6995920](https://www.wikidata.org/wiki/Q6995920) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| neratinib | parent | 557.05 | C30H29ClN6O3 | DrugBank | [9915743](https://pubchem.ncbi.nlm.nih.gov/compound/9915743) | Qi_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:12 | 5:46 | 0/0/1 | 2/0/0 | 0/0/0 | 160,013/20,677 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Qi_2023_reference](drugs/drug_neratinib/Neratinib_Qi2023_reference.md) | — | parent + metabolite (no model) | 1 | Qi T et al., Dissecting sources of variability in pa…, European journal of pharmac… (2023) | [10.1016/j.ejps.2023.106467](https://doi.org/10.1016/j.ejps.2023.106467) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition](drugs/drug_neratinib/pd_Husiev_2025_cell_growth_inhibition.md) | cell-growth inhibition ← Neratinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_2](drugs/drug_neratinib/pd_Husiev_2025_cell_growth_inhibition_2.md) | cell-growth inhibition ← Neratinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_3](drugs/drug_neratinib/pd_Husiev_2025_cell_growth_inhibition_3.md) | cell-growth inhibition ← [11]Cl2 (Neratinib prodrug) · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_4](drugs/drug_neratinib/pd_Husiev_2025_cell_growth_inhibition_4.md) | cell-growth inhibition ← [11]Cl2 (Neratinib prodrug) · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sauvey_2021_percentage_inhibition_of_E_histolytica_trophozoites](drugs/drug_neratinib/pd_Sauvey_2021_percentage_inhibition_of_E_histolytica_trophozoi.md) | percentage inhibition of E. histolytica trophozoites ← neratinib · inhibition effect | — | Sauvey C et al., Antineoplastic kinase inhibitors: A new…, PLoS neglected tropical dis… (2021) | [10.1371/journal.pntd.0008425](https://doi.org/10.1371/journal.pntd.0008425) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=neratinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `FMO3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: EGFR (inhibitor), ERBB2 (inhibitor), KDR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Husiev_2025 | irrelevant | 0 | 0 | Neratinib is a photocaged drug in a chemical and in-vitro study, with no quantitative disposition parameters reported. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | The study reports in-vitro anti-amoebic EC50 values, not neratinib pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:06 UTC</sub>
