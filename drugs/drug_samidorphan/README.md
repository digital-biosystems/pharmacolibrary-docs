<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;Samidorphan&quot;}]"></div>

# Samidorphan

- **generic name:** Samidorphan
- **ATC codes:** `N05AH53`
- **DrugBank:** [DB12543](https://go.drugbank.com/drugs/DB12543) · **PubChem:** [CID 11667832](https://pubchem.ncbi.nlm.nih.gov/compound/11667832)
- **molar mass:** 370.449 g/mol (C21H26N2O4) — DrugBank
- **groups:** approved, investigational

## About

Samidorphan is an opioid antagonist given together with the antipsychotic olanzapine to treat schizophrenia. It is approved in the United States as a combination product with olanzapine, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7409428](https://www.wikidata.org/wiki/Q7409428) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| samidorphan | parent | 370.449 | C21H26N2O4 | DrugBank | [11667832](https://pubchem.ncbi.nlm.nih.gov/compound/11667832) | Sun_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:19 | 3:04 | 0/1/0 | 1/0/0 | 0/0/0 | 107,574/7,746 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.705). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Sun_2021_reference](drugs/drug_samidorphan/Samidorphan_Sun2021_reference.md) | — | 2-compartment (no model) | 6 (+13 cov.) | Sun L et al., Population Pharmacokinetics of Olanzapi…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1911](https://doi.org/10.1002/jcph.1911) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tan_2022_DOR_occupancy](drugs/drug_samidorphan/pd_Tan_2022_DOR_occupancy.md) | DOR receptor occupancy ← samidorphan · direct sigmoid Emax (Hill) effect | — | Tan LA et al., In vivo Characterization of the Opioid…, Neuropsychiatric disease an… (2022) | [10.2147/NDT.S373195](https://doi.org/10.2147/NDT.S373195) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tan_2022_KOR_occupancy](drugs/drug_samidorphan/pd_Tan_2022_KOR_occupancy.md) | KOR receptor occupancy ← samidorphan · direct sigmoid Emax (Hill) effect | — | Tan LA et al., In vivo Characterization of the Opioid…, Neuropsychiatric disease an… (2022) | [10.2147/NDT.S373195](https://doi.org/10.2147/NDT.S373195) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tan_2022_MOR_occupancy](drugs/drug_samidorphan/pd_Tan_2022_MOR_occupancy.md) | MOR receptor occupancy ← samidorphan · direct sigmoid Emax (Hill) effect | — | Tan LA et al., In vivo Characterization of the Opioid…, Neuropsychiatric disease an… (2022) | [10.2147/NDT.S373195](https://doi.org/10.2147/NDT.S373195) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=samidorphan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRD1 (partial agonist), OPRK1 (partial agonist), OPRM1 (inhibitor), OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pathak_2019 | irrelevant | 0 | 0 | Abuse-potential pharmacodynamics study with no PK parameters or numeric disposition values reported. |
| popPK | Pathak_2019_2 | irrelevant | 0 | 0 | Abuse-potential study with no PK disposition parameters for samidorphan reported. |
| popPK | Sun_2019 | irrelevant | 3 | 2 | DDI study reporting only Cmax/AUC changes (percentages), no CL/V/ka or population-PK parameters for samidorphan. |
| popPK | Sun_2020 | irrelevant | 2 | 2 | This is a thorough QT study reporting C-QTc slopes and Cmax only, not PK disposition parameters (CL, V, ka, half-life) for samidorphan. |
| popPK | Sun_2020_2 | irrelevant | 2 | 1 | This is a DDI study of lithium/valproate with OLZ/SAM; samidorphan is only co-administered, and no samidorphan PK parameters (CL, V, t½) are reported—only trough concentrations in a figure. |
| popPK | Tan_2022 | irrelevant | 2 | 2 | This is a rat receptor-occupancy study; the only PK values (bioavailability 69%, half-life 7–9 h) are cited from prior human studies, not original disposition parameters, and no CL/V/ka values are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 17:18 UTC</sub>
