<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;lurasidone&quot;}]"></div>

# lurasidone

- **generic name:** lurasidone
- **ATC codes:** `N05AE05`
- **DrugBank:** [DB08815](https://go.drugbank.com/drugs/DB08815) · **PubChem:** [CID 213046](https://pubchem.ncbi.nlm.nih.gov/compound/213046)
- **molar mass:** 492.676 g/mol (C28H36N4O2S) — DrugBank
- **groups:** approved, investigational

## About

Lurasidone is an antipsychotic used to treat schizophrenia and related psychotic and mood conditions such as schizoaffective disorder. It is an approved medicine, authorised in the European Union for schizophrenia, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416992](https://www.wikidata.org/wiki/Q416992) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lurasidone | parent | 492.676 | C28H36N4O2S | DrugBank | [213046](https://pubchem.ncbi.nlm.nih.gov/compound/213046) | Dai_2026, Yang_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:59 | 2:21 | 0/3/0 | 1/0/0 | 0/0/0 | 94,271/7,499 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dai_2026_reference](drugs/drug_lurasidone/Lurasidone_Dai2026_reference.md) | — | 1-compartment (no model) | 2 | Dai C et al., The impact of CYP3A4 rs2242480 on oral…, Journal of affective disord… (2026) | [10.1016/j.jad.2025.120588](https://doi.org/10.1016/j.jad.2025.120588) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yang_2026_final_model](drugs/drug_lurasidone/Lurasidone_Yang2026_final_model.md) | — | 1-compartment (no model) | 3 | Yang Y et al., Impact of valproate co-medication and a…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1810528](https://doi.org/10.3389/fphar.2026.1810528) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yang_2026_pop](drugs/drug_lurasidone/Lurasidone_Yang2026_pop.md) | — | 1-compartment (no model) | 3 | Yang Y et al., Impact of valproate co-medication and a…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1810528](https://doi.org/10.3389/fphar.2026.1810528) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Zhuang_2023_Kv_current](drugs/drug_lurasidone/pd_Zhuang_2023_Kv_current.md) | Kv channel current inhibition ← lurasidone · direct sigmoid Emax (Hill) effect | — | Zhuang W et al., Lurasidone blocks the voltage-gated pot…, European journal of pharmac… (2023) | [10.1016/j.ejphar.2023.176005](https://doi.org/10.1016/j.ejphar.2023.176005) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lurasidone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2C (target), DRD2 (target), HTR1A (target), HTR2A (target), HTR7 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dai_2026.pdf` | Dai C et al., The impact of CYP3A4 rs2242480 on oral…, Journal of affective disord… (2026) | popPK | 10 | [10.1016/j.jad.2025.120588](https://doi.org/10.1016/j.jad.2025.120588) | [41192731](https://pubmed.ncbi.nlm.nih.gov/41192731) | Population PK model of lurasidone in Chinese bipolar depression patients with numeric CL/F values by genotype reported directly in the abstract. |
| `Hu_2017.pdf` | Hu C et al., Single- and Multiple-Dose Pharmacokinet…, Clinical drug investigation (2017) | popPK | 7 | [10.1007/s40261-017-0546-8](https://doi.org/10.1007/s40261-017-0546-8) | [28695535](https://pubmed.ncbi.nlm.nih.gov/28695535) | Human PK study of lurasidone with NCA parameters (t½ 18.1-25.5 h, accumulation index 1.25) reported in abstract, but full parameter table (CL, V, Cmax, AUC values) not included in evidence. |

<sub>queue written 2026-10-06T15:57:33.916385+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hu_2017 | relevant | 7 | 4 | Human PK study of lurasidone with NCA parameters (t½ 18.1-25.5 h, accumulation index 1.25) reported in abstract, but full parameter table (CL, V, Cmax, AUC values) not included in evidence. |
| popPK | Meyer_2017 | irrelevant | 0 | 0 | This is a real-world weight-change (metabolic outcomes) study with no pharmacokinetic parameters for lurasidone. |
| popPK | Sözer_2025 | irrelevant | 3 | 4 | Bioequivalence study reporting only NCA exposure metrics (AUC, Cmax, tmax, t½) with no clearance, volume, or compartmental/population-PK model parameters for lurasidone. |
| popPK | Yu_2025 | irrelevant | 3 | 2 | Bioequivalence study with only NCA exposure metrics (Cmax, AUC) and ratios; no clearance, volume, or compartmental/population-PK parameters, and no numeric PK values appear in the evidence. |
| popPK | Zhuang_2023 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel blockade in rabbit coronary smooth muscle cells; no PK disposition parameters for lurasidone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:57 UTC</sub>
