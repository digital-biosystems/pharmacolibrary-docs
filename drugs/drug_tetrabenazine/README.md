<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;tetrabenazine&quot;}]"></div>

# tetrabenazine

- **generic name:** tetrabenazine
- **ATC codes:** `N07XX06`
- **DrugBank:** [DB04844](https://go.drugbank.com/drugs/DB04844) · **PubChem:** [CID 6018](https://pubchem.ncbi.nlm.nih.gov/compound/6018)
- **molar mass:** 317.4226 g/mol (C19H27NO3) — DrugBank
- **groups:** approved

## About

Tetrabenazine is a nervous system drug used to treat movement disorders such as Huntington's disease, Tourette syndrome, tardive dyskinesia, and choreic movements. It is an approved medicine, though not authorised by the European Medicines Agency, and is used mainly in specialist care for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413050](https://www.wikidata.org/wiki/Q413050) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:59 | 0:21 | 0/0/0 | 1/0/0 | 0/0/0 | 25,234/1,114 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Darchen_1989_3H_RES_binding](drugs/drug_tetrabenazine/pd_Darchen_1989_3H_RES_binding.md) | [3H]reserpine binding to chromaffin granule membranes ← dihydrotetrabenazine (TBZOH) · inhibition effect | — | Darchen F et al., Reserpine binding to chromaffin granule…, Biochemistry (1989) | [10.1021/bi00430a040](https://doi.org/10.1021/bi00430a040) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Darchen_1988 | irrelevant | 0 | 0 | Tetrabenazine is only used as a transporter inhibitor/binding probe in an in-vitro MPP+ transport study; no PK parameters for tetrabenazine. |
| popPK | Darchen_1988_2 | irrelevant | 0 | 0 | In vitro binding study of ketanserin; tetrabenazine is only a displacing ligand, no PK parameters. |
| popPK | Darchen_1989 | irrelevant | 0 | 0 | In-vitro receptor binding study of reserpine/dihydrotetrabenazine on bovine chromaffin granule membranes; no pharmacokinetic disposition parameters for tetrabenazine. |
| popPK | Henry_1986 | irrelevant | 0 | 0 | In-vitro molecular pharmacology of chromaffin granule transporter binding; no PK disposition parameters for tetrabenazine. |
| popPK | Horton_2013 | irrelevant | 0 | 0 | In-vitro VMAT2 mechanism study; tetrabenazine is only a probe, no PK parameters. |
| popPK | Schneider_2023 | irrelevant | 3 | 5 | This is a concentration-QTc study of deutetrabenazine (a deuterated analog, a different drug from tetrabenazine); only NCA AUC/Cmax/t½ values appear (some in Table 1/figures), with no CL/V or population-PK parameters for tetrabenazine itself, and the PopPK model parameters live in prior/supplementary work. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
