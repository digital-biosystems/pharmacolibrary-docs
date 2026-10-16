<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;eplontersen&quot;}]"></div>

# eplontersen

- **generic name:** eplontersen
- **ATC codes:** `N07XX21`
- **DrugBank:** [DB16199](https://go.drugbank.com/drugs/DB16199) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Eplontersen is an antisense oligonucleotide used to treat familial amyloid polyneuropathy, a hereditary form of nerve damage. It is authorised in the European Union and is a newer medicine, so it is not yet widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q123663227](https://www.wikidata.org/wiki/Q123663227) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:28 | 1:10 | 0/1/0 | 0/0/1 | 0/0/0 | 56,095/3,872 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Diep_2022_reference](drugs/drug_eplontersen/Eplontersen_Diep2022_reference.md) | — | parent + metabolite (no model) | 2 | Diep JK et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2022) | [10.1111/bcp.15468](https://doi.org/10.1111/bcp.15468) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Diep_2022_TTR](drugs/drug_eplontersen/pd_Diep_2022_TTR.md) | serum TTR concentration ← eplontersen · indirect response — drug inhibits the production of serum TTR concentration | — | Diep JK et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2022) | [10.1111/bcp.15468](https://doi.org/10.1111/bcp.15468) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=eplontersen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TTR (other/unknown), Transthyretin mRNA (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diep_2022.pdf` | Diep JK et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2022) | popPK | 10 | [10.1111/bcp.15468](https://doi.org/10.1111/bcp.15468) | [35869634](https://pubmed.ncbi.nlm.nih.gov/35869634) | Population PK two-compartment model for eplontersen in humans with some numeric values (half-life 25.5 days, ka difference 29.6%, IC50, Imax) in abstract, but CL/V/Q point estimates likely in tables/supplementary not fully shown. |

<sub>queue written 2026-10-07T04:27:36.675779+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coelho_2023 | irrelevant | 1 | 0 | Phase 3 efficacy/safety trial of eplontersen in ATTRv polyneuropathy with no PK parameters (CL, V, half-life, or population-PK model) reported; only TTR reduction percentages appear. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:27 UTC</sub>
