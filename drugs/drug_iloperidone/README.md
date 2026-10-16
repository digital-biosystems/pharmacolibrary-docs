<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;iloperidone&quot;}]"></div>

# iloperidone

- **generic name:** iloperidone
- **ATC codes:** `N05AX14`
- **DrugBank:** [DB04946](https://go.drugbank.com/drugs/DB04946) · **PubChem:** [CID 71360](https://pubchem.ncbi.nlm.nih.gov/compound/71360)
- **molar mass:** 426.4806 g/mol (C24H27FN2O4) — DrugBank
- **groups:** approved, investigational

## About

Iloperidone is an antipsychotic used to treat schizophrenia. It is approved in the United States, but its marketing authorisation was refused in the European Union, so it is not available there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4199443](https://www.wikidata.org/wiki/Q4199443) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iloperidone | parent | 426.481 | C24H27FN2O4 | DrugBank | [71360](https://pubchem.ncbi.nlm.nih.gov/compound/71360) | Pei_2016 |
| M 1 | metabolite | 428.504 | C24H29FN2O4 | PubChem | [9823904](https://pubchem.ncbi.nlm.nih.gov/compound/9823904) | Pei_2016 |
| M 2 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:44 | 1:05 | 0/0/2 | 1/0/0 | 0/0/0 | 37,328/8,554 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: CLelim[central] left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Pei_2016_estimate](drugs/drug_iloperidone/Iloperidone_Pei2016_estimate.md) | held back | 1-compartment general linear | 9 (+3 cov.) | Pei Q et al., Influences of CYP2D6, Acta pharmacologica Sinica (2016) | [10.1038/aps.2016.96](https://doi.org/10.1038/aps.2016.96) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: CLelim[central] left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Pei_2016_final_model_median](drugs/drug_iloperidone/Iloperidone_Pei2016_final_model_median.md) | held back | 1-compartment general linear | 6 (+3 cov.) | Pei Q et al., Influences of CYP2D6, Acta pharmacologica Sinica (2016) | [10.1038/aps.2016.96](https://doi.org/10.1038/aps.2016.96) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [An_2020_Kv_current](drugs/drug_iloperidone/pd_An_2020_Kv_current.md) | voltage-dependent K+ current ← iloperidone · direct sigmoid Emax (Hill) effect | — | An JR et al., Inhibition of voltage-dependent K, Journal of applied toxicolo… (2020) | [10.1002/jat.3986](https://doi.org/10.1002/jat.3986) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=iloperidone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (target), ADRB2 (target), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HRH1 (target), HTR1A (target), HTR2A (target), HTR2C (target), HTR6 (target), HTR7 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2020 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of iloperidone's effect on potassium channels in rabbit smooth muscle cells, not a pharmacokinetic study of disposition parameters. |
| popPK | Cutler_2008 | irrelevant | 0 | 0 | This is a clinical efficacy and safety trial that reports no quantitative pharmacokinetic disposition parameters for iloperidone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:43 UTC</sub>
