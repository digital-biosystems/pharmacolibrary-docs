<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;doxapram&quot;}]"></div>

# doxapram

- **generic name:** doxapram
- **ATC codes:** `R07AB01`
- **DrugBank:** [DB00561](https://go.drugbank.com/drugs/DB00561) · **PubChem:** [CID 3156](https://pubchem.ncbi.nlm.nih.gov/compound/3156)
- **molar mass:** 378.5072 g/mol (C24H30N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Doxapram is a respiratory stimulant used to treat breathing problems, and has also been linked to substance use disorder and respiratory allergy. It is an approved drug, also approved for veterinary use, though some uses remain investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q737743](https://www.wikidata.org/wiki/Q737743) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doxapram | parent | 378.507 | C24H30N2O2 | DrugBank | [3156](https://pubchem.ncbi.nlm.nih.gov/compound/3156) | Flint_2021, Ogawa_2015 |
| keto-doxapram | metabolite | 392.499 | C24H28N2O3 | PubChem | [162522](https://pubchem.ncbi.nlm.nih.gov/compound/162522) | Flint_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:45 | 2:16 | 0/1/2 | 0/0/0 | 0/0/0 | 53,414/36,910 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Flint_2021_reference](drugs/drug_doxapram/Doxapram_Flint2021_reference.md) | — | parent + metabolite (no model) | 1 | Flint RB et al., The bioavailability and maturing cleara…, Pediatric research (2021) | [10.1038/s41390-020-1037-9](https://doi.org/10.1038/s41390-020-1037-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Ogawa_2015_reference](drugs/drug_doxapram/Doxapram_Ogawa2015_reference.md) | — | 1-compartment (no model) | 1 | Ogawa Y et al., Population pharmacokinetics of doxapram…, European journal of pediatr… (2015) | [10.1007/s00431-014-2416-1](https://doi.org/10.1007/s00431-014-2416-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Clements_1979_reference](drugs/drug_doxapram/Doxapram_Clements1979_reference.md) | — | 1-compartment (no model) | 0 | Clements JA et al., The disposition of intravenous doxapram…, European journal of clinica… (1979) | [10.1007/BF00568202](https://doi.org/10.1007/BF00568202) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=doxapram).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: KCNK3 (inhibitor), KCNK9 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clements_1979.pdf` | Clements JA et al., The disposition of intravenous doxapram…, European journal of clinica… (1979) | popPK | 10 | [10.1007/BF00568202](https://doi.org/10.1007/BF00568202) | [527638](https://pubmed.ncbi.nlm.nih.gov/527638) | The paper reports quantitative pharmacokinetic parameters including clearance, half-life, and a three-compartment model for doxapram in humans, with values explicitly stated in the text. |
| `Ogawa_2015.pdf` | Ogawa Y et al., Population pharmacokinetics of doxapram…, European journal of pediatr… (2015) | popPK | 10 | [10.1007/s00431-014-2416-1](https://doi.org/10.1007/s00431-014-2416-1) | [25248340](https://pubmed.ncbi.nlm.nih.gov/25248340) | The abstract explicitly provides the final population pharmacokinetic model equations with specific numeric coefficients for clearance and volume of distribution, as well as variability estimates. |

<sub>queue written 2026-10-07T17:43:13.443085+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cotten_2006 | irrelevant | 1 | 0 | This is an in-vitro mechanistic study of ion channel function and an in-vivo anesthetic study, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Engbers_2021 | irrelevant | 1 | 0 | The study models the pharmacokinetics of caffeine (the subject drug), not doxapram; doxapram is only a co-administered agent tested for interaction, and no PK parameters for doxapram itself are reported. |
| popPK | Jokelainen_2020 | irrelevant | 0 | 0 | This is a clinical pharmacodynamic study assessing the efficacy of doxapram in preventing respiratory depression, with no report of pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Poppe_2020 | relevant | 8 | 4 | The paper applies a population PK model for doxapram in preterm infants and reports specific clearance values (CLD, CLD-KD) and bioavailability for a reference individual, although the full parameter estimates and variability are in Supplementary Table 1. |
| popPK | Roozekrans_2017 | irrelevant | 4 | 0 | The study includes a population PK model for doxapram, but the provided evidence contains no numeric parameter values (CL, V, etc.), only qualitative descriptions and concentration ranges. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:44 UTC</sub>
