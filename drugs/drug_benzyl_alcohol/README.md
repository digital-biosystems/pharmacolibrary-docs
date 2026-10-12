<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;benzyl alcohol&quot;}]"></div>

# benzyl alcohol

- **generic name:** benzyl alcohol
- **ATC codes:** `P03AX06`
- **DrugBank:** [DB06770](https://go.drugbank.com/drugs/DB06770) · **PubChem:** [CID 244](https://pubchem.ncbi.nlm.nih.gov/compound/244)
- **molar mass:** 108.1378 g/mol (C7H8O) — DrugBank
- **groups:** approved, investigational

## About

Benzyl alcohol is used as an ectoparasiticide, for example against lice, and also acts as a local anesthetic. It is an approved drug and remains in use, though it is not specifically authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q52353](https://www.wikidata.org/wiki/Q52353) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:07 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 58,481/1,373 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Griffenhagen_2015.pdf` | Griffenhagen GM et al., Pharmacokinetics and pharmacodynamics o…, Veterinary anaesthesia and… (2015) | popPK | 5 | [10.1111/vaa.12233](https://doi.org/10.1111/vaa.12233) | [25327817](https://pubmed.ncbi.nlm.nih.gov/25327817) | Benzyl alcohol was measured and modeled (2-compartment) in cats, but most BA concentrations were below LLOQ and the reported numeric parameter (CLD2) pertains to propofol, not benzyl alcohol. |

<sub>queue written 2026-10-07T10:07:07.437295+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anadón_1991 | irrelevant | 2 | 3 | Benzyl alcohol appears only as a metabolite of permethrin (the subject drug); no PK parameters for benzyl alcohol itself are reported, and metabolite values are not given numerically. |
| popPK | Assafiri_2025 | irrelevant | 0 | 0 | This is an in vitro PK/PD model of ciprofloxacin and phage PEV31 against P. aeruginosa; benzyl_alcohol is not mentioned at all. |
| popPK | Biagioli_2020 | irrelevant | 0 | 0 | Benzyl alcohol appears only as part of the chemical name of the drug REV5901; no PK parameters for benzyl alcohol are reported. |
| popPK | Bérczi_1993 | irrelevant | 0 | 0 | Benzyl alcohol is only a mechanistic perturbant in an in-vitro endocytosis assay; no PK disposition parameters for it are reported. |
| popPK | Du_2021 | irrelevant | 0 | 0 | This is an antifungal drug-discovery study; benzyl alcohol is only a chemical fragment tested for fungicidal activity, with no pharmacokinetic parameters reported. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | In vitro skin sensitization assay; benzyl alcohol is only a test chemical, no PK parameters reported. |
| popPK | Griffenhagen_2015 | relevant | 5 | 3 | Benzyl alcohol was measured and modeled (2-compartment) in cats, but most BA concentrations were below LLOQ and the reported numeric parameter (CLD2) pertains to propofol, not benzyl alcohol. |
| popPK | Kocarek_1989 | irrelevant | 0 | 0 | In-vitro enzyme induction study of fibrates in rat hepatocytes; no benzyl_alcohol PK parameters reported. |
| popPK | Leifert_1999 | irrelevant | 0 | 0 | Benzyl alcohol is only a membrane-fluidising comparator in an electrophysiology study; no PK disposition parameters are reported. |
| popPK | Rooney_1993 | irrelevant | 0 | 0 | Benzyl alcohol is only a comparator agent in an in-vitro membrane fluidity/PLC assay; no PK parameters for it are reported. |
| popPK | Saiyasombati_2003 | irrelevant | 3 | 2 | In-vitro Franz cell skin diffusion/evaporation kinetic modeling of benzyl alcohol, not in-vivo disposition PK parameters; no numeric CL/V/ka values present in the evidence. |
| popPK | Saxena_1989 | irrelevant | 2 | 3 | The study doses benzyl chloride, not benzyl_alcohol; benzyl alcohol appears only as a urinary metabolite, and no PK parameters for benzyl_alcohol itself are reported. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | Benzyl alcohol is only a formulation excipient in a fungicide study; no PK parameters for it are reported. |
| popPK | Winne_1987 | irrelevant | 2 | 2 | Rat intestinal absorption study reporting only relative pre-epithelial diffusion resistance percentages for benzyl alcohol, not disposition PK parameters (CL, V, half-life); no numeric compartmental parameters given. |
| popPK | Yeamsuriyotai_2025 | irrelevant | 0 | 0 | Benzyl alcohol appears only as a GC-MS constituent (20.68%) of jasmine essential oil; no PK parameters for benzyl alcohol are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
